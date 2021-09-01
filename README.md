## アプリ名
ポートフォリオ

## アプリ作成背景
自分の作品を公開し、スキルアップを目指すためのポートフォリオサイトです。

### URL
https://glamping-book-client-h9kb2gm85-mitsuhiro0602.vercel.app/

### sellerアカウント
- email: Seller_test@gmail.com
- password: Seller_test

### buyerアカウント
- email: Buyer_test@gmail.com
- password: Buyer_test

### github:
【フロント】：https://github.com/mitsuhiro0602/glamping-book-client
【バックエンド】：https://github.com/mitsuhiro0602/glamping-book-server
## 使用技術

バックエンド：Node.js（Express）
フロントエンド： React / Redux
インフラ： Heroku + Vercel
DB：mongoDB(mongoDBAtlas)

### その他の技術
・JWTトークンによるAuth認証
・Reduxによるstateの管理
・Algoliaを使った全文検索

### 【UI/UX】
・ styled-component
・TailwindCSS
・一部bootstrap

***
***

## 機能一覧

### 新規登録、ログイン
・JWTトークンを使用したメールアドレスでの新規登録、ログイン
### stripeアカウントの取得
・stripeApiを使ったユーザーとstripeアカウントの紐付け

### グランピング施設のCROUD
・グランピング施設の投稿、編集、読み取り、更新、削除

【投稿情報】
・画像
・タイトル
・説明
・滞在開始年月
・滞在終了年月
・場所情報
・滞在人数
・金額


### 決済機能
・stripeApiを使った決済機能

### 検索機能
・mongoDBは日本語対応していなかったためAlgoliaを使った全文検索


