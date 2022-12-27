## AWS App Runner
　AWS App RunnerはAWSが提供する簡単にアプリケーションをデプロイできるコンテナサービスです[^app_runner]。Renderに近いサービスでGitHub連携もでき、コミットするごとにアプリケーションをデプロイできます。その他にも、Auto Scalingやヘルスチェックの設定もでき、AWS KMSを使ってキーを暗号化して使うこともできます。

<figure>
  <img src='/images/web_changelog_2021/app_runner/setting1.png' width='550' height="800" alt='AWS App Runnerでのリポジトリ接続' />
  <figcaption>AWS App Runnerでのリポジトリ接続</figcaption>
</figure>

<figure>
  <img src='/images/web_changelog_2021/app_runner/setting2.png' width='450' height="800" alt='AWS App Runnerでの設定項目' />
  <figcaption>AWS App Runnerでの設定項目</figcaption>
</figure>

　RenderやRailwayのようにDockerfileを認識してアプリケーションを作ることはできないみたいですが、以下のような`apprunner.yaml`を作成して環境を記述します。ランタイムにはPython3とNodejs12を指定でき、ドキュメントは見当たらないですが、それ以外は設定できなさそうです。ただ、Java[^app_runner_java]やPHP[^app_runner_php]、Ruby[^app_runner_ruby]のサポートも追加される予定です。

```yaml
version: 1.0
runtime: python3
build:
  commands:
    build:
    - yum install -y pycairo
    - pip install -r requirements.txt
run:
  command: python app.py
  network:
    port: 8000
```

[^app_runner]: [https://aws.amazon.com/jp/blogs/containers/introducing-aws-app-runner/](https://aws.amazon.com/jp/blogs/containers/introducing-aws-app-runner/)
[^app_runner_java]: [https://github.com/aws/apprunner-roadmap/issues/16](https://github.com/aws/apprunner-roadmap/issues/16)
[^app_runner_php]: [https://github.com/aws/apprunner-roadmap/issues/31](https://github.com/aws/apprunner-roadmap/issues/31)
[^app_runner_ruby]: [https://github.com/aws/apprunner-roadmap/issues/27](https://github.com/aws/apprunner-roadmap/issues/27)
