## Gatsby Cloud
GatsbyはReact製のSSGフレームワークです。利用シーンとしてはドキュメントやブログなどで利用されます。Gatsbyは今年からGatsby Cloudというクラウドサービスを開始しました[^gatsby_cloud]。Gatsby v4のアップデートのほとんどもCloudサービスを便利に使うための機能追加です。

Gatsby Cloudの特徴は以下の通りです。

- 豊富な連携先があり、FastlyやAmazon CloudFront, Firebaseなどにもコンテンツを配信できる
- ビルド情報を保持し、ワンクリックで以前のバージョンにロールバックできる
- 一部コンテンツの生成を後回しにできる DSG (Deferred Static Generation) が使える

<figure>
  <img src='/images/web_changelog_2021/gatsby_cloud/dashboard.png' width='550' height="800" alt='Gatsby Cloudのダッシュボード' />
  <figcaption>Gatsby Cloudのダッシュボード</figcaption>
</figure>

<figure>
  <img src='/images/web_changelog_2021/gatsby_cloud/host_integration.png' width='550' height="800" alt='CDN連携先' />
  <figcaption>CDN連携先</figcaption>
</figure>

DSGはコンテンツが多い場合に有効な機能で、アクセス数の少ないページや古いページの生成を実際にアクセスがあるまで、ビルドを遅延させる機能です[^gatsby_dsg]。ページ数が多くないと利便性を感じない機能ですが、Next.jsのISRとはまた異なったアプローチで面白いです。

また現時点ではビルド時のコマンドをカスタマイズできず、`gatsby build`が実行されるような動きをします。コンテンツをsubmoduleで管理してるような人には辛く感じる部分です。

[^gatsby_cloud]: [https://www.gatsbyjs.com/products/cloud/](https://www.gatsbyjs.com/products/cloud/)
[^gatsby_dsg]: [https://www.gatsbyjs.com/docs/how-to/rendering-options/using-deferred-static-generation/](https://www.gatsbyjs.com/docs/how-to/rendering-options/using-deferred-static-generation/)
