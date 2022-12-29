## Berry
バージョン2以降のyarnのことをBerryと呼びます。機能が大きく変わっているため名前が変わりました。パッケージを.yarnフォルダでキャッシュするようになり、yarn1よりも高速でパッケージのインストールやビルドができるようになりました。ちなみに、.yarnフォルダはgit管理を推奨されています (サイズも小さいです)。

またBerryの掲げる目標として、ゼロインストール[^berry_zero_install]という状態があります。これは、プロジェクトをクローンしたら、すぐに動かせるようになる状態のことです。yarn1のときはnpmレジストリから必要なパッケージをnode_modulesにインストールしていましたが、Berryは.yarnフォルダのキャッシュから依存関係を解決するようになります。つまり、ネットに繋がってなくても依存関係を解消でき、プロジェクトを動かすことができます。

このように、yarnのバージョンがプロジェクトごとに変わるような状況が出てくるため、yarn3.1からはパッケージマネージャーのバージョン管理ツール Corepack[^corepack]を組み込むようになりました。これはpackage.jsonにpackageManagerという項目を付けることで、特定バージョンのパッケージマネージャーのみしか動かせないように制限するものです。

```json
{
  "packageManager": "yarn@3.1.0"
}
```

その他にもnpx相当のyarn dlxコマンドや新しいインストールモードのpnpmなどが追加されています。詳しくはyarnのメンテナが書かれたブログを参考にしてください。yarn3.0[^yarn_30], yarn 3.1[^yarn_31]。

ちなみに、バージョン切り替えは以下のようにして簡単に切り替えできます[^yarn_check_version]。実施するときはberryからyarn1.xに戻すために、実行前にyarnのバージョンを確認しておくことをお勧めします。

```shell
# 現在のバージョン確認 (元のバージョンに戻すときに必要なのでメモしておきます)
$ yarn --version
1.22.17
# berryに切り替える
$ yarn set version berry
# 元のバージョンに戻す
$ yarn set version 1.22.17
```

[^berry_zero_install]: [https://yarnpkg.com/features/zero-installs](https://yarnpkg.com/features/zero-installs)
[^corepack]: [https://nodejs.org/api/corepack.html](https://nodejs.org/api/corepack.html)
[^yarn_30]: [https://dev.to/arcanis/yarn-3-0-performances-esbuild-better-patches-e07](https://dev.to/arcanis/yarn-3-0-performances-esbuild-better-patches-e07)
[^yarn_31]: [https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak)
[^yarn_check_version]: [https://yarnpkg.com/cli/set/version](https://yarnpkg.com/cli/set/version)
