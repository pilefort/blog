## zx
　zxはGoogleが提供するJavaScriptでシェルスクリプトをラップして書くことができるツールです[^zx]。Top Level Awaitが使えるように、`xx.mjs`ファイルを作成し、以下のように使うことができます。

```javascript
// index.mjs
import {$} from 'contents/tools/zx'

await $`ls`;
await $`pwd`;
await $`git branch`;
await Promise.all([
  $`sleep 1; echo 1`,
  $`sleep 2; echo 2`
])
```

![zxでの実行結果](/images/web_changelog_2021/zx/sample.png)

　Shellでお馴染みのcdを実行するためのcd()メソッドや一定時間処理を止めるためのsleepメソッド、シェルスクリプトの | の代わりとなる pipe()メソッドなども用意されています。

[^zx]: [https://github.com/google/zx](https://github.com/google/zx)
