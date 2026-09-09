# Product screen previews

Exported from the current Daily Weight Figma designs on 2026-09-09, then encoded as lossless WebP. These are illustrative product previews, not interactive app controls or usable backup files. All assets are served locally; no expiring Figma URLs are used at runtime.

The exports include transparent shadow margins. Each screen has three lossless WebP candidates:

- `name-locale.webp`: 441 × 900 (1×).
- `name-locale@2x.webp`: 882 × 1800 (2×).
- `name-locale@3x.webp`: 1323 × 2700 (3×).

The English Today screen is slightly taller: 912 / 1824 / 2736 pixels respectively. The 2× and 3× files were rendered directly from the original Figma nodes with `node.screenshot({ scale: 2, contentsOnly: true })` and `scale: 3`, respectively. They are not enlarged copies of the 1× images.

The website uses density descriptors (`1x`, `2x`, `3x`) in `srcset`, allowing the browser to choose based on pixel density, zoom and its own loading policy. CSS caps display width at 310px (the hero uses 278–292px), so these candidates provide at least the required detail. Language changes update both `src` and `srcset`, intrinsic height and alternative text. Below-the-fold previews remain lazy-loaded.

| Language | Asset | Figma node |
| --- | --- | --- |
| zh-CN | today-zh-CN.webp | [89:61](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=89-61) |
| zh-CN | trends-zh-CN.webp | [92:105](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=92-105) |
| zh-CN | morning-zh-CN.webp | [105:950](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=105-950) |
| zh-CN | evening-zh-CN.webp | [105:1017](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=105-1017) |
| zh-CN | backup-zh-CN.webp | [106:1041](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=106-1041) |
| zh-CN | restore-zh-CN.webp | [106:1309](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=106-1309) |
| ja | today-ja.webp | [108:3191](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-3191) |
| ja | trends-ja.webp | [108:3251](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-3251) |
| ja | morning-ja.webp | [108:4056](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-4056) |
| ja | evening-ja.webp | [108:4098](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-4098) |
| ja | backup-ja.webp | [108:5201](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-5201) |
| ja | restore-ja.webp | [108:5373](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-5373) |
| en | today-en.webp | [108:8355](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-8355) |
| en | trends-en.webp | [108:8415](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-8415) |
| en | morning-en.webp | [108:9220](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-9220) |
| en | evening-en.webp | [108:9262](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-9262) |
| en | backup-en.webp | [108:10365](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-10365) |
| en | restore-en.webp | [108:10537](https://www.figma.com/design/YCvqTu5HwjEMYf5p2YEwTO?node-id=108-10537) |

The `../images/horizon-*.svg` files are the unmodified four background layers from welcome screen `103:216`. The app icon is the user-supplied `app-icon.svg`; its PNG and ICO derivatives are used for home-screen and browser icons.
