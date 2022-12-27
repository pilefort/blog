## AutoRegex
　AutoRegexは文章で指示した内容から正規表現を生成してくれるサービスです[^autoregex]。例えば、`match valid post number in japan` を正規表現化すると、`^\d{3}-\d{4}$` に変換してくれます。日本の電話番号などの複雑なものは現状難しいですが、簡単に使えるので、正規表現が苦手な人におすすめです。

　無料プランとプロプラン ($3.49/月) があり、無料プランでは月10回まで利用できます。プロプランは制限なしで利用でき、正規表現から文章を生成したり、ユニットテストを実施したりできるそうです[^autoregex_plan]。

<figure>
  <img src='/images/web_changelog_2022part1/services/auto-regex-demo.png' alt='AutoRegexで`match valid post number in japan`と指定したときの結果' width='550' />
  <figcaption>AutoRegexで`match valid post number in japan`と指定したときの結果</figcaption>
</figure>

## Shopify Hydrogen, Oxygen
　Shopifyのバックエンド部分だけを使って、フロントをカスタマイズできるShopify Hydrogenが正式リリースになりました[^shopify_hydrogen_ga]。商品購入やカート追加、SNS共有などの機能がコンポーネントとして用意されているため、フロントを自分でカスタマイズし、バックエンドをShopifyにしたい場合に便利です。

　Shopify HydrogenはCDN Edge上にデプロイして使われることを想定されてますが、デプロイ先としてCloudflare WorkerやShopify Oxygenを選択できます。Shopify Oxygenの方はShopify Plusプラン ($2,000/月) で利用可能ですが、その他のプランでも今後利用可能になるそうです[^shopify_oxygen]。

[^autoregex]: [https://www.autoregex.xyz/](https://www.autoregex.xyz/)
[^autoregex_plan]: [https://www.autoregex.xyz/plans](https://www.autoregex.xyz/plans)
[^shopify_hydrogen_ga]: [https://twitter.com/ShopifyDevs/status/1539977056502439936](https://twitter.com/ShopifyDevs/status/1539977056502439936)
[^shopify_oxygen]: [https://shopify.dev/custom-storefronts/oxygen](https://shopify.dev/custom-storefronts/oxygen)
