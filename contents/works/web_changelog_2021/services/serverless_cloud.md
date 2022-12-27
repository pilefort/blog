## Serverless Cloud
　Serverless CloudはServerless Frameworkを提供するServerless社のクラウドサービスです[^serverless_cloud]。このサービスはインフラの設定なし (serverless.ymlなどのインフラ設定なし) で、サービスを提供できることを目的にしており、Serverlessサービスに特化したHerokuのようなサービスです。

　使い方はダッシュボードからアプリを作るか、Serverlessの提供するCLI[^serverless_cli]からアプリを作成、起動して使います。動作確認などはServerless Cloudに接続してするため、オフラインでの開発はできません[^serverless_cloud_offline]。Serverless Cloudでは、ローカルのコードを編集するとクラウド上に反映されるため、開発中のアプリと本番に出すものが同じになることが保証されます。

<figure>
  <img src='/images/web_changelog_2021/serverless/dashboard.png' width='550' alt='Serverless Cloudのダッシュボード' />
  <figcaption>Serverless Cloudのダッシュボード</figcaption>
</figure>

<figure>
  <img src='/images/web_changelog_2021/serverless/cli.png' width='550' alt='cloudコマンド実行時の画面' />
  <figcaption>cloudコマンド実行時の画面</figcaption>
</figure>

　またダッシュボード上でAPIの実行回数や追加したAPIのRoutes、エラー、アクセスログなども確認できます。サンプルとして、TODOアプリやチャットアプリ、URLの短縮、ステータス確認などが用意されています[^serverless_cloud_sample]。

<figure>
  <img src='/images/web_changelog_2021/serverless/dashboard2.png' width='550' alt='Serverless Cloudのダッシュボード上でのモニタリング' />
  <figcaption>Serverless Cloudのダッシュボード上でのモニタリング</figcaption>
</figure>

　Serverless Cloudに組み込まれる予定のServerless Console[^serverless_console]についても簡単に紹介します。こちらは、複数のAWS環境 (開発、ステージング、本番など) を一元管理するための管理画面で、各環境に対して、ユーザーやグループ単位で権限を決められる機能だそうです。また、関数の実行回数やエラーの発生状況なども確認できるようで、まだプレビュー版で触れないですが、リリースが楽しみな機能です。

<figure>
  <img src='/images/web_changelog_2021/serverless/console.png' width='450' alt='Serverless Consoleでのモニタリング画面' />
  <figcaption>Serverless Consoleでのモニタリング画面</figcaption>
</figure>

　その他にも、Serverless Framework v3βの提供も今年から始まりました[^serverless_v3]。Serverlessアプリケーションをインタラクティブに作成できる機能やコンソール画面の簡素化などのアップデートに加え、一部構文が変わったりしています。例えば、serviceセクションの書き方などです。v3で廃止される項目[^serverless_v3_deprecated]などもあるので、使っている方は確認してみてください。v3は2022年に正式リリースです。

<figure>
  <img src='/images/web_changelog_2021/serverless/init.png' width='350' alt='Serverless v3βで追加されたserverlessコマンド' />
  <figcaption>Serverless v3βで追加されたserverlessコマンド</figcaption>
</figure>

```yaml
# Deprecated in v2, removed in v3:
service:
  name: my-service

# Correct syntax:
service: my-service
```

[^serverless_cloud]: [https://www.serverless.com/blog/introducing-serverless-cloud-public-preview](https://www.serverless.com/blog/introducing-serverless-cloud-public-preview)
[^serverless_cli]: [https://www.serverless.com/cloud/docs/cli](https://www.serverless.com/cloud/docs/cli)
[^serverless_cloud_offline]: [https://github.com/serverless/cloud/issues/26](https://github.com/serverless/cloud/issues/26)
[^serverless_console]: [https://www.serverless.com/blog/introducing-serverless-console](https://www.serverless.com/blog/introducing-serverless-console)
[^serverless_cloud_sample]: [https://github.com/serverless/cloud/tree/main/examples](https://github.com/serverless/cloud/tree/main/examples)
[^serverless_v3]: [https://www.serverless.com/blog/serverless-framework-v3-beta](https://www.serverless.com/blog/serverless-framework-v3-beta)
[^serverless_v3_deprecated]: [https://www.serverless.com/framework/docs/deprecations](https://www.serverless.com/framework/docs/deprecations)
