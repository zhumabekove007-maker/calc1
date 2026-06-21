// ============================================================
// harder-practice-page.js — drives harder-practice.html
// Mirrors practice-page.js's interactive problem-card pattern,
// but problems are grouped, can carry a shared statement/figure,
// and break into lettered "parts" that are each either:
//   kind: 'interactive' -> checkable via Engine.checkAnswer (same as the main practice page)
//   kind: 'discussion'  -> open-ended; shows a model solution on toggle, no checking
// ============================================================
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var HARD = window.HARD_CH1 || { intro: '', groups: [] };
    var mathjs = window.math;
    var progress = new window.Engine.ProgressStore(window.localStorage);

    var main = document.getElementById('hard-problems');
    var introEl = document.getElementById('hard-intro');
    var sidebarNav = document.getElementById('sidebar-nav');
    var overallFill = document.getElementById('overall-progress-fill');
    var overallText = document.getElementById('overall-progress-text');
    var resetBtn = document.getElementById('reset-progress-btn');

    if (introEl) introEl.textContent = HARD.intro || '';

    // ---------------------------------------------------------
    // Flat index of every *interactive* part, for progress tracking
    // ---------------------------------------------------------
    var INTERACTIVE_IDS = [];
    HARD.groups.forEach(function (group) {
      group.problems.forEach(function (prob) {
        prob.parts.forEach(function (part) {
          if (part.kind === 'interactive') {
            INTERACTIVE_IDS.push(globalIdFor(prob, part));
          }
        });
      });
    });

    function globalIdFor(prob, part) {
      return 'H' + prob.num + (part.label ? '-' + part.label : '');
    }

    // ---------------------------------------------------------
    // Interactive part card (closely mirrors practice-page.js)
    // ---------------------------------------------------------
    function buildInteractivePartEl(prob, part) {
      var globalId = globalIdFor(prob, part);
      var wrapper = document.createElement('div');
      wrapper.className = 'problem-card hard-part-card';
      wrapper.setAttribute('data-problem-id', globalId);

      var alreadySolved = progress.isSolved(globalId);
      var labelTag = part.label ? '<span class="part-label-tag">(' + window.Render.escapeHtml(part.label) + ')</span> ' : '';

      wrapper.innerHTML =
        '<div class="problem-card-head">' +
          '<span class="problem-id">' + window.Render.escapeHtml(globalId) + '</span>' +
          '<span class="solved-badge" ' + (alreadySolved ? '' : 'hidden') + '>✓ solved</span>' +
        '</div>' +
        '<p class="problem-prompt">' + labelTag + window.Render.escapeHtml(part.prompt) + '</p>' +
        (part.formatHint ? '<p class="problem-format-hint">' + window.Render.escapeHtml(part.formatHint) + '</p>' : '') +
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
        if (!part.hints || hintLevel >= part.hints.length) return;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-secondary hint-btn';
        btn.textContent = 'Show hint ' + (hintLevel + 1) + (part.hints.length > 1 ? ' of ' + part.hints.length : '');
        btn.addEventListener('click', function () {
          var box = document.createElement('div');
          box.className = 'hint-box';
          box.innerHTML = '<span class="hint-level">Hint ' + (hintLevel + 1) + '</span>' + window.Render.escapeHtml(part.hints[hintLevel]);
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
            var stepsHtml = part.solution.map(function (s) { return '<li>' + window.Render.escapeHtml(s) + '</li>'; }).join('');
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
        var result = window.Engine.checkAnswer(mathjs, part, input.value);
        feedback.classList.remove('is-correct', 'is-incorrect');
        feedback.classList.add('is-visible', result.correct ? 'is-correct' : 'is-incorrect');
        feedback.innerHTML =
          '<span class="stamp">' + (result.correct ? 'Correct' : 'Try again') + '</span>' +
          '<span>' + window.Render.escapeHtml(result.message) + '</span>';
        if (result.correct) {
          progress.markSolved(globalId);
          solvedBadge.removeAttribute('hidden');
          updateProgressUI();
        }
      }

      checkBtn.addEventListener('click', doCheck);
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); doCheck(); }
      });

      return wrapper;
    }

    // ---------------------------------------------------------
    // Discussion part card — open-ended, no checking, just a
    // prompt and a toggle revealing a model solution.
    // ---------------------------------------------------------
    function buildDiscussionPartEl(part) {
      var wrapper = document.createElement('div');
      wrapper.className = 'problem-card hard-part-card hard-part-discussion';

      var labelTag = part.label ? '<span class="part-label-tag">(' + window.Render.escapeHtml(part.label) + ')</span> ' : '';

      wrapper.innerHTML =
        '<div class="problem-card-head">' +
          '<span class="discussion-tag">Open-ended — model answer</span>' +
        '</div>' +
        '<p class="problem-prompt">' + labelTag + window.Render.escapeHtml(part.prompt) + '</p>' +
        '<div class="solution-toggle"><button type="button" class="btn btn-secondary solution-btn" aria-expanded="false">Show model answer</button></div>' +
        '<div class="solution-box" hidden></div>';

      var solutionBtn = wrapper.querySelector('.solution-btn');
      var solutionBox = wrapper.querySelector('.solution-box');

      solutionBtn.addEventListener('click', function () {
        var isHidden = solutionBox.hasAttribute('hidden');
        if (isHidden) {
          if (!solutionBox.dataset.rendered) {
            var stepsHtml = part.solution.map(function (s) { return '<li>' + window.Render.escapeHtml(s) + '</li>'; }).join('');
            solutionBox.innerHTML = '<ol>' + stepsHtml + '</ol>';
            window.Render.renderMath(solutionBox);
            solutionBox.dataset.rendered = '1';
          }
          solutionBox.removeAttribute('hidden');
          solutionBtn.textContent = 'Hide model answer';
          solutionBtn.setAttribute('aria-expanded', 'true');
        } else {
          solutionBox.setAttribute('hidden', '');
          solutionBtn.textContent = 'Show model answer';
          solutionBtn.setAttribute('aria-expanded', 'false');
        }
      });

      return wrapper;
    }

    // ---------------------------------------------------------
    // Render everything
    // ---------------------------------------------------------
    function renderAll() {
      var frag = document.createDocumentFragment();

      HARD.groups.forEach(function (group, groupIdx) {
        var groupId = 'hard-group-' + groupIdx;
        var groupSection = document.createElement('div');
        groupSection.className = 'chapter-section';
        groupSection.id = groupId;
        groupSection.innerHTML = '<div class="eyebrow">Group ' + (groupIdx + 1) + '</div><h2>' + window.Render.escapeHtml(group.heading) + '</h2>';

        group.problems.forEach(function (prob) {
          var block = document.createElement('div');
          block.className = 'hard-problem-block';
          block.id = 'H' + prob.num;

          var headHtml = '<div class="hard-problem-head"><span class="hard-problem-num">Problem ' + window.Render.escapeHtml(prob.num) + '</span></div>';
          if (prob.statement) headHtml += '<p class="hard-problem-statement">' + window.Render.escapeHtml(prob.statement) + '</p>';
          block.innerHTML = headHtml;

          if (prob.figure) {
            var figWrap = document.createElement('div');
            figWrap.className = 'figure-wrap';
            figWrap.innerHTML = prob.figure; // trusted, hand-authored SVG — not user/free text, so not escaped
            block.appendChild(figWrap);
          }

          prob.parts.forEach(function (part) {
            if (part.kind === 'interactive') {
              block.appendChild(buildInteractivePartEl(prob, part));
            } else {
              block.appendChild(buildDiscussionPartEl(part));
            }
          });

          groupSection.appendChild(block);
        });

        frag.appendChild(groupSection);
      });

      main.innerHTML = '';
      main.appendChild(frag);
      window.Render.renderMath(main);
      updateProgressUI();
    }

    // ---------------------------------------------------------
    // Sidebar nav
    // ---------------------------------------------------------
    function renderSidebar() {
      var html = HARD.groups.map(function (group, groupIdx) {
        var items = group.problems.map(function (prob) {
          return '<li><a href="#H' + prob.num + '" data-target="H' + prob.num + '">' +
            '<span class="sub-num">' + window.Render.escapeHtml(prob.num) + '</span>Problem ' + window.Render.escapeHtml(prob.num) +
            '</a></li>';
        }).join('');
        var groupId = 'nav-group-' + groupIdx;
        return (
          '<div class="chapter-group">' +
            '<button class="chapter-toggle" aria-expanded="true" aria-controls="' + groupId + '">' +
              '<span>' + window.Render.escapeHtml(group.heading) + '</span>' +
              '<span class="chev" aria-hidden="true">▾</span>' +
            '</button>' +
            '<ul class="sub-list" id="' + groupId + '">' + items + '</ul>' +
          '</div>'
        );
      }).join('');
      sidebarNav.innerHTML = html;

      sidebarNav.querySelectorAll('.chapter-toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          var list = document.getElementById(btn.getAttribute('aria-controls'));
          list.style.display = expanded ? 'none' : '';
        });
      });

      sidebarNav.addEventListener('click', function (e) {
        var a = e.target.closest('a[data-target]');
        if (!a) return;
        if (window.innerWidth <= 880) {
          document.getElementById('sidebar').classList.remove('is-open');
        }
      });
    }

    // ---------------------------------------------------------
    // Progress UI
    // ---------------------------------------------------------
    function updateProgressUI() {
      var totalSolved = progress.countSolved(INTERACTIVE_IDS);
      var pct = INTERACTIVE_IDS.length ? Math.round((totalSolved / INTERACTIVE_IDS.length) * 100) : 0;
      if (overallFill) overallFill.style.width = pct + '%';
      if (overallText) overallText.textContent = totalSolved + ' / ' + INTERACTIVE_IDS.length + ' checkable problems solved (' + pct + '%)';
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (window.confirm('Reset your saved progress on this page? This cannot be undone.')) {
          INTERACTIVE_IDS.forEach(function (id) { delete progress.data.solved[id]; });
          window.localStorage.setItem('calcPrepProgress_v1', JSON.stringify(progress.data));
          updateProgressUI();
          main.querySelectorAll('.solved-badge').forEach(function (b) { b.setAttribute('hidden', ''); });
        }
      });
    }

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
    // Search filter (sidebar) — same pattern as the other pages
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
    renderAll();

    if (location.hash) {
      var target = document.querySelector(location.hash);
      if (target) requestAnimationFrame(function () { target.scrollIntoView({ block: 'start' }); });
    }
  });
})();
