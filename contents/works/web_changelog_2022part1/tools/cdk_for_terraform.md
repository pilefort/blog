## CDK for Terraform
Terraformの設定ファイルを書くときに、TypeScriptやJava, Goなどを用いてインフラ構成を書けるようになりました[^terraform_cdk]。プログラミング言語でインフラ構成を書けるものでいうと、Pulumiが有名ですが、Terraformでも利用可能になりました。ただ、TypeScriptの場合はPulumiと異なりclassベースになります。

いくつかサンプル[^terraform_cdk_sample]も用意されています。APIリファレンス[^terraform_cdk_reference]もありますが、リリースされたばかりでAPIの説明がまだなかったりします。

```tsx
// main.ts
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
  }
}

const app = new App();
new MyStack(app, "cdk_with_terraform_for_aws_ec2");
app.synth();
```

筆者はPulumi, または生yaml派ですが、Terraformを使ってる方で型を使って、設定できる項目をコード上で選べるようにしたい人には合ってそうなツールだと思いました。

<figure>
  <img src="/images/web_changelog_2022part1/tools/cdk_for_terraform_sample.png" alt="CDK for Terraformの使用例" width="500" height="500" />
  <figcaption>CDK for Terraformの使用例</figcaption>
</figure>


[^terraform_cdk]: [https://www.hashicorp.com/blog/cdk-for-terraform-now-generally-available](https://www.hashicorp.com/blog/cdk-for-terraform-now-generally-available)
[^terraform_cdk_sample]: [https://www.terraform.io/cdktf/examples](https://www.terraform.io/cdktf/examples)
[^terraform_cdk_reference]: [https://www.terraform.io/cdktf/api-reference/overview](https://www.terraform.io/cdktf/api-reference/overview)
