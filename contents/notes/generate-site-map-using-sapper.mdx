---
title: "svelte/sapperでsitemapを自動生成する方法"
description: "sapperは標準ではsitemapの自動生成をサポートしておらず、トリッキーなやり方が必要です。SvelteKitでは解決されるかもしれませんが、備忘録として残しておきます。"
date: "2021-03-05 20:47:08"
---

# はじめに
sapperでsitemap.xmlを生成する方法で少し時間がかかったので、まとめておきます。

## 対象
- sapperでsitemapを自動生成したい人
- svelteKitのリリースを待てず、sapperを使いたい人

## 参考資料
基本的にはこちらのissueを読んでいけば、できます。
ソースが散らばっているのと、ブログ利用がメインの話が多かったので、今回記事化しました。
https://github.com/sveltejs/sapper/issues/461

# sitemapの生成
本題、routes/sitemap.xml.jsを作成し、以下を記述します。

lastmodは変更するたび (サイトを修正するたび) 更新したかったので、
`<lastmod>${new Date().toISOString()}</lastmod>`
としました。

URL (pages) は固定なら配列で、たくさん増えるなら適当にmapで処理してやります。
ブログなどのたくさん増えるタイプは上記issueが詳しめです。

```js
// routes/sitemap.xml.js

const pages = [
  '',
  '/main',
]

const render = () => `
<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://<自分のサイト>/</loc>
    <priority>1.0</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <url>
    <loc>https://<自分のサイト>/main</loc>
  </url>
</urlset>
`;

export function get(req, res) {
  res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`);
  res.setHeader('Content-Type', 'application/xml');

  const sitemap = render(pages);
  res.end(sitemap);
}
```

index.svelteに以下を追記しておきます。

```
// index.svelte
<script> ... </script>
<script context="module">
	export function preload({}) {
		return this.fetch('sitemap.xml')
	}
</script>
```

あとは、export ( yarn export ) するだけです。

```json
...
"scripts": {
  ...
  "export": "sapper export --legacy --entry '/ /main'"
  ...
}
```

export後、
``__sapper__/export/sitemap.xml``
の生成を確認できます。
