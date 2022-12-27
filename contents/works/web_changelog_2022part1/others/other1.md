## Core Web Vitalsがパソコン向けの検索ランキングに適用
　2022年2月からCore Web Vitals (LCP, CLS, FIDの3要素からなるUXを向上させるための指標) も検索ランキングに影響するようになりました[^core_web_vitals_for_browser]。LCP, CLS, FIDのそれぞれの意味や改善方法についてはweb.devのサイトが詳しいです[^core_web_vitals]。

## Google Analytics UAサポート終了
　Google AnalyticsはUAのサポートが終了し、GA4に切り替わりました。GA4からはキーを登録するだけで、ユーザー操作やページが変わったときに自動でログ送信するようになりました。

　またUAではユーザーイベントにカテゴリ、アクション、ラベルを付け送信し、集計画面でフィルタリングして表示できてましたが、GA4ではアクション以外はログ送信したとしても記録されない、または表示されないようになりました[^ga4]。

## TypeScript公式のチートシート
　TypeScriptが公式チートシートを公開しました[^ts_cheatsheet]。Type, Class, Interface, Control Flow Analysisの全4種についてまとめられています。ちなみに、Figma上で管理してるようなので、こちらでも確認できます[^ts_cheatsheet_figma]。

## Vercel マルチテナントアプリケーション開発キット
　ログインするユーザーごとにサブドメインを払い出し、ブログ投稿可能なアプリを簡単に作成できるテンプレートが使えるようになりました[^vercel_starter_kit]。

　技術スタックはフロントにNext.js, TailwindCSS, DB・ORMにPlanetScale, Prisma, 認証にNextAuth.js, ホストにVercelを使ってます。以下のコードで試すことができます。

```bash
npx create-next-app --example https://github.com/vercel/platforms/tree/main platforms
```

[^core_web_vitals_for_browser]: [https://developers.google.com/search/blog/2021/11/bringing-page-experience-to-desktop](https://developers.google.com/search/blog/2021/11/bringing-page-experience-to-desktop)
[^core_web_vitals]: [https://web.dev/vitals/](https://web.dev/vitals/)
[^ga4]: [https://developers.google.com/analytics/devguides/collection/ga4/translate-events?hl=ja](https://developers.google.com/analytics/devguides/collection/ga4/translate-events?hl=ja)
[^ts_cheatsheet]: [https://www.typescriptlang.org/cheatsheets](https://www.typescriptlang.org/cheatsheets)
[^ts_cheatsheet_figma]: [https://www.figma.com/file/x8FJrNqj6oupqWn1s3uMg4/TypeScript-Website-Design?node-id=3319%3A1675](https://www.figma.com/file/x8FJrNqj6oupqWn1s3uMg4/TypeScript-Website-Design?node-id=3319%3A1675)
[^vercel_starter_kit]: [https://demo.vercel.pub/platforms-starter-kit](https://demo.vercel.pub/platforms-starter-kit)
