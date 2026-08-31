/* Single source of truth for the News section.
 *
 * Add a new item at the TOP of the array — index.html renders only the first
 * few (via data-limit on #newsList) and news.html renders all of them, so this
 * file is the only place news ever needs editing.
 *
 * `body` is inserted as HTML, so inline <a> links are fine.
 */
(function (global) {
  'use strict';

  var NEWS = [
    { date: '2026.08', body: '🎉 Our paper on extreme LLM sparsity has been accepted to EMNLP 2026!' },
    { date: '2026.08', body: '🎉 Our paper on robust semiconductor anomaly detection with large vision-language models has been accepted to BMVC 2026!' },
    { date: '2026.07', body: '🏆 Our paper on extreme LLM sparsity received the Best Paper Award at CKAIA 2026!' },
    { date: '2026.07', body: '✈️ I will be attending ICML 2026 this July.' },
    { date: '2026.01', body: '🎉 Our paper on pushing large language models to extreme sparsity has been accepted to ICLR 2026!' },
    { date: '2025.11', body: '🏆 Our paper on pushing large language models to extreme sparsity received the Best Paper Award at CKAIA 2025!' },
    { date: '2025.04', body: '🎓 I was selected as a <a href="https://www.ikef.or.kr/">Kwanjeong Educational Foundation</a> Scholar.' },
    { date: '2025.03', body: '🏫 I began my M.S. at POSTECH, where I am advised by <a href="https://namhoonlee.github.io">Namhoon Lee</a>.' }
  ];

  function render(listEl, limit) {
    if (!listEl) return 0;
    var items = (typeof limit === 'number' && limit > 0) ? NEWS.slice(0, limit) : NEWS;
    listEl.innerHTML = items.map(function (n) {
      return '<li><time>' + n.date + '</time><span class="body">' + n.body + '</span></li>';
    }).join('');
    return NEWS.length;
  }

  /* Auto-render: #newsList gets the list, and #newsMore is revealed only when
     items are actually being hidden. */
  function init() {
    var list = document.getElementById('newsList');
    if (!list) return;

    var raw = list.getAttribute('data-limit');
    var limit = raw === null ? null : parseInt(raw, 10);
    render(list, limit);

    var more = document.getElementById('newsMore');
    if (more && limit !== null && NEWS.length > limit) more.hidden = false;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.News = { items: NEWS, render: render };
})(window);
