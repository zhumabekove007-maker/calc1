// ============================================================
// practice-page.js — drives practice.html
// ============================================================
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var TOPICS = window.TOPICS || [];
    var mathjs = window.math;
    var progress = new window.Engine.ProgressStore(window.localStorage);

    var main = document.getElementById('practice-main');
    var sidebarNav = document.getElementById('sidebar-nav');
    var overallFill = document.getElementById('overall-progress-fill');
    var overallText = document.getElementById('overall-progress-text');
    var resetBtn = document.getElementById('reset-progress-btn');
    var quizStartBtn = document.getElementById('start-quiz-btn');
    var quizArea = document.getElementById('quiz-area');
    var normalArea = document.getElementById('normal-area');

    // ---------------------------------------------------------
    // Build a flat index of every problem with its chapter/sub context
    // ---------------------------------------------------------
    var INDEX = []; // { chapter, sub, problem, globalId }
    TOPICS.forEach(function (ch) {
      ch.subsections.forEach(function (sub) {
        sub.problems.forEach(function (p) {
          INDEX.push({ chapter: ch, sub: sub, problem: p, globalId: sub.id + '-' + p.id });
        });
      });
    });
    var ALL_IDS = INDEX.map(function (e) { return e.globalId; });

    // ---------------------------------------------------------
    // Problem card rendering (shared between normal + quiz views)
    // ---------------------------------------------------------
    function buildProblemCardEl(entry, opts) {
      opts = opts || {};
      var p = entry.problem, globalId = entry.globalId;
      var wrapper = document.createElement('div');
      wrapper.className = 'problem-card';
      wrapper.setAttribute('data-problem-id', globalId);

      var alreadySolved = progress.isSolved(globalId);

      wrapper.innerHTML =
        '<div class="problem-card-head">' +
          '<span class="problem-id">' + window.Render.escapeHtml(entry.sub.id) + ' · ' + window.Render.escapeHtml(p.id) + '</span>' +
          '<span class="solved-badge" ' + (alreadySolved ? '' : 'hidden') + '>✓ solved</span>' +
        '</div>' +
        '<p class="problem-prompt">' + window.Render.escapeHtml(p.prompt) + '</p>' +
        (p.formatHint ? '<p class="problem-format-hint">' + window.Render.escapeHtml(p.formatHint) + '</p>' : '') +
        '<div class="answer-row">' +
          '<label for="input-' + globalId + '">Your answer for ' + window.Render.escapeHtml(globalId) + '</label>' +
          '<input type="text" class="answer-input" id="input-' + globalId + '" autocomplete="off" spellcheck="false" />' +
          '<button type="button" class="btn check-btn">Check answer</button>' +
        '</div>' +
        '<div class="feedback" role="status" aria-live="polite"></div>' +
        '<div class="hint-row"></div>' +
        '<div class="hints-container"></div>' +
        '<div class="solution-toggle"><button type="button" class="btn btn-secondary solution-btn" aria-expanded="false">Show full solution</button></div>' +
        '<div class="solution-box" hidden></div>';

      var input = wrapper.querySelector('.answer-input');
      var checkBtn = wrapper.querySelector('.check-btn');
      var feedback = wrapper.querySelector('.feedback');
      var hintRow = wrapper.querySelector('.hint-row');
      var hintsContainer = wrapper.querySelector('.hints-container');
      var solutionBtn = wrapper.querySelector('.solution-btn');
      var solutionBox = wrapper.querySelector('.solution-box');
      var solvedBadge = wrapper.querySelector('.solved-badge');

      var hintLevel = 0;
      function renderHintRow() {
        hintRow.innerHTML = '';
        if (!p.hints || hintLevel >= p.hints.length) return;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-secondary hint-btn';
        btn.textContent = 'Show hint ' + (hintLevel + 1) + (p.hints.length > 1 ? ' of ' + p.hints.length : '');
        btn.addEventListener('click', function () {
          var box = document.createElement('div');
          box.className = 'hint-box';
          box.innerHTML = '<span class="hint-level">Hint ' + (hintLevel + 1) + '</span>' + window.Render.escapeHtml(p.hints[hintLevel]);
          hintsContainer.appendChild(box);
          window.Render.renderMath(box);
          hintLevel++;
          renderHintRow();
        });
        hintRow.appendChild(btn);
      }
      renderHintRow();

      solutionBtn.addEventListener('click', function () {
        var isHidden = solutionBox.hasAttribute('hidden');
        if (isHidden) {
          if (!solutionBox.dataset.rendered) {
            var stepsHtml = p.solution.map(function (s) { return '<li>' + window.Render.escapeHtml(s) + '</li>'; }).join('');
            solutionBox.innerHTML = '<ol>' + stepsHtml + '</ol>';
            window.Render.renderMath(solutionBox);
            solutionBox.dataset.rendered = '1';
          }
          solutionBox.removeAttribute('hidden');
          solutionBtn.textContent = 'Hide full solution';
          solutionBtn.setAttribute('aria-expanded', 'true');
        } else {
          solutionBox.setAttribute('hidden', '');
          solutionBtn.textContent = 'Show full solution';
          solutionBtn.setAttribute('aria-expanded', 'false');
        }
      });

      function doCheck() {
        var result = window.Engine.checkAnswer(mathjs, p, input.value);
        feedback.classList.remove('is-correct', 'is-incorrect');
        feedback.classList.add('is-visible', result.correct ? 'is-correct' : 'is-incorrect');
        feedback.innerHTML =
          '<span class="stamp">' + (result.correct ? 'Correct' : 'Try again') + '</span>' +
          '<span>' + window.Render.escapeHtml(result.message) + '</span>';
        if (result.correct) {
          progress.markSolved(globalId);
          solvedBadge.removeAttribute('hidden');
          updateAllProgressUI();
          if (opts.onSolved) opts.onSolved(entry);
        } else {
          if (opts.onAttempt) opts.onAttempt(entry, false);
        }
      }

      checkBtn.addEventListener('click', doCheck);
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); doCheck(); }
      });

      return wrapper;
    }

    // ---------------------------------------------------------
    // Normal (by-subsection accordion) view
    // ---------------------------------------------------------
    function renderNormalView() {
      var frag = document.createDocumentFragment();
      TOPICS.forEach(function (ch) {
        var chWrap = document.createElement('div');
        chWrap.className = 'chapter-section';
        chWrap.setAttribute('data-chapter', ch.id);

        chWrap.innerHTML =
          '<div class="eyebrow">Chapter ' + ch.num + '</div>' +
          '<h1 id="' + ch.id + '" tabindex="-1">' + window.Render.escapeHtml(ch.title) + '</h1>';

        ch.subsections.forEach(function (sub) {
          var details = document.createElement('details');
          details.className = 'subsection-accordion';
          details.id = sub.id;
          details.setAttribute('data-sub-id', sub.id);

          var summary = document.createElement('summary');
          summary.innerHTML =
            '<span class="subsection-num">' + sub.id + '</span> ' +
            window.Render.escapeHtml(sub.title) +
            ' <span class="chapter-progress-pill sub-progress-pill" data-sub="' + sub.id + '"></span>';
          details.appendChild(summary);

          var list = document.createElement('div');
          list.className = 'problems-list';
          INDEX.filter(function (e) { return e.sub.id === sub.id; }).forEach(function (entry) {
            list.appendChild(buildProblemCardEl(entry));
          });
          details.appendChild(list);
          chWrap.appendChild(details);
        });

        frag.appendChild(chWrap);
      });
      main.innerHTML = '';
      main.appendChild(frag);
      window.Render.renderMath(main);
      updateAllProgressUI();
    }

    // ---------------------------------------------------------
    // Sidebar nav (mirrors topics page, plus progress pills)
    // ---------------------------------------------------------
    function renderSidebar() {
      var navHtml = TOPICS.map(function (ch) {
        var items = ch.subsections.map(function (sub) {
          return (
            '<li><a href="#' + sub.id + '" data-sub-id="' + sub.id + '">' +
              '<span class="sub-num">' + sub.id + '</span>' + window.Render.escapeHtml(sub.title) +
            '</a></li>'
          );
        }).join('');
        var groupId = 'nav-group-' + ch.id;
        return (
          '<div class="chapter-group">' +
            '<button class="chapter-toggle" aria-expanded="true" aria-controls="' + groupId + '">' +
              '<span>' + window.Render.escapeHtml(ch.title) + '</span>' +
              '<span class="chapter-progress-pill chapter-progress-pill-' + ch.id + '"></span>' +
              '<span class="chev" aria-hidden="true">▾</span>' +
            '</button>' +
            '<ul class="sub-list" id="' + groupId + '">' + items + '</ul>' +
          '</div>'
        );
      }).join('');
      sidebarNav.innerHTML = navHtml;

      sidebarNav.querySelectorAll('.chapter-toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          var list = document.getElementById(btn.getAttribute('aria-controls'));
          list.style.display = expanded ? 'none' : '';
        });
      });

      sidebarNav.addEventListener('click', function (e) {
        var a = e.target.closest('a[data-sub-id]');
        if (!a) return;
        var subId = a.getAttribute('data-sub-id');
        var details = document.getElementById(subId);
        if (details && details.tagName === 'DETAILS') details.open = true;
        if (window.innerWidth <= 880) {
          document.getElementById('sidebar').classList.remove('is-open');
        }
      });
    }

    // ---------------------------------------------------------
    // Progress UI updates
    // ---------------------------------------------------------
    function updateAllProgressUI() {
      var totalSolved = progress.countSolved(ALL_IDS);
      var pct = ALL_IDS.length ? Math.round((totalSolved / ALL_IDS.length) * 100) : 0;
      if (overallFill) overallFill.style.width = pct + '%';
      if (overallText) overallText.textContent = totalSolved + ' / ' + ALL_IDS.length + ' problems solved (' + pct + '%)';

      TOPICS.forEach(function (ch) {
        var chIds = ch.subsections.reduce(function (acc, s) { return acc.concat(s.problems.map(function (p) { return s.id + '-' + p.id; })); }, []);
        var solved = progress.countSolved(chIds);
        var pill = sidebarNav.querySelector('.chapter-progress-pill-' + ch.id);
        if (pill) pill.textContent = solved + '/' + chIds.length;

        ch.subsections.forEach(function (sub) {
          var subIds = sub.problems.map(function (p) { return sub.id + '-' + p.id; });
          var subSolved = progress.countSolved(subIds);
          var subPill = main.querySelector('.sub-progress-pill[data-sub="' + sub.id + '"]');
          if (subPill) subPill.textContent = subSolved + '/' + subIds.length;
        });
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (window.confirm('Reset all saved progress on this device? This cannot be undone.')) {
          progress.reset();
          updateAllProgressUI();
          main.querySelectorAll('.solved-badge').forEach(function (b) { b.setAttribute('hidden', ''); });
        }
      });
    }

    // ---------------------------------------------------------
    // Mixed practice / quiz mode
    // ---------------------------------------------------------
    var QUIZ_SIZE = 10;
    var quizState = null;

    function shuffle(arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
      }
      return a;
    }

    function startQuiz() {
      var pool = shuffle(INDEX).slice(0, Math.min(QUIZ_SIZE, INDEX.length));
      quizState = { pool: pool, idx: 0, score: 0, answered: [] };
      normalArea.hidden = true;
      quizArea.hidden = false;
      renderQuizQuestion();
    }

    function endQuiz() {
      var s = quizState;
      quizArea.innerHTML =
        '<div class="empty-state">' +
          '<h2>Mixed practice complete</h2>' +
          '<p>You scored ' + s.score + ' out of ' + s.pool.length + ' on this round.</p>' +
          '<button type="button" class="btn" id="quiz-restart-btn">Start another round</button> ' +
          '<button type="button" class="btn btn-secondary" id="quiz-exit-btn">Back to all topics</button>' +
        '</div>';
      document.getElementById('quiz-restart-btn').addEventListener('click', startQuiz);
      document.getElementById('quiz-exit-btn').addEventListener('click', exitQuiz);
    }

    function exitQuiz() {
      quizState = null;
      quizArea.hidden = true;
      quizArea.innerHTML = '';
      normalArea.hidden = false;
    }

    function renderQuizQuestion() {
      var s = quizState;
      if (s.idx >= s.pool.length) { endQuiz(); return; }
      var entry = s.pool[s.idx];
      var pct = Math.round((s.idx / s.pool.length) * 100);

      quizArea.innerHTML =
        '<div class="quiz-bar">' +
          '<div class="quiz-meta">' +
            '<span>Question ' + (s.idx + 1) + ' of ' + s.pool.length + '</span>' +
            '<span>Score: ' + s.score + '</span>' +
            '<span>' + entry.sub.id + ' — ' + window.Render.escapeHtml(entry.sub.title) + '</span>' +
          '</div>' +
          '<button type="button" class="btn btn-secondary" id="quiz-exit-btn-top">Exit quiz</button>' +
        '</div>' +
        '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div id="quiz-card-slot" style="margin-top:1.2rem;"></div>' +
        '<div style="margin-top:1rem;"><button type="button" class="btn" id="quiz-next-btn" hidden>Next question →</button></div>';

      document.getElementById('quiz-exit-btn-top').addEventListener('click', exitQuiz);

      var nextBtn = document.getElementById('quiz-next-btn');
      var card = buildProblemCardEl(entry, {
        onSolved: function () {
          if (!s.answered[s.idx]) { s.score++; s.answered[s.idx] = true; }
          nextBtn.hidden = false;
        },
        onAttempt: function () {
          nextBtn.hidden = false; // allow moving on even without solving
        }
      });
      document.getElementById('quiz-card-slot').appendChild(card);
      window.Render.renderMath(card);

      nextBtn.addEventListener('click', function () {
        s.idx++;
        renderQuizQuestion();
      });
    }

    if (quizStartBtn) quizStartBtn.addEventListener('click', startQuiz);

    // ---------------------------------------------------------
    // Mobile sidebar toggle
    // ---------------------------------------------------------
    var menuToggle = document.getElementById('menu-toggle');
    var sidebar = document.getElementById('sidebar');
    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(sidebar.classList.contains('is-open')));
      });
    }

    // ---------------------------------------------------------
    // Search filter (sidebar)
    // ---------------------------------------------------------
    var searchInput = document.getElementById('topics-search');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var q = searchInput.value.trim().toLowerCase();
        sidebarNav.querySelectorAll('.chapter-group').forEach(function (group) {
          var anyVisible = !q;
          group.querySelectorAll('.sub-list li').forEach(function (li) {
            var match = !q || li.textContent.toLowerCase().indexOf(q) !== -1;
            li.style.display = match ? '' : 'none';
            if (match) anyVisible = true;
          });
          group.style.display = anyVisible ? '' : 'none';
        });
      });
    }

    // ---------------------------------------------------------
    // Init
    // ---------------------------------------------------------
    renderSidebar();
    renderNormalView();

    // Open + scroll to a subsection if arriving via hash (e.g. from topics.html link)
    if (location.hash === '#mixed') {
      startQuiz();
    } else if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target && target.tagName === 'DETAILS') {
        target.open = true;
        requestAnimationFrame(function () { target.scrollIntoView({ block: 'start' }); });
      }
    }
  });
})();
