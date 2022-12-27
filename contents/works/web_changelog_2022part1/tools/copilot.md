## GitHub Copilot
　GitHub Copilotはコメントや関数、クラス名からコードを自動生成するツールです[^copilot]。対応言語はJavaScript, TypeScript, Python, Go, Rubyで、VSCodeやJetBrainsなどのエディタに対応してます。この度、こちらの一般提供が開始されました。

　プレビュー版ではコードの自動生成に使うリソースの指定ができませんでしたが、一般提供版ではパブリックリポジトリのコードを利用してコードの自動生成をするかどうか選べるようになりました。ちなみに、月額$8-10 ほどしますが、フリートライアルとして60日間試すことができます。

## GitHub Copilot Labs
　コードを自然言語 (英語) に翻訳するためのツールです[^copilot_labs]。また、言語を跨いだロジックの変換も可能で、JavaScriptからVueやPythonなどへコードを変換できます。

　VSCodeプラグインが用意されてますが、GitHub Copilotも利用するため、別途GitHub Copilotの契約が必要です[^copilot_labs_vscode]。

## Amazon CodeWhisperer
　こちらはGitHub Copilotの一般提供開始と同時期に発表されたツールで、コメントからコードを自動生成できます[^codewhisperer]。

　こちらはオープンソースリポジトリやAmazon内部のリポジトリから収集したコードを使って、コードの自動生成をするそうです。対応言語はJava, JavaScript, Pythonで、VSCode, JetBranins, AWS Cloud9などで使えます。現在プレビュー期間中のため、こちら[^codewhisperer_sign_up]で申請すると、無料で利用できます。

[^copilot]: [https://github.com/features/copilot](https://github.com/features/copilot)
[^copilot_labs]: [https://githubnext.com/projects/copilot-labs/](https://githubnext.com/projects/copilot-labs/)
[^copilot_labs_vscode]: [https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-labs&ssr=false#overview](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-labs&ssr=false#overview)
[^codewhisperer]: [https://aws.amazon.com/jp/about-aws/whats-new/2022/06/aws-announces-amazon-codewhisperer-preview/](https://aws.amazon.com/jp/about-aws/whats-new/2022/06/aws-announces-amazon-codewhisperer-preview/)
[^codewhisperer_sign_up]: [https://pages.awscloud.com/codewhisperer-sign-up-form.html](https://pages.awscloud.com/codewhisperer-sign-up-form.html)
