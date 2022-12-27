## Astro
　AstroはDeno Freshと同じIsland Architectureを採用したフルスタックフレームワークです[^astro]。UI部分に使える言語はPreactだけでなく、React, Vue, Svelte, Solid, LitやAstroの独自言語も利用できます[^astro_support_lang]。 またデプロイ先もDenoだけでなく、AWSやVercel、GitHub Pagesなどにもデプロイできます[^astro_deploy]。

　Astroではclientディレクティブをコンポーネントに指定することでHydrateできるようになります。

```html
// src/pages/index.astro
---
// Example: hydrating framework components in the browser.
import InteractiveButton from '../components/InteractiveButton.jsx';
import InteractiveCounter from '../components/InteractiveCounter.jsx';
---

<!-- ページがロードされてから、JavaScriptのインポートを開始 -->
<InteractiveButton client:load />

<!-- コンポーネントがスクロールなどによって、画面上に表示されてから、JavaScriptのインポートを開始 -->
<InteractiveCounter client:visible />
```

[^astro]: [https://astro.build/](https://astro.build/)
[^astro_support_lang]: [https://docs.astro.build/en/core-concepts/framework-components/](https://docs.astro.build/en/core-concepts/framework-components/)
[^astro_deploy]: [https://docs.astro.build/en/guides/deploy/](https://docs.astro.build/en/guides/deploy/)
