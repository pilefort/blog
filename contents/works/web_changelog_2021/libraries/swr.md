## SWR 1.0
SWRはNext.jsで有名なVercelが提供しているReact Hooksライブラリで、fetchやaxios, graphql-requestなどのデータを返す非同期関数と併用し、フロントで取得したデータを再利用可能な形にできるものです[^swr]。

SWRはstale-while-revalidateの頭文字を取って名付けられており、キャッシュからデータを返し (stale)、次にフェッチリクエストを送り (revalidate)、最後に最新のデータを取ってくるというのを基本戦略としています。そのため、キャッシュの扱いやリクエストの実行タイミングに関してよく考えられています。

SWRは以下のような形式で扱うことができます。まずfetcherとして、SWRと併用したいデータフェッチライブラリの設定をします。次にuseSWRを使って、レスポンス先とfetcherを指定し、その返り値としてdataとerrorを取るようにして使います。リクエストが返るまでの間はdataとerrorはundefinedになり、値が返るとdataに、エラーが返されるとerrorに値が入ります。

```tsx
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
// axiosを使いたい場合
//const fetcher = url => axios.get(url).then(res => res.data)

export default function App() {
  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👁 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
```

SWRでは以下のようなコンポーネントを作っておくと、他の場所でもリクエスト結果を使い回すことができます。複数のコンポーネントで使うと、使いまわした回数だけリクエストが実行されそうですが、SWRではキャッシュを使い、リクエストを1度だけしか実行しないようです (フェッチリクエストの動きを把握してないため、少し濁して説明してます)。

また、デフォルトで「ページにフォーカスが当たる」「タブを切り替える」「ネットワークがオフラインからオンラインに回復する」ときにデータの再検証をしてくれるそうです[^swr_revalidation]。

```tsx
function useUser (id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher)

  return { user: data, isLoading: !error && !data, isError: error }
}
```

```tsx
function Avatar ({ id }) {
  const { user, isLoading, isError } = useUser(id)

  if (isLoading) return <Spinner />
  if (isError) return <Error />
  return <img src={user.avatar} />
}
```

ちなみにデータを再検証するタイミングも制御でき、定期的に実行したい場合はrefreshInterval, ウィンドウが非表示のときにポーリングしたいならrefreshWhenHidden, ネットワークがオフラインのときにポーリングしたいならrefreshWhenOfflineなどのオプションを付けて制御できるそうです[^swr_revalidation_offline]。

```tsx
useSWR('/api/todos', fetcher, { refreshInterval: 1000 })
```

また、useSWRImmutableを使うことで、1度しかリクエスト結果を検証しないように使うこともできます[^swr_revalidation_immutable]。

```tsx
import useSWRImmutable from 'swr/immutable'

// ...
useSWRImmutable(key, fetcher, options)
```

レスポンスでエラーが返ってきたときのデータの再取得方法も指定でき、再試行しないステータスや試行回数、試行間隔なども指定できます[^swr_error_handling]。

```tsx
useSWR('/api/user', fetcher, {
  onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
    if (error.status === 404) return // 404では再試行しない。
    
    if (key === '/api/user') return // 特定のキーでは再試行しない。
    
    if (retryCount >= 10) return // 再試行は10回までしか再試行しない。

    setTimeout(() => revalidate({ retryCount }), 5000) // 5秒後に再試行する。
  }
})
```

[^swr]: [https://swr.vercel.app/ja](https://swr.vercel.app/ja)
[^swr_revalidation]: [https://swr.vercel.app/ja/docs/revalidation](https://swr.vercel.app/ja/docs/revalidation)
[^swr_revalidation_offline]: [https://swr.vercel.app/ja/docs/revalidation#%E5%AE%9A%E6%9C%9F%E7%9A%84%E3%81%AA%E5%86%8D%E6%A4%9C%E8%A8%BC](https://swr.vercel.app/ja/docs/revalidation#%E5%AE%9A%E6%9C%9F%E7%9A%84%E3%81%AA%E5%86%8D%E6%A4%9C%E8%A8%BC)
[^swr_revalidation_immutable]: [https://swr.vercel.app/ja/docs/revalidation#%E8%87%AA%E5%8B%95%E5%86%8D%E6%A4%9C%E8%A8%BC%E3%81%AE%E7%84%A1%E5%8A%B9%E5%8C%96](https://swr.vercel.app/ja/docs/revalidation#%E8%87%AA%E5%8B%95%E5%86%8D%E6%A4%9C%E8%A8%BC%E3%81%AE%E7%84%A1%E5%8A%B9%E5%8C%96)
[^swr_error_handling]: [https://swr.vercel.app/ja/docs/error-handling](https://swr.vercel.app/ja/docs/error-handling)
