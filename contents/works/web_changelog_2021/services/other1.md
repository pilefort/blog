## その他
### GitHub Package Container
　GitHub ContainerはDocker Hubの無料枠の制限が発表された後に、GitHubから発表されたサービスでコンテナを公開・管理・利用するためのサービスです[^github_container_package]。ghcr.ioにイメージの保存ができます。

### Deno Deploy
　Deno DeployはDenoの分散ホスティングサービスです[^deno_deploy]。Denoで作成したアプリケーションをデプロイするだけでなく、Denoの機能を試せるPlaygroundなどが使えます。Denoは今年Nodejs互換モードも発表され、より使いやすくなり、利用者も増えそうな印象です[^denoland_nodejs]。ちなみに、`"node".split("").sort().join("")`でdenoです。

### Apigee
　ApigeeはAPIの管理、保護、分析、スケーリングをするためのサービスです[^apigee]。APIにレートリミットをかけたり、収益化したり[^apigee_manetize]、APIトラフィックが多くなる時間帯やレスポンス時間などを分析できるようです[^apigee_analytic]。

### HeatWave
　Oracleが提供するサービスで、MySQLの並列処理や処理速度を向上させるものだそうです[^heatwave]。Amazon Redshiftの6.5倍、Amazon Auroraの1400倍高速になるらしいです。

### Amazon CloudFront Functions
　Lambda@Edgeより手前で、単純なHTTPリクエストやレスポンスを返すためのサービスです[^cloudfront_function]。対応言語はECMAScript 5.1対応のJavaScriptのみで、最大実行時間は1 ms, 配置できるパッケージのサイズは10 KBで、URLの書き換えやA/Bテスト、JWTトークン認証などで使うことを想定しているようです。

### Google Open Source
　ライブラリの依存関係をグラフで確認できるサービスです[^google_open_source]。

[^github_container_package]: [https://github.blog/2021-06-21-github-packages-container-registry-generally-available/](https://github.blog/2021-06-21-github-packages-container-registry-generally-available/)
[^deno_deploy]: [https://deno.com/deploy](https://deno.com/deploy)
[^denoland_nodejs]: [https://deno.land/std@0.121.0/node#deno-nodejs-compatibility](https://deno.land/std@0.121.0/node#deno-nodejs-compatibility)
[^apigee]: [https://cloud.google.com/apigee](https://cloud.google.com/apigee)
[^apigee_manetize]: [https://docs.apigee.com/api-platform/monetization/basics-monetization](https://docs.apigee.com/api-platform/monetization/basics-monetization)
[^apigee_analytic]: [https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-services-overview](https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-services-overview)
[^heatwave]: [https://www.oracle.com/mysql/heatwave/](https://www.oracle.com/mysql/heatwave/)
[^cloudfront_function]: [https://aws.amazon.com/jp/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale/](https://aws.amazon.com/jp/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale/)
[^google_open_source]: [https://opensource.googleblog.com/2021/06/introducing-open-source-insights-project.html](https://opensource.googleblog.com/2021/06/introducing-open-source-insights-project.html)
