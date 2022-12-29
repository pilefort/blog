## React18
2022年1月2日現在、React18βがリリースされています。次はRC版でその2 ~ 4週間後にReact18がリリースされます。ここでは簡単にどういうものがReact18から使えるようになるのかについて触れていきます。

### 新しいルートAPIの追加
React18から新しいルートAPIが追加されます。ルートAPIはReactでアプリを作るために最初に宣言するAPIです。React17, 18ではそれぞれ以下のように宣言します

```tsx
// React17 (レガシーモードと呼ばれるようになる)
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// React18
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
```

React18以降も以前までの宣言 (レガシーモード) を利用できますが、Automatic Batchingなどいくつかの機能が制限されます。Discussionのそこら辺の話が分かりやすくまとまっているので、気になる方は一読してみることをお勧めします[^react18]。

### Automatic Batchingのアップデート
Automatic Batchingは連続して複数回のステート更新があるときに、複数回再レンダリングするのではなく、1度だけ再レンダリングする機能 (バッチ処理) です。React18以前はイベントハンドラ中にステート更新が連続した場合にのみ有効でしたが、React18の新しいルートAPIを使ってアプリを作る場合はPromiseやsetTimeoutなどが含まれる場合も再レンダリングが1度だけになります。

こちらのDiscussion[^react18_automatic_batching_sample]で具体的なデモ付きで分かりやすく解説されているので、こちらを触ってみてください。簡単に説明すると、以下のようなコンポーネントがあるとします。ここのhandleClickの書き方によってレンダリングが1回で済む場合と2回実行される場合があります。

```tsx
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  /* handleClickの定義 */

  return (
    <div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}
```

handleClickが以下のような定義 (handleClick1) のときは、2回ステート更新があってもレンダリングは1回だけですが、何かしらのコールバックイベントの後で実行される場合 (handleClick2) は2回レンダリングされます。

```tsx
// 1度だけレンダリングされるケース
function handleClick1() {
  setCount((c) => c + 1);
  setFlag((f) => !f);
}

// 2回レンダリングされるケース
function handleClick2() {
  fetchSomething().then(() => {
    setCount((c) => c + 1);
    setFlag((f) => !f);
  });
}

```

React18からは新しいルートAPIを使うと、上記のようなコールバックイベント後にステート更新する場合も1度だけレンダリングするようになります。バッチ処理をしたくない場合はReactDOM.flushSync()を使うことで対応できます。

### Suspenseコンポーネント
これはデータの受け取り状態を検知できるコンポーネントです。Suspenseコンポーネントの説明はReact Conf 2021の説明が分かりやすいです[^react_2021_conf]。日本語字幕に切り替えることができるので、時間のある方はこちらで確認することをオススメします。

ここではSuspenseを使わない場合の書き方から説明し、メリットやSuspenseの使い方を説明します。まず、適当なデータフェッチライブラリ (useDataFetch) があり、これを使うとデータ (item) と取得状況 (isLoading) が取れるとします。ここで、データが取得できるまではSpinnerコンポーネントを表示させ、データが取得できたらデータを表示させたい場合は以下のように書けます。

```tsx
// Suspenseを使わない場合
function List({pageId}) {
  const [items, isLoading] = useDataFetch(pageId)
  
  if (isLoading) <Spinner /> // ロード状態のロジック
  
  return items.map(item = > <li>{item}</li>);
}
                           
// 省略

// レンダリング部分
<List pageId={pageId} />
```

これをSuspenseを使って書き直すと以下のようになります。ロード状態を処理するロジックが不要になるため、コードがスッキリし上から下に読むだけで何をしているか分かるようになります。

```tsx
function List({pageId}) {
  const [items] = useDataFetch(pageId)
  
  return items.map(item = > <li>{item}</li>);
}

// 省略

// レンダリング部分
<Suspense fallback={<Spinner />}>
  <List pageId={pageId} />
</Suspense>
```

このSuspenseはいくつも囲むことができるので、以下のような使い方もできます。ここでは、ヘッダーが表示されるまではSkeltonコンポーネントを、SpecialListが表示されるまではListPlaceHolderコンポーネントを表示させることができます。このように、ページの大枠は先に表示させつつ、データ取得に時間のかかるコンポーネントを後から表示させることができるようになります。

```tsx
<Suspense fallback={<Skelton />}>
  <Header />
  <Suspense fallback={<ListPlaceHolder />}>
  	<ListLayout>
    	<SpecialList pageId={pageId} />
    </ListLayout>
  </Suspense>
</Suspense>
```

React18リリース時はRelayとの連携のみがサポートされますが、ApolloやSWR, React Queryなども後ほど連携できるようになるようです[^react_suspense_library_support]。

### React Server Components
これはSPAとSSRを共存させるための機能です。こちらはNext.jsの説明[^react18_server_component]が分かりやすいです。SPAで表示したいコンポーネント (クライアントコンポーネント) はxxx.client.jsで作成し、SSRで表示したいコンポーネント (サーバーコンポーネント) はyyy.server.jsで作成します。サーバーコンポーネント内でクライアントコンポーネントをインポートすることで、一部はSPAで表示させ、一部はSuspenseを使って後から表示させることができるようになります。

```tsx
// pages/home.server.js
import { Suspense } from 'react'

import Profile from '@components/profile.server.js'
import Content from '@components/content.client.js'

export default function Home() {
  return (
    <div>
      <h1>Welcome to React Server Components</h1>
      <Suspense fallback={'Loading...'}>
        <Profile />
      </Suspense>
      <Content />
    </div>
  )
}
```

制約もいくつかあり、クライアントコンポーネントでサーバーコンポーネントをインポートできません。また、サーバーコンポーネントでuseStateやuseEffectなどのステート更新もできません。

React18には他にもstartTransition API (useTransitionの簡易版[^start_transition]) や useSyncExternalStore API (旧useMutableSource API[^use_sync_external_store]) などが追加されています。それぞれDiscussionで詳しく解説されているので、気になる方は読んでみてください。

[^react18]: [https://github.com/reactwg/react-18/discussions/5](https://github.com/reactwg/react-18/discussions/5)
[^react18_automatic_batching_sample]: [https://github.com/reactwg/react-18/discussions/21](https://github.com/reactwg/react-18/discussions/21)
[^react_2021_conf]: [https://reactjs.org/blog/2021/12/17/react-conf-2021-recap.html](https://reactjs.org/blog/2021/12/17/react-conf-2021-recap.html)
[^react_suspense_library_support]: [https://github.com/reactwg/react-18/discussions/113](https://github.com/reactwg/react-18/discussions/113)
[^react18_server_component]: [https://nextjs.org/docs/advanced-features/react-18#server-components-apis-alpha](https://nextjs.org/docs/advanced-features/react-18#server-components-apis-alpha)
[^start_transition]: [https://github.com/reactwg/react-18/discussions/41](https://github.com/reactwg/react-18/discussions/41)
[^use_sync_external_store]: [https://github.com/reactwg/react-18/discussions/86](https://github.com/reactwg/react-18/discussions/86)
