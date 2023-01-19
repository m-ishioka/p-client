# My NextJs template

# Node

v16.15.1

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

リポジトリ構成
レイヤードアーキテクチャ + アトミックデザイン

```
├ src
│ ├ components
│ │ ├ application ... ビジネスロジックを含む高次コンポーネント
│ │ │ ├ organisms
│ │ │ └ templates
│ │ └ ui ... ビジネスロジックが絡まないコンポーネント群
│ │ 　 ├ atoms
│ │ 　 └ molecules
│ ├ pages ... ページファイル
│ │ ├ _app.tsx
│ │ ├ _document.tsx
│ │ └ index.tsx
│ ├ viewmodels ... ビューモデル(pages単位)
│ ├ hooks ... カスタムフック
│ ├ constants ... 定数
│ ├ utilities ... 便利関数
│ └ styles
├ env ... 環境変数
└ types ... 型定義ファイル
```

状態の定義
state（状態）は viewmodel 及び pages 単位で一つのものを整形し、viewmodel に保持
viewmodel だけが statefull な状態を維持し、他の層は stateless な状態となる

## Getting Started

First, run the development server:

開発環境

```
make init && make dev
```

ローカルサーバー
[http://localhost:3001](http://localhost:3001)

## ドキュメント

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
