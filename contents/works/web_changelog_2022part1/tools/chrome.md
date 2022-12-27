## Chrome DevTools
　今年はRecorderタブに関する機能が多めですが、現状まだ使い所が分からないので、省略します。また、WebTransportのサポートやCSSのCascade Layer, コンテナクエリのサポートなども追加されてますが、そちらも省略します。

### Lighthouse 測定モード
　Chrome103からNavigation, Timespan, Snapshotの3種類の測定方法から1つ選んで測定できるようになりました[^lighthouse_user_flow]。

　Navigationは従来のLighthouseの測定モードで、全体のパフォーマンススコアの測定やPWAの評価、ページ読み込み直後のアクセシビリティを測定したいときに使うもの。 Timespanはユーザーが操作している間のパフォーマンスを測定できるモードで、ユーザー操作によるレイアウトシフトやJavaScriptの実行時間などを測定したいときに使うもの。Snapshotはユーザーが操作した後の状態からパフォーマンス測定をするモードで、ユーザー操作によって現れるメニューやUIについて評価したいときに使う測定モードだそうです[^lighthouse_types]。

<figure>
  <img src='/images/web_changelog_2022part1/tools/new-lighthouse-mode.png' alt='Lighthouseで選択可能になった測定モード' width='450' />
  <figcaption>Lighthouseで選択可能になった測定モード</figcaption>
</figure>

[^lighthouse_user_flow]: [https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md](https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md)
[^lighthouse_types]: [https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md#the-three-modes-navigation-timespan-snapshot](https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md#the-three-modes-navigation-timespan-snapshot)

<div style="page-break-after: always; break-after: page;"></div>

### カラーピッカー強化
　こちらもChrome103から使えるようになった機能で、ブラウザ外の色もカラーピッカーで取得できるようになりました[^color_picker]。


![強化されたカラーピッカー](/images/web_changelog_2022part1/tools/color-picker.png)

[^color_picker]: [https://developer.chrome.com/blog/new-in-devtools-103/#color](https://developer.chrome.com/blog/new-in-devtools-103/#color)
