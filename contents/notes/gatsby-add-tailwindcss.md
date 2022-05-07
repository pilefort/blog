---
title: "Gatsby v4にTailwind v3を導入する"
description: 'Tailwind v3から設定ファイルの書き方が変わり、Gatsbyの公式ページやブログ記事通りにやっても設定できなくなってるので追加しました'
date: '2021-12-12 05:41:55'
---

# 環境
使用するGatsbyのテンプレートはgatsby-gitbook-starterを使います (https://github.com/hasura/gatsby-gitbook-starter)。

Gatsbyのバージョンはv4.3.0です。

TailwindCSSはv3.0を使います。

## 注意点
TailwindCSSはv3.x.xからpurgeセクションが消え、contentセクションの追加が必要になりました。

contentセクションではTailwindCSSを適用するファイルを指定します。そのため、contentセクションを書いていないとTailwindCSSが使えません。

# 導入方法
[TailwindCSSのチュートリアル](https://tailwindcss.com/docs/guides/gatsby)を確認しながら導入します。

必要なパッケージを追加します。

```bash
$ yarn add -D tailwindcss postcss autoprefixer gatsby-plugin-postcss
```

TailwindCSSの設定ファイルを作成します。

```bash
$ npx tailwindcss init -p
```

postcssのGatsby Pluginを追加したので、gatsby-config.jsにも追記します。

```js:gatsby-config.js
module.exports = {
  plugins: [
    // ...
    'gatsby-plugin-postcss',
    // ...
  ],
}
```

TailwindCSSの設定ファイルを修正し、TailwindCSSを適用させたいファイルをしていします。

```js:tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

src/utils/tailwind.cssを作成し、Tailwindのレイヤーを取り込みます。

```css:src/utils/tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

gatsby-browser.jsでTailwindCSSを読み込みます。

```js:gatsby-browser.js
import './src/utils/tailwind.css'
```

あとは、TailwindCSSの適当なクラスを当ててみて反映されるかどうかを確認できたら、完了です。
