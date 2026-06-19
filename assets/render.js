// ============================================================
// render.js — shared DOM-building helpers + KaTeX trigger
// ============================================================
(function () {
  'use strict';

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Renders any \(...\) / \[...\] KaTeX delimiters within `root` (or the whole doc).
  function renderMath(root) {
    if (typeof window.renderMathInElement !== 'function') return;
    window.renderMathInElement(root || document.body, {
      delimiters: [
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false
    });
  }

  function formulaBoxHtml(formula) {
    return (
      '<div class="formula-box">' +
        '<span class="formula-label">' + escapeHtml(formula.label) + '</span>' +
        '<div class="formula-tex">\\[' + escapeHtml(formula.tex) + '\\]</div>' +
      '</div>'
    );
  }

  function workedExampleHtml(example) {
    var steps = example.steps.map(function (s) { return '<li>' + escapeHtml(s) + '</li>'; }).join('');
    return (
      '<div class="worked-example">' +
        '<h4>Worked example</h4>' +
        '<p>' + escapeHtml(example.statement) + '</p>' +
        '<ol>' + steps + '</ol>' +
      '</div>'
    );
  }

  function mistakesCalloutHtml(mistakes) {
    var items = mistakes.map(function (m) { return '<li>' + escapeHtml(m) + '</li>'; }).join('');
    return (
      '<div class="mistakes-callout">' +
        '<h4>⚠ Common mistakes</h4>' +
        '<ul>' + items + '</ul>' +
      '</div>'
    );
  }

  function subsectionTopicHtml(chapter, sub, opts) {
    opts = opts || {};
    var practiceHref = opts.practiceHref !== undefined ? opts.practiceHref : ('practice.html#' + sub.id);
    var formulas = sub.formulas.map(formulaBoxHtml).join('');
    var practiceLink = practiceHref
      ? '<div class="practice-link-row"><a href="' + practiceHref + '">Practice ' + sub.id + ' problems →</a></div>'
      : '';
    return (
      '<section class="subsection-block" id="' + sub.id + '" data-sub-id="' + sub.id + '" tabindex="-1">' +
        '<div class="subsection-header">' +
          '<span class="subsection-num">' + sub.id + '</span>' +
          '<h2>' + escapeHtml(sub.title) + '</h2>' +
        '</div>' +
        '<p class="core-idea">' + escapeHtml(sub.coreIdea) + '</p>' +
        formulas +
        workedExampleHtml(sub.example) +
        mistakesCalloutHtml(sub.mistakes) +
        practiceLink +
      '</section>'
    );
  }

  window.Render = {
    escapeHtml: escapeHtml,
    renderMath: renderMath,
    formulaBoxHtml: formulaBoxHtml,
    workedExampleHtml: workedExampleHtml,
    mistakesCalloutHtml: mistakesCalloutHtml,
    subsectionTopicHtml: subsectionTopicHtml
  };
})();
