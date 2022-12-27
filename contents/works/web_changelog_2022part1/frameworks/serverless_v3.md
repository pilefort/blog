## Serverless Framework v3
　Serverless FrameworkはAWS LambdaやAPI Gatewayなどを用いてサーバレス環境を構築するための開発やデプロイをするためのツールです。この度、v3が正式にリリースされました[^serverless_V3]。

　特徴的な追加はserverlessコマンドでインタラクティブにアプリのセットアップができるようになったことと、stageパラメーターで、環境ごとにパラメーターを設定できるようになったことです。

![serverlessコマンドでインタラクティブに設定可能](/images/web_changelog_2022part1/frameworks/serverless-command-sample.png)

```yaml
# serverless.yml
# 環境ごとにドメインを変える例
service: myapp
 
provider:
  name: aws
  environment:
    APP_DOMAIN: ${param:domain}
 
params:
  prod:
    domain: myapp.com
  dev:
    domain: preview.myapp.com
```

　v3はv2やv1との互換性がなく、一部パラメーターの修正が必要だったり、プラグインが使えなかったりするので、アップデートする際はその辺りも調査する必要があります。プラグインの対応状況は脚注先のURLで確認できます[^serverless_plugins]。

[^serverless_V3]: [https://www.serverless.com/blog/serverless-framework-v3-is-live](https://www.serverless.com/blog/serverless-framework-v3-is-live)
[^serverless_plugins]: [https://www.serverless.com/plugins](https://www.serverless.com/plugins)
