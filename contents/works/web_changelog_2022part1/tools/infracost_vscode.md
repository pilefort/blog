## Infracost VSCode拡張
InfracostはPR作成時にTerraformのコードからインフラのコストを概算するためのツールです[^infracost]。AWS, GCP, Azureに対応し、インフラ変更によりコストがどの程度変化したか、変更後のコストがいくらになったかが分かるようになります[^infracost_cicd]。

この度のリリースで、VSCode拡張がリリースされ、コード編集時にリアルタイムでコスト見積もりができるようになりました[^infracost_vscode]。infracost CLIのインストールとログインが必要ですが、以下のようにリアルタイムでコストの概算を出してくれます。

<figure>
  <img src="/images/web_changelog_2022part1/tools/infracost_t2_micro.png" alt="インスタンスタイプをt2.microにしたときの結果" width="500" height="500" />
  <figcaption>インスタンスタイプをt2.microにしたときの結果</figcaption>
</figure>

<figure>
  <img src="/images/web_changelog_2022part1/tools/infracost_t2_large.png" alt="インスタンスタイプをt2.largeにしたときの結果" width="500" height="500" />
  <figcaption>インスタンスタイプをt2.largeにしたときの結果</figcaption>
</figure>

[^infracost]: [https://www.infracost.io/](https://www.infracost.io/)
[^infracost_cicd]: [https://www.infracost.io/docs/#6-add-to-your-cicd](https://www.infracost.io/docs/#6-add-to-your-cicd)
[^infracost_vscode]: [https://marketplace.visualstudio.com/items?itemName=Infracost.infracost](https://marketplace.visualstudio.com/items?itemName=Infracost.infracost)
