(() => {
  "use strict";

  const STORAGE_KEY = "appdock.locale";
  const SUPPORTED_LOCALES = ["zh-CN", "ja", "en"];

  const messages = {
    "zh-CN": {
      meta: {
        title: "AppDock — 用心打磨的小应用",
        description: "AppDock 汇集独立、克制、尊重隐私的小应用。",
      },
      a11y: { language: "选择语言" },
      hero: {
        eyebrow: "APPDOCK / 产品",
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
        title: "AppDock — 小さなアプリを、丁寧に",
        description: "AppDockは、独立して使え、プライバシーを尊重する小さなアプリを届けます。",
      },
      a11y: { language: "言語を選択" },
      hero: {
        eyebrow: "APPDOCK / プロダクト",
        intro: "独立して使え、過不足なく、プライバシーを尊重する小さなツール。それぞれのプロダクトに固有の場所がありながら、同じ設計思想を共有しています。",
      },
      product: {
        category: "01 / ヘルスケア＆フィットネス",
        name: "朝晩体重",
        description: "朝と夜、1日2回だけ。",
      },
      footer: { contact: "お問い合わせ：" },
    },
    en: {
      meta: {
        title: "AppDock — Small apps, thoughtfully made",
        description: "AppDock is home to independent, focused apps that respect your privacy.",
      },
      a11y: { language: "Choose language" },
      hero: {
        eyebrow: "APPDOCK / PRODUCTS",
        intro: "Independent, focused tools that respect your privacy. Each product has its own space while sharing the same design principles.",
      },
      product: {
        category: "01 / HEALTH & FITNESS",
        name: "Daily Weight",
        description: "Once in the morning, once at night.",
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
    document.title = messages[nextLocale].meta.title;

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
