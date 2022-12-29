# 開発ツール編
## LocalStack
LocalStackはAWSのリソースをローカルでエミュレートするためのツール[^local_stack]です。全てのサービスをエミュレートできるわけではないですが、API GatewayやAthena, CloudFront, CloudFormation, Cognito, Lambda, ECSなどをローカルでエミュレートできます[^local_stack_support]。ただし、一部リソースのエミュレートは有料で、月28-36ドルかかります[^local_stack_price]。

LocalStackはDockerを使うことで、以下のように簡単に動かすことができます[^how_to_use_local_stack]。

```bash
docker run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
```

AWS CLIでエンドポイントを`http://localhost:4566` に設定し、コマンドを叩くとDocker内にリソースを作成できます。

```bash
$ aws --endpoint-url=http://localhost:4566 s3api create-bucket --bucket test --region us-east-1
{
    "Location": "/test2"
}
$ aws --endpoint-url=http://localhost:4566 s3 ls
2022-07-31 23:51:17 test
```

このLocalStackはCircleCIやGitHub ActionsなどのCI上でも起動させることができ、よりAWSをエミュレートした環境でテストを実行できます[^local_stack_in_ci]。

また Serverless FrameworkやAWS SAMのようなローカルでServerlessの開発をするためのツールと組み合わせて利用可能です[^local_stack_integration1][^local_stack_integration2]。

[^local_stack]: [https://localstack.cloud/](https://localstack.cloud/)
[^local_stack_support]: エミュレート可能なリソース一覧: [https://docs.localstack.cloud/aws/feature-coverage/](https://docs.localstack.cloud/aws/feature-coverage/)
[^local_stack_price]: [https://localstack.cloud/pricing/](https://localstack.cloud/pricing/)
[^how_to_use_local_stack]: [https://docs.localstack.cloud/get-started/#docker](https://docs.localstack.cloud/get-started/#docker)
[^local_stack_in_ci]: [https://docs.localstack.cloud/ci/](https://docs.localstack.cloud/ci/)
[^local_stack_integration1]: [https://docs.localstack.cloud/integrations/serverless-framework/](https://docs.localstack.cloud/integrations/serverless-framework/)
[^local_stack_integration2]: [https://docs.localstack.cloud/integrations/aws-sam/](https://docs.localstack.cloud/integrations/aws-sam/)
