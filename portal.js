(() => {
  "use strict";

  const STORAGE_KEY = "appdock.locale";
  const SUPPORTED_LOCALES = ["zh-CN", "ja", "en"];

  const messages = {
    "zh-CN": {
      meta: {
        title: "AppDock.link — Small apps, thoughtfully made.",
        description: "AppDock.link 汇集独立、克制、尊重隐私的小应用。",
      },
      a11y: { language: "选择语言" },
      hero: {
        eyebrow: "APPDOCK.LINK / 产品",
        titleLine1: "Small apps,",
        titleLine2: "thoughtfully made.",
        intro: "独立、克制、尊重隐私的小工具。每一款产品都有自己的空间，也共享同一种设计原则。",
      },
      product: {
        category: "01 / 健康与健身",
        name: "朝夕体重",
        description: "每天早晚，各记一次。",
      },
      footer: { contact: "联系我们：" },
    },
    ja: {
      meta: {
        title: "AppDock.link — 小さなアプリを、ていねいに。",
        description: "AppDock.linkは、それぞれ独立して使える、シンプルでプライバシーに配慮した小さなアプリを届けます。",
      },
      a11y: { language: "言語を選択" },
      hero: {
        eyebrow: "APPDOCK.LINK / プロダクト",
        titleLine1: "Small apps,",
        titleLine2: "thoughtfully made.",
        intro: "機能を絞り、プライバシーに配慮した小さなツール。それぞれが独立しながら、共通の設計思想でつくられています。",
      },
      product: {
        category: "01 / ヘルスケア／フィットネス",
        name: "朝晩体重",
        description: "朝と夜に、1回ずつ。",
      },
      footer: { contact: "お問い合わせ：" },
    },
    en: {
      meta: {
        title: "AppDock.link — Small apps, thoughtfully made.",
        description: "AppDock.link is home to small, focused apps that stand on their own and respect your privacy.",
      },
      a11y: { language: "Choose language" },
      hero: {
        eyebrow: "APPDOCK.LINK / PRODUCTS",
        titleLine1: "Small apps,",
        titleLine2: "thoughtfully made.",
        intro: "Small, focused tools that stand on their own and respect your privacy. Each is shaped by the same thoughtful approach to design.",
      },
      product: {
        category: "01 / HEALTH & FITNESS",
        name: "Daily Weight",
        description: "One weigh-in each morning and night.",
      },
      footer: { contact: "Contact: " },
    },
  };

  const resolveMessage = (locale, path) => {
    return path.split(".").reduce((value, key) => value?.[key], messages[locale]);
  };

  const normalizeLocale = (locale) => {
    const value = String(locale || "").toLowerCase();
    if (value.startsWith("zh")) return "zh-CN";
    if (value.startsWith("ja")) return "ja";
    return "en";
  };

  const readSavedLocale = () => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LOCALES.includes(saved) ? saved : null;
    } catch {
      return null;
    }
  };

  const detectLocale = () => {
    const saved = readSavedLocale();
    if (saved) return saved;

    const preferred = navigator.languages?.find((locale) => {
      const value = locale.toLowerCase();
      return value.startsWith("zh") || value.startsWith("ja") || value.startsWith("en");
    });
    return normalizeLocale(preferred || navigator.language);
  };

  const applyLocale = (locale, shouldSave = false) => {
    const nextLocale = SUPPORTED_LOCALES.includes(locale) ? locale : "en";
    document.documentElement.lang = nextLocale;
    document.body.dataset.locale = nextLocale;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = resolveMessage(nextLocale, element.dataset.i18n);
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const value = resolveMessage(nextLocale, element.dataset.i18nContent);
      if (typeof value === "string") element.setAttribute("content", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = resolveMessage(nextLocale, element.dataset.i18nAriaLabel);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-locale]").forEach((button) => {
      const isActive = button.dataset.locale === nextLocale;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (shouldSave) {
      try {
        window.localStorage.setItem(STORAGE_KEY, nextLocale);
      } catch {
        // The selected language still applies for this page view when storage is unavailable.
      }
    }
  };

  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.addEventListener("click", () => applyLocale(button.dataset.locale, true));
  });

  applyLocale(detectLocale());
})();
