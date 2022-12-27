# ライブラリ編
## React18
　ついにReact 18が正式リリースされました。自動バッチ処理、Transitions, Suspenseのサーバーレンダリング対応など面白い機能が多く追加されました[^react18]。

　また、厳密には別ものだと思いますが、Vue.jsにおけるKeepAlive配下のv-ifのような、stateの状態を保持したままUIの一部を追加・削除できる `<Offscreen>`コンポーネントが追加される予定です[^react18_offscreen]。

　この影響で、strictモードではコンポーネントをマウント -> アンマウント -> (同じstateを使い) マウントするようになります[^react18_strict_mode]。このため、useEffectが2回実行 (発火 -> クリーンアップ関数実行 -> 発火) されたりと挙動が変わりました。この辺りの話はWEB+DB PRESS Vol.129の「Reactの深層」というコラムが非常に詳しいので、おすすめです[^wdpress]。

　その他にも、React18になったことで、型定義の方も更新され、FCでの暗黙的なchildrenの継承が削除されました。

```typescript
import * as React from 'react';

const Input: React.FC = ({ children }) => <div>{children}</div>;
//                         ^^^^^^^^ will error with "Property 'children'
//                                  does not exist on type '{}'.
<Input>children</Input>;
```

　以下のように型を明示的に書いてあげる必要があります。

```typescript
import * as React from 'react';

interface InputProps {
	type: string;
}

const Input: React.FC<InputProps> = ({ type }) => <input type={type} />

<Input type="search" />
```

[^react18]: [https://reactjs.org/blog/2022/03/29/react-v18.html](https://reactjs.org/blog/2022/03/29/react-v18.html)
[^react18_offscreen]: [https://ja.reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react](https://ja.reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react)
[^react18_strict_mode]: [https://ja.reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors](https://ja.reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors)
[^wdpress]: [https://gihyo.jp/magazine/wdpress/archive/2022/vol129](https://gihyo.jp/magazine/wdpress/archive/2022/vol129)
