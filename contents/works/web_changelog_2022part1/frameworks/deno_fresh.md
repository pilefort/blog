## Deno Fresh
Deno FreshはDeno Deploy上に展開されるフルスタックフレームワークです[^deno]。UI部分はPreactで記述し、デフォルトでJavaScriptの使用量を最小限に抑えるようにIsland Architectureを採用しています。

Island ArchitectureとはサーバーレンダリングでWebページを生成するときに、個々のインタラクティブな部分 (JavaScriptを使う部分) 以外を静的なHTMLとして先に送信し、後から個々のインタラクティブな部分を活性化 (Hydrate) させるアーキテクチャです[^island_architecture]。

Deno DeployではIsland Architectureを採用しているため、最初のページ遷移時にJavaScriptを送らず、ページ読み込みが速くなります。その他にも、Deno FreshはDeno Deploy上でJITレンダリングされたものをクライアントに送信するため、ビルドステップがないなどの特徴があります。

初期テンプレート作成時のファイル構成は以下のようになります。islandsディレクトリはJavaScript (useStateやuseEffectなども含む) を利用したいコンポーネントを置く場所で、routesディレクトリはページのパスやそのページでの処理、見た目などを書く場所です (routesはNext.jsにおけるpagesディレクトリに相当してます)。

ちなみに、routes配下ではuseStateやuseEffectが無効化されます。

```markdown
islands/xxx.tsx
routes
 ├── api ─ xxx.tsx
 ├── index.tsx
 └── xxx.tsx
static/
utils/
deno.json
dev.ts
fresh.gen.ts
import_map.json
main.ts
README.md
```

ボタンクリックで数値が上昇するサンプルを作るとこのようになります。islandsディレクトリにHydrateさせたいコンポーネントを作成し、使用したいページでコンポーネントを読み込んで使います。

ちなみに、islandsディレクトリ配下のコンポーネント間でstateを共有したいときは、PreactのSignals (不正確かもしれませんが、vue3におけるrefのようなもの) を使うと良さそうです[^preact_signals]。

```tsx:islands/Counter.tsx
// ここでは useStateを使いたいため、islandsディレクトリにコンポーネントを作成してます

/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

// IS_BROWSERでクライアント側かサーバー側か判断して動かす
import { IS_BROWSER } from "$fresh/runtime.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)} disabled={!IS_BROWSER}>-1</button>
      <button onClick={() => setCount(count + 1)} disabled={!IS_BROWSER}>+1</button>
    </div>
  );
}

```

```tsx:routes/counter.tsx
// ここでは /counterにアクセスしたときの見た目を作ります

/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <Counter start={3} />
  );
}
```

[^deno]: [https://deno.com/blog/fresh-is-stable](https://deno.com/blog/fresh-is-stable)
[^island_architecture]: [https://www.patterns.dev/posts/islands-architecture/](https://www.patterns.dev/posts/islands-architecture/)
[^preact_signals]: [https://twitter.com/deno_land/status/1567242231660027908](https://twitter.com/deno_land/status/1567242231660027908)
