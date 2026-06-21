// ============================================================
// engine.js — answer checking + progress tracking
// Pure logic, no DOM access, so it can run in Node for tests
// or in the browser (where `math` is provided by the mathjs CDN script).
// ============================================================
(function (root) {
  'use strict';

  var DEFAULT_SAMPLES = [0.3, 0.42, 0.55, 0.67, 0.8, 0.92, 1.05, 1.18];

  function buildDefaultScopes(vars) {
    var scopes = [];
    for (var i = 0; i < 8; i++) {
      var scope = {};
      for (var k = 0; k < vars.length; k++) {
        scope[vars[k]] = DEFAULT_SAMPLES[(i + k) % DEFAULT_SAMPLES.length];
      }
      scopes.push(scope);
    }
    return scopes;
  }

  function stripPrefix(input) {
    return input.replace(/^\s*(dy\/dx|y\s*'|f\s*'\s*\(\s*[a-zA-Z]\s*\)|y|dV\/dt|dA\/dt|dr\/dt)\s*=\s*/i, '').trim();
  }

  function isFiniteReal(v) {
    return typeof v === 'number' && isFinite(v);
  }

  function approxEqual(a, b, relTol) {
    relTol = relTol || 1e-4;
    var tol = Math.max(1e-5, Math.abs(b) * relTol);
    return Math.abs(a - b) <= tol;
  }

  function safeEval(mathjs, expr, scope) {
    try {
      // mathjs only recognizes `log(x)` for natural log, not `ln(x)` — but every
      // problem on this site is written in terms of ln, so accept it as an alias.
      var normalizedExpr = String(expr).replace(/\bln(\s*\()/gi, 'log$1');
      var v = mathjs.evaluate(normalizedExpr, scope || {});
      if (v && typeof v === 'object' && 're' in v && 'im' in v) {
        // complex number from mathjs — only accept if essentially real
        if (Math.abs(v.im) < 1e-9) return v.re;
        return NaN;
      }
      return v;
    } catch (e) {
      return undefined; // signals parse/eval failure
    }
  }

  var GENERIC_WRONG = 'Not quite — try again, or check the hints.';
  var GENERIC_PARSE_FAIL = "Couldn't parse that — check you're using * for multiplication, ^ for powers, and valid function names (sin, cos, sqrt, exp, log, pi, ...).";

  function checkAnswer(mathjs, problem, rawInput) {
    if (rawInput == null || String(rawInput).trim() === '') {
      return { correct: false, message: 'Enter an answer before checking.' };
    }
    var input = stripPrefix(String(rawInput).trim());

    switch (problem.inputType) {
      case 'numeric':
      case 'expr_const': {
        var uv = safeEval(mathjs, input, {});
        if (!isFiniteReal(uv)) return { correct: false, message: GENERIC_PARSE_FAIL };
        var cv = safeEval(mathjs, problem.answer, {});
        var correct = isFiniteReal(cv) && approxEqual(uv, cv);
        return { correct: correct, message: correct ? 'Correct!' : GENERIC_WRONG };
      }

      case 'dne_or_numeric': {
        var isDneInput = /^(dne|does\s*n[o']?t\s*exist|no\s*limit|undefined)$/i.test(input.replace(/\s+/g, ' '));
        var answerIsDNE = problem.answer === 'DNE';
        if (isDneInput) {
          return { correct: answerIsDNE, message: answerIsDNE ? 'Correct!' : GENERIC_WRONG };
        }
        if (answerIsDNE) {
          return { correct: false, message: GENERIC_WRONG };
        }
        var uv2 = safeEval(mathjs, input, {});
        if (!isFiniteReal(uv2)) return { correct: false, message: GENERIC_PARSE_FAIL };
        var cv2 = safeEval(mathjs, problem.answer, {});
        var correct2 = isFiniteReal(cv2) && approxEqual(uv2, cv2);
        return { correct: correct2, message: correct2 ? 'Correct!' : GENERIC_WRONG };
      }

      case 'set': {
        var parts = input.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
        var userVals = parts.map(function (p) { return safeEval(mathjs, p, {}); });
        if (userVals.length === 0 || userVals.some(function (v) { return !isFiniteReal(v); })) {
          return { correct: false, message: GENERIC_PARSE_FAIL };
        }
        var correctVals = problem.answer.map(function (a) { return safeEval(mathjs, a, {}); });
        if (userVals.length !== correctVals.length) {
          return { correct: false, message: GENERIC_WRONG };
        }
        var used = new Array(correctVals.length).fill(false);
        var allMatched = userVals.every(function (uvv) {
          for (var i = 0; i < correctVals.length; i++) {
            if (!used[i] && approxEqual(uvv, correctVals[i])) { used[i] = true; return true; }
          }
          return false;
        });
        return { correct: allMatched, message: allMatched ? 'Correct!' : GENERIC_WRONG };
      }

      case 'text': {
        var norm = input.toLowerCase().replace(/[.\s]+$/, '').trim();
        var ok = problem.answer.some(function (a) { return a.toLowerCase() === norm; });
        return { correct: ok, message: ok ? 'Correct!' : GENERIC_WRONG };
      }

      case 'expr': {
        var vars = problem.variables || (problem.variable ? [problem.variable] : []);
        var scopes = problem.samplePoints || buildDefaultScopes(vars);
        var validCount = 0, matchCount = 0;
        for (var s = 0; s < scopes.length; s++) {
          var scope = scopes[s];
          var u = safeEval(mathjs, input, scope);
          if (!isFiniteReal(u)) continue;
          var c = safeEval(mathjs, problem.answer, scope);
          if (!isFiniteReal(c)) continue;
          validCount++;
          if (approxEqual(u, c)) matchCount++;
        }
        if (validCount < 3) {
          return { correct: false, message: GENERIC_PARSE_FAIL };
        }
        var allMatch = matchCount === validCount;
        return { correct: allMatch, message: allMatch ? 'Correct!' : GENERIC_WRONG };
      }

      default:
        return { correct: false, message: 'This problem is misconfigured (unknown input type).' };
    }
  }

  // ---------------- Progress tracking (localStorage) ----------------
  var STORAGE_KEY = 'calcPrepProgress_v1';

  function loadProgress(storage) {
    try {
      var raw = storage.getItem(STORAGE_KEY);
      if (!raw) return { solved: {} };
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || !parsed.solved) return { solved: {} };
      return parsed;
    } catch (e) {
      return { solved: {} };
    }
  }

  function saveProgress(storage, progress) {
    try { storage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (e) { /* ignore quota errors */ }
  }

  function ProgressStore(storage) {
    this.storage = storage;
    this.data = loadProgress(storage);
  }
  ProgressStore.prototype.markSolved = function (id) {
    this.data.solved[id] = true;
    saveProgress(this.storage, this.data);
  };
  ProgressStore.prototype.isSolved = function (id) {
    return !!this.data.solved[id];
  };
  ProgressStore.prototype.countSolved = function (ids) {
    var c = 0;
    for (var i = 0; i < ids.length; i++) if (this.isSolved(ids[i])) c++;
    return c;
  };
  ProgressStore.prototype.reset = function () {
    this.data = { solved: {} };
    saveProgress(this.storage, this.data);
  };

  var Engine = {
    checkAnswer: checkAnswer,
    ProgressStore: ProgressStore,
    buildDefaultScopes: buildDefaultScopes,
    _internal: { approxEqual: approxEqual, stripPrefix: stripPrefix }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Engine;
  } else {
    root.Engine = Engine;
  }
})(typeof window !== 'undefined' ? window : global);
