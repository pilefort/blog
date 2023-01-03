import { Meta, StoryObj } from '@storybook/react'
import { IndexPage } from './IndexPage'

const meta: Meta<typeof IndexPage> = {
  title: 'Page/Snippets/Index',
  component: IndexPage,
}

export default meta

type Story = StoryObj<typeof IndexPage>

export const Index: Story = {
  args: {
    allContents: [
      { slug: 'change-movie-extension', tags: ['shell', 'movie'], date: '2021-03-07', title: '動画の拡張子やレンダリングを変更する方法' },
    ],
  },
}
