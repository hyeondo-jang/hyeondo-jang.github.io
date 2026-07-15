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

```bash
git add -A && git commit -m "update" && git push
```
GitHub Pages redeploys automatically (Settings → Pages → Deploy from branch → `main` / root).
