// ============================================================
// topics-page.js — drives topics.html
// ============================================================
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var TOPICS = window.TOPICS || [];
    var main = document.getElementById('topics-main');
    var sidebarNav = document.getElementById('sidebar-nav');

    // ---- Render main content ----
    var html = TOPICS.map(function (ch) {
      var subsHtml = ch.subsections.map(function (sub) {
        return window.Render.subsectionTopicHtml(ch, sub);
      }).join('');
      return (
        '<div class="chapter-section" data-chapter="' + ch.id + '">' +
          '<div class="eyebrow">Chapter ' + ch.num + '</div>' +
          '<h1 id="' + ch.id + '" tabindex="-1">' + window.Render.escapeHtml(ch.title) + '</h1>' +
          subsHtml +
        '</div>'
      );
    }).join('<div style="height:1.5rem"></div>');

    main.innerHTML = html;
    window.Render.renderMath(main);

    // ---- Build sidebar nav ----
    var navHtml = TOPICS.map(function (ch, idx) {
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
            '<span class="chev" aria-hidden="true">▾</span>' +
          '</button>' +
          '<ul class="sub-list" id="' + groupId + '">' + items + '</ul>' +
        '</div>'
      );
    }).join('');
    sidebarNav.innerHTML = navHtml;

    // Chapter collapse/expand
    sidebarNav.querySelectorAll('.chapter-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        var list = document.getElementById(btn.getAttribute('aria-controls'));
        list.style.display = expanded ? 'none' : '';
      });
    });

    // ---- Current-section highlighting via IntersectionObserver ----
    var navLinks = Array.prototype.slice.call(sidebarNav.querySelectorAll('a[data-sub-id]'));
    var sections = Array.prototype.slice.call(document.querySelectorAll('.subsection-block'));

    function setCurrent(subId) {
      navLinks.forEach(function (a) {
        a.classList.toggle('is-current', a.getAttribute('data-sub-id') === subId);
      });
    }

    if ('IntersectionObserver' in window && sections.length) {
      var observer = new IntersectionObserver(function (entries) {
        var visible = entries.filter(function (e) { return e.isIntersecting; });
        if (visible.length) {
          visible.sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
          setCurrent(visible[0].target.getAttribute('data-sub-id'));
        }
      }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
      sections.forEach(function (sec) { observer.observe(sec); });
    }

    // Highlight immediately if URL has a hash
    if (location.hash) {
      var initial = location.hash.slice(1);
      setCurrent(initial);
    }

    // ---- Search filter ----
    var searchInput = document.getElementById('topics-search');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var q = searchInput.value.trim().toLowerCase();
        if (!q) {
          sidebarNav.querySelectorAll('.chapter-group').forEach(function (g) { g.style.display = ''; });
          sidebarNav.querySelectorAll('.sub-list li').forEach(function (li) { li.style.display = ''; });
          return;
        }
        sidebarNav.querySelectorAll('.chapter-group').forEach(function (group) {
          var anyVisible = false;
          group.querySelectorAll('.sub-list li').forEach(function (li) {
            var text = li.textContent.toLowerCase();
            var match = text.indexOf(q) !== -1;
            li.style.display = match ? '' : 'none';
            if (match) anyVisible = true;
          });
          group.style.display = anyVisible ? '' : 'none';
        });
      });
    }

    // ---- Mobile sidebar toggle ----
    var menuToggle = document.getElementById('menu-toggle');
    var sidebar = document.getElementById('sidebar');
    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('is-open');
        var open = sidebar.classList.contains('is-open');
        menuToggle.setAttribute('aria-expanded', String(open));
      });
      // close sidebar on nav click (mobile)
      sidebarNav.addEventListener('click', function (e) {
        if (e.target.closest('a') && window.innerWidth <= 880) {
          sidebar.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // If arriving with a hash, scroll to it after render (since content was just injected)
    if (location.hash) {
      var target = document.querySelector(location.hash);
      if (target) {
        requestAnimationFrame(function () {
          target.scrollIntoView({ block: 'start' });
        });
      }
    }
  });
})();
