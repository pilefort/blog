## その他
### bun
　bunはJarred-Summerさんがzig[^zig]で開発しているフロントエンドツールです[^bun]。Rome[^rome]のようにコンパイラやバンドラとして使えるツールで、主に以下のような機能を提供しています。

- JavaScript / TypeScript / JSXのトランスパイル
- JavaScriptとCSSのバンドル
- ホットリロード付きの開発サーバー
- WebKit/Safariが使用しているJavaScriptCoreを使用したJavaScriptのランタイム環境
- npm互換のパッケージマネージャー

　JavaScriptのバンドラーとしては、esbuildの3倍、swcの94倍、babelの197倍高速[^bun_performance]で、まだパブリックにはなってませんが、今後期待のオールインワンツールです。

### Vite
　ビートと読みます。Viteはnpmライブラリをesbuild経由でESModuleに変換して動かすためのビルドツールです。ESModuleを使うと、ブラウザはバンドラーの処理を一部引き受けることができるため、ホットリロードやサーバーの起動が速くなります。ESModuleを使うためにはES2015以上が動作するブラウザが必要ですが、@Vitejs/plugin-legacyなどを入れるとポリフィルしてくれます。

　Viteを搭載したアプリケーション (Shopify Hydrogen, SvelteKit, Vitestなど) も増えてきており、今後も伸びていくビルドツールだと思います。

### Docker Desktop
　2021年からサブスクリプションを開始しました。このおかげで開発サイクルが速くなり、新機能の追加もされていってます。Docker Desktopでコンテナやイメージ、ボリュームを探したり、削除したりが簡単になりました。その他の機能としてはDev Environmentsという開発環境を共有できる機能も追加されました。

　また、Docker Compose V2がリリースされ、Pythonで記述されていた部分も完全にGoに置き換えられました。V2は起動が速く、新機能の追加も優先されるようです。

### Google Search Console Insights
　Google Search Console InsightsはGoogle Search ConsoleとGoogle Analyticsのデータを使って、情報を整理できるツールです。どのようなコンテンツが人気があるか、どうやってコンテンツが発見されたか、誰が自身のウェブサイトやコンテンツを紹介しているかがわかるようになるらしいです[^search_console_insight]

### Diagram (Tricycle)
　文章からFigmaのデザインを生成してくれるツールです[^diagram]。いつの間にか名前が変わっていて驚きました。デモ動画もあります[^diagram_demo]。

[^zig]: [https://github.com/ziglang/zig](https://github.com/ziglang/zig)
[^bun]: [https://bun.sh/](https://bun.sh/)
[^rome]: [https://github.com/rome/tools](https://github.com/rome/tools)
[^bun_performance]: [https://twitter.com/jarredsumner/status/1390084458724741121](https://twitter.com/jarredsumner/status/1390084458724741121)
[^search_console_insight]: [https://search.google.com/search-console/insights/about](https://search.google.com/search-console/insights/about)
[^diagram]: [https://withdiagram.com/](https://withdiagram.com/)
[^diagram_demo]: [https://twitter.com/jsngr/status/1229761750981054465](https://twitter.com/jsngr/status/1229761750981054465)
