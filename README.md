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

1. 把这些文件**全部**传到 GitHub 仓库 `circus` 的根目录:`index.html`、`README.md`、`manifest.webmanifest`、`sw.js`、`.nojekyll`,以及整个 `icons/` 文件夹(里面 4 张 png)。
2. 等 GitHub Pages 更新(1–2 分钟),用手机打开 https://shentuyuxia.github.io/circus/
3. **iPhone**:用 Safari 打开 → 底部「分享」按钮 → 「添加到主屏幕」。(必须用 Safari,iOS 上的 Chrome 不能安装。)
4. **Android**:用 Chrome 打开 → 右上角菜单 → 「安装应用」或「添加到主屏幕」。
5. 以后更新:重新上传新的 `index.html` 即可,App 会自动取最新版(联网时优先读网络,断网时读缓存)。如果偶尔没更新,完全关掉 App 再打开一次。

说明:
- 在 Claude 预览窗口里无法安装,必须在上面的 github.io 地址打开。
- 联机玩游戏仍然需要网络;离线只能打开大厅界面。
- 清除浏览器数据会同时清掉词汇仓,记得先导出备份。
