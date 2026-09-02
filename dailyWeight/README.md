# Daily Weight

English · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md)

Product page: [appdock.link/dailyWeight](https://appdock.link/dailyWeight/)

## Product overview

Daily Weight is a local-first weight journal that requires no account. It keeps morning and evening weigh-ins separate, making it easier to see daytime and overnight changes and long-term trends without overemphasizing a single measurement.

Key features:

- Separate morning and evening weigh-ins
- Daytime and overnight change calculations, plus weekly and monthly trend views
- Morning and evening reminders scheduled locally on the device
- No account required; weight entries and settings are never uploaded to AppDock.link
- Encrypted PNG backups created on the device and restored from the original file
- No advertising, tracking, analytics, or crash-reporting services

Daily Weight is not a medical device and does not diagnose or treat medical conditions or provide medical advice. Entries, calculations, and trends are for general informational purposes only.

## Directory contents

- `index.html` — product page and legal-document modal structure
- `styles.css` — page and responsive styles
- `app.js` — language switching, localized images, and legal-modal behavior
- `legal-documents.js` — Chinese, Japanese, and English privacy and terms text aligned with the app
- `assets/` — app icons, product UI images, backup images, and web fonts

## Localization and legal text

The page is available in Simplified Chinese, Japanese, and English. It remembers each visitor’s latest language selection and uses it on future visits. The privacy policy and terms of use follow the selected language.

The privacy policy and terms of use on this website are kept aligned with the text shown in the app and are updated when the app’s functionality, data handling, or effective date changes.

## Local preview

Run this command from the AppDock.link repository root:

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/dailyWeight/`. Use an HTTP server rather than opening `index.html` directly; this more closely matches GitHub Pages.

## Website privacy boundary

The product page has no user accounts, forms, ads, behavioral tracking, or analytics. It does not receive weight entries, passphrases, or backup images from the app. Hosting providers, network providers, and browsers may still process access logs or technical information under their own policies.

## Intellectual property and permitted use

Unless explicitly stated otherwise, all rights in the original HTML, CSS, JavaScript, page design, product copy, Daily Weight names and visual elements, app icon, and presentation assets in this directory are reserved.

No open-source license is granted for this project. Except for platform functionality permitted by the GitHub Terms of Service, uses expressly allowed by applicable law, or written authorization from the rights holder, you may not copy, modify, redistribute, sell, commercially use, or create confusing derivative pages, applications, or brand materials from this content. You may not imply official authorization, endorsement, or affiliation with AppDock.link or Daily Weight.

Third-party fonts, tools, system names, trademarks, and other third-party materials remain the property of their respective owners and are governed by their original licenses or terms.

**Copyright © 2026 AppDock.link. All rights reserved.**

For licensing or product questions, contact [support@appdock.link](mailto:support@appdock.link) or reach out through [GitHub](https://github.com/LinHaobo0221).
