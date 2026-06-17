// ============================================================
// index-page.js — drives index.html
// ============================================================
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var TOPICS = window.TOPICS || [];
    var totalSubsections = TOPICS.reduce(function (s, ch) { return s + ch.subsections.length; }, 0);
    var totalProblems = TOPICS.reduce(function (s, ch) {
      return s + ch.subsections.reduce(function (s2, sub) { return s2 + sub.problems.length; }, 0);
    }, 0);

    var statChapters = document.getElementById('stat-chapters');
    var statSubsections = document.getElementById('stat-subsections');
    var statProblems = document.getElementById('stat-problems');
    if (statChapters) statChapters.textContent = String(TOPICS.length);
    if (statSubsections) statSubsections.textContent = String(totalSubsections);
    if (statProblems) statProblems.textContent = String(totalProblems);

    var cardsContainer = document.getElementById('chapter-cards');
    if (!cardsContainer) return;

    var html = TOPICS.map(function (ch) {
      var subItems = ch.subsections.map(function (sub) {
        return '<li>' + sub.id + ' — ' + window.Render.escapeHtml(sub.title) + '</li>';
      }).join('');
      var problemCount = ch.subsections.reduce(function (s, sub) { return s + sub.problems.length; }, 0);
      return (
        '<div class="chapter-card">' +
          '<span class="chnum">Chapter ' + ch.num + '</span>' +
          '<h3>' + window.Render.escapeHtml(ch.title) + '</h3>' +
          '<ul>' + subItems + '</ul>' +
          '<div class="chapter-card-footer">' +
            '<a href="topics.html#' + ch.id + '">' + ch.subsections.length + ' topics</a>' +
            '<a class="primary" href="practice.html#' + ch.id + '">' + problemCount + ' problems</a>' +
          '</div>' +
        '</div>'
      );
    }).join('');
    cardsContainer.innerHTML = html;
  });
})();
