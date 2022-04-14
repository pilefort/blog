---
title: "高速なリポジトリ移動、PR切り替えを実現する方法"
description: "ワンライナーでリポジトリを参照したり、PRの切り替えができるようになります"
date: "2021-04-13 21:32:08"
---

# 対象
- GitHubのプロジェクトが霧散し、どこに何があるか毎回探すのに時間がかかる方
- GitHubのブラウザを確認せずに、PRのチェックアウトをしたい方
- ワンライナーが大好きな方
- pecoが好きな方

# 必要なもの
peco
これは、インクリメンタル検索をするのに使います。
https://github.com/peco/peco

ghq
これは、フォルダをリスト表示をするのに使います
https://github.com/x-motemen/ghq

GitHub CLI
これは、hubのGo再実装が公式になったNTR感ある、GitHubの公式ライブラリです。
PRやissueをCLIで確認するのに使います。
https://github.com/cli/cli

いっぺんにインストールしましょう。

```bash
brew install peco ghq gh
```

## ghq初期設定
ghqのrootディレクトリを以下のように設定します。
rootディレクトリは複数設定することもできます。

```
# ~/.gitconfig
[ghq]
	root = ~/<GitHubのプロジェクトが存在する大元のディレクトリ>
	root = ~/ghq
```

# ローカルのGitHubプロジェクトを探す
以下を実行することで、インクリメンタルにGitHubプロジェクトを探すことができます。
私はAlfredに、このスニペットを登録し、!cdで入力されるようにしています。
rootを複数設定している場合もこちらで対応できます。

```bash
cd $(ghq list --full-path | peco)
```

# GitHubのPRをインクリメンタルに検索しチェックアウトする
ローカルのGitHubプロジェクトがあるディレクトリで実行します。
gh pr listでPRのリストが一覧表示され、pecoでインクリメンタルに検索します。
cut -f 1 にすることで、PRの番号を切り取り、gh pr checkout `<PR番号>` でチェックアウトできます。

```bash
gh pr checkout $(gh pr list | peco | cut -f 1)
```

以上
