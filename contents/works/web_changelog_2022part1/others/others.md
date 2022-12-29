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

## デザインシステム公開
Vercel[^vercel_design]とAWS[^aws_design]が自社のデザインシステムを公開するようになりました。

## ショップ公開
Figma[^figma_store]とDeno[^deno_store]が自社のグッズを販売するようになりました。

## Software Freedom Conservancy (SFC) がGitHubからの移行発表
SFCはFOSS (Free and Open Source Software) プロジェクトの権利を守り、プロジェクトの育成を促進するための非営利団体です[^sfc]。SFC傘下のプロジェクトとして、GitやHomebrew, Seleniumなどがあります。

今年に入りGitHub Copilotが有料サービスとして公開されたことを受け、GitHubからの移行を宣言しました。今後、傘下プロジェクトの移行を進めていくそうです[^sfc_announce]。ちなみに、この宣言をした背景はGitHub Copilotがコード補完のソースとして団体が管理しているコードを利用していること。また、GitHub Copilotの正式リリース前から意見書などを出していたにも関わらず、無視され続けており改善される予兆がないためだそうです。

[^vercel_design]: [https://vercel.com/design](https://vercel.com/design)
[^aws_design]: [https://cloudscape.design/](https://cloudscape.design/)
[^figma_store]: [https://store-jp.figma.com/en](https://store-jp.figma.com/en)
[^deno_store]: [https://merch.deno.com/](https://merch.deno.com/)
[^sfc]: [https://sfconservancy.org/](https://sfconservancy.org/)
[^sfc_announce]: [https://sfconservancy.org/blog/2022/jun/30/give-up-github-launch/](https://sfconservancy.org/blog/2022/jun/30/give-up-github-launch/)

## C++互換の新しい言語 Carbon
CarbonはJavaScriptに対するTypeScript, Javaに対するKotlinのような立ち位置を目指している言語だそうです[^carbon]。パフォーマンスを落とさず、既存のC++プロジェクトに、ジェネリクス、クラス、継承、メモリ安全性やシンプルな構文などを導入できるようです。

C++とCarbonを共存させて書くこともできるらしく今後のどのようになっていくか気になるところです。以下サンプルコードです[^carbon_sample]。ちなみに、拡張子はまだ決まってない[^cpp_extension]ようで、試して使うこともできません。

```cpp
// C++ code used in both Carbon and C++:
struct Circle {
  float r;
};

// Carbon exposing a function for C++:
package Geometry api;
import Cpp library "circle.h";
import Math;

fn PrintTotalArea(circles: Slice(Cpp.Circle)) {
  var area: f32 = 0;
  for (c: Cpp.Circle in circles) {
    area += Math.Pi * c.r * c.r;
  }
  Print("Total area: {0}", area);
}

// C++ calling Carbon:
#include <vector>
#include "circle.h"
#include "geometry.carbon.h"auto main(int argc, char** argv) -> int {
  std::vector<Circle> circles = {{1.0}, {2.0}};
  // Carbon's `Slice` supports implicit construction from `std::vector`,
  // similar to `std::span`.
  Geometry::PrintTotalArea(circles);
  return 0;
}
```

[^carbon]: [https://github.com/carbon-language/carbon-lang](https://github.com/carbon-language/carbon-lang)
[^carbon_sample]: [https://github.com/carbon-language/carbon-lang/blob/trunk/docs/images/snippets.md#mixed](https://github.com/carbon-language/carbon-lang/blob/trunk/docs/images/snippets.md#mixed)
[^cpp_extension]: [https://github.com/carbon-language/carbon-lang/discussions/1597](https://github.com/carbon-language/carbon-lang/discussions/1597)
