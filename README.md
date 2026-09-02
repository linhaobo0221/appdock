# AppDock.link

**Small apps, thoughtfully made.**

English · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md)

AppDock.link is home to a growing collection of small, focused apps. This repository contains the static site published at [appdock.link](https://appdock.link/).

## About AppDock.link

AppDock.link brings together focused apps designed for simplicity, privacy, and lasting usefulness. Each app has its own product page and stable URL, all under a shared brand and design system.

Current product:

- [Daily Weight](https://appdock.link/dailyWeight/): log morning and evening weigh-ins separately, review daytime changes and long-term trends, and create or restore encrypted PNG backups—all on your device.

## Repository structure

- `/index.html` — AppDock.link product index
- `/dailyWeight/` — Daily Weight product page
- `/assets/` — AppDock.link brand and shared assets
- `/CNAME` — GitHub Pages custom domain
- `/.nojekyll` — prevents GitHub Pages from processing the site with Jekyll

Future products should live in independent directories such as `/otherApp/` so existing product URLs remain stable.

## Local preview

Run this command from the repository root:

```bash
python3 -m http.server 4173
```

Then open:

- `http://127.0.0.1:4173/`
- `http://127.0.0.1:4173/dailyWeight/`

## Deployment

The site is hosted with GitHub Pages. Configure the repository root on the default branch as the Pages source and keep `appdock.link` in `CNAME`. Enable HTTPS after the domain and DNS records have been verified.

## Privacy

The site has no user accounts, forms, ads, behavioral tracking, or analytics. Hosting providers, network providers, and browsers may still process access logs or technical information under their own policies.

## Intellectual property and permitted use

Unless explicitly stated otherwise, all rights in the original source code, page structure, visual design, copy, AppDock.link brand elements, icons, and product assets in this repository are reserved.

Public access to this repository does not grant an open-source license. Except for platform functionality permitted by the GitHub Terms of Service, uses expressly allowed by applicable law, or written authorization from the rights holder, you may not copy, modify, redistribute, sell, commercially use, or create derivative works from this project. You may not use the AppDock.link name, marks, or product materials in a way that implies official authorization, partnership, or affiliation.

Third-party fonts, tools, trademarks, and other third-party materials remain the property of their respective owners and are governed by their original licenses or terms.

**Copyright © 2026 AppDock.link. All rights reserved.**

For permission requests, contact [support@appdock.link](mailto:support@appdock.link) or reach out through [GitHub](https://github.com/LinHaobo0221).
