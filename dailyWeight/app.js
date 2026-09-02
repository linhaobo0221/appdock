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
      brand: { tagline: "Small apps, thoughtfully made." },
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
      screens: {
        day: {
          date: "8月29日记录",
          dayDelta: "当日差额",
          dayDeltaFormula: "今晚 − 今晨",
          overnightDelta: "隔夜变化",
          overnightFormula: "今晨 − 昨晚",
          overnightNote: "隔夜变化受饮水、盐分与睡眠影响，仅作参考",
          morningTitle: "晨间体重",
          morningMeta: "07:18 · 已记录",
          morningHint: "精度 0.1 kg · 可稍后编辑",
          eveningTitle: "晚间体重",
          eveningMeta: "21:36 · 已记录",
          eveningHint: "保存后立即计算今日差额",
          notesTitle: "当日备注",
          notesCopy: "睡眠 7 小时 · 正常饮食 · 无特殊情况",
          editMorning: "编辑晨重",
          editEvening: "编辑晚重",
          delete: "删除当天记录",
        },
        trend: {
          title: "趋势",
          goal: "目标 58.0 kg",
          week: "周",
          month: "月",
          dateRange: "8月24日 – 8月30日",
          comparison: "周均 −0.4 kg",
          morning: "晨重",
          evening: "晚重",
          logged: "13 / 14 次记录",
          average: "周均",
          range: "波动",
          completion: "完成率",
          insightTitle: "趋势正在缓慢下降",
          insightCopy: "最近 7 天晨重均值较前一周低 0.4 kg。继续保持相近测量条件，重点看均值。",
          today: "今天",
          trends: "趋势",
          history: "历史",
          settings: "设置",
        },
      },
      backup: {
        eyebrow: "ENCRYPTED BACKUP",
        carrierLabel: "ACTUAL BACKUP CARRIER",
        localBadge: "LOCAL ONLY",
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
        dataPathKicker: "DATA PATH",
        onDeviceLabel: "ON DEVICE",
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
        title: "朝晩体重 — 朝と夜に、1回ずつ",
        description: "朝晩体重は、朝と夜の体重を記録するシンプルなアプリです。すべてのデータを1枚の暗号化PNGにバックアップし、別の端末へ移せます。アカウント登録もアップロードもクラウドサービスも不要です。",
        descriptionShort: "朝と夜の体重、日内差、夜間の変化、長期的な推移を、ひとつの見やすいタイムラインで確認できます。",
      },
      a11y: {
        skip: "メインコンテンツへスキップ",
        primaryNav: "メインナビゲーション",
        footerNav: "フッターのナビゲーション",
        language: "言語を選択",
        features: "主な機能",
      },
      nav: { product: "概要", principles: "記録のしくみ", support: "サポート" },
      brand: { tagline: "小さなアプリを、ていねいに。" },
      product: { name: "朝晩体重" },
      common: { comingSoon: "App Storeで近日配信" },
      hero: {
        eyebrow: "PRIVATE WEIGHT JOURNAL",
        title: "朝と夜に、1回ずつ。",
        description: "朝と夜の体重を記録するだけで、日内差や夜間の変化、長期的な推移が見えてきます。",
        transferKicker: "ONE IMAGE · ALL YOUR DATA",
        transferTitle: "画像1枚で、すべてのデータを別の端末へ。",
        transferCopy: "暗号化バックアップのPNGをそのまま転送すれば、別の端末ですべての記録を復元できます。アカウント登録もアップロードも不要。AppDock.linkのサーバーや外部のクラウドサービスも必要ありません。",
        privacyLink: "データとプライバシー →",
        localNote: "端末内に保存 · 自分で移行",
        stageTitle: "1日の記録",
        stageAlt: "朝晩体重の日別記録画面",
        stageCaption: "朝と夜の体重、日内差を1画面で振り返れます。",
      },
      rhythm: {
        eyebrow: "DAILY RHYTHM",
        title: "1日2回、必要な情報だけ",
        intro: "朝と夜を分けて記録すると、1日の中での変化と、前夜から朝までの変化を別々に確認できます。",
        morningLabel: "朝の記録",
        morningMeta: "07:18 · 起床後",
        morningCopy: "なるべく同じ条件で測ると、長期的な変化を比べやすくなります。",
        eveningLabel: "夜の記録",
        eveningMeta: "21:36 · 就寝前",
        eveningCopy: "その日の水分摂取や生活リズムが、夜の体重に表れます。",
        summaryLabel: "2回の記録からわかること",
        dayDelta: "日内差",
        dayDeltaFormula: "夜 − 朝",
        overnightDelta: "夜間の変化",
        overnightFormula: "朝 − 前夜",
        summaryNote: "短期的な数値はあくまで目安。大切なのは長期的な推移です。",
        bottomTitle: "記録するのは、1回の数字ではなく日々のリズム。",
        bottomCopy: "朝と夜を分けて表示することで、変化を見誤りにくく、振り返りやすくなります。",
      },
      trends: {
        eyebrow: "THE LONG VIEW",
        title: "日々の変動を、長い目で見る",
        intro: "体重は、水分量や塩分、生活リズムによって日々変わります。週・月表示なら、目先の数値にとらわれず、長期的な傾向を追えます。",
        weekAverage: "週平均",
        fluctuation: "変動幅",
        completion: "記録率",
        insightTitle: "緩やかな減少傾向です",
        insightCopy: "直近7日間の朝の平均体重は、前週より0.4 kg低くなっています。なるべく同じ条件で測り、日々の値より平均の変化を見ていきましょう。",
        historyNote: "カレンダーと一覧に記録が残るので、記憶に頼らず振り返れます。",
        stageTitle: "週間の推移",
        stageAlt: "朝晩体重の週間推移画面",
        stageCaption: "朝と夜を別々の線で表示し、時間帯の異なる測定値を混同せずに確認できます。",
      },
      screens: {
        day: {
          date: "8月29日の記録",
          dayDelta: "日内差",
          dayDeltaFormula: "夜 − 朝",
          overnightDelta: "夜間の変化",
          overnightFormula: "朝 − 前夜",
          overnightNote: "夜間の変化は、水分・塩分・睡眠の影響を受けます。あくまで目安です。",
          morningTitle: "朝の体重",
          morningMeta: "07:18 · 記録済み",
          morningHint: "0.1 kg単位・あとから編集できます",
          eveningTitle: "夜の体重",
          eveningMeta: "21:36 · 記録済み",
          eveningHint: "日内差は自動で計算されます",
          notesTitle: "この日のメモ",
          notesCopy: "睡眠7時間・普段どおりの食事・特記事項なし",
          editMorning: "朝の体重を編集",
          editEvening: "夜の体重を編集",
          delete: "この日の記録を削除",
        },
        trend: {
          title: "推移",
          goal: "目標 58.0 kg",
          week: "週",
          month: "月",
          dateRange: "8月24日〜30日",
          comparison: "前週比 −0.4 kg",
          morning: "朝の体重",
          evening: "夜の体重",
          logged: "14回中13回",
          average: "週平均",
          range: "変動幅",
          completion: "記録率",
          insightTitle: "緩やかな減少傾向です",
          insightCopy: "朝の7日平均は前週より0.4 kg低下。同じ条件で測り、日々の値より平均を見ましょう。",
          today: "今日",
          trends: "推移",
          history: "履歴",
          settings: "設定",
        },
      },
      backup: {
        eyebrow: "ENCRYPTED BACKUP",
        carrierLabel: "バックアップ画像",
        localBadge: "端末内で作成",
        titleLine1: "画像1枚が、",
        titleLine2: "そのまま暗号化バックアップに",
        intro: "記録と設定を端末内で暗号化し、1枚のPNGとして写真ライブラリに保存できます。アカウントも、AppDock.linkのサーバーも使いません。",
        annotation: "この画像自体が、暗号化されたバックアップです。",
        rules: "移動やファイル名の変更は可能です。転送するときは元のファイルのまま送ってください。切り抜き、フィルター加工、スクリーンショット、圧縮は行わないでください。",
        imageAlt: "朝晩体重の暗号化バックアップ（PNG）",
        step1Title: "端末内で作成",
        step1Copy: "記録と設定を読み取るだけで、外部へ送信しません。",
        step2Title: "パスフレーズで暗号化",
        step2Copy: "パスフレーズは保存されないため、忘れても再発行できません。",
        step3Title: "元のPNGファイルを保存",
        step3Copy: "ファイルを変更せず、そのまま写真ライブラリに保存します。",
        step4Title: "画像を選んで復元",
        step4Copy: "データの整合性を確認してから、端末内のデータを置き換えます。",
        transferTitle: "アップロードなしで、別の端末へ。",
        transferCopy: "暗号化バックアップのPNGをAirDropやケーブルで別の端末へ送り、画像を選んでパスフレーズを入力すれば、すべての記録を復元できます。アカウントもクラウドも不要。データはAppDock.linkや第三者のサーバーを経由せず、手元で管理できます。",
      },
      privacy: {
        eyebrow: "LOCAL BY DEFAULT",
        dataPathKicker: "データの流れ",
        onDeviceLabel: "端末内",
        titleLine1: "アカウントも、",
        titleLine2: "サーバー上のコピーもなし",
        intro: "朝晩体重はオフラインで使える体重記録アプリです。記録と設定は、通常は端末のアプリ専用領域にのみ保存されます。",
        fact1Title: "アカウント登録なし",
        fact1Copy: "アカウント機能や、サーバー上のユーザープロフィールはありません。",
        fact2Title: "記録は端末内に",
        fact2Copy: "体重の記録や設定はAppDock.linkに送信されません。",
        fact3Title: "端末内で通知",
        fact3Copy: "通知は設定した時刻に端末から届きます。",
        fact4Title: "トラッキングなし",
        fact4Copy: "広告、アクセス解析、トラッキングの各サービスは使用しません。",
        dataPathLabel: "データの流れ",
        serverNote: "AppDock.linkのサーバーを経由しません",
        inputTitle: "朝・夜の体重",
        inputCopy: "自分で入力",
        databaseTitle: "端末内のデータベース",
        databaseCopy: "アプリ専用領域に保存",
        pngTitle: "暗号化バックアップ（PNG）",
        pngCopy: "必要なときだけ保存",
      },
      closing: {
        eyebrow: "READY WHEN YOU ARE",
        title: "朝と夜の、シンプルな習慣。",
        intro: "入力は少なく、変化はわかりやすく。朝晩体重は、振り返りに必要な情報だけを残します。",
        promise1Title: "1日2回",
        promise1Copy: "朝と夜を分けて記録。履歴もわかりやすく保てます。",
        promise2Title: "端末内に保存",
        promise2Copy: "アカウント不要。記録と設定は、通常は端末内に保存されます。",
        promise3Title: "自分で移行",
        promise3Copy: "暗号化PNGでバックアップし、元の画像から復元できます。",
        medicalNote: "「朝晩体重」は医療機器ではなく、診断・治療・医療上の助言を行うものではありません。記録や推移は一般的な参考情報です。",
      },
      footer: { privacy: "プライバシーポリシー", terms: "利用規約", contact: "お問い合わせ：" },
    },

    en: {
      meta: {
        title: "Daily Weight — Once in the morning, once at night",
        description: "Daily Weight tracks morning and evening weigh-ins. Back up and move all your data between devices with a single encrypted PNG—no account, upload, or cloud service required.",
        descriptionShort: "See morning and evening weight, daytime and overnight changes, and long-term trends in one clear timeline.",
      },
      a11y: {
        skip: "Skip to main content",
        primaryNav: "Primary navigation",
        footerNav: "Footer navigation",
        language: "Choose language",
        features: "Key features",
      },
      nav: { product: "Overview", principles: "How it works", support: "Support" },
      brand: { tagline: "Small apps, thoughtfully made." },
      product: { name: "Daily Weight" },
      common: { comingSoon: "Coming soon to the App Store" },
      hero: {
        eyebrow: "PRIVATE WEIGHT JOURNAL",
        title: "Once in the morning. Once at night.",
        description: "Log your weight each morning and evening to see changes during the day, overnight, and over time.",
        transferKicker: "ONE IMAGE · ALL YOUR DATA",
        transferTitle: "Move all your data between devices with one image.",
        transferCopy: "Transfer the original encrypted PNG directly to another device to restore every record. No account or upload required—and no AppDock.link or third-party cloud service involved.",
        privacyLink: "See how your data stays private →",
        localNote: "Records stay on your device · You control every transfer",
        stageTitle: "Day details",
        stageAlt: "Daily Weight screen showing morning and evening weigh-ins for one day",
        stageCaption: "See both weigh-ins and the change between them in one place.",
      },
      rhythm: {
        eyebrow: "DAILY RHYTHM",
        title: "Twice a day. Nothing extra.",
        intro: "Separate morning and evening entries make two patterns clear: how your weight changes during the day and how it changes overnight.",
        morningLabel: "Morning entry",
        morningMeta: "7:18 AM · After waking up",
        morningCopy: "Weighing under consistent conditions makes morning entries easier to compare over time.",
        eveningLabel: "Evening entry",
        eveningMeta: "9:36 PM · Before bed",
        eveningCopy: "Hydration and your daily routine can affect your evening weight.",
        summaryLabel: "Compare the two",
        dayDelta: "Daytime change",
        dayDeltaFormula: "Evening − morning",
        overnightDelta: "Overnight change",
        overnightFormula: "Morning − previous evening",
        summaryNote: "Short-term changes are useful context. Long-term trends matter more.",
        bottomTitle: "Track the pattern, not a single number.",
        bottomCopy: "Keeping morning and evening weigh-ins separate makes your history easier to understand.",
      },
      trends: {
        eyebrow: "THE LONG VIEW",
        title: "Put daily fluctuations in perspective",
        intro: "Hydration, sodium intake, and your daily routine can all affect your weight from day to day. Weekly and monthly views help you focus on the broader trend.",
        weekAverage: "Weekly avg.",
        fluctuation: "Range",
        completion: "Completion rate",
        insightTitle: "Your average is trending down",
        insightCopy: "Your 7-day morning average is down 0.4 kg from the previous week. Keep weighing under similar conditions and focus on the average.",
        historyNote: "Calendar and list views keep a complete history, so you don’t have to rely on memory.",
        stageTitle: "Weekly trend",
        stageAlt: "Weekly trends in Daily Weight",
        stageCaption: "Morning and evening weights are charted separately, so the two stay distinct.",
      },
      screens: {
        day: {
          date: "August 29",
          dayDelta: "Daytime change",
          dayDeltaFormula: "Evening − morning",
          overnightDelta: "Overnight change",
          overnightFormula: "Morning − previous evening",
          overnightNote: "Hydration, sodium, and sleep can affect this value. Use it for context only.",
          morningTitle: "Morning weigh-in",
          morningMeta: "7:18 AM · Logged",
          morningHint: "To the nearest 0.1 kg · Edit anytime",
          eveningTitle: "Evening weigh-in",
          eveningMeta: "9:36 PM · Logged",
          eveningHint: "Today’s change is calculated automatically.",
          notesTitle: "Notes for this day",
          notesCopy: "7 hours of sleep · Ate as usual · Nothing unusual",
          editMorning: "Edit morning weight",
          editEvening: "Edit evening weight",
          delete: "Delete entries for this day",
        },
        trend: {
          title: "Trends",
          goal: "Goal 58.0 kg",
          week: "Week",
          month: "Month",
          dateRange: "Aug 24–30",
          comparison: "Weekly avg. ↓ 0.4 kg",
          morning: "Morning",
          evening: "Evening",
          logged: "13 of 14 entries",
          average: "Weekly avg.",
          range: "Range",
          completion: "Completion rate",
          insightTitle: "Your average is trending down",
          insightCopy: "Your 7-day morning average is down 0.4 kg. Weigh under similar conditions and focus on the average.",
          today: "Today",
          trends: "Trends",
          history: "History",
          settings: "Settings",
        },
      },
      backup: {
        eyebrow: "ENCRYPTED BACKUP",
        carrierLabel: "BACKUP FILE PREVIEW",
        localBadge: "CREATED ON DEVICE",
        titleLine1: "One image holds",
        titleLine2: "your encrypted backup",
        intro: "Your records and settings are encrypted on your device and packaged in a PNG you can save to Photos. No account or AppDock.link server required.",
        annotation: "The image itself contains your encrypted backup.",
        rules: "Move, rename, or transfer the original file—but don’t crop, filter, screenshot, or compress it.",
        imageAlt: "Daily Weight encrypted backup PNG",
        step1Title: "Create on your device",
        step1Copy: "The app reads your records and settings locally—nothing is uploaded.",
        step2Title: "Encrypt with a passphrase",
        step2Copy: "Your passphrase is never stored and cannot be recovered.",
        step3Title: "Save the original PNG",
        step3Copy: "The original file is saved to Photos unchanged.",
        step4Title: "Select the image to restore",
        step4Copy: "The app verifies the file before replacing local data.",
        transferTitle: "Move your data between devices—no upload required.",
        transferCopy: "Send the encrypted backup PNG to another device via AirDrop or cable. On that device, select the image and enter your passphrase to restore every record. No account or cloud required—your data never passes through AppDock.link or a third-party server.",
      },
      privacy: {
        eyebrow: "LOCAL BY DEFAULT",
        dataPathKicker: "DATA FLOW",
        onDeviceLabel: "ON DEVICE",
        titleLine1: "No account.",
        titleLine2: "No server copy.",
        intro: "Daily Weight is an offline weight journal. Your records and settings stay in the app’s private storage on your device by default.",
        fact1Title: "No sign-up",
        fact1Copy: "There are no accounts or remote user profiles.",
        fact2Title: "Records stay on your device",
        fact2Copy: "Your weight entries and settings are never sent to AppDock.link.",
        fact3Title: "Local reminders",
        fact3Copy: "Your device schedules notifications at the times you choose.",
        fact4Title: "No tracking",
        fact4Copy: "No ads, analytics, or tracking services.",
        dataPathLabel: "Data path",
        serverNote: "Data never passes through AppDock.link servers.",
        inputTitle: "Morning / evening weight",
        inputCopy: "Entered by you",
        databaseTitle: "On-device database",
        databaseCopy: "Stored in the app’s private storage",
        pngTitle: "Encrypted backup PNG",
        pngCopy: "Saved only when you choose",
      },
      closing: {
        eyebrow: "READY WHEN YOU ARE",
        title: "A simple routine: morning and evening.",
        intro: "Less to log. More clarity over time. Daily Weight keeps each day’s history simple and useful.",
        promise1Title: "Twice a day",
        promise1Copy: "Morning and evening entries stay separate in your history.",
        promise2Title: "Local by default",
        promise2Copy: "No account. Records and settings stay on your device by default.",
        promise3Title: "Take your data with you",
        promise3Copy: "Back up your data as an encrypted PNG, then restore it from the original file.",
        medicalNote: "Daily Weight is not a medical device and does not diagnose or treat medical conditions or provide medical advice. Records and trends are for general informational purposes only.",
      },
      footer: { privacy: "Privacy policy", terms: "Terms of use", contact: "Contact: " },
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
    const closeButton = modal.querySelector("[data-legal-close-button]");
    const closeLabel = modal.querySelector("[data-legal-close-label]");
    const effectiveDate = modal.querySelector("[data-legal-effective-date]");
    const sectionsRoot = modal.querySelector("[data-legal-sections]");
    const panel = modal.querySelector("#legal-document-panel");

    if (title) title.textContent = legalCopy.title;
    if (closeButton) closeButton.setAttribute("aria-label", legalCopy.close);
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
      if (button.hasAttribute("aria-pressed")) button.setAttribute("aria-pressed", String(active));
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
