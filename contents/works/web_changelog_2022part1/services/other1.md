## pkg.land
　pkg.landは類似のnpmパッケージを検索できるサービスです[^pkg_land]。例えば、expressで検索すると以下のように、koaやfastifyなどが検索結果として表示されます。`npm search <keyword>`で検索しても、これらのフレームワークは出てこないので、どういう仕組みでやってるか気になるところです。

![expressで検索したときの結果](/images/web_changelog_2022part1/services/pkg.land-search-demo.png)

## PocketBase
　PocketBaseは認証やリアルタイムサブスクリプション、ユーザー管理等を簡単に扱うことができるサービスです[^pocket_base]。認証に関してはメール/パスワード認証だけでなく、OAuth2 (Google, Facebook, GitHub, GitLab) も対応しています。クライアント側のSDKはJavaScriptとDartが対応しており、バックエンド側はGoで拡張できます。

　Firebase, Supabase, Nhostなどと違い、Goのフレームワークとしても利用できるため、アプリ固有のビジネスロジックを構築できる点が珍しいです[^pocketbase_as_backend]。

[^pkg_land]: [https://pkg.land/](https://pkg.land/)
[^pocket_base]: [https://pocketbase.io/](https://pocketbase.io/)
[^pocketbase_as_backend]: [https://pocketbase.io/docs/use-as-framework/](https://pocketbase.io/docs/use-as-framework/)
