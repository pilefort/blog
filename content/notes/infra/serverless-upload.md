---
title: "Serverless Frameworkでサーバレスアプリをデプロイする方法"
description: "サーバレスアプリを実装、ローカルで実験、デプロイできるツールであるServerless Frameworkの使い方を紹介します。"
date: "2021-05-16 18:37:42"
---

# Serverless Frameworkとは
Serverless Frameworkはサーバレスアプリケーションを作成、デプロイするためのツールです。

デプロイ先はAWSやAzureだけでなく、Cloudflare、Kubelessなどにもデプロイできるそうです。

cf. https://github.com/serverless/serverless/tree/master/docs/providers

# セットアップ方法
基本的には[こちら](https://www.serverless.com/framework/docs/providers/aws/guide/installation/)に書かれた方法でセットアップできます。

```terminal
$ npm install -g serverless
$ serverless --version
Framework Core: 2.57.0
Plugin: 5.4.4
SDK: 4.3.0
Components: 3.17.0
```

# デプロイ
使用できるテンプレートの一覧は以下で確認できます (大量のテンプレートがあります)。

```terminal
$ sls create --help
Template for the service. Available templates:
"aws-clojure-gradle", "aws-clojurescript-gradle", "aws-nodejs", "aws-nodejs-docker", "aws-nodejs-typescript", "aws-alexa-typescript", "aws-nodejs-ecma-script", "aws-python","aws-python3", "aws-python-docker", "aws-groovy-gradle", "aws-java-maven", "aws-java-gradle", "aws-kotlin-jvm-maven", "aws-kotlin-jvm-gradle", "aws-kotlin-jvm-gradle-kts", "aws-kotlin-nodejs-gradle", "aws-scala-sbt", "aws-csharp", "aws-fsharp", "aws-go", "aws-go-dep", "aws-go-mod", "aws-ruby", "aws-provided", "tencent-go", "tencent-nodejs", "tencent-python", "tencent-php", "azure-csharp", "azure-nodejs", "azure-nodejs-typescript", "azure-python", "cloudflare-workers", "cloudflare-workers-enterprise", "cloudflare-workers-rust", "fn-nodejs", "fn-go", "google-nodejs", "google-nodejs-typescript", "google-python", "google-go", "kubeless-python", "kubeless-nodejs", "knative-docker", "openwhisk-java-maven", "openwhisk-nodejs", "openwhisk-php", "openwhisk-python", "openwhisk-ruby", "openwhisk-swift", "spotinst-nodejs", "spotinst-python", "spotinst-ruby", "spotinst-java8", "twilio-nodejs", "aliyun-nodejs", "plugin","hello-world"
```

それでは、typescriptでAWSにデプロイするためのテンプレートを作成してみます。

```terminal
$ sls create --template aws-nodejs-typescript --path <project_name>
Serverless: Generating boilerplate...
Serverless: Generating boilerplate in "/Users/kusakabe/projects/serverless-sample/test"
 _______                             __
|   _   .-----.----.--.--.-----.----|  .-----.-----.-----.
|   |___|  -__|   _|  |  |  -__|   _|  |  -__|__ --|__ --|
|____   |_____|__|  \___/|_____|__| |__|_____|_____|_____|
|   |   |             The Serverless Application Framework
|       |                           serverless.com, v2.57.0
 -------'

Serverless: Successfully generated boilerplate for template: "aws-nodejs-typescript"
```

cf. https://www.serverless.com/framework/docs/providers/aws/cli-reference/create/

## serverless.tsの設定
こんな感じのファイルが作成されます。
他の言語でテンプレートを作成すると、serverless.ymlになります。
基本的な書き方は以下を参考にすると良いです。
cf. https://www.serverless.com/framework/docs/providers/aws/guide/intro/

```typescript:title=serverless.ts
import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
		service: '<project_name>',
		frameworkVersion: '2',
		custom: {
				webpack: {
						webpackConfig: './webpack.config.js',
						includeModules: true,
				},
		},
		plugins: ['serverless-webpack'],
		provider: {
				name: 'aws',
				runtime: 'nodejs14.x',
				apiGateway: {
						minimumCompressionSize: 1024,
						shouldStartNameWithService: true,
				},
				environment: {
						AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
				},
				lambdaHashingVersion: '20201221',
		},
		// import the function via paths
		functions: { hello },
};

module.exports = serverlessConfiguration;
```

### 入れておくと良いプラグイン
以下のサイトで使用できるプラグインを確認できます。
https://www.serverless.com/plugins

serverless-offlineはローカルでserverlessアプリを動かすのに使います。
serverless-dotenv-pluginはdotenvを使うためのプラグインです。

他にもデプロイ済みのものと、デプロイ前のものの差分を表示する serverless-plugin-diff などもありますが、 こちらは1.xでのみ対応で2.xや3.xでは利用できません。

```diff-highlight-typescript
- plugins: ['serverless-webpack'],

+ plugins: ['serverless-webpack', 'serverless-offline', 'serverless-dotenv-plugin'],
```

## デプロイ
dry runを実行したいところですが、残念ながらServerlessにはその機能はありません。
前までは--noDeployというオプションがありましたが、削除されました。。

気を取り直して、以下でデプロイします。

```terminal
$ sls deploy --stage <デプロイする環境 dev|staging|production> --aws-profile <aws_profile>
```

## 削除
削除は以下でできます。

```terminal
$ sls remove --stage <デプロイする環境 dev|staging|production> --aws-profile <aws_profile>
```

以上。

## 追記予定の記事
Serverlessでのコンテナデプロイの方法
