READ ME

# about
slack bot give you information on splatoon2 leagues

![ika-bot](https://user-images.githubusercontent.com/28241535/89651186-80a7e100-d8fe-11ea-9465-3227c9cc996b.gif)


# dependent services
slash commands
 - https://api.slack.com/interactivity/slash-commands

serverless framework
 - https://www.serverless.com/

aws
 - https://aws.amazon.com/
 
splatoon api
  - https://spla2.yuu26.com/

## start up
```
npm install
```

## compile
TypeScript -> JavaScript
```
npm run tsc
```

## deploy
```
npm run deploy
```
- compile TypeScript
- serverless deploy


### check deploy files
```
npm run sls -- package
```

## commit 
```
# ==== Emojis ====
# 🐛  :bug: バグ修正
# 👍  :+1: 機能改善
# ✨  :sparkles: 部分的な機能追加
# 🎉  :tada: 盛大に祝うべき大きな機能追加
# ♻️  :recycle: リファクタリング
# 🚿  :shower: 不要な機能・使われなくなった機能の削除
# 💚  :green_heart: テストやCIの修正・改善
# 👕  :shirt: Lintエラーの修正やコードスタイルの修正
# 🚀  :rocket: パフォーマンス改善
# 🆙  :up: 依存パッケージなどのアップデート
# 🔒  :lock: 新機能の公開範囲の制限
# 👮  :cop: セキュリティ関連の改善

# ==== Format ====
# :emoji: Subject
#
# Commit body...
```
