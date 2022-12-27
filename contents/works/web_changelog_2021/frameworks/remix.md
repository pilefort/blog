# フレームワーク編
## Remix
　RemixはCDNのEdge部分でSSRできるReactの新しいフレームワークです[^remix]。Remixでは以下4つの理念からなる特徴を持っています[^remix_philo]。

1. ソースコードとコンテンツ/データの分離を含む、クライアント - サーバーモデルを採用

2. ブラウザやHTTP, HTMLなどのWebの基盤を活用する

3. JavaScriptでブラウザの動作をエミュレートし、ユーザー体験を向上させる
4. 基盤となるテクノロジーを過度に抽象化しない

　まず1つ目ですが、Remixではクライアント-サーバーモデルを採用しているため、クライアント側で完結するSSGをサポートせず、Edge領域でのSSRを活用します。このことにより、動的コンテンツを提供するアプリでも静的サイト並みの速度を提供できるそうです[^remix_performance]。

　またRemixではネットワーク送信量を減らす機能が豊富にあります。これはサーバー側は高速化できるが、ユーザーのネットワークは改善しようがないことを認識しているためです。例えば、GitHubのGist APIを単純に使う場合は以下のようになりますが、このように書く場合は不要な情報も含まれるため、送信されるデータ量は多くなります[^remix_server_client_model]。

```tsx
export default function Gists() {
  const gists = useSomeFetchWrapper("https://api.github.com/gists");
  // React18を使うなら、Suspenseで置き換えできるため不要
  if (!gists) return <Skeleton />;

  return (
    <ul>
      {gists.map(gist => (
        <li>
          <a href={gist.html_url}>
            {gist.description}, {gist.owner.login}
          </a>
          <ul>
            {Object.keys(gist.files).map(key => (
              <li>{key}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
```

　対してRemixを使う場合はユーザーにデータを送信する前に、loader関数でデータをフィルタリングできるため、以下のように書くことができます。このようにフィルタリングすることで送信するデータ量を少なくできます。

```tsx
// サーバー側でのデータのフィルタリング
export async function loader() {
  const res = await fetch("https://api.github.com/gists");
  const json = await res.json();
  return json.map(gist => {
    return { url: gist.html_url, files: Object.keys(gist.files), owner: gist.owner.login };
  });
}

export default function Gists() {
  const gists = useLoaderData();
  return (
    <ul>
      {gists.map(gist => (
        <li>
          <a href={gist.url}>
            {gist.description}, {gist.owner}
          </a>
          <ul>
            {gist.files.map(key => (
              <li>{key}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
```

　2つ目として、RemixではWebの標準的な機能を活用するために、独自のリクエスト/レスポンス APIなどを作らず、Fetch APIを活用します。例えば、Fetch APIのHeadersインターフェース[^remix_headers]を使うと、HTTPリクエストやレスポンスヘッダーに応じた処理ができますが、RemixでもloaderHeaders関数として利用できます。また、このようなHTTPヘッダーを各ルート (異なるパス) ごとに作成できるのもRemixの特徴です[^remix_path_headers]。

```tsx
export function headers({ loaderHeaders }) {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control")
  };
}
```

　ヘッダーだけでなく、metaタグもパスごとに設定できます[^remix_meta_tag]。

```tsx
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Something cool",
    description:
      "This becomes the nice preview on search results."
  };
};
```

　3つ目はRemixではユーザー体験を向上させるために、ページ遷移時はレイアウトの変更部分のみデータ取得するように動きます。これはNested Routingという機能が関わってきます。言葉や図で説明するのが難しいので、こちらをみてください[^remix_routing]。

　頑張って文で説明すると、/invoices/12から/invoices/12/editにページ遷移する場合を考えます。(Suspenseを使う場合は少し変わりますが) Next.jsの場合は遷移先のページで必要なJavaScriptやCSSを取得してからページが変わります。しかし、Remixでは変更先で必要な部分のみ取得して更新し、共通部分はそのまま維持され再描画しません。また、必要な部分のみを取得して更新できる特性から、そのページで必要なコンポーネントを並行してダウンロードできます。

　ここら辺の技術的な話は理解も説明も難しいため、気になる方はまだ未整理のドキュメント[^remix_routing2]や他の文献を探してみてください。Remixのこの機能はreact-routerのv6で追加された機能と同じなので、こちらのリポジトリも参考になるかもしれません[^react_router]。

　4つ目にRemixのAPIは基本的なHTTPやブラウザ, JavaScriptの機能をラップしてますが、過度に抽象化しないように気をつけて作られているようです。(具体的な例をもって説明はできませんが) 汎用性のある技術を学べる点もRemixの良い点だと感じます。

　Remixは他にも以下のような面白い特徴を持っています。

- ページが存在しないときに、404がちゃんと返る 
- アプリ作成時にデプロイ先を選ぶ
- Remix用のモニタリングサービスがある

　Next.jsだとページが存在しないときに、ステータスコード 404で404ページを返すにはひと手間必要です[^nextjs_404]。しかし、Remixを使う場合は何も設定しなくても、ページが存在しないときは404のステータスコードと一緒に404ページを返してくれます。

　Nuxt3ではビルド時にデプロイ先を決めることができますが、Remixではアプリ作成時にデプロイ先を選びます。候補としてはfly.ioやAWS Lambda, Cloudflare Workersなどがあります[^remix_deploy]。アプリを作り始めたらすぐにデプロイできるようにこのようにしているらしいです。

　VercelにもChecksというサービスを統合できるようになりましたが、RemixにもMetronomeというWeb Vitalsやアクセス数、発生したエラーの詳細を確認できるサービスがあります[^remix_metronome]。Rollbarなどをフロントに入れなくても、エラーの詳細が確認できるなら、ありがたいですが、まだ試してないので、詳細は分かりません。

　Remixにはいくつかサンプルアプリ[^remix_sample]もあるので、興味のある方はぜひ試してみてください。

[^remix]: [https://remix.run/](https://remix.run/)
[^remix_philo]: [https://remix.run/docs/en/v1/pages/philosophy](https://remix.run/docs/en/v1/pages/philosophy)
[^remix_performance]: [https://remix.run/docs/en/v1/guides/performance](https://remix.run/docs/en/v1/guides/performance)
[^remix_server_client_model]: [https://remix.run/docs/en/v1/pages/philosophy#serverclient-model](https://remix.run/docs/en/v1/pages/philosophy#serverclient-model)
[^remix_headers]: [https://developer.mozilla.org/en-US/docs/Web/API/Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers)
[^remix_path_headers]: [https://remix.run/docs/en/v1/api/conventions#headers](https://remix.run/docs/en/v1/api/conventions#headers)
[^remix_meta_tag]: [https://remix.run/docs/en/v1/api/conventions#meta](https://remix.run/docs/en/v1/api/conventions#meta)
[^remix_routing]: [https://remix.run/#:~:text=a%20cheat%20code%3A-,Nested%20Routes.,-%E2%86%91%E2%86%91%E2%86%93%E2%86%93%E2%86%90%E2%86%92%E2%86%90%E2%86%92BA](https://remix.run/#:~:text=a%20cheat%20code%3A-,Nested%20Routes.,-%E2%86%91%E2%86%91%E2%86%93%E2%86%93%E2%86%90%E2%86%92%E2%86%90%E2%86%92BA)
[^remix_routing2]: [https://remix.run/docs/en/v1/guides/routing](https://remix.run/docs/en/v1/guides/routing)
[^react_router]: [https://github.com/remix-run/react-router](https://github.com/remix-run/react-router)
[^nextjs_404]: [https://github.com/vercel/next.js/issues/4452](https://github.com/vercel/next.js/issues/4452)
[^remix_deploy]: [https://remix.run/docs/en/v1/guides/deployment](https://remix.run/docs/en/v1/guides/deployment)
[^remix_metronome]: [https://metronome.sh/](https://metronome.sh/)
[^remix_sample]: [https://github.com/remix-run/remix/tree/main/examples](https://github.com/remix-run/remix/tree/main/examples)
