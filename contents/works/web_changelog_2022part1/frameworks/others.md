## Aleph.js
Aleph.jsはDenoで動くフルスタックフレームワークです[^aleph]。UIテンプレートとしてはReact, Vue, Yew, Solidなどが対応しています (APIサーバーとしても利用可能)。コードを見た感じだと、PreactやSvelte, Lit, Vanilla JSなども今後サポートしそうです[^aleph_lang_support]。Aleph.jsはDenoで動きますが、デプロイ先はDeno Deploy以外のCDNサービスでも動くように今後開発していくそうです[^aleph_future_deploy_support]。

## Lexical
Lexicalはテキストエディタに必要な最低限の機能を提供するフレームワークで、ReactやVueで記述できます[^lexical]。playground[^lexical_playground]やCodeSandboxも提供されているため、動かしながら試せます[^lexical_sandbox]。

<figure>
  <img src="/images/web_changelog_2022part1/frameworks/lexical-sample.png" alt="Lexicalのサンプルコードと表示結果" width="500" height="500" />
  <figcaption>Lexicalのサンプルコードと表示結果</figcaption>
</figure>


[^aleph]: [https://alephjs.org/](https://alephjs.org/)
[^aleph_lang_support]: [https://github.com/alephjs/aleph.js/blob/main/init.ts](https://github.com/alephjs/aleph.js/blob/main/init.ts)
[^aleph_future_deploy_support]: [https://github.com/alephjs/aleph.js/issues/429#issuecomment-967794820](https://github.com/alephjs/aleph.js/issues/429#issuecomment-967794820)
[^lexical]: [https://lexical.dev/](https://lexical.dev/)
[^lexical_playground]: [https://playground.lexical.dev/](https://playground.lexical.dev/)
[^lexical_sandbox]: [https://codesandbox.io/s/lexical-rich-text-example-5tncvy](https://codesandbox.io/s/lexical-rich-text-example-5tncvy)
