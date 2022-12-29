## Cloudflare Pages
Cloudflare PagesはVercelやNetlifyと同じような静的サイトをホスティングするためのサービスです[^cloudflare_pages]。GitHub連携もでき、コミットするごとにプレビューURLを生成し確認できます。

<figure>
  <img src='/images/web_changelog_2021/cloudflare_pages/dashboard.png' width='450' height="800" alt='Cloudflare Pagesのダッシュボード' />
  <figcaption>Cloudflare Pagesのダッシュボード</figcaption>
</figure>

Vercelなどとの違いは豊富な設定項目にあると思うので、いくつかの設定について紹介します。CloudflareではDDos対策[^cloudflare_ddos]やBot対策などのセキュリティ関連の設定ができます。通信に関してはHTTP/3の有効化やキャッシュの期間設定などもできます。 またアプリ連携[^cloudflare_app_integration]もでき、SNS共有ボタンやコメント機能などをアプリ側のコードを一切変えずに追加できます。

その他にはWorkers連携[^cloudflare_workers_integration]があります。これはCDNのEdge領域で処理を返すAPIを作成でき、TypeScriptやWebAssemblyのコードをデプロイできるそうです[^cloudflare_ts_webassembly]。Cloudflare WorkersはVercelのEdge Functions[^vercel_edge_function]で利用されているだけでなく、Remix.jsやShopify Hydrogenのデプロイ先候補としても利用されており勢いがあります。ちなみに、CDNのEdge部分で利用できるS3互換のR2[^cloudflare_r2]なども発表されているので、今後にも期待できそうです。

Cloudflare Pagesは利用できる機能も豊富ですが、体感としてVercelよりもサーバー応答が遅い感じがします。こちらのzennのScrapsにも比較されてるので、参考にしてみてください[^cloudflare_pages_response]。

[^cloudflare_pages]: [https://pages.cloudflare.com/](https://pages.cloudflare.com/)
[^cloudflare_ddos]: [https://support.cloudflare.com/hc/en-us/articles/200172676-Understanding-Cloudflare-DDoS-protection](https://support.cloudflare.com/hc/en-us/articles/200172676-Understanding-Cloudflare-DDoS-protection)
[^cloudflare_app_integration]: [https://www.cloudflare.com/apps/](https://www.cloudflare.com/apps/)
[^cloudflare_r2]: [https://blog.cloudflare.com/introducing-r2-object-storage/](https://blog.cloudflare.com/introducing-r2-object-storage/)
[^vercel_edge_function]: [https://vercel.com/features/edge-functions](https://vercel.com/features/edge-functions)
[^cloudflare_ts_webassembly]: [https://developers.cloudflare.com/workers/platform/languages](https://developers.cloudflare.com/workers/platform/languages)
[^cloudflare_workers_integration]: [https://developers.cloudflare.com/pages/tutorials/build-an-api-with-workers](https://developers.cloudflare.com/pages/tutorials/build-an-api-with-workers)
[^cloudflare_pages_response]: [https://zenn.dev/catnose99/scraps/6780379210136f](https://zenn.dev/catnose99/scraps/6780379210136f)
