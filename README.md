# AppDock static site

Static source for [appdock.link](https://appdock.link/). Each product lives in its own folder so future apps can be added without changing existing URLs.

## Structure

- `/` — AppDock product index
- `/dailyWeight/` — Daily Weight / 朝夕体重 / 朝晩体重
- `CNAME` — GitHub Pages custom domain
- `.nojekyll` — serve static files as-is

## Local preview

From this directory:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/dailyWeight/`.

## GitHub Pages

Create a GitHub repository for this folder, push the default branch, and set **Settings → Pages → Build and deployment → Deploy from a branch**. Select the default branch and `/ (root)`.

The committed `CNAME` maps the site to `appdock.link`. In the DNS provider, add the GitHub Pages records shown by GitHub for the repository, then enable **Enforce HTTPS** after DNS verification succeeds.
