## Chrome DevTools
2021の間にChrome88から97βまでがリリースされました。Chrome88から94までの間は6週間ごとのリリースでしたが、94からは4週間ごとのリリースになりました[^chrome_release_span]。Chrome APIについて追うのは大変なので、Chrome DevToolsの追加機能のうち便利なものを独断と偏見でフィルタリングして紹介します。

### FlexBoxやGridレイアウトのデバッグ強化
Chrome90からはFlexBoxのデバッグもやりやすくなりました。HTML上に`display: flex`や`display: inline-flex`があると、以下のようなバッジが表示されるようになりました。このバッジをクリックすると、FlexBoxの並べ方を変更できます[^flexbox]。また、Chrome92からGridレイアウトのデバッグもできるようになりました[^grid]。

<figure>
  <img src='/images/web_changelog_2021/devtools/3.png' width='200' height="200" alt='バッジ' />
  <figcaption>バッジ</figcaption>
</figure>

<figure>
  <img src='/images/web_changelog_2021/devtools/4.png' width='250' height="250" alt='FlexBoxのデバッグ' />
  <figcaption>FlexBoxのデバッグ</figcaption>
</figure>

<figure>
  <img src='/images/web_changelog_2021/devtools/5.png' width='250' height="250" alt='Gridレイアウトのデバッグ' />
  <figcaption>Gridレイアウトのデバッグ</figcaption>
</figure>

### constの上書きをサポート
Chrome92からコンソールでのconstの上書きができるようになりました[^const_override]。これでconsoleでの実験がやりやすくなりました。

<figure>
  <img src='/images/web_changelog_2021/devtools/const.png' width='300' height="300" alt='console上でのconstの上書き' />
  <figcaption>console上でのconstの上書き</figcaption>
</figure>

### Networkタブのフィルタリング
Chrome92からXHRがFetch/XHRに変更され、XMLHttpRequestとFetch APIの両方のネットワークリクエストを含むことがよりハッキリするようになりました[^network]。また、新しくWasmボタンが追加され、Wasmのネットワークリクエストをフィルタリングできるようになりました[^wasm]。

Chrome94からはFilterにinvertチェックボックスが追加され、チェックを入れると入力した項目を除外してフィルタリングできるようになりました。例えば、以下ではステータスが200のものを除外して表示させています。

<figure>
  <img src='/images/web_changelog_2021/devtools/network_panel_button.png' width='400' height="400" alt='Networkタブのフィルタリング' />
  <figcaption>Networkタブのフィルタリング</figcaption>
</figure>

その他嬉しい変更点として、リクエスト時のpayloadがタブとして表示されるようになりました。前まではHeadersの一番下にあり、リクエストで送ったパラメーターなどの確認が少し面倒でしたが、別タブで簡単に見られるようになりました。

<figure>
  <img src='/images/web_changelog_2021/devtools/payload.png' width='550' height="550" alt='payloadタブ' />
  <figcaption>payloadタブ</figcaption>
</figure>

### CSS-in-JSの形式でコピー
Chrome96からDevToolsのCSSをコピーするときの形式として、CSS-in-JSがサポートされました[^css_in_js]。

<figure>
  <img src='/images/web_changelog_2021/devtools/css-in-js.png' width='250' height="250" alt='CSS-in-JSでのコピー' />
  <figcaption>CSS-in-JSでのコピー</figcaption>
</figure>

### カラーピッカーのアップデート
Chrome89からDevToolsで下図のような矢印部分をクリックすると、カラーピッカーが表示され、色を見ながら編集できるようになりました[^color_picker]。またShiftを押しながら、矢印部分をクリックするとカラーフォーマットを (RGBA, HSLA, 16進数などに) 変更できるようになりました。

<figure>
  <img src='/images/web_changelog_2021/devtools/1.png' width='350' height="350" alt='DevToolsのElementsタブのStyles' />
  <figcaption>DevToolsのElementsタブのStyles</figcaption>
</figure>

<figure>
  <img src='/images/web_changelog_2021/devtools/2.png' width='200' height="200" alt='DevToolsで確認できるカラーピッカー' />
  <figcaption>DevToolsで確認できるカラーピッカー</figcaption>
</figure>

### その他
その他にも言語切り替えやCSSの長さの単位を切り替える機能が追加されました。言語切り替えはコンソールのエラーなども一部日本語で表示されるようになります[^default_lang]。CSSの長さ切り替えはどういう単位が使えるかの確認ができます[^length]。ただ、長さの単位に合わせて値を変換しません。

また実験機能ですが、画面の操作を登録できる機能も追加されました[^recorder]。コンテンツの表示崩れなどの確認で使える機能です。前までは画面の操作をpuppeteerのコードにエクスポートできる機能でしたが、こちらは使えなくなりました[^recorder2]。

詳しく紹介しませんが、Chrome89からはimport mapも追加されました。この機能はブラウザ上でESModuleのようなimport文が利用できる機能で、Rails7でもフロント側のコア機能として利用されています[^import_map]。詳しい使い方などはDegitalOceanのチュートリアルがわかりやすいです[^import_map_tutorial]。

[^chrome_release_span]: [https://developers-jp.googleblog.com/2021/04/chrome.html](https://developers-jp.googleblog.com/2021/04/chrome.html)
[^flexbox]: [https://developer.chrome.com/blog/new-in-devtools-90/#flexbox](https://developer.chrome.com/blog/new-in-devtools-90/#flexbox)
[^grid]: [https://developer.chrome.com/blog/new-in-devtools-92/#grid-editor](https://developer.chrome.com/blog/new-in-devtools-92/#grid-editor)
[^const_override]: [https://developer.chrome.com/blog/new-in-devtools-92/#const-redeclaration](https://developer.chrome.com/blog/new-in-devtools-92/#const-redeclaration)
[^network]: [https://developer.chrome.com/blog/new-in-devtools-92/#network](https://developer.chrome.com/blog/new-in-devtools-92/#network)
[^wasm]: [https://developer.chrome.com/blog/new-in-devtools-92/#wasm](https://developer.chrome.com/blog/new-in-devtools-92/#wasm)
[^css_in_js]: [https://developer.chrome.com/blog/new-in-devtools-96/#copy-as-js](https://developer.chrome.com/blog/new-in-devtools-96/#copy-as-js)
[^color_picker]: [https://developer.chrome.com/blog/new-in-devtools-89/#color-picker](https://developer.chrome.com/blog/new-in-devtools-89/#color-picker)
[^default_lang]: [https://developer.chrome.com/blog/new-in-devtools-94/#localized](https://developer.chrome.com/blog/new-in-devtools-94/#localized)
[^length]: [https://developer.chrome.com/blog/new-in-devtools-95/#length](https://developer.chrome.com/blog/new-in-devtools-95/#length)
[^recorder]: [https://developer.chrome.com/blog/new-in-devtools-97/#recorder](https://developer.chrome.com/blog/new-in-devtools-97/#recorder)
[^recorder2]: [https://developer.chrome.com/blog/new-in-devtools-92/#puppeteer-recorder](https://developer.chrome.com/blog/new-in-devtools-92/#puppeteer-recorder)
[^import_map]: [https://chromestatus.com/feature/5315286962012160](https://chromestatus.com/feature/5315286962012160)
[^import_map_tutorial]: [https://www.digitalocean.com/community/tutorials/how-to-dynamically-import-javascript-with-import-maps](https://www.digitalocean.com/community/tutorials/how-to-dynamically-import-javascript-with-import-maps)
