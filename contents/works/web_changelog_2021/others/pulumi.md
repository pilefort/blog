# その他
## Pulumi
Pulumiはインフラ構成をGoやTypeScriptを使って記述できるツールです[^pulumi]。いわゆるIaCで、TerraformやCloudFormationなどと同じものですが、CloudFormationと異なりAWS以外のクラウドサービスでも利用できます。また、Terraformと異なり、独自の言語を使わず、TypeScriptなどで書くことができます。

例えば、以下のように書くと、src配下のindex.htmlをS3にデプロイして公開できます。

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// bucket作成
const bucket = new aws.s3.Bucket("my-bucket", {
    website: { indexDocument: 'index.html' }
});

// index.htmlを配置し、公開設定
new aws.s3.BucketObject('index.html', {
    bucket: bucket,
    acl: 'public-read',
    contentType: 'text/html',
    source: new pulumi.asset.FileAsset('src/index.html')
})

// URLを取得
const websiteEndpoint = pulumi.interpolate`http://${bucket.websiteEndpoint}`;

// Terminalに出力したい項目を書く
exports.bucketName = bucket.id
exports.websiteEndpoint = websiteEndpoint
```

デプロイ時はこのような画面になります。また、Terraformと同じように、デプロイごとに状態ファイルを作成するため、差分を確認できます。

<figure>
  <img src='/images/web_changelog_2021/pulumi/pulumi-up.png' width='550' height="550" alt='pulumiでデプロイしたときの様子' />
  <figcaption>pulumiでデプロイしたときの様子</figcaption>
</figure>

<figure>
  <img src='/images/web_changelog_2021/pulumi/diff.png' width='550' height="550" alt='pulumiでの再デプロイ時の様子 (差分が表示される)' />
  <figcaption>pulumiでの再デプロイ時の様子 (差分が表示される)</figcaption>
</figure>

Pulumi自体は前からあるのですが、2021年ではNative Providerという機能が追加されました[^pulumi_native_provider]。これはGCP, Azure, AWSなどで新しいサービスや機能が追加されたときに、その日のうちにPulumiでも利用できるという機能です。すぐ使いたい機能がリリースされたけど、CloudFormationなどが対応してないから手作業でやらないといけない... ということがなくなるリリースで、非常に価値ある機能だと感じています。ちなみに、AWSのNative Provider対応はAWS Cloud Control APIを利用しているようです[^cloud_control_api]。

[^pulumi]: [https://www.pulumi.com/](https://www.pulumi.com/)
[^pulumi_native_provider]: [https://www.pulumi.com/blog/pulumiup-native-providers/](https://www.pulumi.com/blog/pulumiup-native-providers/)
[^cloud_control_api]: [https://aws.amazon.com/jp/blogs/aws/announcing-aws-cloud-control-api/](https://aws.amazon.com/jp/blogs/aws/announcing-aws-cloud-control-api/)
