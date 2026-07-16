# Simple Countup

Next.jsとChakra UIで作成した、シンプルなカウントアップアプリです。
AIを活用したWebアプリケーション開発の学習を目的としています。

## 機能

- カウントを1増やす
- カウントを0に戻す
- PC・スマートフォンに対応したレスポンシブ表示

## 使用技術

- Next.js（App Router）
- React
- TypeScript
- Chakra UI 2.8.2

## 構成

1画面で完結し、APIやデータベースは使用していません。
カウントの状態はReactの`useState`で管理しています。

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。
