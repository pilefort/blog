## Render
Renderは2021年の初め頃にリリースされたWebアプリを簡単にデプロイするためのサービスです[^render]。似たようなサービスとしてHerokuやRailwayなどがありますが、こちらはDockerfileを認識して環境を作成してくれます。ちなみに、HerokuでDockerfileを認識させるにはheroku.ymlの修正が必要です[^heroku_docker]がRenderはデプロイ時の設定でDockerfileを選択できます。

Webアプリだけでなく、静的サイトやcron job, DBなども作成できます。DBについてはPostgreSQLだけでなく、MongoDBやMySQLもRenderが用意しているリポジトリ[^render_mysql_sample]を使って作成できます。その他にもRedisやSidekiqなどもRenderのリポジトリにDockerfileや設定ファイルのサンプルがあり利用できます。

<figure>
  <img src='/images/web_changelog_2021/render/create.png' width='350' height="350" alt='Renderでホストできるもの' />
  <figcaption>Renderでホストできるもの</figcaption>
</figure>

アプリを作成すると、以下のようなダッシュボードが表示されます。一部有料機能もありますが、アプリのデプロイ状況の確認、環境変数の設定、PRごとにURL生成、DockerfileのCMDの上書きなどは無料でできます (Shellの利用は有料枠です)。

<figure>
  <img src='/images/web_changelog_2021/render/dashboard.png' width='550' height="550" alt='Renderのダッシュボード' />
  <figcaption>Renderのダッシュボード</figcaption>
</figure>

PRごとのURL生成では、以下のようにコミットを追加するたびにRenderのURLが発行され、変更を確認できる機能です。バックエンド側でこれができるのは面白い点だと思います。Herokuにも似たような機能[^heroku_github_integration]が追加されましたが、Renderではワンクリックで有効にできます。

東京リージョンはまだありませんが、ロードマップ[^render_roadmap]を見る限り対応中のようです。他にも今後追加される機能などもロードマップで確認できます。

<figure>
  <img src='/images/web_changelog_2021/render/preview.png' width='450' height="450" alt='PRごとのURL生成' />
  <figcaption>PRごとのURL生成</figcaption>
</figure>

### 類似サービス - Railway
2020年の12月ぐらいにRailwayというサービスも出てきました[^railway]。こちらはHerokuと同じBuildpack[^buildpack]を使ってゼロコンフィグでアプリの動作環境を構築してくれます。ただし、Dockerfileがある場合はそちらを優先してビルドしてくれます。

こちらのサービスはプラグインとして、MySQLやPostgreSQL, Redis, MongoDBを後から追加できます。Renderでは別々のダッシュボードで管理しますが、Railwayでは1つのダッシュボードでアプリとDBを管理できます。ちなみに、ダッシュボードはデフォルトでダークモードで変更できません。

<figure>
  <img src='/images/web_changelog_2021/railway/plugin.png' width='450' height="450" alt='plugin追加の選択肢' />
  <figcaption>plugin追加の選択肢</figcaption>
</figure>

<figure>
  <img src='/images/web_changelog_2021/railway/dashboard.png' width='450' height="450" alt='Railwayのアプリのダッシュボード' />
  <figcaption>Railwayのアプリのダッシュボード</figcaption>
</figure>

RailwayもコミットごとにPRを作成できます。また、サーバーサイドはRailwayを使いつつ、フロントはVercelを使うというやり方もできるようです。サンプルアプリも豊富にあります[^railway_sample]。

<figure>
  <img src='/images/web_changelog_2021/railway/pr.png' width='450' height="450" alt='コミットごとのURL生成' />
  <figcaption>コミットごとのURL生成</figcaption>
</figure>

<figure>
  <img src='/images/web_changelog_2021/railway/vercel-connect.png' width='450' height="450" alt='Vercel連携' />
  <figcaption>Vercel連携</figcaption>
</figure>

[^render]: [https://render.com/](https://render.com/)
[^render_roadmap]: [https://feedback.render.com/](https://feedback.render.com/)
[^render_mysql_sample]: [https://github.com/render-examples/mysql](https://github.com/render-examples/mysql)
[^heroku_github_integration]: [https://devcenter.heroku.com/articles/github-integration-review-apps](https://devcenter.heroku.com/articles/github-integration-review-apps)
[^heroku_docker]: [https://devcenter.heroku.com/articles/build-docker-images-heroku-yml](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml)
[^railway]: [https://railway.app/changelog/2021-12-31](https://railway.app/changelog/2021-12-31)
[^buildpack]: [https://devcenter.heroku.com/ja/articles/buildpacks](https://devcenter.heroku.com/ja/articles/buildpacks)
[^railway_sample]: [https://github.com/railwayapp/starters/tree/master/examples](https://github.com/railwayapp/starters/tree/master/examples)
