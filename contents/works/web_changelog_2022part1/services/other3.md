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
