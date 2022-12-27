## その他
### Shopify Hydrogen
　Shopify HydrogenはShopify Storefront APIを使って、ECサイトのフロント部分をフルカスタマイズするためのReactのフレームワークです[^shopify_hydrogen]。Storefront APIはShopifyの全機能が使えるという訳ではありませんが、商品や顧客の管理、商品購入周りなどECサイトで必要な機能を使うことができます[^shopify_getting_started]。

　Shopify Hydrogenは2022年1月4日現在ではまだプレビュー版ですが、バケット追加や商品購入、SNS共有などの一通りの機能を試すことができ、Cloudflare Worker上にデプロイできます[^shopify_deploy]。npxで簡単に開発を始めることもできますし、Stackblitzで試すこともできます[^shopify_stackblitz]。

### Rails 7.0
　Rails 7.0はフロントエンド周りを強化し、Babel, Webpack, Node.jsを使わなくても良くなりました[^rails7]。こちらのDHH氏のブログ[^rails_dhh]にて、どうしてそれらを使わなくて良くなったのかが解説されています。簡単にまとめると以下のようになります。

- 主要ブラウザES6がサポートされたので、Babel不要
- HTTP/2が普及し小さいファイルを大量に送ってもあまり問題ないので、Webpackでまとめる必要なし
- Import mapsでCDN経由でモジュールを取り込めるので、Node.js不要

　その他には、アプリケーションレベルの暗号化 (ActiveRecord::Encryption[^active_record_encryption]) やクエリの並列実行 (Relation#load_async[^relation_async]), 以前まで開発サーバーとして動いていたSpringのデフォルトで無効化などが入りました。

### Refine
　管理画面やダッシュボードなどのデータ集約型アプリケーションを簡単に作ることができるReactのフレームワークです[^refine]。Ant Design System[^ant_design_system]と連携でき、認証周りもオプトインされているフレームワークらしいです。触る時間が作れなかったので、具体的な内容は不明ですが、2021年に1.0と2.0がリリースされました。

### StyleX
　StyleXはFacebookのホームページでも利用されている新しいCSS-in-JSのフレームワークです[^stylex]。styleXでスタイルを当てると、CSSの重複を防ぐようにそのスタイルを含むクラスを生成してくれるそうです。

```jsx
// styleXで記述したもの
const styles = stylex.create({
  base: { position: 'absolute', top: 0, start: 0, end: 0, bottom: 0 },
  active: { position: 'static' }
});

<div className={stylex(styles.base, isActive && styles.active)} />
```

```html
<!-- styleXをビルドしたときの結果, HTML側 -->
<div className="position-abs top-0 start-0 end-0 bottom-0" />
```

```css
.position-abs {
  position: absolute;
}
.top-0 {top: 0; }
.start-0 {left: 0; }
.end-0 {right: 0; }
.bottom-0 {bottom: 0; }
.position-st {
  position: static;
}
```

[^shopify_hydrogen]: [https://hydrogen.shopify.dev/](https://hydrogen.shopify.dev/)
[^shopify_getting_started]: [https://shopify.dev/api/storefront/getting-started](https://shopify.dev/api/storefront/getting-started)
[^shopify_deploy]: [https://shopify.dev/custom-storefronts/hydrogen/deployment](https://shopify.dev/custom-storefronts/hydrogen/deployment)
[^shopify_stackblitz]: [https://hydrogen.new/](https://hydrogen.new/)
[^rails7]: [https://rubyonrails.org/2021/12/15/Rails-7-fulfilling-a-vision](https://rubyonrails.org/2021/12/15/Rails-7-fulfilling-a-vision)
[^rails_dhh]: [https://world.hey.com/dhh/modern-web-apps-without-javascript-bundling-or-transpiling-a20f2755](https://world.hey.com/dhh/modern-web-apps-without-javascript-bundling-or-transpiling-a20f2755)
[^relation_async]: [https://github.com/rails/rails/pull/41372](https://github.com/rails/rails/pull/41372)
[^active_record_encryption]: [https://github.com/rails/rails/pull/41659](https://github.com/rails/rails/pull/41659)
[^refine]: [https://refine.dev/](https://refine.dev/)
[^ant_design_system]: [https://ant.design/docs/spec/introduce](https://ant.design/docs/spec/introduce)
[^stylex]: [https://github.com/ladifire-opensource/stylex](https://github.com/ladifire-opensource/stylex)
