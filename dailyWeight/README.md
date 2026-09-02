# Daily Weight

English · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md)

Product page: [appdock.link/dailyWeight](https://appdock.link/dailyWeight/)

## Product overview

Daily Weight is an account-free, local-first weight journal. It keeps morning and evening entries separate so people can review daily change, overnight change, and longer-term trends without overinterpreting a single measurement.

Key features:

- Separate morning and evening weight entries
- Daily, overnight, weekly, and monthly trend views
- Morning and evening reminders scheduled locally on the device
- No account; weight entries and settings are not uploaded to AppDock.link
- Encrypted PNG backups generated on the device and restored from the original image
- No advertising, tracking, analytics, or crash-reporting services

Daily Weight is not a medical device and does not provide diagnosis, treatment, or medical advice. Entries, calculations, and trends are for general reference only.

## Directory contents

- `index.html` — product page and legal-document modal structure
- `styles.css` — page and responsive styles
- `app.js` — language switching, localized images, and legal-modal behavior
- Legal documents — Chinese, Japanese, and English privacy and terms text aligned with the app
- `assets/` — app icons, product UI images, backup images, and web fonts

## Localization and legal text

The page supports Simplified Chinese, Japanese, and English and gives priority to the visitor's most recent manual language choice. The Privacy Policy and Terms of Use follow the current page language.

The Privacy Policy and Terms of Use on this website are kept aligned with the text shown in the app and are updated when the app's functionality, data handling, or effective date changes.

## Local preview

Run this command from the AppDock.link repository root:

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/dailyWeight/`. Opening `index.html` directly is not recommended because an HTTP preview more closely matches the GitHub Pages environment.

## Website privacy boundary

The product page code has no user accounts, form submissions, advertising, behavioral tracking, or analytics scripts. It does not receive weight entries, passphrases, or backup images from the app. Hosting providers, network providers, and browsers may still process access logs or technical information under their own policies.

## Intellectual property and permitted use

Unless explicitly stated otherwise, all rights are reserved in the original HTML, CSS, JavaScript, page design, product copy, Daily Weight names and visual elements, app icon, and original presentation assets contained in this directory.

No open-source license is granted for this project. Except for platform functionality permitted by the GitHub Terms of Service, uses expressly allowed by applicable law, or written authorization from the rights holder, you may not copy, modify, redistribute, sell, commercially use, or create confusing derivative pages, applications, or brand materials from this content. You may not imply official authorization, endorsement, or affiliation by AppDock.link or Daily Weight.

Third-party fonts, tools, system names, trademarks, and other third-party materials remain the property of their respective owners and are governed by their original licenses or terms.

**Copyright © 2026 AppDock.link. All rights reserved.**

For licensing or product questions, contact [support@appdock.link](mailto:support@appdock.link) or reach out through [GitHub](https://github.com/LinHaobo0221).
