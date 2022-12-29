## Contentlayer
ContentlayerはMarkdownファイルやMDXを型安全なJSONデータとして扱うためのライブラリです[^contentlayer]。現状β版で扱いが難しいですが、Markdownファイルのyamlヘッダーや中身に型を付与して利用できるので、個人ブログとかで使ってみたくなるライブラリです。ちなみに、Vercelのエンジニアの方が作っているためか、サンプルはNext.jsを使って公開されてます[^contentlayer_sample]。

## Remotion
RemotionはReactを使って、ビデオやGifを生成するAPIを使ったり、ウェブサイト上に動画を埋め込んだりできるライブラリです[^remotion]。Remotionは今年に入り会社化し、面白い機能の追加も活発になりました。

例えば、バージョン2.6からはPlayerコンポーネントが追加されました[^remotion_2-6]。これはビデオをレンダリングせずに、Reactアプリに埋め込める機能で、シークバーや停止・再生ボタンなどの一通りの機能を簡単に扱うことができます。

また、バージョン 3.0からはビデオのレンダリングをAWS Lambda上で実行し、レンダリング結果をS3に保存する機能も追加されました[^remotion_lambda]。これは動画の並列レンダリング機能[^remotion_3-0] と組み合わせることで実現してます。動画の長さは最大Full HDで約2時間 (AWS Lambdaのストレージ容量の最大値に依存) で東京リージョンでも利用可能だそうです。

その他にもGifやLottie (Webアニメーション) も出力できるようになりました[^remotion_3-1][^remotion_3-2]。

[^contentlayer]: [https://www.contentlayer.dev/](https://www.contentlayer.dev/)
[^contentlayer_sample]: [https://www.contentlayer.dev/examples/nextjs](https://www.contentlayer.dev/examples/nextjs)
[^remotion]: [https://www.remotion.dev/](https://www.remotion.dev/)
[^remotion_2-6]: [https://www.remotion.dev/blog/2-6](https://www.remotion.dev/blog/2-6)
[^remotion_lambda]: [https://www.remotion.dev/docs/lambda](https://www.remotion.dev/docs/lambda)
[^remotion_3-0]: [https://www.remotion.dev/blog/3-0](https://www.remotion.dev/blog/3-0)
[^remotion_3-1]: [https://www.remotion.dev/blog/3-1](https://www.remotion.dev/blog/3-1)
[^remotion_3-2]: [https://www.remotion.dev/blog/3-2](https://www.remotion.dev/blog/3-2)
