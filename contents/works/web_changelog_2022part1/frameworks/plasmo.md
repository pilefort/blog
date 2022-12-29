## Plasmo
Plasmoはブラウザ拡張を開発・リリースするためのフレームワークです[^plasmo]。現状、対応しているものはChrome拡張 (Manifest V3) とFirefox (Manifest V2) で、1つのコードからそれらのブラウザ拡張を開発できます。ちなみに、デフォルトで使用できる言語はReact + TypeScriptになってます。

従来の拡張機能の開発では難しかったホットリロードや.envファイルのサポート (ビルド時に埋め込む環境変数などを指定できる) がデフォルトでできます[^plasmo_env_support]。

また、リモートコードのバンドルを自動でしてくれるため、以下のようなコードを書いたとしてもビルド時に生成されるファイルでは、リモートコードが取り込まれた形でバンドルされます[^plasmo_remote_code_support] (Chrome拡張 Manifest V3ではCDNなどのリモートコードの利用が禁止されているため[^v3_remote_code]、バンドルしないと審査に通りません)。

```typescript
import "https://www.googletagmanager.com/gtag/js?id=XXXXXX"
```

またデフォルトではReact + TypeScriptですが、公式のテンプレート[^plasmo_template]を参考に作れば、SvelteやVueを使って書くこともでき、TailwindCSSやRedux, Firebase認証などの導入も可能です。

[^plasmo]: [https://docs.plasmo.com/](https://docs.plasmo.com/)
[^plasmo_env_support]: [https://docs.plasmo.com/workflows/env](https://docs.plasmo.com/workflows/env)
[^plasmo_remote_code_support]: [https://docs.plasmo.com/workflows/remote-code](https://docs.plasmo.com/workflows/remote-code)
[^plasmo_template]: [https://github.com/PlasmoHQ/examples/tree/main](https://github.com/PlasmoHQ/examples/tree/main)
[^v3_remote_code]: [≈https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#remotely-hosted-code](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#remotely-hosted-code)
