## Rome Formatter
　RomeはTypeScript, HTML, CSSなどのフォーマッターかつ、リンターかつ、バンドラーで、Babel, ESLint, Webpack, Prettier, Jestの代替を目指しているオールインワンツールです。この度、Rustでの再実装が進み、フォーマッターとしての機能が使えるようになりました[^rome_formatter]。

　上記の記事内ではPrettierとの比較をしており、処理速度が9-12倍 (ESLint, Webpack, TypeScriptのプロジェクトに対してリントした場合の速度)であり、エラーリカバリー (構文エラーがあっても、フォーマットが効く) を強化している点を強調してありました。VSCodeのプラグインとしても公開されてるので、すぐに試すことができます[^rome_formatter_vscode]

[^rome_formatter]: [https://rome.tools/blog/2022/04/05/rome-formatter-release](https://rome.tools/blog/2022/04/05/rome-formatter-release)
[^rome_formatter_vscode]: [https://marketplace.visualstudio.com/items?itemName=rome.rome](https://marketplace.visualstudio.com/items?itemName=rome.rome)

## Jest Preview
　Jest PreviewというJestのデバッガーツールが登場しました[^jest_preview]。これを使うことで、実際の動きを見ながら、Jestのテストのデバッグができます。jest-previewからdebugをインポートして使えるので、複雑なUIのテストを書く際に役立ちそうです。こちらは、Stackblitzで試すことができます[^jest_preview_stackblitz]。

```javascript
// index.js
import { debug } from 'jest-preview';

describe('App', () => {
  it('should work as expected', () => {
    render(<App />);
    debug();
  });
});
```


## Alfred5
　スニペットやクリップボード履歴などで便利なAlfredのVersion 5がリリースされました[^alfred5]。ワークフローの強化とファイル移動やブラウザのダークモード化などができる自動タスクというものが追加されています。

[^jest_preview]: [https://github.com/nvh95/jest-preview](https://github.com/nvh95/jest-preview)
[^jest_preview_stackblitz]: [https://stackblitz.com/edit/jest-preview?file=src%2FApp.test.tsx,README.md](https://stackblitz.com/edit/jest-preview?file=src%2FApp.test.tsx,README.md)
[^alfred5]: [https://www.alfredapp.com/alfred-5-whats-new/](https://www.alfredapp.com/alfred-5-whats-new/)
