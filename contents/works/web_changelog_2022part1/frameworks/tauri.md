# フレームワーク編
## tauri
tauriはデスクトップアプリケーションを開発 (将来的にはモバイルアプリケーションも開発) するためのフレームワークで、UI部分はWebViewを利用し、アプリのバックエンドはRustを使います[^tauri]。

ちなみにWebViewはビルド時に統合されず、起動するプラットフォームごとに自動で切り替わるため、アプリのパッケージサイズが小さくなります[^tauri_build]。

tauriではパッケージマネージャーとして、cargoやyarn, npm, pnpmなどが選択できます。cargoを選択した場合はvanilla JSかyew (Rust) を選択でき、pnpm, yarn, npmを選択した場合はvanilla JS, Vue, Svelte, React, Solid, Next.js, PreactをTypeScriptの有無を含め選択できます。Roadmapは提供されてませんが、コードを見た感じだとAngular, Nuxt, Gatsbyあたりもサポートしそうでした[^tauri_ui_support]。あと、現状バックエンドはRustで固定ですが、将来的にGo, Nim, Python, C#を利用可能にするそうです[^tauri_backend_support]。

<figure>
  <img src="/images/web_changelog_2022part1/frameworks/tauri-cargo-template.png" alt="パッケージマネージャーにcargoを選んだときのUIテンプレート" width="500" height="500" />
  <figcaption>パッケージマネージャーにcargoを選んだときのUIテンプレート</figcaption>
</figure>

<figure>
  <img src="/images/web_changelog_2022part1/frameworks/tauri-yarn-template.png" alt="パッケージマネージャーにyarnを選んだときのUIテンプレート" width="500" height="500" />
  <figcaption>パッケージマネージャーにyarnを選んだときのUIテンプレート</figcaption>
</figure>

初期テンプレートで作成すると、以下のようなディレクトリ構成になります。srcディレクトリはUI部分を書くところで、テンプレート作成時に選択したライブラリ・フレームワークのコードが追加されます。src-tauriディレクトリはRustのコードを追加する部分で、パフォーマンスやメモリ安全性を高めたいときに使います。

```markdown
tauri-sample-app
 ├── public
 ├── src
 ├── src-tauri
 ├── index.html
 ├── package.json
 ├── tsconfig.json
 ├── tsconfig.node.json
 └── vite.config.ts
```

ちなみに初期テンプレートを起動すると以下のような、入力した名前を表示するデスクトップアプリを起動できます。

<figure>
  <img src="/images/web_changelog_2022part1/frameworks/tauri-sample.png" alt="tauriの初期テンプレートを起動したときの画面" width="500" height="500" />
  <figcaption>tauriの初期テンプレートを起動したときの画面</figcaption>
</figure>


srcディレクトリでUI, src-tauriディレクトリでRustのコードを書きますが、Rust側で定義したメソッドを使うのも簡単にできます。まず、Rust側で以下のようにinvoke_handlerで関数を登録します。

```rust:src-tauri/src/main.rs
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

その次に、UI側でinvoke APIを使ってRust関数を呼び出すことで、Rust側で定義したメソッドを利用できます。

```tsx:src/App.tsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div>
      // ...
      // input要素に入力された値をボタンを押したら表示する
      <div>
        <input onChange={(e) => setName(e.currentTarget.value)} />
        <button type="button" onClick={() => greet()}>Greet</button>
      </div>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
```

[^tauri]: [https://tauri.app/](https://tauri.app/)
[^tauri_build]: [https://tauri.app/v1/references/architecture/process-model/#the-webview-process](https://tauri.app/v1/references/architecture/process-model/#the-webview-process)
[^tauri_ui_support]: [https://github.com/tauri-apps/tauri/blob/dev/tooling/cli/src/helpers/framework.rs](https://github.com/tauri-apps/tauri/blob/dev/tooling/cli/src/helpers/framework.rs)
[^tauri_backend_support]: [https://tauri.app/about/intro/#polyglots-not-silos](https://tauri.app/about/intro/#polyglots-not-silos)
