## Chrome Extension Manifest V3
　2021年にはChrome Extension Manifest V3が正式リリースされました[^chrome_mv3]。Manifest V3ではV2の機能を制限することで、セキュリティ的な安全性の向上を図っています。2023年6月にはManifest V2で作られたものは動かなくなるため、それまでに拡張機能の書き換えが必要です[^mv2_sunset]。Manifest V2とV3の主な違いは以下の点にあります[^mv3_features]。　

- バックグラウンドページの代わりにサービスワーカーを利用
- リモートでホストされるコードの禁止
- 多くのメソッドにPromiseをサポート
- いくつかAPIを廃止、追加

　大きな変化はサービスワーカーの利用です。DOMへのアクセスが不可になるだけでなく、localStorageへのアクセスもできなくなります。DOMへのアクセスはcontent_script経由で、localStorageは使えないのでStorage APIを使うことで対応できます。

　また、windowオブジェクトへのアクセスもできないため、`chrome.windows.create` APIでChrome拡張からウィンドウを作ることはできますが、setSelfAsOpenerが指定できなくなってます。つまり、Chrome拡張が開いたウィンドウを閉じるときに、postMessageと`chrome.windows.remove` APIを併用して書く必要があり、従来と比べてコードが書きづらくなってます。

[^chrome_mv3]: [https://developer.chrome.com/blog/new-in-chrome-88/#mv3](https://developer.chrome.com/blog/new-in-chrome-88/#mv3)
[^mv2_sunset]: [https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/)
[^mv3_features]: [https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#feature-summary](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#feature-summary)
