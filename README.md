# 线上游园会 Online Fun Fair

Upload `index.html` and `.nojekyll` to the root of your GitHub Pages repo (replace the old files). Open https://<user>.github.io/<repo>/ — one page, 8 games.

- 语言 / Language: 简体 + English by default. In the hall's language card: a 简/繁 switch, a second-language switch EN / DE / PT-BR (English, Deutsch, Português do Brasil; it replaces the English line everywhere: hall, rules, word banks, puzzles, penalties), and an optional 拼音; style and text size are the two buttons at the top right.
- 天黑请闭眼: classic (6–18, 屠边), double identity (6–12), deal-only; built-in timer.
- 猜猜我是谁: two modes — 随机派词 (random deal) and 人工出题 (voice-friendly: everyone searches a well-known word for the next player, gets a 4-character code of digits+letters, says it out loud; everyone types the codes they hear; you never see your own word and never need to type the code written for you). Themes: all / one theme / 每轮随机类别 (a new theme each round). ~1,670 well-known words: movie characters, celebrities, sports, cartoons & anime, myths & fairy tales, historical figures, brands + everyday themes; search works in Chinese, pinyin, English, German or Portuguese. No "reveal my word" option.
- 界面风格 / Style: in the language card pick 经典游园会 (Classic fair) or 女巫奇妙夜 (Witch's wondrous night). Witch mode turns the hall into an illustrated candlelit table, retitled 奇妙之夜 (The Wondrous Night), with the 8 games as cards around a star-chart; all games and the penalty wheel switch to the dark candlelit look. The hall in witch mode is your illustration as a round table: tap any of the 8 cards arranged in a circle to enter a game. A 巫 button in the in-game bar toggles it too.

- 你说我猜 / Say It, Guess It (new, replaces the separate 谁是间谍 card): 4–12 players, 2–4 colour+shape teams (自动 / 建议 / 人工 grouping), one describer per turn sees the word, the other teams referee for fouls, per-turn countdown (90/120/150 s, default 120), local scoreboard, optional random theme each turn.
- 谁是卧底 now contains both variants: tap 经典玩法 or 白板间谍 in the bar under the game title (the old 谁是间谍 game is unchanged, it just lives inside this card).
- 陈词计时 / Speech timer: floating button at the bottom left in 天黑请闭眼 and 阿瓦隆 (20/30/45/60/90 s, next-speaker counter, beep + vibration when time is up).

## 词汇仓 / Word bank
- 大厅首页「语言」区有一个双语按钮「♥ 词汇仓 · Word bank」，点开后第一页就是双语的使用方法。
- 玩游戏时遇到不熟悉的词：点右下角的 📖 →「本局词汇」→ 点词旁边的 ♡，词就进了词汇仓。还没公布的秘密词是模糊的，公布后才能收藏。
- 词汇仓里每个词都有拼音、释义和一条例句（简/繁、拼音开关、EN/DE/PT-BR 都会跟着变）。可以搜索、筛选「未掌握 / 已掌握」、点 ✓ 标记已掌握、点 ♥ 移出，「自测」把释义和例句遮住。「开始复习」是翻卡片：先看词，点一下翻面，选「还不熟」或「记住了」。
- 保存：回到大厅时，如果有没保存的新词，系统会问「要保存这些词汇吗？」——可以存到本机（浏览器 localStorage + cookie），也可以存成文件（.json）放进手机/电脑，之后「从文件导入」。勾选「以后自动保存」就不再询问。电脑浏览器直接关闭网页时，也会弹出浏览器自带的离开确认。
- 下次打开：系统发现本机保存过的词汇，会问「现在复习吗？」，词汇会持续累积。
- 注意：苹果手机的浏览器不能在关闭网页时弹出自定义提示，所以请在回到大厅时保存，或勾选自动保存；清除浏览器数据会删掉本机那份，建议偶尔存一份文件备份。没有服务器之前，词汇仓是各人自己设备里的，不会同步。
- 例句和 DE / PT-BR 释义由 AI 生成，没有逐条人工校对。

## 词库与“不重复”
- 词库大扩充：你说我猜 / 禁忌词共用约 3,800 个词（14 个主题），暗号 / 白板间谍 / 内幕交易各约 1,780 个日常词，谁是卧底约 940 组词对；新词都带英文，德语、葡语只在打开 DE / PT-BR 时才显示。
- 每个设备会记住自己见过的词（只存在本机浏览器里）。开新局时，系统会在几组候选里挑“和你见过的词重叠最少”的那一组，所以同样的设置再玩第二次、第三次，词也不一样。谁是卧底的词序还和日期有关。
- 说明：网站是纯静态页面，看不到玩家的 IP，所以“记住”是按设备/浏览器算的；清除浏览器数据或换设备开房，记录会重新开始。要做到“按 IP/账号统一更新题库”，需要等下周上服务器。
- 词汇仓的例句库同步扩充到约 5,000 个词。

## 玩家类型:母语者 / 学习者(大厅「语言」区)
- 大厅里的「玩家类型」决定**开新房间**时用哪种词库;进房间的人不用再选,房间会带着模式(模式藏在门牌号里,门牌格式没变)。
- **学习者房间**:只用 HSK 范围内的常用词,不出历史人物、地方品牌、明星名和其他专有名词。难度按 HSK 分档:简单 = HSK 1–3,中等 = HSK 4–5,困难 = HSK 6–7,混合 = 1–7。词太少的主题(电影、名人、动漫、历史人物、品牌等)会自动变灰。房间信息里会显示「学习者房间 · Learner room」。
- **母语者房间**:去掉只有大陆、台湾、香港或新加坡才懂的词(比如德克士这类地区性品牌,或各地说法不同的词);难度沿用游戏原来的设置;人名、角色、品牌、神话和文化词另外按「知名度」重新分档(家喻户晓 → 简单,多数人知道 → 中等,有点冷门 → 困难),所以像「安切洛蒂」「世界树」这类词只会在「困难」或「混合」里出现,特别冷门的(约 270 个)母语者房间也不再出。
- 词库已全部重新整理:4,834 个词都打了 HSK 等级、历史/文化/专有名词/地区专属标记(官方 HSK 2.0 + 3.0 词表,再加人工语感判断)。`word_tags.csv` 是完整的标注表,可以用 Excel 打开检查;觉得哪个词判断错了,告诉我,我来改。
- 玩学习者房间时,建议在大厅里同时打开「拼音」。

## 难度是怎么设置的
- 谁是卧底:每一对词在入库时标了「中等 / 难 / 极难」(看两个词有多难说清、多容易混);「混合」是全部词对。难度写进房间号。学习者房间改按 HSK 档位分。
- 猜猜我是谁、行动代号、谁是间谍、内鬼:每个词标了 easy / medium / hard(按常见程度和好不好描述),房间选「简单 / 中等 / 困难 / 混合」。学习者房间改按 HSK 档位分。
- 你说我猜:没有难度选项,默认发简单 + 中等的词,主题太小才补难词。学习者房间用 HSK 1–5。

## 猜猜我是谁:计时和智慧锦囊
- 房间打开后,桌面上方有计时条:开始 / 暂停,最长 25:00,刷新页面不会重置。每个人的手机各自计时,所以开局时请大家一起点「开始」。
- 智慧锦囊:第 5 分钟解锁第一个(告诉持词人这个词属于哪一类),第 10 分钟第二个(词有几个字),第 15 分钟第三个(拼音首字母)。点锦囊会列出每个座位的提示,大家看到别人的词,就把提示读给对方听;自己的锦囊页看不到自己的词。
- 25:00 到,弹出「时间到」,点「下一局」重新开始。

## 出错提示
- 如果某个游戏出错打不开，页面底部会弹出黄色提示，显示错误信息，并有「清除存档并重新加载」按钮；把这行错误信息截图发给我，就能很快定位。

## 惩罚转盘 / Penalty wheel
- 游戏结束时，在「谁是卧底」「白板间谍」「天黑请闭眼」的结算页有「🎡 转盘抽惩罚」按钮：被淘汰（出局）的人会按顺序排队，每人转一次，页面写着「轮到 XX · 1/3」，转完点「下一位」，最后有一份抽签记录。没有人被淘汰时，会改为输的一方逐个转。
- 不想做的惩罚，全体投票可以换一个；黄汤卡默认关闭。所有惩罚只需要麦克风，不用摄像头。

## 外观与设置（大厅首页「语言」区和「界面风格」）
- 语言：默认中文 + 英文。「简 / 繁」一键切换，第二语言 EN / DE / PT-BR 三选一，「拼音」是可选的辅助。
- 字号：大厅右上角的「A」按钮，点一下放大一档，点三次回到原来的大小。聚会上看不清小字时调大。
- 风格：大厅右上角第一个按钮显示当前风格，默认是月亮（夜晚马戏团，暗色）；每点一下换一个：月亮 → 太阳（白天游园会，浅色）→ 药瓶（女巫奇妙夜）→ 回到月亮。游戏顶部那条栏里也有同样的三个小图标。
- 各游戏顶部有条纹遮阳棚，门牌号和身份卡是带缺口、双边线的票根（门牌号一行一张，带撕线）；传手机时的遮挡页是红色幕布；你说我猜有计时圆环和分数灯泡；暗号的牌带形状标记（红圆、蓝方块），不只靠颜色区分。

## 装成手机 App(添加到主屏幕)

网站已经是一个可安装的 PWA,装好后桌面上有「游园会」图标,点开是全屏、无浏览器地址栏的 App 体验,断网时也能打开大厅。

1. 把这些文件**全部**传到 GitHub 仓库 `circus` 的根目录:`index.html`、`README.md`、`manifest.webmanifest`、`sw.js`、`.nojekyll`,以及 4 张图标 `tent-180.png`、`tent-192.png`、`tent-512.png`、`tent-maskable-512.png`(都直接放在根目录,不需要文件夹)。
2. 等 GitHub Pages 更新(1–2 分钟),用手机打开 https://shentuyuxia.github.io/circus/
3. **iPhone**:用 Safari 打开 → 底部「分享」按钮 → 「添加到主屏幕」。(必须用 Safari,iOS 上的 Chrome 不能安装。)
4. **Android**:用 Chrome 打开 → 右上角菜单 → 「安装应用」或「添加到主屏幕」。
5. 以后更新:重新上传新的 `index.html` 即可,App 会自动取最新版(联网时优先读网络,断网时读缓存)。如果偶尔没更新,完全关掉 App 再打开一次。

说明:
- 在 Claude 预览窗口里无法安装,必须在上面的 github.io 地址打开。
- 联机玩游戏仍然需要网络;离线只能打开大厅界面。
- 清除浏览器数据会同时清掉词汇仓,记得先导出备份。


## 新玩法:接力猜词 (Word Relay)
大厅里有独立的一扇门「接力猜词」。每轮一人当猜词人(看不到答案),其他人按座位顺序各说一个词提示,不能含有答案里的任何一个字,接力两轮后由猜词人猜。合作玩法,不计分。超过 6 人自动分成两组(按座位或随机),主持人可选择参加或只主持。邀请链接格式是 #r+6位门牌号。

## 新游戏:最后的幸存者 (Last Boat Standing)
纯语音谈判派对,6–10 人,25–30 分钟。一位主持人在自己的屏幕上操作:公开分配角色(技能全公开)、四轮计时(自我推销→结盟交易→灾难降临→谁能上船)、食物/船体/求救信号三项资源、灾难事件抽卡、最后投票(平票会重投)。不需要私聊,也没有隐藏身份。

## 新游戏:午夜电台 (Midnight Radio)
5–10 人,每人一部手机,用门牌号进房(邀请链接格式 #m+6位门牌号)。一人当调查员,看公开线索和嫌疑人名单;诚实证人各拿一条真线索;「杂音」拿到假线索和一张暗中的误导规则。调查员两轮盘问后指认真凶,翻牌揭晓。合作计数,不排名;每局换一位调查员。
注意:身份由门牌号推算,没有服务器,会开开发者工具的人理论上能算出所有身份。
