/* Shared behaviour for every page: dark-mode toggle + section scrollspy.
   Both are optional — a page without #themeBtn or nav.toc simply skips them. */
(function () {
  'use strict';

  var root = document.documentElement,
      btn = document.getElementById('themeBtn'),
      lbl = document.getElementById('themeLbl');

  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved) { root.setAttribute('data-theme', saved); }

  function cur() { return root.getAttribute('data-theme') || 'light'; } // default: white/light
  function paint() { if (lbl) lbl.textContent = cur() === 'dark' ? 'Light' : 'Dark'; }
  paint();

  if (btn) {
    btn.addEventListener('click', function () {
      var next = cur() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paint();
    });
  }

  // scrollspy for the sidebar section nav (homepage only)
  var links = [].slice.call(document.querySelectorAll('nav.toc a'));
  if (links.length && 'IntersectionObserver' in window) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('active'); });
          if (map[e.target.id]) map[e.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    document.querySelectorAll('main section').forEach(function (s) { obs.observe(s); });
  }
})();
