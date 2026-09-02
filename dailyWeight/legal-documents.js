(() => {
  "use strict";

  globalThis.DAILY_WEIGHT_LEGAL_DOCUMENTS = {
    "zh-CN": {
      "title": "隐私政策与使用条款",
      "close": "关闭",
      "privacyTab": "隐私政策",
      "termsTab": "使用条款",
      "effectiveDate": "生效日期：2026年9月2日",
      "privacy": [
        {
          "title": "提供者、适用范围与联系方式",
          "body": "朝夕体重（“App”）及其公开产品页面 https://appdock.link/dailyWeight/（“网站”），由应用商店商品页所列的个人销售者或开发者运营，并使用 AppDock.link 作为运营名称（“开发者”）。本政策说明 App 在本机进行的数据处理，以及你访问网站或联系支持时可能发生的有限数据处理。联系方式：support@appdock.link。"
        },
        {
          "title": "保存在本机的数据",
          "body": "App 会在其沙盒内的本机 SQLite 数据库中保存：晨间与晚间体重数值、每条记录的日期和时段、保存时间、目标体重、显示单位、晨间/晚间提醒是否开启及其时间，以及新手引导完成状态。图表、比较结果和目标进度由这些数据计算得出。根据你的设置，操作系统可能会把该数据库包含在设备备份中。"
        },
        {
          "title": "本机处理与用途",
          "body": "App 仅为以下目的在本机处理数据：保存、显示、编辑和删除记录；计算图表、比较结果和目标进度；安排提醒；以及按你的请求创建、验证和恢复备份。为完成格式化、定时、权限和无障碍功能，App 还会按需读取当前日期与时间、系统语言区域和日历时区、通知及照片权限状态，以及“减少动态效果”偏好。这些信息不会发送给开发者。"
        },
        {
          "title": "App 不传输的数据",
          "body": "除你自行选择通过支持邮件发送的信息外，开发者不会通过 App 接收个人数据。App 不会上传体重记录、设置、备份图片或口令，不会创建账号或获取远程推送令牌，也未接入广告、追踪、分析或崩溃报告服务。开发者不会出售个人数据，也不会披露支持数据，但处理请求所必需的服务商、依你的指示或法律要求披露的情形除外。"
        },
        {
          "title": "通知与照片权限",
          "body": "你开启提醒后，App 会请求通知权限，并在设备上按你选择的时间安排每日本地通知。通知不经过服务器，也不包含体重数据。保存备份时，App 会请求向系统相册添加图片的权限；恢复时会打开系统图片选择器，App 只会取得你选中的图片以及验证文件所需的基本信息。在部分 Android 版本中，操作系统可能因兼容需要显示媒体或存储权限。App 不会扫描或上传你的相册。你可以在系统设置中撤回权限，但相关功能可能因此无法使用。"
        },
        {
          "title": "加密备份图片",
          "body": "备份 PNG 包含全部本机记录和设置，包括记录日期与时间；它会在设备上使用由你所设 12–128 个字符口令派生的密钥进行加密。口令仅在操作期间暂存于内存，不会保存或上传；App 会尽力从缓存中移除临时备份文件。当前密钥派生方式侧重处理速度，如果他人取得 PNG，并不适合抵御长时间的离线口令猜测，因此请使用足够长、唯一且不可预测的口令。编辑、压缩、转换或截图可能导致 PNG 无法恢复。经你确认后，恢复会替换现有的全部本机记录和设置。备份一旦被保存、分享或复制到其他服务，即由相应系统或服务按照其设置和政策处理。"
        },
        {
          "title": "网站访问与支持邮件",
          "body": "网站会在浏览器的本地存储中保存语言偏好，不提供账号或提交表单，也未接入广告、行为追踪或分析脚本。网站由 GitHub Pages 托管；GitHub 说明其会为安全目的记录访问者 IP 地址，并可能依其隐私声明处理浏览器、设备、请求和使用信息。如果你向支持邮箱发送邮件，开发者及相关邮件服务商会收到你的邮箱地址、邮件内容、附件和通常的投递元数据。除非解决问题确有必要且你理解相关风险，请勿发送体重记录、备份 PNG 或口令。"
        },
        {
          "title": "处理目的、服务商与跨境传输",
          "body": "支持信息仅用于回复你的请求、排查问题、保护 App 与网站、遵守法律，以及提出、行使或抗辩法律请求。根据适用法律，处理依据可能是你的请求或同意、履行法定义务，或支持与安全方面的合法利益。应用商店、操作系统、照片或云服务、文件传输工具、GitHub Pages、网络服务商和邮件服务商，会按照各自条款与政策独立处理数据，其处理可能发生在你所在国家或地区之外。开发者不会将网站或支持数据用于定向广告，也不会出售这些数据。"
        },
        {
          "title": "保留与删除",
          "body": "本机数据会保留到你编辑或删除某一天的记录、卸载 App，或通过操作系统清除 App 数据；App 目前没有一键删除全部数据的按钮。设备备份副本由操作系统控制，即使 App 数据已清除也可能继续存在。保存在其他位置的备份 PNG 必须另行删除。网站语言偏好会保留到你清除浏览器网站数据。支持邮件仅在回复请求、维护安全、解决争议及履行法律义务所合理需要的期间内保留；服务商日志按其自身保留规则处理。开发者没有 App 本机数据的服务器副本，因此无法替你找回或远程删除该等数据。"
        },
        {
          "title": "安全措施",
          "body": "App 本机数据受操作系统的应用沙盒和你的设备安全措施保护；SQLite 数据库没有由 App 另行加密。备份 PNG 使用经认证加密，但面对设备被攻破、弱口令或未来攻击时，加密并不能绝对保证保密性。任何存储或传输方式都无法保证百分之百安全。请保护好设备，保持原始 PNG 未经修改，并将口令与图片分开且保密保存。"
        },
        {
          "title": "儿童与未成年人的隐私",
          "body": "App 不询问年龄，也不创建账号。在适用法律要求的情况下，未成年人应在父母或监护人监督下使用。如果开发者得知儿童通过支持联系或网站提交了依法需要监护人同意或删除的个人数据，父母或监护人可通过 support@appdock.link 联系我们。"
        },
        {
          "title": "你的选择与隐私权利",
          "body": "你可以在 App 内查看和更正本机数据、删除所选日期的记录、创建加密导出，也可以使用操作系统的清除数据功能或卸载 App 来删除当前已安装 App 中持有的全部数据。你可以在系统设置中撤回通知或照片权限，但这不会删除已经生成的图片或设备备份。根据你所在地区的法律，对于开发者实际持有的网站或支持数据，你可能享有访问、更正、删除、限制处理、反对、数据可携、撤回同意或向监管机构投诉等权利。请发送邮件至 support@appdock.link 行使适用权利；我们可能需要核实身份。这些权利不会使开发者取得其本来并不持有的 App 本机数据。"
        },
        {
          "title": "政策更新与联系",
          "body": "App 和网站会显示本政策的现行文本与生效日期。如果数据处理方式发生变化，开发者将更新本政策；在法律要求时，还会在变更生效前通过网站、App、应用商店或其他合理渠道通知你，并在开展新的处理前取得同意。问题或隐私请求可发送至 support@appdock.link。"
        }
      ],
      "terms": [
        {
          "title": "接受与适用范围",
          "body": "朝夕体重由应用商店商品页所列的个人销售者或开发者运营，并使用 AppDock.link 作为运营名称（“开发者”）。在有机会查阅本条款后下载、安装或使用 App，即表示你在适用法律认可的范围内同意本条款；如不同意，请勿使用。适用法律的强制规定和应用商店标准最终用户许可条款也同时适用。如果你不能独立作出有效同意，仅可在父母或法定监护人授权下使用。"
        },
        {
          "title": "App 提供的功能",
          "body": "App 提供个人晨间与晚间体重记录、比较结果与趋势展示、目标进度、本地提醒，以及加密 PNG 的备份与恢复功能，仅供个人非商业用途。App 不提供账号、由开发者运营的云同步、公开发布、用户生成内容信息流、消息或其他用户间互动功能。"
        },
        {
          "title": "不构成医疗建议",
          "body": "App 不是医疗器械，不用于诊断、治疗、预防或监测任何疾病，也不提供医疗、营养或紧急建议。记录、计算结果、目标、比较结果和趋势可能不完整或不准确，仅供个人一般参考。请勿因 App 延误或替代专业诊疗；涉及健康问题或决定时，请咨询合格的专业人士，紧急情况下请联系当地急救服务。"
        },
        {
          "title": "你的责任",
          "body": "你应对自己选择的记录与目标、设备安全和兼容性、依赖结果前的核对、已启用功能所需权限的维护，以及按自身需要保存独立记录负责；你还应遵守适用法律并妥善控制设备访问。"
        },
        {
          "title": "口令、备份与恢复",
          "body": "开发者无法找回遗忘的口令，也无法在没有可用备份时恢复本机数据。请使用足够长、唯一且不可预测的口令，并与原始 PNG 分开保管。当前基于口令的密钥派生方式侧重处理速度，无法阻止他人对弱口令进行离线猜测。请保持原始 PNG 未经编辑，验证重要备份，并视需要保留多个副本。恢复会替换现有的全部记录和设置，且无法撤销。未来的 App 或操作系统变更可能影响兼容性，因此任何备份方式都不能保证永久可用。"
        },
        {
          "title": "许可与知识产权",
          "body": "在遵守本条款的前提下，开发者授予你一项有限、个人、非独占、不可转让且不可再许可的许可，允许你在自己控制的设备上为个人非商业目的安装和使用 App。App、品牌、设计和原创内容仍归各自权利人所有；第三方或开源组件受其各自许可约束。本条款不授予你使用 AppDock.link 名称或标志的权利。"
        },
        {
          "title": "禁止行为",
          "body": "你不得违法复制、再分发、出售、出租、再许可或商业利用 App；不得绕过安全或技术限制，干扰 App、设备或其他服务，引入恶意代码，利用 App 违反法律或侵害第三方权利；除适用法律或相关开源许可明确允许外，不得对 App 进行逆向工程或修改。你也不得虚假表示与开发者存在关联或获得其认可。"
        },
        {
          "title": "应用商店与第三方服务",
          "body": "应用商店、操作系统、设备、系统相册、云备份或文件传输服务、邮件服务商、GitHub Pages 及外部链接均由第三方运营，并适用其各自条款与政策。你应自行审阅所选择的服务。除法律不得排除的责任外，开发者不对独立第三方负责。适用的应用商店可依据其标准许可条款享有第三方受益人权利。"
        },
        {
          "title": "更新、可用性与停止提供",
          "body": "开发者可因技术、安全、法律或业务原因修复、更新、变更 App，暂停分发或停止提供 App；在合理可行且法律要求时，会提前通知。开发者不承诺永久提供、持续更新或支持 App，也不保证兼容每一设备、操作系统版本或所有历史备份格式。由于 App 没有账号或业务服务器，开发者无法远程清除你的本机数据；卸载或清除数据由你操作。因超出合理控制范围的事件导致延迟，不产生责任，但法律另有强制规定的除外。"
        },
        {
          "title": "免责声明",
          "body": "在法律允许的最大范围内，App 按“现状”和“可提供”状态提供。开发者不保证 App 不间断或无错误运行、完全准确、适合特定健康或其他目的、不含有害组件、不会丢失数据，或备份及恢复一定成功。本条不排除强制性消费者保护法不允许排除的任何保证或救济。"
        },
        {
          "title": "责任限制",
          "body": "本条款不排除或限制因欺诈、故意或重大过失、死亡或人身伤害产生的责任，也不排除或限制法律不允许排除或限制的其他责任。对于一般过失，仅在法律允许时，开发者只对直接、通常且可合理预见的损失负责，不对间接、附带、特殊、惩罚性或后果性损失，或利润与机会损失负责。任何条款均不限制消费者不可放弃的救济。法律分配责任时，可能会考虑用户是否妥善保护设备、口令或备份。"
        },
        {
          "title": "第三方索赔",
          "body": "在适用法律允许的范围内，如果你故意或过失违反本条款、法律或第三方权利，并因此导致第三方向开发者提出索赔，你应对由该行为造成的合理直接损失和费用负责。因开发者原因造成的部分不适用本条，且本条不会减少消费者不可放弃的权利。"
        },
        {
          "title": "终止使用",
          "body": "你可以随时停止使用并卸载 App，以终止本条款。如果你严重违反本条款，相关许可可以终止，但仍应遵守法律要求的通知或补救权。App 没有可由开发者暂停的账号，开发者也无法远程删除你的本机数据或备份图片。依其性质应在终止后继续有效的知识产权、责任、争议及一般条款仍然有效。"
        },
        {
          "title": "条款变更",
          "body": "只有在变更有利于用户，或结合本条款目的、必要性、相称性及相关情况判断为合理，或法律另行允许时，开发者才会变更本条款。修订文本与生效日期会在生效前发布于 App 和网站；法律要求时还会另行通知或取得同意。如果不接受变更，请在其生效前停止使用 App。继续使用仅在适用法律允许的范围内构成接受。"
        },
        {
          "title": "适用法律与争议",
          "body": "本条款适用依据强制性法律选择规则确定的法律。争议可向依适用法律具有管辖权的法院提起。本条款不会剥夺消费者依法不可放弃的强制保护或管辖地。在提起争议前，你与开发者应先通过 support@appdock.link 善意尝试解决，但这不会延误或限制紧急救济或任何不可放弃的权利。"
        },
        {
          "title": "一般条款与联系",
          "body": "本条款与适用的应用商店条款共同构成管理 App 的协议；隐私政策说明数据处理方式，强制性法律规定始终适用。某一条款无法执行时，其余条款仍然有效，且仅在法律允许的最小范围内调整该条款。未执行某项权利不构成放弃。开发者可随 App 或相关业务一并转让本条款，但须履行法定通知义务且不得减少强制性权利；你仅可在法律允许时转让许可。标题仅为阅读方便。问题可发送至 support@appdock.link。"
        }
      ]
    },
    "ja": {
      "title": "プライバシーポリシー・利用規約",
      "close": "閉じる",
      "privacyTab": "プライバシーポリシー",
      "termsTab": "利用規約",
      "effectiveDate": "施行日：2026年9月2日",
      "privacy": [
        {
          "title": "提供者、適用範囲、お問い合わせ先",
          "body": "「朝晩体重」（以下「本アプリ」）および公開プロダクトページ https://appdock.link/dailyWeight/（以下「本サイト」）は、アプリストアの商品ページに表示される個人の販売者またはデベロッパが、AppDock.linkを運営上の名称として提供します（以下「開発者」）。本ポリシーは、本アプリ内の端末上での処理と、本サイトの利用またはサポートへの連絡時に生じ得る限定的なデータ処理を説明します。お問い合わせ先：support@appdock.link。"
        },
        {
          "title": "端末内に保存されるデータ",
          "body": "本アプリは、端末のアプリ専用領域にあるSQLiteデータベースへ、朝・夜の体重、各記録の日付と区分、保存時刻、目標体重、表示単位、朝・夜のリマインダーの有効状態と時刻、および初期設定の完了状態を保存します。グラフ、比較結果、目標の進捗は、これらのデータから計算されます。端末の設定によっては、OSの端末バックアップにデータベースが含まれることがあります。"
        },
        {
          "title": "端末内での処理と利用目的",
          "body": "本アプリは、記録の保存・表示・編集・削除、グラフ・比較結果・目標進捗の計算、リマインダーの設定、および利用者の操作によるバックアップの作成・検証・復元のためだけに、ローカルデータを処理します。また、表示形式、通知時刻、権限、アクセシビリティに必要な範囲で、現在の日時、システムの言語・地域とカレンダーのタイムゾーン、通知・写真の権限状態、「視差効果を減らす」設定を参照します。これらは開発者へ送信されません。"
        },
        {
          "title": "本アプリが送信しないデータ",
          "body": "利用者がサポートメールで自ら送信する情報を除き、開発者が本アプリを通じて個人データを受け取ることはありません。本アプリは、体重記録、設定、バックアップ画像、パスフレーズをアップロードせず、アカウントの作成、リモートプッシュ通知用トークンの取得、広告、トラッキング、アクセス解析、クラッシュレポートも行いません。開発者は個人データを販売せず、問い合わせ処理に必要な事業者、利用者の指示、または法令上必要な場合を除き、サポートデータを開示しません。"
        },
        {
          "title": "通知と写真の権限",
          "body": "リマインダーを有効にすると、本アプリは通知の許可を求め、選択した時刻のローカル通知を毎日端末内で設定します。通知はサーバーを経由せず、体重データも含みません。バックアップの保存時には写真ライブラリへ画像を追加する権限を求め、復元時にはOSの写真選択画面を開きます。本アプリが受け取るのは、利用者が選択した画像と検証に必要な基本的なファイル情報だけです。Androidの一部のバージョンでは、互換性のためメディアまたはストレージの権限がOSに表示される場合があります。本アプリは写真ライブラリを走査またはアップロードしません。権限はOSの設定から取り消せますが、関連機能が動作しなくなることがあります。"
        },
        {
          "title": "暗号化バックアップ画像",
          "body": "バックアップPNGには、記録日時を含むすべてのローカル記録と設定が含まれ、利用者が設定した12～128文字のパスフレーズから生成した鍵で端末内において暗号化されます。パスフレーズは処理中に限りメモリ上に保持され、保存もアップロードもされません。一時バックアップファイルは、可能な範囲で本アプリのキャッシュから削除されます。現在の鍵生成処理は速度を重視しており、第三者がPNGを取得した場合の長時間のオフライン推測攻撃に耐えることを目的としていません。長く、他と使い回さず、推測されにくいパスフレーズを使用してください。PNGの編集、圧縮、形式変換、スクリーンショットは復元不能の原因になります。確認後に復元すると、現在のすべてのローカル記録と設定が置き換わります。保存、共有、または他のサービスへ複製した後のバックアップは、そのOSまたはサービスの設定とポリシーに従って取り扱われます。"
        },
        {
          "title": "本サイトの閲覧とサポートメール",
          "body": "本サイトは、ブラウザのローカルストレージに言語設定を保存します。アカウント、送信フォーム、広告、行動追跡、アクセス解析スクリプトはありません。本サイトはGitHub Pagesでホストされています。GitHubは、セキュリティのため訪問者のIPアドレスを記録し、同社のプライバシーステートメントに従ってブラウザ、端末、リクエスト、利用状況の情報を処理する場合があると説明しています。サポートへメールを送ると、開発者と関係するメール事業者が、メールアドレス、本文、添付ファイル、通常の配信メタデータを受け取ります。問い合わせに必要であり、そのリスクを理解している場合を除き、体重記録、バックアップPNG、パスフレーズを送らないでください。"
        },
        {
          "title": "利用目的、事業者、国外処理",
          "body": "サポート情報は、問い合わせへの回答、問題調査、本アプリと本サイトの保護、法令遵守、および法的請求の主張・行使・防御のためにのみ利用します。適用法に応じて、処理の根拠は利用者の依頼または同意、法的義務の履行、あるいはサポートとセキュリティに関する正当な利益です。アプリストア、OS、写真・クラウドサービス、ファイル転送ツール、GitHub Pages、ネットワーク事業者、メール事業者は、それぞれの規約とポリシーに基づき独立してデータを処理し、その処理が利用者の国・地域外で行われる場合があります。開発者は、本サイトまたはサポートのデータをターゲティング広告に利用せず、販売もしません。"
        },
        {
          "title": "保存期間と削除",
          "body": "端末内のデータは、該当日の記録を編集または削除する、本アプリをアンインストールする、またはOSからアプリデータを消去するまで保存されます。現在、本アプリ内に全データを一括削除する操作はありません。OSが管理する端末バックアップの複製は、アプリデータの消去後も残る場合があります。別の場所に保存したバックアップPNGは個別に削除してください。本サイトの言語設定は、ブラウザのサイトデータを消去するまで残ります。サポートメールは、回答、セキュリティ維持、紛争解決、法的義務に合理的に必要な期間だけ保持し、事業者のログには当該事業者の保存規則が適用されます。開発者は本アプリのローカルデータをサーバーに保有しないため、その復旧または遠隔削除はできません。"
        },
        {
          "title": "安全管理",
          "body": "本アプリのローカルデータは、OSのアプリ専用領域と利用者の端末セキュリティによって保護されます。SQLiteデータベースは、本アプリによって別途暗号化されていません。バックアップPNGには認証付き暗号を使用しますが、端末の侵害、弱いパスフレーズ、将来の攻撃に対して機密性を絶対に保証するものではありません。完全に安全な保存・送信方法はありません。端末を保護し、元のPNGを変更せず、パスフレーズを画像とは別に秘密に保管してください。"
        },
        {
          "title": "子ども・未成年者のプライバシー",
          "body": "本アプリは年齢を尋ねず、アカウントも作成しません。適用法で必要な場合、未成年者は親権者または法定代理人の監督の下で利用してください。子どもがサポートまたは本サイトを通じ、親権者の同意または削除が法令上必要となる個人データを送信したことを開発者が把握した場合、親権者または法定代理人は support@appdock.link へ連絡できます。"
        },
        {
          "title": "利用者の選択とプライバシー上の権利",
          "body": "本アプリ内でローカルデータを確認・訂正し、選択した日の記録を削除し、暗号化されたバックアップを作成できます。現在インストールされている本アプリ内の全データは、OSのデータ消去機能または本アプリのアンインストールで消去できます。通知または写真の権限はOSの設定から取り消せますが、作成済みの画像や端末バックアップは削除されません。居住地の法令により、開発者が実際に保有する本サイトまたはサポートのデータについて、開示、訂正、削除、処理制限、異議申立て、データポータビリティ、同意撤回、監督機関への苦情申立て等の権利が認められる場合があります。該当する権利の行使は support@appdock.link へご連絡ください。本人確認を求める場合があります。これらの権利により、開発者が保有していない本アプリのローカルデータへアクセスできるようになるものではありません。"
        },
        {
          "title": "改定とお問い合わせ",
          "body": "本アプリと本サイトには、現行の本ポリシーと施行日を表示します。データの取扱いが変わる場合、開発者は本ポリシーを改定し、法令で必要なときは、施行前に本サイト、本アプリ、アプリストアその他の合理的な方法で通知し、新たな処理の前に同意を取得します。ご質問またはプライバシーに関する請求は support@appdock.link へご連絡ください。"
        }
      ],
      "terms": [
        {
          "title": "同意と適用範囲",
          "body": "「朝晩体重」は、アプリストアの商品ページに表示される個人の販売者またはデベロッパが、AppDock.linkを運営上の名称として提供します（以下「開発者」）。本規約を確認する機会を得た後に本アプリをダウンロード、インストール、または利用することで、適用法上認められる範囲で本規約に同意したものとします。同意しない場合は利用しないでください。適用法の強行規定とアプリストアの標準エンドユーザー使用許諾条項も適用されます。単独で有効な同意をできない場合、親権者または法定代理人の許可を得て利用してください。"
        },
        {
          "title": "提供する機能",
          "body": "本アプリは、個人の朝・夜の体重記録、比較結果と推移の表示、目標進捗、ローカル通知、暗号化PNGによるバックアップと復元を提供し、個人的かつ非商用の利用を目的とします。本アプリには、アカウント、開発者が運営するクラウド同期、公開投稿、ユーザー生成コンテンツのフィード、メッセージ、その他の利用者間交流機能はありません。"
        },
        {
          "title": "医療上の助言ではありません",
          "body": "本アプリは医療機器ではなく、疾病の診断、治療、予防、監視を行わず、医療、栄養、緊急時の助言も提供しません。記録、計算結果、目標、比較結果、推移は不完全または不正確な場合があり、個人的な一般参考情報にすぎません。本アプリを理由に専門的な診療を遅らせたり代替したりしないでください。健康上の不安や判断は資格を有する専門家へ相談し、緊急時は地域の緊急サービスへ連絡してください。"
        },
        {
          "title": "利用者の責任",
          "body": "利用者は、自ら選択した記録と目標、端末の安全性と互換性、結果へ依拠する前の確認、有効にした機能に必要な権限の維持、および必要に応じた独立した記録の保管について責任を負います。また、適用法を遵守し、端末へのアクセスを適切に管理してください。"
        },
        {
          "title": "パスフレーズ、バックアップ、復元",
          "body": "開発者は、忘れたパスフレーズを復旧できず、利用可能なバックアップがなければローカルデータを復元できません。長く、他と使い回さず、推測されにくいパスフレーズを使用し、元のPNGとは別に保管してください。現在のパスワードベースの鍵生成処理は速度を重視しており、弱いパスフレーズに対するオフライン推測を防げません。元のPNGを編集せず、重要なバックアップを検証し、必要に応じて複数の複製を保管してください。復元すると現在のすべての記録と設定が置き換わり、元に戻せません。将来の本アプリまたはOSの変更が互換性に影響する可能性があり、永久に機能するバックアップ方法は保証されません。"
        },
        {
          "title": "利用許諾と知的財産権",
          "body": "本規約を遵守することを条件として、開発者は、利用者が管理する端末に本アプリをインストールし、個人的かつ非商用の目的で利用するための、限定的、個人的、非独占的、譲渡不能、再許諾不能な権利を付与します。本アプリ、ブランド、デザイン、オリジナルコンテンツの権利は各権利者に留保されます。第三者またはオープンソースのコンポーネントには、それぞれのライセンスが適用されます。AppDock.linkの名称または標章を利用する権利は付与されません。"
        },
        {
          "title": "禁止事項",
          "body": "本アプリを違法に複製、再配布、販売、賃貸、再許諾、商業利用すること、セキュリティまたは技術的制限を回避すること、本アプリ・端末・他のサービスを妨害すること、悪意あるコードを導入すること、法令または第三者の権利を侵害する目的で利用することを禁止します。また、適用法または該当するオープンソースライセンスで明示的に認められる場合を除き、リバースエンジニアリングまたは改変を行ってはなりません。開発者との関係または開発者による推奨を偽って表示することも禁止します。"
        },
        {
          "title": "アプリストアと第三者サービス",
          "body": "アプリストア、OS、端末、写真ライブラリ、クラウドバックアップまたはファイル転送サービス、メール事業者、GitHub Pages、外部リンクは第三者が運営し、それぞれの規約とポリシーが適用されます。利用するサービスは利用者自身で確認してください。法令上排除できない場合を除き、開発者は独立した第三者について責任を負いません。該当するアプリストアは、その標準ライセンス条項に基づく第三者受益者となる場合があります。"
        },
        {
          "title": "更新、提供状態、提供終了",
          "body": "開発者は、技術、安全、法令、事業上の理由により、本アプリの修正、更新、変更、配信停止、提供終了を行う場合があります。合理的に可能で法令上必要な場合は、事前に通知します。開発者は、恒久的な提供、更新、サポート、すべての端末・OSバージョンとの互換性、またはすべてのバックアップ形式との継続的な互換性を約束しません。アカウントや事業用サーバーがないため、開発者はローカルデータを遠隔消去できません。アンインストールまたはデータ消去は利用者が行ってください。合理的な支配を超える事由による遅延は、法令に別段の定めがある場合を除き責任を生じさせません。"
        },
        {
          "title": "保証の否認",
          "body": "法令で認められる最大限の範囲において、本アプリは現状有姿かつ提供可能な状態で提供されます。開発者は、中断または不具合のない動作、完全な正確性、特定の健康上その他の目的への適合性、有害な要素がないこと、データ消失の防止、バックアップまたは復元の成功を保証しません。本項は、消費者保護に関する強行法規上排除できない保証または救済を排除しません。"
        },
        {
          "title": "責任の制限",
          "body": "本規約は、詐欺、故意または重過失、人の生命または身体の侵害、その他法令上排除または制限できない責任を排除または制限しません。軽過失については、法令で認められる場合に限り、開発者は直接かつ通常生ずべき合理的に予見可能な損害についてのみ責任を負い、間接損害、付随的損害、特別損害、懲罰的損害、結果損害、逸失利益または機会損失について責任を負いません。消費者が放棄できない救済を制限する規定はありません。法令に基づく責任分担では、利用者による端末、パスフレーズ、バックアップの管理状況が考慮される場合があります。"
        },
        {
          "title": "第三者からの請求",
          "body": "適用法で認められる範囲において、利用者が故意または過失により本規約、法令、第三者の権利に違反し、その行為により第三者が開発者へ請求した場合、利用者は、その行為から生じた合理的な直接損害および費用について責任を負います。開発者に起因する範囲には適用されず、消費者が放棄できない権利を減ずるものでもありません。"
        },
        {
          "title": "利用の終了",
          "body": "利用者は、本アプリの利用を停止してアンインストールすることで、いつでも本規約を終了できます。本規約への重大な違反がある場合、法令上必要な通知または是正の機会に従い、利用許諾が終了する場合があります。本アプリには開発者が停止できるアカウントがなく、開発者はローカルデータまたはバックアップ画像を遠隔削除できません。知的財産権、責任、紛争、一般条項など、性質上存続すべき規定は終了後も存続します。"
        },
        {
          "title": "本規約の変更",
          "body": "開発者は、変更が利用者の一般の利益に適合する場合、本規約の目的に反せず、必要性、相当性および関連事情に照らして合理的な場合、またはその他法令上認められる場合に限り、本規約を変更します。変更後の本文と施行日は、変更の施行前に本アプリおよび本サイトへ掲載し、法令上必要な場合は追加の通知または同意取得を行います。変更に同意しない場合は、施行前に利用を停止してください。継続利用が同意となるのは、適用法上認められる範囲に限られます。"
        },
        {
          "title": "準拠法と紛争",
          "body": "本規約には、強行的な準拠法選択ルールによって本関係に適用される法令が適用されます。紛争は、適用法上管轄権を有する裁判所へ提起できます。本規約は、消費者が放棄できない強行法規上の保護または裁判管轄を奪うものではありません。訴えを提起する前に、利用者と開発者は support@appdock.link への連絡により誠実な解決を試みるものとします。ただし、緊急の救済または放棄できない権利を遅延・制限しません。"
        },
        {
          "title": "一般条項とお問い合わせ",
          "body": "本規約と適用されるアプリストアの条項が本アプリに関する合意を構成し、プライバシーポリシーがデータの取扱いを説明します。強行法規は常に適用されます。ある規定が執行不能でも、その他の規定は有効に存続し、その規定は法令上認められる最小限の範囲でのみ調整されます。権利を行使しないことは放棄を意味しません。開発者は、必要な通知を行い強行法規上の権利を減じないことを条件に、本アプリまたはその事業とともに本規約を移転できます。利用者は法令上認められる場合に限り利用許諾を移転できます。見出しは便宜上のものです。ご質問は support@appdock.link へご連絡ください。"
        }
      ]
    },
    "en": {
      "title": "Privacy policy & terms of use",
      "close": "Close",
      "privacyTab": "Privacy policy",
      "termsTab": "Terms of use",
      "effectiveDate": "Effective September 2, 2026",
      "privacy": [
        {
          "title": "Provider, scope, and contact",
          "body": "Daily Weight (the 'App') and its public product page at https://appdock.link/dailyWeight/ (the 'Site') are operated by the individual seller or developer identified in the app-store listing, using AppDock.link as an operating name (the 'Developer'). This Policy covers the App's on-device processing and the limited data handling that may occur when you use the Site or contact support. Contact: support@appdock.link."
        },
        {
          "title": "Data stored on your device",
          "body": "The App stores the following in a local SQLite database inside its sandbox: morning and evening weight values, each entry's date and period, the time it was saved, goal weight, display unit, whether morning and evening reminders are enabled and their times, and onboarding status. Charts, comparisons, and goal progress are calculated from that data. Depending on your settings, the operating system may include the database in a device backup."
        },
        {
          "title": "On-device processing and purposes",
          "body": "The App processes local data only to save, display, edit, and delete entries; calculate charts, comparisons, and goal progress; schedule reminders; and create, verify, and restore backups at your request. It also reads the current date and time, system locale and calendar time zone, notification and photo permission status, and reduced-motion preference as needed for formatting, scheduling, permissions, and accessibility. These values are not sent to the Developer."
        },
        {
          "title": "Data the App does not transmit",
          "body": "Except for information you choose to send in a support email, the Developer does not receive personal data through the App. The App does not upload weight entries, settings, backup images, or passphrases; create an account; obtain a remote push token; or include ads, tracking, analytics, or crash reporting. The Developer does not sell personal data and does not disclose support data except to providers needed to handle the request, at your direction, or when legally required."
        },
        {
          "title": "Notifications and photo permissions",
          "body": "If you enable reminders, the App asks for notification permission and schedules daily local notifications on your device at the times you choose. They do not pass through a server and contain no weight data. Saving a backup asks for permission to add the image to your photo library; restoring opens the system picker and gives the App only the image you select and basic file information needed to validate it. On some Android versions, the operating system may display media or storage permissions for compatibility. The App does not scan or upload your library. You may revoke permissions in system settings, but the related feature may stop working."
        },
        {
          "title": "Encrypted backup images",
          "body": "A backup PNG contains all local entries and settings, including recorded dates and times. It is encrypted on your device using a key derived from the 12–128 character passphrase you choose. The passphrase is kept only in memory during the operation and is not stored or uploaded; temporary backup files are removed from the App cache on a best-effort basis. The current key derivation is optimized for speed and is not designed to resist prolonged offline guessing if someone obtains the PNG, so use a long, unique, unpredictable passphrase. Editing, compressing, converting, or taking a screenshot of the PNG can make restoration impossible. After confirmation, restoration replaces all current local entries and settings. Once a backup is saved, shared, or copied to another service, that system or service handles it under its own settings and policy."
        },
        {
          "title": "Site visits and support email",
          "body": "The Site stores a language preference in your browser's local storage and contains no account, submission form, advertising, behavioral tracking, or analytics script. The Site is hosted on GitHub Pages. GitHub states that it logs visitors' IP addresses for security and may process browser, device, request, and usage information under its privacy statement. If you email support, the Developer and the relevant email providers receive your email address, message, attachments, and ordinary delivery metadata. Do not send weight records, a backup PNG, or a passphrase unless it is necessary for your request and you understand the risk."
        },
        {
          "title": "Purposes, service providers, and transfers",
          "body": "Support information is used to answer your request, troubleshoot, protect the App and Site, comply with law, and establish, exercise, or defend legal claims. Depending on the law that applies, this processing is based on your request or consent, compliance with legal duties, or the legitimate interests of support and security. App stores, operating systems, photo or cloud services, file-transfer tools, GitHub Pages, network providers, and email providers process data independently under their own terms and policies. Their processing may occur outside your country. The Developer does not use Site or support data for targeted advertising or sell it."
        },
        {
          "title": "Retention and deletion",
          "body": "Local data remains until you edit or delete an individual day's entries, uninstall the App, or clear its data through the operating system; the App currently has no single in-app delete-all control. Device-backup copies are controlled by your operating system and may remain after App data is cleared. Backup PNGs saved elsewhere must be deleted separately. The Site's language preference remains until browser site data is cleared. Support messages are kept only as long as reasonably needed to answer the request, maintain security, resolve disputes, and meet legal obligations; provider logs follow the provider's retention rules. Because the Developer has no server copy of local App data, it cannot recover or remotely delete that data for you."
        },
        {
          "title": "Security",
          "body": "Local App data is protected by the operating system's app sandbox and your device security; the SQLite database is not separately encrypted by the App. Backup PNGs use authenticated encryption, but encryption cannot guarantee confidentiality against device compromise, a weak passphrase, or future attacks. No storage or transmission method is completely secure. Keep your device protected, keep the original PNG unchanged, and keep its passphrase separate and confidential."
        },
        {
          "title": "Children's and minors' privacy",
          "body": "The App does not ask for age and does not create accounts. A parent or guardian should supervise a minor's use where required by applicable law. If the Developer learns that personal data was submitted through support or the Site by a child in a way that requires parental consent or deletion, a parent or guardian may contact support@appdock.link."
        },
        {
          "title": "Your choices and privacy rights",
          "body": "You can view and correct local data in the App, delete a selected day's entries, create an encrypted export, or erase all data held in the installed App by using the operating system's clear-data control or uninstalling the App. You can withdraw notification or photo access in system settings; this does not delete images or device backups already created. Depending on your location, you may have rights concerning Site or support data actually held by the Developer, such as access, correction, deletion, restriction, objection, portability, withdrawal of consent, or a complaint to a regulator. Email support@appdock.link to exercise an applicable right; identity verification may be required. These rights do not give the Developer access to local App data it does not possess."
        },
        {
          "title": "Updates and contact",
          "body": "The current Policy and effective date are shown in the App and on the Site. If data practices change, the Developer will update this Policy and, where required, provide advance notice by the Site, the App, the app store, or another reasonable channel and obtain consent before new processing. Questions or privacy requests may be sent to support@appdock.link."
        }
      ],
      "terms": [
        {
          "title": "Acceptance and scope",
          "body": "Daily Weight is operated by the individual seller or developer identified in the app-store listing, using AppDock.link as an operating name (the 'Developer'). By downloading, installing, or using the App after having an opportunity to review these Terms, you agree to them to the extent recognized by applicable law. If you do not agree, do not use the App. Mandatory law and the app store's standard end-user license terms also apply. If you are not legally able to agree on your own, use the App only with authorization from a parent or legal guardian."
        },
        {
          "title": "What the app provides",
          "body": "The App provides personal morning and evening weight logging, calculated comparisons and trend views, goal progress, local reminders, and encrypted-PNG backup and restore. It is intended for personal, noncommercial use. The App has no account, Developer-operated cloud synchronization, public posting, user-generated-content feed, messaging, or other user-to-user interaction."
        },
        {
          "title": "Not medical advice",
          "body": "The App is not a medical device and does not diagnose, treat, prevent, or monitor any condition or provide medical, nutritional, or emergency advice. Entries, calculations, goals, comparisons, and trends may be incomplete or inaccurate and are for general personal reference only. Do not delay or replace professional care because of the App. Consult a qualified professional about health concerns or decisions, and contact local emergency services in an emergency."
        },
        {
          "title": "Your responsibilities",
          "body": "You are responsible for the entries and goals you choose, the security and compatibility of your device, reviewing results before relying on them, maintaining any permissions needed for features you enable, and keeping independent records appropriate to your needs. You are also responsible for complying with applicable law and for safeguarding access to your device."
        },
        {
          "title": "Passphrases, backups, and restoration",
          "body": "The Developer cannot recover a forgotten passphrase or local data without a usable backup. Use a long, unique, unpredictable passphrase and keep it separate from the original PNG. The current password-based key derivation is optimized for speed and cannot prevent offline guessing of a weak passphrase. Keep the original PNG unedited, verify important backups, and keep more than one copy where appropriate. Restoration replaces all current entries and settings and cannot be undone. Future App or operating-system changes may affect compatibility, so no backup method is guaranteed to work forever."
        },
        {
          "title": "License and intellectual property",
          "body": "Subject to these Terms, the Developer grants you a limited, personal, nonexclusive, nontransferable, nonsublicensable license to install and use the App on devices you control for personal, noncommercial purposes. The App, branding, design, and original content remain the property of their respective rights holders. Third-party or open-source components remain subject to their own licenses. No right to the AppDock.link name or marks is granted."
        },
        {
          "title": "Prohibited conduct",
          "body": "You may not unlawfully copy, redistribute, sell, rent, sublicense, or commercially exploit the App; bypass security or technical restrictions; interfere with the App, a device, or another service; introduce malicious code; use the App to violate law or third-party rights; or reverse engineer or modify the App except to the extent expressly permitted by applicable law or an applicable open-source license. You may not misrepresent an affiliation with or endorsement by the Developer."
        },
        {
          "title": "App stores and third-party services",
          "body": "App stores, operating systems, devices, photo libraries, cloud-backup or file-transfer services, email providers, GitHub Pages, and external links are operated by third parties under their own terms and policies. You are responsible for reviewing the services you choose. The Developer is not responsible for an independent third party except to the extent responsibility cannot legally be excluded. The applicable app store may have rights as a third-party beneficiary of its standard license terms."
        },
        {
          "title": "Updates, availability, and discontinuation",
          "body": "The Developer may fix, update, change, suspend distribution of, or discontinue the App for technical, security, legal, or business reasons. Where reasonably practicable and legally required, advance notice will be provided. The Developer does not promise permanent availability, updates, support, compatibility with every device or operating-system version, or continued compatibility with every backup format. Because there is no account or business server, the Developer cannot remotely erase local data; uninstalling or clearing data remains your responsibility. Delays caused by events beyond reasonable control do not create liability except where law requires otherwise."
        },
        {
          "title": "Disclaimers",
          "body": "To the fullest extent permitted by law, the App is provided 'as is' and 'as available.' The Developer does not warrant uninterrupted or error-free operation, complete accuracy, fitness for a particular health or other purpose, freedom from harmful components, prevention of data loss, or successful backup or restoration. This clause does not exclude any warranty or remedy that mandatory consumer law does not allow to be excluded."
        },
        {
          "title": "Limitation of liability",
          "body": "Nothing in these Terms excludes or limits liability for fraud, willful misconduct or gross negligence, death or personal injury, or any other liability that cannot lawfully be excluded or limited. For ordinary negligence, and only where permitted by law, the Developer is responsible only for direct, ordinary, and reasonably foreseeable loss and is not responsible for indirect, incidental, special, punitive, or consequential loss or lost profit or opportunity. No provision limits nonwaivable consumer remedies. A user's failure to secure a device, passphrase, or backup may be considered when the law allocates responsibility."
        },
        {
          "title": "Third-party claims",
          "body": "To the extent permitted by applicable law, if your intentional or negligent breach of these Terms or violation of law or third-party rights causes a third-party claim against the Developer, you are responsible for the reasonable direct losses and costs caused by that conduct. This does not apply to the extent a claim was caused by the Developer, and it does not reduce any nonwaivable consumer right."
        },
        {
          "title": "Ending use",
          "body": "You may end these Terms at any time by stopping use and uninstalling the App. The license may end if you materially breach these Terms, subject to any notice or cure right required by law. The App has no account for the Developer to suspend, and the Developer cannot remotely delete your local data or backup images. Provisions that by their nature should survive, including intellectual-property, liability, dispute, and general provisions, continue after termination."
        },
        {
          "title": "Changes to these terms",
          "body": "The Developer may change these Terms only where the change benefits users, is reasonable in light of the Terms' purpose, necessity, proportionality, and surrounding circumstances, or is otherwise permitted by law. The revised text and effective date will be posted in the App and on the Site before the change takes effect, with additional notice or consent where required. If you do not accept a change, stop using the App before it takes effect. Continued use constitutes acceptance only to the extent permitted by applicable law."
        },
        {
          "title": "Governing law and disputes",
          "body": "These Terms are governed by the law applicable to the relationship under mandatory choice-of-law rules. A dispute may be brought before any court having jurisdiction under applicable law. Nothing in these Terms deprives a consumer of mandatory protections or a forum that cannot lawfully be waived. Before filing a claim, you and the Developer should try in good faith to resolve the issue by contacting support@appdock.link, but this does not delay or restrict urgent relief or any nonwaivable right."
        },
        {
          "title": "General provisions and contact",
          "body": "These Terms and applicable app-store terms form the agreement governing the App; the Privacy Policy describes data practices, and mandatory law applies regardless. If one provision is unenforceable, the rest remains effective and the provision is adjusted only as far as law permits. A failure to enforce a provision is not a waiver. The Developer may transfer these Terms with the App or its business, subject to required notice and without reducing mandatory rights; you may transfer your license only where law permits. Headings are for convenience. Questions may be sent to support@appdock.link."
        }
      ]
    }
  };
})();
