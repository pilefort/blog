## GitHub Copilot
GitHub CopilotはGitHubユーザーのコードを利用して、ユーザーが書きたいコードを予測して提案してくれるツールです[^copilot]。現在 VSCode, InteliJ, NeoVim用のプラグインが用意されており、Waiting Listに追加して利用できます。

使ってみると以下のような感じで候補を提案してくれます。面白いツールですが、著作権的にどうなんだという問題も出ているようで、今後どうなるか注目です。

<figure>
  <img src="/images/web_changelog_2021/copilot/1.png" alt="copilotが提案するコード例" width="500" height="500" />
  <figcaption>copilotが提案するコード例 (追記: 2022.1.1にアップデートして再度試すと候補の数が少なくなってたので、何かしらの規制が入ったかもしれません。設定ミスの可能性もありますが)</figcaption>
</figure>


### 類似ツール - Tabnine
コード補完ツールとして、他にTabnineというものが存在します[^tabnine]。Tabnineは記述しているソースコードから、次に書きたいものを予測して補完候補を出してくれるツールです。Tabnine Cloudを使うとコードが一時的にクラウド上に保存されますが (すぐに破棄される)、通常の利用ではローカルで完結するため、セキュリティ的にも安心です。

[^copilot]: [https://copilot.github.com/](https://copilot.github.com/)
[^tabnine]: [https://www.tabnine.com/](https://www.tabnine.com/)
