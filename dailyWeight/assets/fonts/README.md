# Website fonts

The landing page uses Noto Sans SC, Noto Sans JP, Geist Mono, and the existing Inter files. The new WOFF2 files are variable fonts, subset to the page's translated text and basic Latin characters. They are served locally; visitors do not connect to a font service.

Sources: [Noto Sans SC](https://github.com/google/fonts/tree/main/ofl/notosanssc), [Noto Sans JP](https://github.com/google/fonts/tree/main/ofl/notosansjp), and [Geist Mono](https://github.com/google/fonts/tree/main/ofl/geistmono). The corresponding SIL Open Font License files are included in this directory.

When adding new Chinese or Japanese copy, update the font subsets to include the new characters. System fonts provide a fallback for characters outside the subsets.
