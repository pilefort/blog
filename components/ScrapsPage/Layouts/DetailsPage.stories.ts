import { Meta, StoryObj } from '@storybook/react'
import { DetailsPage } from './DetailsPage'

const meta: Meta<typeof DetailsPage> = {
  title: 'Page/Scraps/Details',
  component: DetailsPage,
}

export default meta

type Story = StoryObj<typeof DetailsPage>

export const Details: Story = {
  args: {
    dateTime: '2021年3月7日',
    highlight: `yamlフォーマッター \n Dockerfileのデバッグ`,
    scraps: [
      {
        id: 'test',
        // TODO: revisedAt以外は消したい
        createdAt: '2021-03-07 16:40:06',
        revisedAt: '2021-03-07 16:40:06',
        publishedAt: '2021-03-07 16:40:06',
        updatedAt: '2021-03-07 16:40:06',
        title: 'yamlのフォーマッター',
        // TODO: linksにfieldIdは不要な気がする
        links: [{ fieldId: 'fieldId', url: 'https://github.com/google/yamlfmt' }],
        // TODO: bodyはoptional型にしたい
        body: [{ fieldId: 'abcd', content: 'yamlのリントツール' }],
      },
      {
        id: 'test2',
        createdAt: '2021-03-07 16:40:06',
        revisedAt: '2021-03-07 16:40:06',
        publishedAt: '2021-03-07 16:40:06',
        updatedAt: '2021-03-07 16:40:06',
        title: 'Dockerのデバッグ',
        links: [{ fieldId: 'fieldId', url: 'https://github.com/ktock/buildg' }],
        body: [{ fieldId: 'abcd', content: 'Dockerのデバッグツール' }],
      },
    ],
  },
}
