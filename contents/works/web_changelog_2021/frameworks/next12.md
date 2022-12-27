## Next.js 12
　Next.js Conf 2021の告知メールで、Next.js史上最大のアップデートと言われたNext.js12です[^next12]。静的ホスティングサービスで有名なVercel (旧 now.sh) が提供するReactのフレームワークです。Next.js12からReact18の機能が一部使えるようになりました。

### SSR Streaming (Suspense), React Server Component
　React18のSuspenseやReact Server Componentが使えるようになりました。ただしまだフラグが必要で、next.config.jsに以下の追加が必要です。

```javascript
// next.config.js
module.exports = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
}
```

　使い方はReact18で説明するやり方とやや被るので、気になる方はそちらを読んでいただくか、こちらのブログで綺麗にまとまっているので、読んでみてください[^react18_features]。こちらのブログではコンポーネントを遅延読み込みさせるときに、ES2020のDynamic Importを使う例で書かれています。

### Middleware
　Vercelには元々Functionという機能があり、処理の一部をAWS Lambda上で実行できる機能がありました。Next.js12からはさらにCDNのEdge部分で処理できるMiddlewareという機能が追加されました[^next12_middleware]。こちらはCloudflare Workerを使っているようです[^middleware_cloudflare_worker]。これを利用するときは、VercelのEdge Functionsと連携する必要があります (Netlifyで使うならEdge Handlers)。

　Middlewareのサンプルとして、Basic認証やIPブロック, ABテストなどのコードが公開されており、気軽に試すことができます[^middleware_sample]。

　例えばBasic認証を追加したい場合はpages配下に_middleware.tsを作成して、以下のようなコードを書きます[^middleware_basic_auth_sample]。

```typescript
// _middleware.ts
// NextRequestでcookiesや地理情報, IPアドレスなどのヘッダー情報を取得できる
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

    // 認証が成功したら次のページに進める
    if (user === '4dmin' && pwd === 'testpwd123') return NextResponse.next()
  }

  // 認証が失敗したら401を返す
  return new Response('Auth required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"'},
  })
}
```

### URL Imports
　実験機能ですが、ESModuleをURLを介してインポートできるようにもなりました。ESModuleを提供するすべてのCDNで機能します[^next12_import]。

```javascript
// next.config.js
module.exports = {
  experimental: {
    urlImports: ['https://cdn.skypack.dev']
  }
}
```

```javascript
import confetti from 'https://cdn.skypack.dev/canvas-confetti'
```

### その他のアップデートや修正
　画像で言うと、AVIFをサポートするようになりました。WebPよりも20%小さい画像になります。また、imagesオプションが追加され、以下のような書き方ができるようになりました。このように書くと、ブラウザがAVIFに対応していればAVIF形式の画像を、対応してないならWebPを、WebPも対応してないなら元画像を表示するようになります[^next12_avif_support]。

```javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp']
  }
}
```

　画像関連で追加すると、next/imageの挙動が変わりました。以前のバージョンではdivタグに画像が囲まれるのですが、Next.js12からはspanタグに変わります[^nextjs12_image_breaking]。また、送信する画像のバリエーション (大きさ) も変わっているみたいです。

　開発面でいうと、RustコンパイラのSWCを組み込むようになりました。結果として、ホットリロードが最大3倍、本番モードでのビルドが最大5倍速くなったそうです[^nextjs12_hot_reload]。

[^next12]: [https://nextjs.org/blog/next-12](https://nextjs.org/blog/next-12)
[^react18_features]: [https://nextjs.org/docs/advanced-features/react-18](https://nextjs.org/docs/advanced-features/react-18)
[^next12_middleware]: [https://nextjs.org/blog/next-12#introducing-middleware](https://nextjs.org/blog/next-12#introducing-middleware)
[^middleware_cloudflare_worker]: [https://news.ycombinator.com/item?id=29002802](https://news.ycombinator.com/item?id=29002802)
[^middleware_sample]: [https://github.com/vercel/examples/tree/main/edge-functions](https://github.com/vercel/examples/tree/main/edge-functions)
[^middleware_basic_auth_sample]: [https://github.com/vercel/examples/tree/main/edge-functions/basic-auth-password](https://github.com/vercel/examples/tree/main/edge-functions/basic-auth-password)
[^next12_import]: [https://nextjs.org/blog/next-12#url-imports](https://nextjs.org/blog/next-12#url-imports)
[^next12_avif_support]: [https://nextjs.org/blog/next-12#smaller-images-using-avif](https://nextjs.org/blog/next-12#smaller-images-using-avif)
[^nextjs12_image_breaking]: [https://nextjs.org/blog/next-12#breaking-changes](https://nextjs.org/blog/next-12#breaking-changes)
[^nextjs12_hot_reload]: [https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler](https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler)
