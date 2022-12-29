## VSCode Server
ブラウザで利用できるVSCode for Web[^vscode_dev]をローカルや仮想マシンにインストールして、利用可能になりました[^vscode_server]。インストール後は以下のコマンドでローカルでVSCode webを起動できます。

```shell
❯ code-server serve-local --host 0.0.0.0
[2022-09-02 01:08:44] info Downloading VS Code server 
...
Server bound to 0.0.0.0:8000 (IPv4)
Extension host agent listening on 8000

Web UI available at http://localhost:8000/?tkn=167cf753-c741-4db4-82b0-af3711424916
...
```

<figure>
  <img src="/images/web_changelog_2022part1/tools/vscode-server.png" alt="VSCode Serverの実行例" width="500" height="500" />
  <figcaption>VSCode Serverの実行例</figcaption>
</figure>


[^vscode_dev]: [https://vscode.dev/](https://vscode.dev/)
[^vscode_server]: [https://code.visualstudio.com/blogs/2022/07/07/vscode-server](https://code.visualstudio.com/blogs/2022/07/07/vscode-server)
