import { Meta, StoryObj } from '@storybook/react'
import { IndexPage } from './IndexPage'

const meta: Meta<typeof IndexPage> = {
  title: 'Page/Notes/Index',
  component: IndexPage,
}

export default meta

type Story = StoryObj<typeof IndexPage>

export const Index: Story = {
  args: {
    allContents: [
      {
        title: 'CircleCIでジョブを定期実行する方法 (Dynamic Configも対応)',
        date: '2022-09-19 16:40:06',
        // TODO: slugではなく、pathとかurlとかの方が良さそう
        slug: 'https://zenn.dev/pilefort/articles/239fa3fe03fb0a',
        description:
          '目標 CircleCIで定期実行ができるようにします。 対象 CircleCIで定期実行したい人 2022年度末に廃止予定のScheduled Workflowsの移行方法を確認したい人 migrationガイドを読んでもよく分からなかった人 Dynamic Configでconfig.ymlを分割したいけど、定期実行のやり方が分からない人 コード こちらがサンプルコードです',
      },
      {
        title: 'AWS予算オーバー時にSlack, LINEに通知する方法',
        date: '2021-03-07 16:40:06',
        slug: '/notes/aws-budgets-notify-to-slack-and-line',
        description:
          'AWSが用意している通知方法は、メールだけです。しかし、メールでは見落としてしまう可能性があります。そこで、SlackやLINEにもメッセージが届くように、AWS Budgets, Amazon SNS, AWS Chatbot, Lambdaを併用した通知システムを作ってみます。',
      },
    ],
  },
}
