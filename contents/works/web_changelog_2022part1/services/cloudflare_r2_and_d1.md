# サービス編
## Cloudflare R2
Cloudflare R2はCloudflareが提供するAWS S3互換のクラウドストレージで、Cloudflare Workersと連携でき、CDN Edge上でストレージの読み書き (PUT, GET, DELETE, LIST操作) ができます[^r2]。ちなみに、AWS S3から移行するツールも提供するそうです。

利用料については以下のようになっており、AWS S3と異なり、データの取り出しが無料になってます。

- データの取り出し (エグレス料) は無料
- データ保存量1GBあたり月額0.015ドル (10 GBまでは無料)
- ストレージ操作は100万リクエスト以下は無料
  - バケット作成、オブジェクト一覧表示、書き込み、変更は100万リクエストあたり 4.50 ドル、バケットから特定のオブジェクトを取得するときは、100万リクエストあたり0.36 ドル

## Cloudflare D1
Cloudflare D1はCDN Edge上からアクセス可能なサーバレスデータベースです[^d1]。Cloudflare D1自体はCDN Edge上にありませんが、読み取り専用のレプリカをCDN Edge上に配置でき、利用者の近くでDBアクセスが可能になります。まだ利用できませんが、D1へのアクセスはCloudflare Workersを利用して以下のようにアクセスできるそうです。

ちなみに、Cloudflare上でLitestreamを動かしてるのかなという感じがしますが、Litestreamとは別で作ってるそうです[^d1_litestream]。

```jsx
import { Router } from 'itty-router';
const router = Router();

router.get('/product/:id', async ({ params }, env) => {
  const { result } = await env.DB.get(
    `SELECT * FROM Product WHERE ID = $id;`,
    { $id: params.id }
  )
  return new Response(JSON.stringify(result), {
    headers: { 'content-type': 'application/json' }
  })
})

export default { fetch: router.handle }
```

[^r2]: [https://blog.cloudflare.com/r2-open-beta/](https://blog.cloudflare.com/r2-open-beta/)
[^d1]: [https://blog.cloudflare.com/introducing-d1/](https://blog.cloudflare.com/introducing-d1/)
[^d1_litestream]: [https://twitter.com/benbjohnson/status/1525149884541612033](https://twitter.com/benbjohnson/status/1525149884541612033)
