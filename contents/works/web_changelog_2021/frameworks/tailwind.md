## TailwindCSS v3.x
TailwindCSSはutility-firstを掲げており、必要最低限のスタイルを持ったクラスを組み合わせることで、デザインを構築することを目的としたCSSフレームワークです[^tailwindcss]。従来だと以下のような書き方をしていた部分が、TailwindCSSではいくつかのクラスを組み合わせて構築します。

```html
<!-- 従来の方法 -->
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

```html
<!-- TailwindCSSを使って書く場合 -->
<div class="max-w-sm mx-auto flex p-6 bg-[white] rounded-lg shadow-xl">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="ml-6 pt-1">
    <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
    <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
  </div>
</div>
```

やり方としてはインラインでCSSを記述するやり方 (`style="xxx: yyy"`と書くやり方) と同じですが、TailwindCSSで書くとレスポンシブデザインや擬似クラスにも対応できます。

必要最低限のクラスがたくさんあるものがTailwindCSSだとすると、パッケージサイズが大きくなる心配があるかもしれませんが、v3.x以前ではpurgeCSSを使って未使用のCSSをビルド時に削除する仕組みがありました。また、v3.xからは使用しているCSSのみをビルドするJITコンパイルが追加され、purgeCSSが削除されました。

### JITコンパイル
これはテンプレートファイルを作成したときに、CSSをオンデマンドでコンパイルする仕組みです。これを利用することで、必要に応じてスタイルを生成するようになりました。このおかげで、開発環境であっても必要最低限のCSSを利用できるようになり、開発環境と本番環境のCSSが同一になりました (以前はビルド時に未使用のCSSを削除する関係上、開発環境は余分なCSSを持った状態でした)。

より詳細な内容はこちらのブログ[^tailwind_jit]やGitHubのリポジトリ[^tailwind_jid2]から確認できます。

### 設定ファイルにContent Configuration追加
JITコンパイルを採用したことで、contentセクションでTailwindCSSを適用させたいファイルを指定するようになりました。この部分が古いTailwindCSSの記事とズレる部分なので注意が必要です。

```javascript
module.exports = {
  content: [
    './pages/**/*.{html,js}'
    './components/**/*.{html,js}',
  ],
  // ...
}
```

### カスタムスタイル
TailwindCSS 3.xまでは決められたフォントサイズや色しか使うことができませんでした。これは余分にクラスを追加すると、開発環境での動作が重くなるためです。3.x以降はJITコンパイルを利用するため、好きなフォントサイズや色、幅などを指定できるようになりました。

`[]`を使って以下のように指定することで、任意の値を使うことができます。

```html
<div class="h-[50px] bg-[#06395A]">
  ...
 </div>
```

### CDN経由での実行
3.xからTailwindCSSをCDN経由で実行できるようになりました。headに下記のスクリプトタグを追加することで試すことができます。これは開発や新機能のテスト向けで、本番での利用は推奨されてません[^tailwind_cdn]。

```html
<script src="https://cdn.tailwindcss.com"></script>
```

### フォームの装飾
デフォルトのファイル入力フォームを装飾できるようになりました。`file-<適用したいスタイル>` で使います[^tailwind_input_button]。

```html
<form>
  <div class="flex items-center space-x-6">
    <label class="block">
      <span class="sr-only">Choose profile photo</span>
      <input type="file" class="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "/>
    </label>
  </div>
</form>
```

<figure>
  <img src='/images/web_changelog_2021/tailwindcss/form.png' width='350' height="350" alt='入力フォーム装飾の例' />
  <figcaption>入力フォーム装飾の例</figcaption>
</figure>

### その他
その他にも色付きの影[^tailwind_box_shadow]やスクロールスナップAPI[^scroll_margin], マルチカラムレイアウト[^multi_column_layout]などがあります。開発時のCSSのサイズを気にしなくて良くなったので、今後も面白いクラスが追加されていきそうで今後も期待です。

[^tailwindcss]: [https://tailwindcss.com/](https://tailwindcss.com/)
[^tailwind_jit]: [https://tailwindcss.com/blog/just-in-time-the-next-generation-of-tailwind-css](https://tailwindcss.com/blog/just-in-time-the-next-generation-of-tailwind-css)
[^tailwind_jid2]: [https://github.com/tailwindlabs/tailwindcss-jit](https://github.com/tailwindlabs/tailwindcss-jit
[^tailwind_cdn]: [https://tailwindcss.com/docs/installation/play-cdn](https://tailwindcss.com/docs/installation/play-cdn)
[^tailwind_input_button]: [https://tailwindcss.com/docs/hover-focus-and-other-states#file-input-buttons](https://tailwindcss.com/docs/hover-focus-and-other-states#file-input-buttons)
[^tailwind_box_shadow]: [https://tailwindcss.com/docs/box-shadow-color](https://tailwindcss.com/docs/box-shadow-color)
[^scroll_margin]: [https://tailwindcss.com/docs/scroll-margin](https://tailwindcss.com/docs/scroll-margin)
[^multi_column_layout]: [https://tailwindcss.com/docs/columns](https://tailwindcss.com/docs/columns)
