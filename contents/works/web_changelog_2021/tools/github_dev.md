## GitHub Dev (VSCode Web) と GitHub Codespaces
GitHub Dev (VSCode Web) はブラウザ上でVSCodeを起動するためのものです[^vscode_web]。iPadなどのタブレット上からでも利用でき、`https://vscode.dev/` にアクセスするか、GitHub上で「.」を押すことで利用できます。エディタの状態を解除するためのショートカットは存在しませんが、メニュータブ (≡) のGo To Repositoryをクリックして新しくリポジトリを開き直すことはできます。ショートカット一覧はこちら[^github_dev_shortcut]です。

<figure>
  <img src='/images/web_changelog_2021/vscode_web/1.png' width='500' height="500" alt='VSCode Web' />
  <figcaption>VSCode Web</figcaption>
</figure>

<figure>
  <img src='/images/web_changelog_2021/vscode_web/2.png' width='500' height="500" alt='GitHub dev' />
  <figcaption>GitHub dev</figcaption>
</figure>

このツールを利用するメリットはライブラリの中身を見るときにコードジャンプがやりやすいところと、コミットなどもできるので、簡単な修正がやりやすいところだと感じています。他にもWeb対応しているVSCodeの拡張機能も利用できるため、例えば Visual Studio Live Share[^live_share]を使って簡単に共同編集できます。

ターミナルの機能などもWeb上で利用したい場合はGitHub Codespaces[^codespaces]を利用する必要があります。現状だと、GitHub TeamかGitHub Enterprise Cloudでないと利用できませんが、これを使うことで、Web上で開発やビルドをしたり、VSCodeのほとんどの拡張機能が利用したりできます[^codespaces_vscode]。

### 類似サービス・ツール - Stackblitz
このようなWeb上でコードを触れるようなサービスは他にも種類があります。1つはStackblitzのWeb Containerです。Web ContainerはStackblitzの造語で以下の機能[^web_container]を備えているものです。つまり、ブラウザのセキュリティサンドボックス (ブラウザからOSへのアクセスを制限した環境) で動作する開発環境のことを指しているようです (明確な定義がないので間違っている可能性があります)。

- Virtual File System with lazy-loading capabilities
- Virtual Networking
- Multi-threaded/multi-process application support
- Inter-Process communication/process signaling
- POSIX-esque shell with ability to shell out between processes

ブラウザのセキュリティサンドボックスで動作させるため、リモートコンテナを利用するGitHub Codespacesよりも速く動作し、ブラウザ外からのアクセスもできないため、よりセキュアな環境を提供できるようです。こちらで実験できるので、興味のある方は試してみてください[^stackblitz]。ちなみに現在パートナーとの統合を検討しているようで、今勢いのあるVercelやNetlifyと連携できると熱いと感じてます。

<figure>
  <img src='/images/web_changelog_2021/vscode_web/3.png' width='500' height="500" alt='Stackblitzの画面' />
  <figcaption>Stackblitzの画面</figcaption>
</figure>

### 類似サービス - github1s, JetBrains Fleet, Coder
GitHub devが公開される前に出ていたサービスとしてgithub1sがあります。こちらは「github.com」の部分を「github1s.com」に書き換えることでリポジトリをVSCodeで表示できるサービスです[^github1s]。remote-containersというVSCodeのプラグインとGitpodsを使ってホストすることでリモート開発環境が作れるみたいです。詳しくはREADMEに記載されています。

<figure>
  <img src='/images/web_changelog_2021/vscode_web/4.png' width='500' height="500" alt='github1sの画面' />
  <figcaption>github1sの画面</figcaption>
</figure>

JetBrainsの方もJetBrains Fleetというエディタでリモート開発ができる機能を開発中です[^fleet]。Waiting Listには追加してるのですが、まだ招待メールが届いてないので、詳細不明です。その他にもCoderというサービス[^coder]も出てきており、今後もリモート開発環境を支援するサービスやツールが増えてきそうな気配を感じます。

[^vscode_web]: [https://code.visualstudio.com/docs/editor/vscode-web](https://code.visualstudio.com/docs/editor/vscode-web)
[^github_dev_shortcut]: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
[^live_share]: [https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
[^codespaces]: [https://github.com/features/codespaces](https://github.com/features/codespaces)
[^web_container]: [https://github.com/stackblitz/webcontainer-core#key-webcontainer-components](https://github.com/stackblitz/webcontainer-core#key-webcontainer-components)
[^codespaces_vscode]: [https://code.visualstudio.com/docs/remote/codespaces](https://code.visualstudio.com/docs/remote/codespaces)
[^stackblitz]: [https://stackblitz.com/](https://stackblitz.com/)
[^github1s]: [https://github.com/conwnet/github1s](https://github.com/conwnet/github1s)
[^fleet]: [https://www.jetbrains.com/fleet/](https://www.jetbrains.com/fleet/)
[^coder]: [https://coder.com/](https://coder.com/)
