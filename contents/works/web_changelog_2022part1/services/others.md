## pkg.land
pkg.landは類似のnpmパッケージを検索できるサービスです[^pkg_land]。例えば、expressで検索すると以下のように、koaやfastifyなどが検索結果として表示されます。`npm search <keyword>`で検索しても、これらのフレームワークは出てこないので、どういう仕組みでやってるか気になるところです。

<figure>
  <img src="/images/web_changelog_2022part1/services/pkg.land-search-demo.png" alt="expressで検索したときの結果" width="500" height="500" />
  <figcaption>expressで検索したときの結果</figcaption>
</figure>


## PocketBase
PocketBaseは認証やリアルタイムサブスクリプション、ユーザー管理等を簡単に扱うことができるサービスです[^pocket_base]。認証に関してはメール/パスワード認証だけでなく、OAuth2 (Google, Facebook, GitHub, GitLab) も対応しています。クライアント側のSDKはJavaScriptとDartが対応しており、バックエンド側はGoで拡張できます。

Firebase, Supabase, Nhostなどと違い、Goのフレームワークとしても利用できるため、アプリ固有のビジネスロジックを構築できる点が珍しいです[^pocketbase_as_backend]。

[^pkg_land]: [https://pkg.land/](https://pkg.land/)
[^pocket_base]: [https://pocketbase.io/](https://pocketbase.io/)
[^pocketbase_as_backend]: [https://pocketbase.io/docs/use-as-framework/](https://pocketbase.io/docs/use-as-framework/)

## AutoRegex
AutoRegexは文章で指示した内容から正規表現を生成してくれるサービスです[^autoregex]。例えば、`match valid post number in japan` を正規表現化すると、`^\d{3}-\d{4}$` に変換してくれます。日本の電話番号などの複雑なものは現状難しいですが、簡単に使えるので、正規表現が苦手な人におすすめです。

無料プランとプロプラン ($3.49/月) があり、無料プランでは月10回まで利用できます。プロプランは制限なしで利用でき、正規表現から文章を生成したり、ユニットテストを実施したりできるそうです[^autoregex_plan]。

<figure>
  <img src='/images/web_changelog_2022part1/services/auto-regex-demo.png' alt='AutoRegexで`match valid post number in japan`と指定したときの結果' width='550' height="550" />
  <figcaption>AutoRegexで`match valid post number in japan`と指定したときの結果</figcaption>
</figure>

## Shopify Hydrogen, Oxygen
Shopifyのバックエンド部分だけを使って、フロントをカスタマイズできるShopify Hydrogenが正式リリースになりました[^shopify_hydrogen_ga]。商品購入やカート追加、SNS共有などの機能がコンポーネントとして用意されているため、フロントを自分でカスタマイズし、バックエンドをShopifyにしたい場合に便利です。

Shopify HydrogenはCDN Edge上にデプロイして使われることを想定されてますが、デプロイ先としてCloudflare WorkerやShopify Oxygenを選択できます。Shopify Oxygenの方はShopify Plusプラン ($2,000/月) で利用可能ですが、その他のプランでも今後利用可能になるそうです[^shopify_oxygen]。

[^autoregex]: [https://www.autoregex.xyz/](https://www.autoregex.xyz/)
[^autoregex_plan]: [https://www.autoregex.xyz/plans](https://www.autoregex.xyz/plans)
[^shopify_hydrogen_ga]: [https://twitter.com/ShopifyDevs/status/1539977056502439936](https://twitter.com/ShopifyDevs/status/1539977056502439936)
[^shopify_oxygen]: [https://shopify.dev/custom-storefronts/oxygen](https://shopify.dev/custom-storefronts/oxygen)

## AWS LambdaでURL発行
AWS Lambdaはサーバレスアプリケーションのバックエンドとして利用できますが、その際はAPI Gatewayを設定し、URLを外部に公開する必要があります。この度、API Gatewayを設定しなくても、AWS Lambda自身がURLを発行できるようになりました[^lambda_url]。

発行したURLのアクセス権限については、「認証されたIAMユーザーのみアクセス可能」と「全ユーザーアクセス可能」の2つが設定可能です。URLの形式は「`https://xxxxx.lambda-url.ap-northeast-1.on.aws/`」となります。

## CircleCI 無料枠拡大
1ヶ月あたりのクレジットが2,500から30,000クレジットに増加し、ジョブの同時実行数も1個から30個まで増加しました[^circleci_plan]。これにより、並列テストやcronの実行も無料枠内でできるようになりました。

また今はまだ動きが見えないですが、テストの自動生成ツールを提供するPonicodeを買収してます[^circleci_ponicode]。PonicodeはJavaScript, TypeScript, Pythonのコードを解析し、単体テストを生成するツールで、VSCode用のプラグインも提供されており、関数ごとにテストケースを提案してくれます[^ponicode_vscode]。このPonicodeもCircleCI上に統合されるようで、今後のCircleCIの動きに期待です。

## Storybook Component Encyclopedia
StorybookはUIのコンポーネントカタログを作るためのツールで、アプリのビジネスロジックなどから分離してデザインを管理・テストできます[^storybook]。この度、Storybook Component Encyclopediaとして、Agora, GitHub, Shopifyなど各社のデザインコンポーネントをStorybookでまとめたサイト (showcase) を公開しました[^storybook_showcase]。ボタンやタグ、セレクトボックスなどのコンポーネントごとに、デザインやコードをStorybook上で確認できるようになってます。

## MDN PLUS
MDNのサブスクリプションサービスであるMDN PLUSが日本でも利用可能になりました[^mdn_plus]。現状はフリープランのみですが、特定の記事を登録し、変更があったときに通知する機能が使えます。

[^lambda_url]: [https://aws.amazon.com/jp/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/](https://aws.amazon.com/jp/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/)
[^circleci_plan]: [https://circleci.com/blog/most-generous-free-cicd-plan/](https://circleci.com/blog/most-generous-free-cicd-plan/)
[^circleci_ponicode]: [https://www.ponicode.com/blog/circleci-completes-acquisition-of-ponicode](https://www.ponicode.com/blog/circleci-completes-acquisition-of-ponicode)
[^ponicode_vscode]: [https://marketplace.visualstudio.com/items?itemName=ponicode.ponicode](https://marketplace.visualstudio.com/items?itemName=ponicode.ponicode)
[^storybook]: [https://storybook.js.org/](https://storybook.js.org/)
[^storybook_showcase]: [https://storybook.js.org/showcase/](https://storybook.js.org/showcase/)
[^mdn_plus]: [https://developer.mozilla.org/en-US/plus](https://developer.mozilla.org/en-US/plus)

## Tailwind UI
Tailwind UIはTailwind Labsが公開しているもので、TailwindCSSでUIを組み立てるときに便利なコンポーネントカタログやUIテンプレートをまとめています[^tailwind_ui]。こちらは月額12ドルか、買い切り349ドルで利用できます[^tailwind_ui_plan]。

購入すれば、コンポーネントカタログとテンプレートを見られるようになります。コンポーネントカタログは以下のように、サンプルとそのサンプルに対応するサンプルコードが見られるようになります。サンプルコードはHTML, React, Vueに対応してます。テンプレート[^tailwind_ui_templates]の方はFigmaの素材とサンプルコードをダウンロードできるようになります。

<figure>
  <img src='/images/web_changelog_2022part1/services/tailwind_ui.png' alt='TailwindUIのサンプル (モザイクをかけてます)' width='450' height="450" />
  <figcaption>TailwindUIのサンプル (モザイクをかけてます)</figcaption>
</figure>

[^tailwind_ui]: [https://tailwindui.com/templates](https://tailwindui.com/templates)
[^tailwind_ui_plan]: [https://tailwindui.com/components/marketing/sections/pricing](https://tailwindui.com/components/marketing/sections/pricing)
[^tailwind_ui_templates]: [https://tailwindui.com/templates](https://tailwindui.com/templates)
