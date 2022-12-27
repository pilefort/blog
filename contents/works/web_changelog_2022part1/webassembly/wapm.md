# WebAssembly編
## WAPMアップデート
　WAPMはWasmer社が提供しているWebAssemblyのパッケージマネージャーです[^wapm]。ちなみに、Wasmer社はWebAssemblyのランタイムの1つであるWasmerを提供してます。

　今年のアップデートでブラウザ上でWebAssemblyを動かせるようになりました[^wapm_revamp]。例えば、URLからQRコードを生成するライブラリ[^qr2text]があるのですが、以下のようにOpen in Shellをクリックすることで、ブラウザ上で動作確認できます。

![ブラウザ上でwasm (qr2text) の動作確認](/images/web_changelog_2022part1/webassembly/wapm_sample_qr2text.png)

[^wapm]: [https://wapm.io/](https://wapm.io/)
[^wapm_revamp]: [https://wasmer.io/posts/wapm-revamp](https://wasmer.io/posts/wapm-revamp)
[^qr2text]: [https://wapm.io/syrusakbary/qr2text](https://wapm.io/syrusakbary/qr2text)
