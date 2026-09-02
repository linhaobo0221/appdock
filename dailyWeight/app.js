(() => {
  "use strict";

  const STORAGE_KEY = "appdock.locale";
  const SUPPORTED_LOCALES = ["zh-CN", "ja", "en"];
  const BACKUP_IMAGES = {
    "zh-CN": "./assets/images/backup-zh-CN.png?v=3x",
    ja: "./assets/images/backup-ja.png?v=3x",
    en: "./assets/images/backup-en.png?v=3x",
  };
  const LEGAL_DOCUMENTS = globalThis.DAILY_WEIGHT_LEGAL_DOCUMENTS || {};

  let activeLocale = "en";
  let activeLegalDocument = "privacy";
  let lastFocusedElement = null;

  const messages = {
    "zh-CN": {
      meta: {
        title: "朝夕体重 — 每天早晚，各记一次",
        description: "朝夕体重每天只记录晨重和晚重。一张加密 PNG 就能备份并跨设备共享全部数据，无需账户、上传或云端服务。",
        descriptionShort: "把晨重、晚重、日内差额和长期趋势放在一条清晰的时间线上。",
      },
      a11y: {
        skip: "跳到主要内容",
        primaryNav: "主要导航",
        footerNav: "页脚导航",
        language: "选择语言",
        features: "主要功能",
      },
      nav: { product: "产品", principles: "设计原则", support: "支持" },
      product: { name: "朝夕体重" },
      common: { comingSoon: "App Store 即将上线" },
      hero: {
        eyebrow: "PRIVATE WEIGHT JOURNAL",
        title: "每天早晚，各记一次。",
        description: "每天只记录晨重和晚重，就能看清日内差额、隔夜变化与长期趋势。",
        transferKicker: "ONE IMAGE · EVERY DEVICE",
        transferTitle: "一张图片，就能跨设备共享全部数据。",
        transferCopy: "直接传输原始加密 PNG，就能在另一台设备恢复全部记录。无需账号、无需上传，也不依赖 AppDock 或任何第三方云服务。",
        privacyLink: "查看数据与隐私 →",
        localNote: "记录留在设备 · 迁移也由你掌控",
        stageTitle: "一日详情",
        stageAlt: "朝夕体重的一日详情画面",
        stageCaption: "晨重、晚重与当日差额，在同一页完成回看。",
      },
      rhythm: {
        eyebrow: "CORE RITUAL",
        title: "一日两次，信息不过载",
        intro: "朝与晚分别记录，让“当天发生了什么”和“下一次醒来发生了什么”拥有不同的含义。",
        morningLabel: "晨间记录",
        morningMeta: "07:18 · 起床后",
        morningCopy: "固定条件，让晨重更适合长期比较。",
        eveningLabel: "晚间记录",
        eveningMeta: "21:36 · 睡前",
        eveningCopy: "同一天的饮水与作息，会反映在晚重中。",
        summaryLabel: "把两次记录连起来",
        dayDelta: "当天差额",
        dayDeltaFormula: "今晚 − 今晨",
        overnightDelta: "隔夜变化",
        overnightFormula: "今晨 − 昨晚",
        summaryNote: "短期数值仅供观察，长期趋势更重要。",
        bottomTitle: "记录的是节律，不是一次性的数字。",
        bottomCopy: "晨重与晚重分开呈现，减少误读，也让回看更自然。",
      },
      trends: {
        eyebrow: "LONG VIEW",
        title: "把波动放回时间里",
        intro: "单日变化容易受到饮水、盐分和作息影响。周与月的视图，把注意力重新放到更稳定的方向上。",
        weekAverage: "周均",
        fluctuation: "波动",
        completion: "完成率",
        insightTitle: "趋势正在缓慢下降",
        insightCopy: "最近 7 天晨重均值较前一周低 0.4 kg。继续保持相近测量条件，重点看均值。",
        historyNote: "日历与列表保留每一天，回看时不必依赖记忆。",
        stageTitle: "周趋势",
        stageAlt: "朝夕体重的周趋势画面",
        stageCaption: "晨重与晚重分开绘制，避免把两个时段混为一谈。",
      },
      backup: {
        eyebrow: "ENCRYPTED BACKUP",
        titleLine1: "一张图片，",
        titleLine2: "就是你的加密备份",
        intro: "记录与设置在设备上被加密，生成一张可以保存到系统相册的原始 PNG。没有账号，也不依赖我们的服务器。",
        annotation: "这张图片本身就是加密备份容器。",
        rules: "可以移动、重命名或作为原始文件传输；不要裁剪、滤镜、截图或压缩。",
        imageAlt: "朝夕体重加密备份 PNG",
        step1Title: "在本机生成",
        step1Copy: "读取记录与设置，不上传。",
        step2Title: "使用口令加密",
        step2Copy: "口令不保存，也无法代找回。",
        step3Title: "保存原始 PNG",
        step3Copy: "写入系统相册，保留原图。",
        step4Title: "选择图片恢复",
        step4Copy: "验证完整性后再覆盖本机数据。",
        transferTitle: "无需上传，也能跨设备迁移。",
        transferCopy: "将加密备份 PNG 通过 AirDrop 或数据线直接传到另一台设备，选择图片并输入口令，即可恢复全部记录。全程无需账号、无需云端，数据不经过 AppDock 或任何第三方服务器，始终由你自己保管。",
      },
      privacy: {
        eyebrow: "LOCAL BY DEFAULT",
        titleLine1: "没有账户，",
        titleLine2: "也没有服务器副本",
        intro: "朝夕体重是一款离线体重记录工具。你输入的记录与设置默认只保存在设备的 App 沙盒中。",
        fact1Title: "无需注册",
        fact1Copy: "没有账号体系或远程用户档案。",
        fact2Title: "记录不上传",
        fact2Copy: "体重与设置不发送到 AppDock.link。",
        fact3Title: "本地提醒",
        fact3Copy: "由设备按设定时间安排通知。",
        fact4Title: "不做追踪",
        fact4Copy: "没有广告、分析或追踪服务。",
        dataPathLabel: "数据保存路径",
        serverNote: "不经过 AppDock.link 服务器",
        inputTitle: "晨重 / 晚重",
        inputCopy: "用户主动输入",
        databaseTitle: "本机数据库",
        databaseCopy: "保存在 App 沙盒",
        pngTitle: "加密备份 PNG",
        pngCopy: "用户主动保存",
      },
      closing: {
        eyebrow: "READY WHEN YOU ARE",
        title: "从今天开始，记录早晚。",
        intro: "少一点输入，多一点清楚。朝夕体重只保留每天真正需要回看的信息。",
        promise1Title: "每天两次",
        promise1Copy: "晨重与晚重分开记录，回看不混淆。",
        promise2Title: "本地优先",
        promise2Copy: "无需账号，记录与设置默认留在设备。",
        promise3Title: "可以带走",
        promise3Copy: "用加密 PNG 备份，并从原图恢复。",
        medicalNote: "朝夕体重不是医疗器械，不提供诊断、治疗或医疗建议；记录与趋势仅供一般参考。",
      },
      footer: { privacy: "隐私政策", terms: "使用条款", contact: "联系我们：" },
    },

    ja: {
      meta: {
        title: "朝晩体重 — 朝と夜、1日2回だけ",
        description: "朝晩体重は、朝と夜の体重だけを記録します。1枚の暗号化 PNG で全データをバックアップし、別の端末へ移せます。アカウントもアップロードもクラウドも不要です。",
        descriptionShort: "朝の体重、夜の体重、日内差、長期トレンドを一本の見やすいタイムラインに。",
      },
      a11y: {
        skip: "メインコンテンツへ移動",
        primaryNav: "メインナビゲーション",
        footerNav: "フッターナビゲーション",
        language: "言語を選択",
        features: "主な機能",
      },
      nav: { product: "プロダクト", principles: "設計方針", support: "サポート" },
      product: { name: "朝晩体重" },
      common: { comingSoon: "App Store 近日公開" },
      hero: {
        eyebrow: "PRIVATE WEIGHT JOURNAL",
        title: "朝と夜、1日2回だけ。",
        description: "毎日記録するのは朝と夜の体重だけ。日内差、一晩の変化、長期トレンドまで見渡せます。",
        transferKicker: "ONE IMAGE · EVERY DEVICE",
        transferTitle: "1枚の画像だけで、全データを別の端末へ。",
        transferCopy: "暗号化されたオリジナル PNG を直接転送すれば、別の端末ですべての記録を復元できます。アカウントもアップロードも不要。AppDock や第三者のクラウドサービスにも依存しません。",
        privacyLink: "データとプライバシーを見る →",
        localNote: "記録は端末に · 移行もあなたの手で",
        stageTitle: "1日の詳細",
        stageAlt: "朝晩体重の1日詳細画面",
        stageCaption: "朝の体重、夜の体重、その日の差を1画面で振り返れます。",
      },
      rhythm: {
        eyebrow: "CORE RITUAL",
        title: "1日2回、情報は増やしすぎない",
        intro: "朝と夜を分けて記録することで、「今日の変化」と「次に目覚めるまでの変化」を別々に捉えられます。",
        morningLabel: "朝の記録",
        morningMeta: "07:18 · 起床後",
        morningCopy: "同じ条件で測るほど、朝の体重は長期比較に向きます。",
        eveningLabel: "夜の記録",
        eveningMeta: "21:36 · 就寝前",
        eveningCopy: "その日の水分や生活リズムが、夜の体重に表れます。",
        summaryLabel: "2つの記録をつなげる",
        dayDelta: "日内差",
        dayDeltaFormula: "今夜 − 今朝",
        overnightDelta: "一晩の変化",
        overnightFormula: "今朝 − 昨夜",
        summaryNote: "短期の数値は観察用。大切なのは長期トレンドです。",
        bottomTitle: "記録するのは、単発の数字ではなくリズム。",
        bottomCopy: "朝と夜を分けて表示することで、読み違いを減らし、自然に振り返れます。",
      },
      trends: {
        eyebrow: "LONG VIEW",
        title: "変動を、時間の中で見る",
        intro: "1日の変化は、水分・塩分・生活リズムの影響を受けます。週と月の表示なら、より安定した方向に目を戻せます。",
        weekAverage: "週平均",
        fluctuation: "変動",
        completion: "記録率",
        insightTitle: "トレンドは緩やかに下降中",
        insightCopy: "直近7日間の朝の平均は、前週より0.4 kg低くなっています。測定条件をそろえ、平均値を見ていきましょう。",
        historyNote: "カレンダーとリストに毎日を残すので、記憶に頼らず振り返れます。",
        stageTitle: "週間トレンド",
        stageAlt: "朝晩体重の週間トレンド画面",
        stageCaption: "朝と夜を別々に描画し、異なる時間帯を混同しません。",
      },
      backup: {
        eyebrow: "ENCRYPTED BACKUP",
        titleLine1: "1枚の画像が、",
        titleLine2: "暗号化バックアップに",
        intro: "記録と設定を端末内で暗号化し、システムの写真ライブラリへ保存できるオリジナル PNG を生成します。アカウントも、私たちのサーバーも必要ありません。",
        annotation: "この画像そのものが暗号化バックアップです。",
        rules: "移動、名前変更、原本のままの転送は可能です。切り抜き、フィルター、スクリーンショット、圧縮はしないでください。",
        imageAlt: "朝晩体重の暗号化バックアップ PNG",
        step1Title: "端末内で生成",
        step1Copy: "記録と設定を読み取り、アップロードしません。",
        step2Title: "パスワードで暗号化",
        step2Copy: "パスワードは保存されず、再発行もできません。",
        step3Title: "オリジナル PNG を保存",
        step3Copy: "写真ライブラリへ、原本のまま保存します。",
        step4Title: "画像を選んで復元",
        step4Copy: "完全性を確認してから端末内データを置き換えます。",
        transferTitle: "アップロードせずに、別の端末へ移行できます。",
        transferCopy: "暗号化バックアップ PNG を AirDrop またはケーブルで別の端末へ直接転送し、画像を選んでパスワードを入力すれば、すべての記録を復元できます。アカウントもクラウドも不要。データは AppDock や第三者のサーバーを経由せず、常にあなた自身が管理します。",
      },
      privacy: {
        eyebrow: "LOCAL BY DEFAULT",
        titleLine1: "アカウントなし、",
        titleLine2: "サーバー上の複製もなし",
        intro: "朝晩体重はオフラインの体重記録アプリです。入力した記録と設定は、初期設定で端末の App サンドボックス内だけに保存されます。",
        fact1Title: "登録不要",
        fact1Copy: "アカウント機能も、オンラインの利用者情報もありません。",
        fact2Title: "記録を送信しない",
        fact2Copy: "体重や設定を AppDock.link へ送りません。",
        fact3Title: "端末内の通知",
        fact3Copy: "設定した時刻に端末が通知を予約します。",
        fact4Title: "トラッキングなし",
        fact4Copy: "広告、分析、追跡サービスはありません。",
        dataPathLabel: "データの保存経路",
        serverNote: "AppDock.link サーバーを経由しません",
        inputTitle: "朝 / 夜の体重",
        inputCopy: "利用者が入力",
        databaseTitle: "端末内データベース",
        databaseCopy: "App サンドボックスに保存",
        pngTitle: "暗号化バックアップ PNG",
        pngCopy: "利用者が任意で保存",
      },
      closing: {
        eyebrow: "READY WHEN YOU ARE",
        title: "今日から、朝と夜を記録。",
        intro: "入力は少なく、見通しは明確に。朝晩体重は、毎日本当に振り返りたい情報だけを残します。",
        promise1Title: "1日2回",
        promise1Copy: "朝と夜を分けて記録し、振り返るときも混同しません。",
        promise2Title: "ローカル優先",
        promise2Copy: "アカウント不要。記録と設定は初期設定で端末内に残ります。",
        promise3Title: "自分で持ち出せる",
        promise3Copy: "暗号化 PNG にバックアップし、原本画像から復元できます。",
        medicalNote: "朝晩体重は医療機器ではなく、診断・治療・医療上の助言を提供しません。記録とトレンドは一般的な参考情報です。",
      },
      footer: { privacy: "プライバシーポリシー", terms: "利用規約", contact: "お問い合わせ：" },
    },

    en: {
      meta: {
        title: "Daily Weight — Once in the morning, once at night",
        description: "Daily Weight records only morning and evening weigh-ins. One encrypted PNG backs up and moves all your data between devices—no account, upload, or cloud service required.",
        descriptionShort: "Morning weight, evening weight, daily change, and long-term trends in one clear timeline.",
      },
      a11y: {
        skip: "Skip to main content",
        primaryNav: "Primary navigation",
        footerNav: "Footer navigation",
        language: "Choose language",
        features: "Key features",
      },
      nav: { product: "Product", principles: "Principles", support: "Support" },
      product: { name: "Daily Weight" },
      common: { comingSoon: "Coming soon on the App Store" },
      hero: {
        eyebrow: "PRIVATE WEIGHT JOURNAL",
        title: "Once in the morning. Once at night.",
        description: "Record only morning and evening weight each day to see daily change, overnight movement, and long-term trends.",
        transferKicker: "ONE IMAGE · EVERY DEVICE",
        transferTitle: "One image moves all your data between devices.",
        transferCopy: "Transfer the original encrypted PNG directly and restore every record on another device. No account. No upload. No dependency on AppDock or any third-party cloud service.",
        privacyLink: "View data & privacy →",
        localNote: "Records stay local · You control every move",
        stageTitle: "Day detail",
        stageAlt: "Daily Weight day detail screen",
        stageCaption: "Review morning, evening, and the day’s change in one place.",
      },
      rhythm: {
        eyebrow: "CORE RITUAL",
        title: "Twice a day. Nothing extra.",
        intro: "Keeping morning and evening separate gives a different meaning to what happened today and what changed by the next morning.",
        morningLabel: "Morning entry",
        morningMeta: "07:18 · After waking",
        morningCopy: "Consistent conditions make morning weight easier to compare over time.",
        eveningLabel: "Evening entry",
        eveningMeta: "21:36 · Before bed",
        eveningCopy: "The day’s hydration and routine are reflected in evening weight.",
        summaryLabel: "Connect the two entries",
        dayDelta: "Daily change",
        dayDeltaFormula: "Tonight − this morning",
        overnightDelta: "Overnight change",
        overnightFormula: "This morning − last night",
        summaryNote: "Short-term numbers are observations. Long-term trends matter more.",
        bottomTitle: "Track the rhythm, not a single number.",
        bottomCopy: "Morning and evening stay separate, reducing confusion and making review feel natural.",
      },
      trends: {
        eyebrow: "LONG VIEW",
        title: "Put fluctuations back in time",
        intro: "A single day can shift with hydration, salt, and sleep. Weekly and monthly views bring your attention back to the steadier direction.",
        weekAverage: "Weekly avg.",
        fluctuation: "Range",
        completion: "Completion",
        insightTitle: "The trend is moving down slowly",
        insightCopy: "Your 7-day morning average is 0.4 kg lower than the previous week. Keep measuring under similar conditions and focus on the average.",
        historyNote: "Calendar and list views keep every day, so review never depends on memory.",
        stageTitle: "Weekly trend",
        stageAlt: "Daily Weight weekly trend screen",
        stageCaption: "Morning and evening are drawn separately, so different times never blur together.",
      },
      backup: {
        eyebrow: "ENCRYPTED BACKUP",
        titleLine1: "One image is",
        titleLine2: "your encrypted backup",
        intro: "Records and settings are encrypted on your device into an original PNG you can save to Photos. No account and no dependency on our servers.",
        annotation: "The image itself is the encrypted backup container.",
        rules: "Move it, rename it, or transfer the original file. Do not crop, filter, screenshot, or compress it.",
        imageAlt: "Daily Weight encrypted backup PNG",
        step1Title: "Generated on device",
        step1Copy: "Reads records and settings without uploading them.",
        step2Title: "Encrypted with a passphrase",
        step2Copy: "The passphrase is not stored and cannot be recovered for you.",
        step3Title: "Save the original PNG",
        step3Copy: "Writes to Photos while preserving the original file.",
        step4Title: "Choose an image to restore",
        step4Copy: "Checks integrity before replacing local data.",
        transferTitle: "Move between devices without uploading.",
        transferCopy: "Transfer the encrypted backup PNG directly to another device with AirDrop or a cable, then choose the image and enter your passphrase to restore every record. No account or cloud required. Your data never passes through AppDock or any third-party server and remains in your control.",
      },
      privacy: {
        eyebrow: "LOCAL BY DEFAULT",
        titleLine1: "No account.",
        titleLine2: "No server-side copy.",
        intro: "Daily Weight is an offline weight journal. The records and settings you enter stay in the app sandbox on your device by default.",
        fact1Title: "No registration",
        fact1Copy: "There is no account system or remote user profile.",
        fact2Title: "Records stay local",
        fact2Copy: "Weight and settings are not sent to AppDock.link.",
        fact3Title: "Local reminders",
        fact3Copy: "Your device schedules notifications at the times you choose.",
        fact4Title: "No tracking",
        fact4Copy: "No advertising, analytics, or tracking services.",
        dataPathLabel: "Data path",
        serverNote: "Never passes through AppDock.link servers",
        inputTitle: "Morning / evening",
        inputCopy: "Entered by you",
        databaseTitle: "On-device database",
        databaseCopy: "Stored in the app sandbox",
        pngTitle: "Encrypted backup PNG",
        pngCopy: "Saved only when you choose",
      },
      closing: {
        eyebrow: "READY WHEN YOU ARE",
        title: "Start with morning and evening.",
        intro: "Less input, more clarity. Daily Weight keeps only what is genuinely useful to review each day.",
        promise1Title: "Twice a day",
        promise1Copy: "Morning and evening entries stay separate, even when you look back.",
        promise2Title: "Local first",
        promise2Copy: "No account. Records and settings stay on your device by default.",
        promise3Title: "Yours to take",
        promise3Copy: "Back up to an encrypted PNG and restore from the original image.",
        medicalNote: "Daily Weight is not a medical device and does not provide diagnosis, treatment, or medical advice. Records and trends are for general reference only.",
      },
      footer: { privacy: "Privacy Policy", terms: "Terms of Use", contact: "Contact: " },
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

  const saveLocale = (locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // The selected language still applies for this page view when storage is unavailable.
    }
  };

  const renderLegalDocument = (resetScroll = false) => {
    const legalCopy = LEGAL_DOCUMENTS[activeLocale];
    const modal = document.querySelector("#legal-modal");
    if (!legalCopy || !modal) return;

    const title = modal.querySelector("[data-legal-title]");
    const closeLabel = modal.querySelector("[data-legal-close-label]");
    const effectiveDate = modal.querySelector("[data-legal-effective-date]");
    const sectionsRoot = modal.querySelector("[data-legal-sections]");
    const panel = modal.querySelector("#legal-document-panel");

    if (title) title.textContent = legalCopy.title;
    if (closeLabel) closeLabel.textContent = legalCopy.close;
    if (effectiveDate) effectiveDate.textContent = legalCopy.effectiveDate;

    modal.querySelectorAll("[data-legal-tab]").forEach((tab) => {
      const documentId = tab.dataset.legalTab;
      const isSelected = documentId === activeLegalDocument;
      tab.textContent = documentId === "privacy" ? legalCopy.privacyTab : legalCopy.termsTab;
      tab.setAttribute("aria-selected", String(isSelected));
      tab.setAttribute("tabindex", isSelected ? "0" : "-1");
    });

    if (panel) {
      panel.setAttribute("aria-labelledby", `legal-tab-${activeLegalDocument}`);
      if (resetScroll) panel.scrollTop = 0;
    }

    if (!sectionsRoot) return;

    const fragment = document.createDocumentFragment();
    legalCopy[activeLegalDocument].forEach((section) => {
      const sectionElement = document.createElement("section");
      const heading = document.createElement("h3");
      const body = document.createElement("p");

      sectionElement.className = "legal-document-section";
      heading.textContent = section.title;
      body.textContent = section.body;
      sectionElement.append(heading, body);
      fragment.append(sectionElement);
    });
    sectionsRoot.replaceChildren(fragment);
  };

  const selectLegalDocument = (documentId, shouldFocus = false) => {
    if (documentId !== "privacy" && documentId !== "terms") return;
    activeLegalDocument = documentId;
    renderLegalDocument(true);

    if (shouldFocus) {
      document.querySelector(`[data-legal-tab="${documentId}"]`)?.focus();
    }
  };

  const closeLegalModal = () => {
    const modal = document.querySelector("#legal-modal");
    if (!modal || modal.hidden) return;

    modal.hidden = true;
    document.body.classList.remove("is-modal-open");
    lastFocusedElement?.focus();
    lastFocusedElement = null;
  };

  const openLegalModal = (documentId, trigger) => {
    const modal = document.querySelector("#legal-modal");
    if (!modal) return;

    lastFocusedElement = trigger;
    activeLegalDocument = documentId === "terms" ? "terms" : "privacy";
    modal.hidden = false;
    document.body.classList.add("is-modal-open");
    renderLegalDocument(true);

    requestAnimationFrame(() => {
      modal.querySelector(`[data-legal-tab="${activeLegalDocument}"]`)?.focus();
    });
  };

  const setupLegalModal = () => {
    const modal = document.querySelector("#legal-modal");
    const dialog = modal?.querySelector(".legal-dialog");
    if (!modal || !dialog) return;

    document.querySelectorAll("[data-legal-open]").forEach((trigger) => {
      trigger.addEventListener("click", () => openLegalModal(trigger.dataset.legalOpen, trigger));
    });

    modal.querySelectorAll("[data-legal-dismiss]").forEach((control) => {
      control.addEventListener("click", closeLegalModal);
    });

    modal.querySelectorAll("[data-legal-tab]").forEach((tab) => {
      tab.addEventListener("click", () => selectLegalDocument(tab.dataset.legalTab));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

        event.preventDefault();
        const tabs = [...modal.querySelectorAll("[data-legal-tab]")];
        const currentIndex = tabs.indexOf(tab);
        let nextIndex = event.key === "ArrowLeft" ? currentIndex - 1 : currentIndex + 1;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        if (nextIndex < 0) nextIndex = tabs.length - 1;
        if (nextIndex >= tabs.length) nextIndex = 0;
        selectLegalDocument(tabs[nextIndex].dataset.legalTab, true);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (modal.hidden) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeLegalModal();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = [...dialog.querySelectorAll("button, [href], [tabindex]")].filter(
        (element) => !element.hasAttribute("disabled") && element.getAttribute("tabindex") !== "-1",
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    });
  };

  const applyLocale = (locale, shouldSave = false) => {
    const nextLocale = SUPPORTED_LOCALES.includes(locale) ? locale : "en";
    activeLocale = nextLocale;
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

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = resolveMessage(nextLocale, element.dataset.i18nAlt);
      if (typeof value === "string") element.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = resolveMessage(nextLocale, element.dataset.i18nAriaLabel);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-locale]").forEach((button) => {
      const active = button.dataset.locale === nextLocale;
      button.classList.toggle("is-active", active);
      if (button.closest(".language-switcher")) button.setAttribute("aria-pressed", String(active));
    });

    document.querySelectorAll("[data-backup-image]").forEach((image) => {
      image.setAttribute("src", BACKUP_IMAGES[nextLocale]);
    });

    renderLegalDocument();

    if (shouldSave) saveLocale(nextLocale);
  };

  document.addEventListener("DOMContentLoaded", () => {
    setupLegalModal();
    applyLocale(detectLocale());

    document.querySelectorAll("[data-locale]").forEach((button) => {
      button.addEventListener("click", () => applyLocale(button.dataset.locale, true));
    });
  });
})();
