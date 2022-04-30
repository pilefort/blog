---
title: "Next.jsでts-nodeを使う方法"
description: 'Next.jsのプロジェクトでts-nodeを使う方法'
date: '2022-03-21 20:03:55'
---

# 対象読者
- Next.jsでページ生成前に事前にファイル (JSONなど) を作成したい方
- pages配下以外でSSGは使えないが、その代替方法がないか探してる方
- Next.jsのプロジェクトでts-nodeを動かしたい方

# ファイル構造と必要ライブラリ
Next.jsで以下のように、bin配下にts-nodeで実行したいファイルがあるとします。

```text
.
 ├── pages
 |    └── ...
 ├── bin
 |    └── getData.ts
 └── tsconfig.json
 |
 └── ...
```

## 必要なライブラリ
以下を実行して必要なライブラリをインストールします。

```shell
$ yarn add -D ts-node dotenv
```

dotenvはts-nodeで.envの値を読み込むために必要です。

## コード
`bin/getData.ts` にデータを取得して、JSONファイルを作成するためのコードを追記します。

```ts
// #!/usr/bin/env ts-node
import * as fs from 'fs'

import { useGetContentsData } from '../hooks/GetContentsData'

export const main = async () => {
  const data = await useGetContentsData()

  createFileInDataFolder({
    filename: 'data/data.json',
    content: JSON.stringify(data),
  })
}

main()

// フォルダを作成し、その中にファイルを作成するメソッド
const createFileInDataFolder = ({ filename, content }: { filename: string; content: string }) => {
  const folder = 'data'
  if (!fs.existsSync(folder)) fs.mkdirSync(folder)

  fs.writeFileSync(filename, content)
}
```

## ts-nodeの実行方法
ts-nodeの実行は以下で実行します。

```shell
$ ts-node -r dotenv/config --skip-project ./bin/getData.ts && git update-index --skip-worktree -- data/*.json
```

`-r dotenv/config` は.envの値を読み込むために使います。

`--skip-project` はnext.jsのtsconfig.jsonの設定を読み飛ばすために使います。

これを設定しない場合はtsconfig.jsonに`type: 'module'`を設定してくださいなどと警告が出て、ドツボに嵌ります。

最後のgitコマンドは、 新規作成時はコミット可能にし、ファイルが更新されたときは差分を検知しないようにするための設定です。

`git update-index --skip-worktree -- data/*.json`

ちなみに、package.jsonはこのようになってます。

```json
{
  "name": "ts-node-sample-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "yarn fetch:data & next build",
    "start": "next start",
    "fetch:data": "ts-node -r dotenv/config --skip-project ./bin/createCategories.ts && git update-index --skip-worktree -- data/*.json",
    ...
  },
  ...
}
```

## 参考
cf. ts-nodeのインストール、設定方法

https://github.com/TypeStrong/ts-node

cf. ts-nodeでdotenvを使う方法

https://github.com/TypeStrong/ts-node/discussions/1612

cf. --skip-projectを使う理由

https://stackoverflow.com/questions/69580704/nextjs-run-a-typescript-script-on-the-server
