## Remix Stacks
　RemixはCDN Edge上でSSRするためのReactのフロントエンドフレームワークです (React Routerの開発者が主導してます)。この度、Remixを使ったウェブアプリケーションの開発に便利なテンプレート、Remix Stacksがリリースされました[^remix_stacks]。

　テンプレートはPOC用アプリを開発するためのIndie Stack (SQLiteとNode.jsを使用)、Indie Stackを本番用にアップグレードしたBlue Stack (Postgre SQLとNode.jsを使用)、AWSでRemixアプリケーションを開発するためのGrunge Stack (DynamoDBとNode.js (サーバレス) を使用)の3種類から利用できます。

　DB操作はprisma, CSSフレームワークはTailwindCSS、開発・テストツールはTypeScript, Prettier, ESLint, Cypress, MSW, Dockerなどが標準でセットアップされてるそうです[^remix_stacks_build_in_stack]。

[^remix_stacks]: [https://remix.run/blog/remix-stacks](https://remix.run/blog/remix-stacks)
[^remix_stacks_build_in_stack]: [https://remix.run/blog/remix-stacks#built-in-stacks](https://remix.run/blog/remix-stacks#built-in-stacks)
