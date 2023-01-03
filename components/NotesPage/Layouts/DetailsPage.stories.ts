import { Meta, StoryObj } from '@storybook/react'
import { DetailsPage } from './DetailsPage'

const meta: Meta<typeof DetailsPage> = {
  title: 'Page/Notes/Details',
  component: DetailsPage,
}

export default meta

type Story = StoryObj<typeof DetailsPage>

const content = `
# 対象
- Email通知以外の方法で利用料確認をしたい人
- 利用料が一定額を超えたときに、LINEやSlackに通知したい人

# Slack 通知
一定額超えたら、Slack に通知するように設定します。

マイ請求ダッシュボードの AWS Budgets から『予算を作成』をクリックします。

[billing/home#budgets](https://console.aws.amazon.com/billing/home#/budgets)

<img src="../images/aws-budgets-notify-to-slack-and-line/3.webp" alt="Budgets top" width="1183" height="308" />

『予算タイプの選択』を『コスト予算』にします。

<img src="../images/aws-budgets-notify-to-slack-and-line/4.webp" alt="Budgets type" width="1180" height="501" />

AWS チャットボットのアラートというのを設定しないと、Slack 通知ができないので、次はそちらを設定します。

# AWS Chatbot の設定
AWS Chatbot にアクセスします。

[chatbot/home#/home](https://us-east-2.console.aws.amazon.com/chatbot/home#/home)

<img src="../images/aws-budgets-notify-to-slack-and-line/5.webp" alt="Chatbot" width="878" height="302" />

チャットクライアントを Slack に設定し、自身の作成した Slack のワークスペースと連携します。

連携が終わると、以下の画面に遷移します。

<img src="../images/aws-budgets-notify-to-slack-and-line/6.webp" alt="slack" width="1112" height="476" />

新しいチャンネルを設定するためには既に作成されたSNSが必要なので、次はSNSを設定します。

## SNS の設定
Amazon Simple Notification Service にアクセスします。

[sns/v3/home?region=ap-northeast-1#/homepage](https://ap-northeast-1.console.aws.amazon.com/sns/v3/home?region=ap-northeast-1#/homepage)

<img src="../images/aws-budgets-notify-to-slack-and-line/7.webp" alt="sns" width="1079" height="433" />

トピック名を適当に作成し、次のステップに移ります。

SNS は AWS Budgets から実行したいので、アクセスポリシーを修正します。

...
`

export const Details: Story = {
  args: {
    dateTime: '2021年3月7日',
    title: 'AWS予算オーバー時にSlack, LINEに通知する方法',
    content,
  },
}
