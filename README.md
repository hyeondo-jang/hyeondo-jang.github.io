# hyeondo-jang.github.io

Personal academic homepage of **Hyeondo Jang** (POSTECH) — a single static page.

- Live site: https://hyeondo-jang.github.io
- No build step: plain `index.html` + `assets/`. GitHub Pages serves it directly (`.nojekyll`).

## Edit

- **Text / sections** — edit `index.html`.
- **Profile photo** — replace `assets/img/profile.jpeg`.
- **CV** — drop `assets/pdf/cv.pdf`, then uncomment the CV link in `index.html`.
- **Links** — fill `LINKEDIN_URL_HERE` / `SCHOLAR_URL_HERE` in the sidebar.

## Publish

GitHub Pages serves the **`gh-pages`** branch, not `main`. Pushing `main` alone
does **not** update the live site — you must fast-forward `gh-pages` too:

```bash
git add -A && git commit -m "update"
git push origin main
git push origin main:gh-pages   # this is what actually deploys
```

The build takes a minute or two, and the CDN caches for 10 more
(`cache-control: max-age=600`), so hard-refresh if you still see the old page.
