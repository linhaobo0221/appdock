(() => {
  "use strict";

  const STORAGE_KEY = "appdock.locale";
  const SUPPORTED_LOCALES = ["zh-CN", "ja", "en"];
  const LEGAL_DOCUMENTS = globalThis.DAILY_WEIGHT_LEGAL_DOCUMENTS || {};

  let activeLocale = "en";
  let activeLegalDocument = "privacy";
  let lastFocusedElement = null;

  const messages = {
    "zh-CN": {
      meta: {
        title: "朝夕体重 — 每天两个数字，静观变化",
        description:
          "朝夕体重每天只记录晨重和晚重。一张加密 PNG 就能备份并跨设备共享全部数据，无需账户、上传或云端服务。",
        descriptionShort:
          "把晨重、晚重、日内差额和长期趋势放在一条清晰的时间线上。",
      },
      a11y: {
        skip: "跳到主要内容",
        primaryNav: "主要导航",
        footerNav: "页脚导航",
        language: "选择语言",
        features: "主要功能",
      },
      brand: {
        tagline: "Small apps, thoughtfully made.",
      },
      product: {
        name: "朝夕体重",
      },
      footer: {
        privacy: "隐私政策",
        terms: "使用条款",
        contact: "联系我们：",
      },
      nav: {
        support: "支持",
        features: "核心功能",
        privacy: "数据与隐私",
        backup: "图片备份",
      },
      screen: {
        todayAlt: "朝夕体重的今日记录界面：晨重、晚重、当天差额和隔夜变化。",
        entryMorningAlt: "晨重输入界面，包含体重数字与数字键盘。",
        entryEveningAlt: "晚重输入界面，包含体重数字与数字键盘。",
        backupAlt: "加密备份预览，显示记录数量、备份时间与原始 PNG 保存提示。",
        restoreAlt: "备份恢复成功界面，显示恢复的晨晚记录与身体设定。",
        trendsAlt: "每周趋势界面，包含晨晚双折线、周统计与记录完成率。",
        today: "今天",
        trends: "趋势",
        history: "历史",
        settings: "设置",
        dayDelta: "当天差额",
        overnightDelta: "隔夜变化",
        lastNight: "昨晚",
        thisMorning: "今晨",
        tonight: "今晚",
        morning: "晨重",
        evening: "晚重",
        save: "保存",
        saveWeight: "保存体重",
        date: "2026/09/04 周五",
        logToday: "记录今天",
        rhythm: "三点起伏",
        complete: "今日记录已完成。日升日落，静观变化。",
        entrymorning: "记录晨重",
        notemorning: "晨间 (空腹/排便后)",
        entryevening: "记录晚重",
        noteevening: "晚间 (睡前)",
        backupTitle: "备份已生成",
        backupFile: "加密备份文件",
        encrypted: "加密",
        recordCount: "包含记录",
        records: "180 条体重记录",
        backupTime: "备份时间",
        backupWarning:
          "请务必将此 PNG 图像原图保存或发送至安全的设备。请勿截图保存，不要对其进行文件压缩或格式转换，否则图像内潜藏的数据编码会被破坏。",
        savePhoto: "保存至系统相册",
        restoreTitle: "备份恢复成功",
        restoreCopy: "数据链整合完成，所有历史轴线已对齐。",
        restoreSummary: "恢复摘要汇总",
        restoremorning: "晨重记录数",
        restoremorningValue: "90 条",
        restoreevening: "晚重记录数",
        restoreeveningValue: "90 条",
        restorebody: "身体基本设定",
        restorebodyValue: "身高 170cm / 目标体重 58.0kg",
        goHome: "进入主页",
        thisWeek: "本周",
        thisMonth: "本月",
        chartTitle: "朝夕体重双曲线",
        weekSummary: "本周总结",
        statup: "体重上涨",
        statupValue: "2 天",
        statdown: "体重下降",
        statdownValue: "4 天",
        stataverage: "晨重平均",
        stataverageValue: "62.2 kg",
        statcomparison: "对比上周",
        statcomparisonValue: "−0.2 kg",
        statrange: "晨重波动",
        statrangeValue: "±0.3 kg",
        statrate: "记录完成率",
        statrateValue: "6/7 (86%)",
        trendInsight:
          "本周晨重保持平稳，晚间波动略大。建议继续保持规律作息与晚间睡前平稳记录。",
      },
      common: {
        comingSoon: "即将公开",
      },
      hero: {
        tag: "记录很少，看到的变化更多。",
        title: "每天两个数字，看懂一天、一夜和长期趋势。",
        intro:
          "只记录晨重和晚重，无需注册账号。核心数据完全保存在本机，换设备时用一张加密图片即可完成迁移。",
      },
      trust: {
        account: "无需账号",
        local: "本机安全保存",
        backup: "加密图片备份",
      },
      simplicity: {
        title: "每天只记录两次",
        intro:
          "不需要卡路里输入、繁琐的运动关联或令人焦虑的健康管理。轻触极简数字键，完成晨晚打卡，静静陪伴你的日常生活。",
        morning: "晨间 · 空腹轻盈记录",
        evening: "晚间 · 睡前规律记录",
      },
      cycles: {
        title: "看懂一天，也看懂一夜",
        intro:
          "人体在一天内因为水分、饮食和代谢，体重自然呈现起伏波动态势。朝夕体重引入「当天差额」与「隔夜变化」指标，精准拆解你的代谢律动，而不是单纯堆砌数字。",
        dayTitle: "当天差额（Evening - Morning）",
        dayCopy:
          "日间能量摄入与消耗的比对值。一般正常起伏在 +0.5kg ~ +1.5kg 之间。",
        nightTitle: "隔夜变化（Morning - Previous Evening）",
        nightCopy:
          "夜间基础代谢的镜子。反映睡眠过程中的呼吸、水分蒸发及基础热量燃烧。",
      },
      moments: {
        title: "三个时刻，看见晨晚节律",
        intro:
          "摒弃复杂的图表分析，纯粹以数据的流动连线，直观还原你从昨夜睡前、到今晨空腹、再到今晚休整的真实重力流变。",
        last: "昨晚睡前 (21:30)",
        overnight: "−0.4 kg（隔夜消耗）",
        morning: "今晨空腹 (07:32)",
        daytime: "+0.3 kg（日间增长）",
        night: "今晚睡前 (21:15)",
      },
      scales: {
        title: "记录很少，看到的变化更多",
        intro:
          "不仅关注眼前的一次起伏，更将数据按照微观、中观、宏观的时间标尺科学整理，带你窥见身体深处的稳态。",
        dayTitle: "一天之内",
        dayCopy:
          "关注晨起与夜幕的即时差值。直观展示水盐代谢、饮食结构对当日体重数字的表面投影。",
        dayMetric: "指标：当天差额 (Evening - Morning)",
        nightTitle: "隔夜变化",
        nightCopy:
          "审视睡眠状态下的纯净消耗。反映深层代谢状态与呼吸排毒效率，过滤白天的干扰杂音。",
        nightMetric: "指标：隔夜变化 (Morning - Prev. Eve)",
        longTitle: "一段时间",
        longCopy:
          "过滤单日杂音后的长程双曲线。洞察周、月、季度的中长期体重演进轨迹与体重平稳基线。",
        longMetric: "指标：5日平滑均线 / 长期基准线",
      },
      backup: {
        title: "一张加密图片，完成备份与恢复",
        intro:
          "彻底断绝云端泄露风险。朝夕体重独创的图片编码技术，能将你的全部历史纪录深度隐藏于一张系统相册的普通图片之中。迁移时，只需读取该图，键入口令即可完美重建历史。",
        createCaption: "创建 · 生成加密图片",
        flow: "本地导出图像 → 存入安全介质 → 新设备一键导入",
        restoreCaption: "恢复 · 零云端校验导入",
      },
      trends: {
        title: "不上传，也能看懂趋势",
        intro:
          "所有关于体重走势、均线平滑与差额分析的算法程序全部打包在你的本地设备上运行。不需要服务器，没有网络连接，你依然能享受到精准的数据回馈。",
        point1: "晨重晚重双折线动态对齐，趋势一目了然",
        point2: "基于 5 日加权平滑算法的周期去噪趋势线",
        point3: "自动分析并提示每周打卡漏记补录情况",
        point4: "完全遵循本地数学规则，绝无后台追踪逻辑",
      },
      features: {
        title: "处处克制，依然好用",
        intro:
          "虽自诩极简，却不以牺牲基础功能为代价。我们用贴近日本传统文具的设计语言，重新构思了所有你需要的辅助功能。",
        bmiTitle: "智能 BMI 自动推测",
        bmiCopy:
          "只需在首次启动时轻点身高，每次完成体重记录时，BMI 系统将自动实时联动演算。无冗余页面，即刻掌握健康水位。",
        targetTitle: "理性的目标追踪",
        targetCopy:
          "拒绝不切实际的「急速瘦身」鸡血警报。我们倡导平缓安全的温和增减重管理曲线，支持设定契合身心健康的理性体重界限。",
        historyTitle: "完整历史明细",
        historyCopy:
          "摒弃无意义的折线修饰，以经典的日本文具「理财账簿」卡片形态呈现，清晰规整，指尖滑阅尽显数据井然。",
        remindersTitle: "朝夕独立提醒",
        remindersCopy:
          "清晨起床，暮色沉沉，你可以在不打开系统通知常驻的前提下，设定无打扰的晨晚轻声打卡提醒，守护你的清净生活。",
        languagesTitle: "多语言与单位兼容",
        languagesCopy:
          "完美本地化设计，支持简体中文、日本語、English。支持国际通行的 kg/斤/lb 一键单位随心切换，界面始终对称严谨。",
      },
      privacy: {
        title: "你的数据，由你掌握",
        intro:
          "在健康隐私形同虚设的互联网时代，我们选择退回起点。没有网络上传，没有账号体系。这本朝夕账簿，永远只属于你。",
        accountTitle: "无需注册任何账号",
        accountCopy:
          "不需要绑定手机号、邮箱、微信号或第三方平台。打开即可使用，无个人身份锚定可能。",
        localTitle: "绝对的本地化物理存储",
        localCopy:
          "所有体重记录、历史日志仅保存在你手持的这台物理设备的本地数据库。我们无从知晓你的一字一句。",
        serverTitle: "零远程服务器架构",
        serverCopy:
          "朝夕体重甚至没有建立任何用于承载用户体征数据的开发者云端服务器。根源上阻断黑客泄露风险。",
        trackingTitle: "纯净的应用运行环境",
        trackingCopy:
          "严格拒绝集成任何第三方广告 SDK、用户行为热力图追踪或商业化推广模块。无打扰，不监听。",
      },
      closing: {
        title: "每天两个数字。一张加密图片。",
        intro: "朝夕有序，静观变化。你的身体数据始终牢牢掌握在你自己手中。",
      },
    },
    ja: {
      meta: {
        title: "朝晩体重 — 1日2つの数字で、変化を見守る",
        description:
          "朝晩体重は、毎朝・毎晩の体重を記録するアプリです。全データを1枚の暗号化PNGにバックアップし、別の端末へ引き継げます。アカウント登録、アップロード、クラウドサービスは不要です。",
        descriptionShort:
          "朝と夜の体重、日内差、長期的な推移を、ひとつの見やすいタイムラインに。",
      },
      a11y: {
        skip: "メインコンテンツへスキップ",
        primaryNav: "メインナビゲーション",
        footerNav: "フッターのナビゲーション",
        language: "言語を選択",
        features: "主な機能",
      },
      brand: {
        tagline: "小さなアプリを、ていねいに。",
      },
      product: {
        name: "朝晩体重",
      },
      footer: {
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        contact: "お問い合わせ：",
      },
      nav: {
        support: "サポート",
        features: "主な機能",
        privacy: "データとプライバシー",
        backup: "画像でバックアップ",
      },
      screen: {
        todayAlt:
          "朝晩体重の今日の記録画面。朝と夜の体重、日内差、夜間の変化を表示しています。",
        entryMorningAlt:
          "朝の体重入力画面。入力した体重とテンキーを表示しています。",
        entryEveningAlt:
          "夜の体重入力画面。入力した体重とテンキーを表示しています。",
        backupAlt:
          "暗号化バックアップのプレビュー。記録数、作成日時、PNGを元のファイルのまま保存するための注意事項を表示しています。",
        restoreAlt:
          "バックアップの復元完了画面。復元した朝と夜の記録数、基本情報を表示しています。",
        trendsAlt:
          "週ごとの体重推移の画面。朝と夜の折れ線グラフ、週の集計、記録率を表示しています。",
        today: "今日",
        trends: "推移",
        history: "履歴",
        settings: "設定",
        dayDelta: "日内差",
        overnightDelta: "夜間の変化",
        lastNight: "昨夜",
        thisMorning: "今朝",
        tonight: "今夜",
        morning: "朝",
        evening: "夜",
        save: "保存",
        saveWeight: "体重を保存",
        date: "2026/09/04 金曜日",
        logToday: "今日の記録",
        rhythm: "3つの記録で見る変化",
        complete:
          "今日の記録が完了しました。日々の変化をゆっくり見守りましょう。",
        entrymorning: "朝の体重を記録",
        notemorning: "朝（空腹時／排便後）",
        entryevening: "夜の体重を記録",
        noteevening: "夜（就寝前）",
        backupTitle: "バックアップを作成しました",
        backupFile: "暗号化バックアップ",
        encrypted: "暗号化",
        recordCount: "記録数",
        records: "体重記録 180件",
        backupTime: "作成日時",
        backupWarning:
          "PNGは必ず元のファイルのまま保存するか、安全な端末に転送してください。スクリーンショットでの保存、圧縮、形式の変更はしないでください。画像に埋め込まれたバックアップデータが破損します。",
        savePhoto: "写真ライブラリに保存",
        restoreTitle: "バックアップを復元しました",
        restoreCopy: "すべての記録を復元し、履歴に反映しました。",
        restoreSummary: "復元内容",
        restoremorning: "朝の記録数",
        restoremorningValue: "90件",
        restoreevening: "夜の記録数",
        restoreeveningValue: "90件",
        restorebody: "基本情報",
        restorebodyValue: "身長 170cm / 目標体重 58.0kg",
        goHome: "ホームへ",
        thisWeek: "今週",
        thisMonth: "今月",
        chartTitle: "朝と夜の体重推移",
        weekSummary: "今週のまとめ",
        statup: "増えた日",
        statupValue: "2日",
        statdown: "減った日",
        statdownValue: "4日",
        stataverage: "朝の平均体重",
        stataverageValue: "62.2 kg",
        statcomparison: "先週比",
        statcomparisonValue: "−0.2 kg",
        statrange: "朝の体重の変動幅",
        statrangeValue: "±0.3 kg",
        statrate: "記録率",
        statrateValue: "6/7 (86%)",
        trendInsight:
          "今週は朝の体重が安定しており、夜はやや変動が大きくなっています。規則正しい生活を続け、夜は就寝前に同じ条件で記録しましょう。",
      },
      common: {
        comingSoon: "近日公開",
      },
      hero: {
        tag: "少ない記録で、変化が見えてくる。",
        title: "1日2つの数字で、日中・夜間の変化と長期の傾向がわかる。",
        intro:
          "記録するのは朝と夜の体重だけ。アカウント登録は不要です。データはすべて端末内に保存され、機種変更時も1枚の暗号化画像で引き継げます。",
      },
      trust: {
        account: "アカウント不要",
        local: "端末内で安全に保存",
        backup: "暗号化画像でバックアップ",
      },
      simplicity: {
        title: "記録は1日2回、朝と夜だけ",
        intro:
          "カロリーの入力も、面倒な運動データの連携も必要ありません。健康管理に追われることなく、テンキーで朝と夜の体重をさっと記録。いつもの暮らしの中で、無理なく続けられます。",
        morning: "朝・空腹時にさっと記録",
        evening: "夜・寝る前の記録を習慣に",
      },
      cycles: {
        title: "日中の変化も、一晩の変化も",
        intro:
          "体重は、水分や食事、代謝によって1日の中でも自然に変動します。朝晩体重は「日内差」と「夜間の変化」を分けて表示。数字を並べるだけでなく、日々の代謝のリズムをわかりやすく捉えます。",
        dayTitle: "日内差（夜 − 朝）",
        dayCopy:
          "日中のエネルギー摂取量と消費量を比べる目安です。通常の変動幅は+0.5kg〜+1.5kgです。",
        nightTitle: "夜間の変化（朝 − 前夜）",
        nightCopy:
          "睡眠中の基礎代謝を知る目安です。呼吸、水分の蒸発、生命維持に必要なエネルギー消費による変化を反映します。",
      },
      moments: {
        title: "3つの記録で、朝と夜のリズムが見える",
        intro:
          "複雑なグラフを読み解かなくても、3つの記録をつなぐだけ。昨夜の就寝前、今朝の空腹時、今夜の就寝前までの体重の変化が、ひと目でわかります。",
        last: "昨夜の就寝前（21:30）",
        overnight: "−0.4 kg（夜間の減少）",
        morning: "今朝の空腹時（07:32）",
        daytime: "+0.3 kg（日中の増加）",
        night: "今夜の就寝前（21:15）",
      },
      scales: {
        title: "少ない記録で、変化が見えてくる",
        intro:
          "目の前の変動だけでなく、1日、一晩、長期という3つの時間軸でデータを整理。身体が保つバランスを、短期と長期の両面から見ていきます。",
        dayTitle: "1日の中で",
        dayCopy:
          "朝から夜までの体重差に注目。水分や塩分の代謝、食事の内容が、その日の体重にどう表れるかを確認できます。",
        dayMetric: "指標：日内差（夜 − 朝）",
        nightTitle: "夜間の変化",
        nightCopy:
          "日中の活動による影響を除き、睡眠中の体重の減少に注目。身体の代謝の状態や、呼吸による老廃物の排出効率を見ていきます。",
        nightMetric: "指標：夜間の変化（朝 − 前夜）",
        longTitle: "長期の変化",
        longCopy:
          "日々の変動をならした朝と夜のグラフで、週・月・四半期ごとの傾向を確認。中長期の変化と、普段の体重の目安が見えてきます。",
        longMetric: "指標：5日間の移動平均／長期の基準線",
      },
      backup: {
        title: "1枚の暗号化画像で、バックアップも復元も",
        intro:
          "クラウドからのデータ漏えいを防ぐため、バックアップも手元で管理。朝晩体重独自の画像エンコード技術で、すべての履歴を写真ライブラリの1枚の画像に埋め込みます。機種変更時は、元の画像を読み込んでパスフレーズを入力するだけで、全履歴を復元できます。",
        createCaption: "作成・暗号化画像に保存",
        flow: "端末から書き出し → 安全な場所に保存 → 新しい端末にワンタップで読み込み",
        restoreCaption: "復元・クラウドを使わず検証・読み込み",
      },
      trends: {
        title: "アップロードせずに、推移がわかる",
        intro:
          "体重の推移、移動平均、差の分析は、すべて端末内で処理します。サーバーもネット接続も不要。オフラインでも、記録に基づいた正確な分析結果を確認できます。",
        point1: "朝と夜の折れ線グラフを同じ時間軸で比較",
        point2: "5日間の加重平均で、日々の変動をならして表示",
        point3:
          "週ごとの記録状況を自動で確認し、入力漏れや追記の状況をお知らせ",
        point4: "計算はすべて端末内で処理。バックグラウンドでの行動追跡なし",
      },
      features: {
        title: "シンプルで、必要な機能はしっかり",
        intro:
          "シンプルさを追求しても、基本機能は省きません。日本の伝統的な文具を思わせるデザインで、日々の記録に必要な機能を使いやすく整えました。",
        bmiTitle: "BMIを自動計算",
        bmiCopy:
          "最初に身長を設定すれば、体重を記録するたびにBMIを自動計算。余分な画面を開かずに、その場で確認できます。",
        targetTitle: "無理のない目標管理",
        targetCopy:
          "急激な減量をあおる通知はありません。心身の健康を考えた目標体重を設定し、増量も減量も安全で無理のないペースを目指します。",
        historyTitle: "過去の記録を一覧で",
        historyCopy:
          "余分なグラフの装飾を省き、日本の帳簿を思わせるカード形式で記録を整理。毎日の体重を、スクロールしながらすっきりと振り返れます。",
        remindersTitle: "朝と夜に、別々のリマインダー",
        remindersCopy:
          "通知の常時表示は不要です。朝と夜に、控えめなリマインダーをそれぞれ設定できます。日々の暮らしを邪魔せず、記録の習慣をそっと支えます。",
        languagesTitle: "3つの言語と、選べる単位",
        languagesCopy:
          "簡体字中国語・日本語・英語に対応。kg・斤・lbはワンタップで切り替えられ、どの言語や単位でも、整った見やすいレイアウトで使えます。",
      },
      privacy: {
        title: "データは、自分の手元に",
        intro:
          "健康に関する情報も、ネット上では守りにくい時代。だからこそ、仕組みはシンプルに。アップロードもアカウントも不要です。朝と夜の記録は、ずっと自分だけのもの。",
        accountTitle: "アカウント登録は不要",
        accountCopy:
          "電話番号やメールアドレス、WeChatなどの外部サービスとの連携は不要。個人を特定するアカウントに紐づけず、開いてすぐに使えます。",
        localTitle: "記録は端末内に保存",
        localCopy:
          "体重や過去の記録は、手元の端末のデータベースにだけ保存されます。開発者がその内容を見ることはできません。",
        serverTitle: "データを預かるサーバーなし",
        serverCopy:
          "朝晩体重には、身体に関するデータを保管する開発者側のクラウドサーバーがありません。サーバーへの不正アクセスによるデータ流出を防ぐ仕組みです。",
        trackingTitle: "広告も、行動追跡もなし",
        trackingCopy:
          "第三者の広告SDK、操作履歴を追うヒートマップ、販促機能は組み込んでいません。行動を追跡せず、静かに使える環境を保ちます。",
      },
      closing: {
        title: "1日2つの数字。1枚の暗号化画像。",
        intro:
          "朝と夜の記録を習慣に、日々の変化をゆっくり見守る。体重データは、いつも自分の手元に。",
      },
    },
    en: {
      meta: {
        title: "Daily Weight — Two numbers a day. A clearer picture.",
        description:
          "Log your weight once each morning and evening with Daily Weight. Back up all your data and move it between devices with a single encrypted PNG. No account, uploads, or cloud service needed.",
        descriptionShort:
          "Morning and evening weight, daytime changes, and long-term trends in one clear timeline.",
      },
      a11y: {
        skip: "Skip to main content",
        primaryNav: "Primary navigation",
        footerNav: "Footer navigation",
        language: "Choose language",
        features: "Key features",
      },
      brand: {
        tagline: "Small apps, thoughtfully made.",
      },
      product: {
        name: "Daily Weight",
      },
      footer: {
        privacy: "Privacy policy",
        terms: "Terms of use",
        contact: "Contact: ",
      },
      nav: {
        support: "Support",
        features: "Features",
        privacy: "Data & privacy",
        backup: "Image backups",
      },
      screen: {
        todayAlt:
          "Daily Weight’s Today screen, showing morning and evening weight, daytime change, and overnight change.",
        entryMorningAlt:
          "Morning weigh-in screen with a weight entry and number pad.",
        entryEveningAlt:
          "Evening weigh-in screen with a weight entry and number pad.",
        backupAlt:
          "Encrypted backup preview showing the number of entries, creation time, and instructions for saving the original PNG.",
        restoreAlt:
          "Backup restored screen showing the restored morning and evening entries and profile settings.",
        trendsAlt:
          "Weekly trends screen with morning and evening weight charts, weekly statistics, and logging progress.",
        today: "Today",
        trends: "Trends",
        history: "History",
        settings: "Settings",
        dayDelta: "Daytime change",
        overnightDelta: "Overnight change",
        lastNight: "Last night",
        thisMorning: "This morning",
        tonight: "Tonight",
        morning: "Morning",
        evening: "Evening",
        save: "Save",
        saveWeight: "Save weight",
        date: "Fri, Sep 4, 2026",
        logToday: "Today’s weigh-ins",
        rhythm: "Three weigh-ins",
        complete:
          "Today’s weigh-ins are saved. See how your weight changes over time.",
        entrymorning: "Log morning weight",
        notemorning: "Morning · empty stomach / after a bowel movement",
        entryevening: "Log evening weight",
        noteevening: "Evening · before bed",
        backupTitle: "Backup created",
        backupFile: "Encrypted backup file",
        encrypted: "Encrypted",
        recordCount: "Records",
        records: "180 weight entries",
        backupTime: "Created",
        backupWarning:
          "Save the original PNG or transfer it to a secure device. Do not save a screenshot, compress the file, or change its format. These changes will damage the backup data stored in the image.",
        savePhoto: "Save to Photos",
        restoreTitle: "Backup restored",
        restoreCopy:
          "All your records have been restored and your history is complete.",
        restoreSummary: "Restore summary",
        restoremorning: "Morning entries",
        restoremorningValue: "90 entries",
        restoreevening: "Evening entries",
        restoreeveningValue: "90 entries",
        restorebody: "Profile settings",
        restorebodyValue: "Height 170 cm / Goal 58.0 kg",
        goHome: "Home",
        thisWeek: "This week",
        thisMonth: "This month",
        chartTitle: "Morning & evening weight",
        weekSummary: "Weekly summary",
        statup: "Weight up",
        statupValue: "2 days",
        statdown: "Weight down",
        statdownValue: "4 days",
        stataverage: "Avg. morning weight",
        stataverageValue: "62.2 kg",
        statcomparison: "Vs. last week",
        statcomparisonValue: "−0.2 kg",
        statrange: "Morning variation",
        statrangeValue: "±0.3 kg",
        statrate: "Completion rate",
        statrateValue: "6/7 (86%)",
        trendInsight:
          "Morning weight was steady this week, with slightly more variation in the evening. Keep a consistent daily routine and log your evening weight under the same conditions before bed.",
      },
      common: {
        comingSoon: "Coming soon",
      },
      hero: {
        tag: "Less to log. More to see.",
        title:
          "Two numbers a day. See daytime and overnight changes, plus long‑term trends.",
        intro:
          "Just log your morning and evening weight. No account needed. All your data stays on your device, and one encrypted image is all you need to move it to a new one.",
      },
      trust: {
        account: "No account",
        local: "Stored securely on your device",
        backup: "Encrypted image backup",
      },
      simplicity: {
        title: "Just two entries a day",
        intro:
          "No calorie counting, complicated workout integrations, or stressful health tracking. Enter your weight on a simple number pad each morning and evening, and get on with your day.",
        morning: "Morning · a quick weigh-in on an empty stomach",
        evening: "Evening · a regular weigh-in before bed",
      },
      cycles: {
        title: "See what changes during the day and overnight",
        intro:
          "Your weight naturally fluctuates throughout the day with hydration, food, and metabolism. Daily Weight separates daytime and overnight changes to help you understand your body’s metabolic rhythm, rather than just collect numbers.",
        dayTitle: "Daytime change (Evening − Morning)",
        dayCopy:
          "A guide to the balance between the energy you take in and burn during the day. Typical fluctuations range from +0.5kg to +1.5kg.",
        nightTitle: "Overnight change (Morning − Previous evening)",
        nightCopy:
          "A view of your resting metabolism during sleep, reflecting breathing, water evaporation, and the calories your body burns to keep functioning.",
      },
      moments: {
        title: "Three weigh-ins show your daily rhythm",
        intro:
          "Three connected readings show how your weight changes: before bed last night, on an empty stomach this morning, and before bed tonight. No complicated chart to interpret.",
        last: "Last night, before bed (21:30)",
        overnight: "−0.4 kg (overnight loss)",
        morning: "This morning, on an empty stomach (07:32)",
        daytime: "+0.3 kg (daytime gain)",
        night: "Tonight, before bed (21:15)",
      },
      scales: {
        title: "Less to log. More to see.",
        intro:
          "Look beyond a single fluctuation. See how your body maintains its balance with records organized by daytime, overnight, and long-term changes.",
        dayTitle: "Within a day",
        dayCopy:
          "Compare morning and evening weight to see how your water and salt balance and eating habits affect the day’s reading.",
        dayMetric: "Measure: daytime change (evening − morning)",
        nightTitle: "Overnight",
        nightCopy:
          "Look at weight lost during sleep to understand your underlying metabolism and how efficiently your body removes waste through breathing, without the fluctuations of the day.",
        nightMetric: "Measure: overnight change (morning − previous evening)",
        longTitle: "Over time",
        longCopy:
          "Morning and evening trend lines smooth out daily fluctuations. See your weight patterns and usual baseline over weeks, months, and quarters.",
        longMetric: "Measure: 5-day smoothed average / long-term baseline",
      },
      backup: {
        title: "Back up and restore with one encrypted image",
        intro:
          "Back up without the risk of a cloud data leak. Daily Weight’s own image-encoding technology stores your entire history inside a single image in your photo library. On a new device, open the original image and enter your passphrase to restore all your records.",
        createCaption: "Back up · save an encrypted image",
        flow: "Export from your device → store safely → import on a new device with a tap",
        restoreCaption: "Restore · verify and import without the cloud",
      },
      trends: {
        title: "Understand your trends without uploading data",
        intro:
          "Weight trends, smoothed averages, and change calculations all run on your device. No server or internet connection is needed for accurate insights from your records.",
        point1: "Compare morning and evening weight on the same timeline",
        point2: "A 5-day weighted average smooths daily fluctuations",
        point3:
          "Automatic weekly checks highlight missed entries and entries added later",
        point4: "All calculations stay on your device. No background tracking",
      },
      features: {
        title: "Simple, with the essentials covered",
        intro:
          "A simple app should still have the features you need. Inspired by traditional Japanese stationery, these everyday tools are designed to be clear and easy to use.",
        bmiTitle: "Automatic BMI calculation",
        bmiCopy:
          "Set your height when you first open the app. Your BMI updates automatically with each weight entry, so you can check it right away without opening another screen.",
        targetTitle: "Realistic weight goals",
        targetCopy:
          "No alerts pushing unrealistic, rapid weight loss. Set a goal that supports your physical and mental well-being, and work toward it with gradual, safe weight gain or loss.",
        historyTitle: "Your complete history",
        historyCopy:
          "Clear, ledger-style cards inspired by Japanese account books keep your full history organized, without unnecessary chart decorations. Scroll through to review any day’s entries.",
        remindersTitle: "Morning and evening reminders",
        remindersCopy:
          "Set separate morning and evening reminders, with no need for a persistent notification. Gentle alerts help you remember to log without disrupting your routine.",
        languagesTitle: "Languages and units",
        languagesCopy:
          "Available in Simplified Chinese, Japanese, and English. Switch between kg, jin, and lb with a tap. The layout stays clear and consistent in every language and unit.",
      },
      privacy: {
        title: "Your data stays yours",
        intro:
          "Health data can be hard to keep private online. We keep things simple: no uploads and no accounts. Your morning and evening weight journal belongs to you alone.",
        accountTitle: "No account to create",
        accountCopy:
          "No phone number, email address, WeChat account, or other sign-in required. Open the app and start using it without linking your records to an identity.",
        localTitle: "Records stay on your device",
        localCopy:
          "Your weight entries and history are stored only in the database on your device. We have no access to what you record.",
        serverTitle: "No servers storing your data",
        serverCopy:
          "Daily Weight has no developer-run cloud servers storing your body measurements, so there’s no server copy to expose in a breach.",
        trackingTitle: "No ads or behavioral tracking",
        trackingCopy:
          "No third-party ad SDKs, heatmaps that track how you use the app, or promotional features. Nothing to interrupt you or monitor your activity.",
      },
      closing: {
        title: "Two numbers a day. One encrypted image.",
        intro:
          "Make morning and evening logging a habit, and watch the changes over time. Your weight data stays under your control.",
      },
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

    document.querySelectorAll("button[data-locale]").forEach((button) => {
      const active = button.dataset.locale === nextLocale;
      button.classList.toggle("is-active", active);
      if (button.hasAttribute("aria-pressed")) button.setAttribute("aria-pressed", String(active));
    });


    renderLegalDocument();

    if (shouldSave) saveLocale(nextLocale);
  };

  document.addEventListener("DOMContentLoaded", () => {
    setupLegalModal();
    applyLocale(detectLocale());

    const requestedLegalDocument = new URLSearchParams(window.location.search).get("legal");
    if (requestedLegalDocument === "privacy" || requestedLegalDocument === "terms") {
      openLegalModal(requestedLegalDocument, null);
    }

    document.querySelectorAll("button[data-locale]").forEach((button) => {
      button.addEventListener("click", () => applyLocale(button.dataset.locale, true));
    });
  });
})();
