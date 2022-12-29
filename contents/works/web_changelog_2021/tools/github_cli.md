## GitHub CLI
GitHub CLIはGitHub上での操作をCLIで実行するためのGitHub公式ツールです[^github_cli]。ローカルで新規にリポジトリを作成、PRの一覧・切り替えやGitHub APIの実行などができます。

近いものでhubというCLIツールがありますが、それをGoで再実装し、GitHubで公式になったものがGitHub CLIです。また、元々hubをメンテナンスしていた方がGitHub CLIの方をメンテナンスするようになったので、hubを使ってる方も移行を考えた方が良さそうです。

### GitHub CLIの概要
GitHub CLIは2, 3年前からありますが、よく知らない人のために、GitHub CLIで使う機会が多い (自分比) コマンドについて紹介します。より詳しい説明やその他のコマンドは[^github_cli_manual]で確認できます。

#### リポジトリの新規作成
`gh repo create`コマンドを使うと、リポジトリを新規作成できます。リポジトリ名や公開範囲はどうするか、.gitignoreは作成するか、ライセンスを追加するかなどが聞かれます。意外と便利です。

```bash
$ gh repo create
? What would you like to do?  [Use arrows to move, type to filter]
> Create a new repository on GitHub from scratch
  Push an existing local repository to GitHub
? Repository name <repository_name>
? Repository description
? Visibility  [Use arrows to move, type to filter]
> Public
  Private
  Internal
? Would you like to add a .gitignore? Yes/No
? Would you like to add a license? Yes/No
? This will create "<repository_name>" as a private repository on GitHub. Continue? Yes
✓ Created repository <user>/<repository_name> on GitHub
? Clone the new repository locally? Yes/No
```

#### リポジトリのPR一覧
`gh pr list`を使うとリポジトリのPR一覧を確認できます。

```bash
$ gh pr list
Showing 1 of 1 open pull request in <user_name>/<repo_name>
#2  <pr_title>  <branch_name>
#3  <pr_title>  <branch_name>
#5  <pr_title>  <branch_name>
//}
```

PRの一覧を確認するだけでなく、チェックアウトしたいPR番号を指定することで、そのリポジトリにチェックアウトできます。gitでいうと`git fetch; git checkout origin/remote_branch -b remote_branch`を簡単にできます。

```bash
$ gh pr checkout 5
```

pecoと組み合わせることで、PR一覧を見ながらワンライナーで切り替えできるようになります。

```bash
$ gh pr checkout $(gh pr list | peco | cut -f 1)
QUERY>                                                      IgnoreCase [1 (1/1)]
2  <pr_title>  <branch_name> OPEN
3  <pr_title>  <branch_name> OPEN
5  <pr_title>  <branch_name> OPEN
```



#### GitHub API
GitHubのAPI v3 (REST API) やv4 (GraphQL) も使うことができます。例えば、リポジトリに存在するブランチ名一覧を取得したい場合は、以下のように書くことで取得できます。ここでは、`--template`オプションをつけることで出力を整形し、nameごとに改行してます。このようなGitHub APIをそのまま叩くのは不便ですが、GitHub Extensionsと組み合わせることで、効果的にGitHub APIを使うことができます。

```bash
$ gh api graphql -f
  query='{
    repository(owner: "<user>", name: "<repository_name>") {
      refs(first: 50, refPrefix:"refs/heads/") {
        nodes {
          name
        }
      }
    }
  }'
  --template '{{- range .data.repository.refs.nodes -}}{{- .name | printf "%s\\n" -}}{{- end -}}'

  <branch_name1>
  <branch_name2>
```

### GitHub Extension
2021年にリリースされたGitHub CLI v2.0からGitHub Extensionという機能が使えるようになりました。これはShellやバイナリコードをghの拡張コマンドに組み込める機能です。`gh extension create`コマンドで雛形を作成できます。作成後は`gh-<コマンド名>`のブランチを作成し、`gh extension install <username>/<branch>`でインストールできます。

例えば、gh-branchという名前で以下のようなExtensionを書くと、GitHub APIを手打ちする代わりに`gh branch`コマンドとして、リポジトリに存在するブランチ一覧と各ブランチの最新のコミットメッセージを表示し、インクリメンタルにブランチ切り替えができます。ちなみに、ownerやrepoなどの引数はコマンド実行時に入ります。

```shell
#!/bin/bash
set -e

remote_branch=$(gh api graphql -F owner='{owner}' -F repo='{repo}' -f query='
query ($owner: String!, $repo: String!) {
  repository(owner: $owner, name: $repo) {
    refs(first: 50, refPrefix: "refs/heads/") {
      nodes {
        name
        target {
          ... on Commit {
            history(first: 1) {
              edges {
                node {
                  message
                }
              }
            }
          }
        }
      }
    }
  }
}' --template '
{{- range .data.repository.refs.nodes -}}
  {{- .name | printf "%-30s\t" -}}
  {{- range .target.history.edges -}}
    {{- .node.message | printf "%-50s\n" -}}
  {{- end -}}
{{- end -}}
' | peco | cut -f 1)

git checkout origin/$remote_branch
```

[^github_cli]: [https://cli.github.com/](https://cli.github.com/)
[^github_cli_manual]: [https://cli.github.com/manual/](https://cli.github.com/manual/)
