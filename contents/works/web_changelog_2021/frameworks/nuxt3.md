## Nuxt3
　Nuxt3はVue3.xが使えるVueのフレームワークです。Vue3.xではdata, computed, mounted,  methodなどをsetup関数内で書けるようになったComposition API[^composition_api]や複数のルートノード (template) が使えるFragments[^nuxt3_fragments], モーダルの作成に便利なTeleport[^nuxt3_teleport]などが使えるようになりました。その他の新機能についてはこちら[^nuxt3_features]で確認できます。

　以下ではNuxt3になってできるようになった機能について説明します。

### TypeScript
　Nuxt3からはデフォルトでTypeScriptが使えるようになりました[^nuxt3_ts]。StoreやPlugin周りのだけでなく、Vueファイル内でも`<script lang="ts">`を指定することでTypeScriptを使うことができます。設定ファイルで以下を追記することで、型をより安全にできます。

```javascript
export default defineNuxtConfig({
  typescript: {
    strict: true
  }
})
```

### APIのサポート
　Nuxt3からはNextjsのようなAPIを作れるようになりました。ルートディレクトリにserver/api/xxx.tsファイルを作成し、関数をexportすることで利用できます。すべてのリクエストで実行したい処理があるときは、server/middleware/xxx.tsファイルを作成することで処理できます。

```tsx
// ~/server/api/count.ts
let counter = 0
export default () => {
  counter++
  return JSON.stringify(counter)
}
```

```bash
$ curl localhost:3000/api/count
1
```

### CDN Edge上でのSSR
　Nuxt3は設定ファイルにデプロイ形式を指定でき、AWS LambdaやCloudflare Worker上に簡単にデプロイできるようになりました。以前まではExpress上にNuxtを起動できないと無理だった部分が、Nuxtだけでできるようになりました[^nuxt3_preset]。

```tsx
// AWS Lambda, Netlify Function用にビルドしたいとき
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    preset: 'lambda'
  }
})
```

```tsx
// Cloudflare Workerで動くようにビルドしたいとき
export default defineNuxtConfig({
  nitro: {
    preset: 'worker'
  }
}
```

### Nuxt2から3への緩やかな移行を支援する Nuxt Bridge
　Nuxt3では従来のプラグインやモジュールを引き継いで動かすことができるそうです。Nuxt2でVue3.xのComposition APIを有効にしたり、Nuxt3の新しいサーバーエンジンであるNitroを試したりできるそうです[^nuxt3_bridge]。

```tsx
// nuxt/bridgeをインストールして、nuxt.config.js で設定して使う

import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Your existing configuration
})
```

### 今後の展開
　GitHubのリポジトリのDiscussionにて、パスごとにビルド方式を変える機能が議論されています[^nuxt3_path_build]。ホスティングサービスにデプロイしたとして、どうやって動かすかは分かりませんが、個人的に面白い機能だと感じました。

```tsx
export default defineNuxtConfig({
  routes: {
    '/': { prerender: true }, // Once per build (via builder)
    '/blog/*': { static: true }, // Once on-demand per build (via lambda)
    '/stats/*': { swr: '10 min' }, // Once on-demand each 10 minutes (via lambda)
    '/admin/*': { ssr: false }, // Client-Side rendered
    '/react/*': { redirect: '/vue' }, // Redirect Rules
  }
})
```

[^composition_api]: [https://v3.ja.vuejs.org/api/composition-api.html](https://v3.ja.vuejs.org/api/composition-api.html)
[^nuxt3_fragments]: [https://v3.ja.vuejs.org/guide/migration/fragments.html](https://v3.ja.vuejs.org/guide/migration/fragments.html)
[^nuxt3_features]: [https://v3.vuejs.org/guide/migration/introduction.html#notable-new-features](https://v3.vuejs.org/guide/migration/introduction.html#notable-new-features)
[^nuxt3_teleport]: [https://v3.ja.vuejs.org/guide/teleport.html](https://v3.ja.vuejs.org/guide/teleport.html)
[^nuxt3_ts]: [https://v3.nuxtjs.org/concepts/typescript/](https://v3.nuxtjs.org/concepts/typescript/)
[^nuxt3_preset]: [https://v3.nuxtjs.org/docs/deployment/presets](https://v3.nuxtjs.org/docs/deployment/presets)
[^nuxt3_bridge]: [https://v3.nuxtjs.org/getting-started/bridge](https://v3.nuxtjs.org/getting-started/bridge)
[^nuxt3_path_build]: [https://github.com/nuxt/framework/discussions/560](https://github.com/nuxt/framework/discussions/560)
