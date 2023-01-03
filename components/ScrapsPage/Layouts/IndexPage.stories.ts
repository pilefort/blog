import { Meta, StoryObj } from '@storybook/react'
import { IndexPage } from './IndexPage'

const meta: Meta<typeof IndexPage> = {
  title: 'Page/Scraps/Index',
  component: IndexPage,
}

export default meta

type Story = StoryObj<typeof IndexPage>

export const Index: Story = {
  args: {
    contents: [
      { id: 'test', createdAt: '2021-03-07 16:40:06', revisedAt: '2021-03-07 16:40:06', highlight: 'ハイライト1' },
      { id: 'test2', createdAt: '2022-03-07 16:40:06', revisedAt: '2022-03-07 16:40:06', highlight: 'ハイライト2' },
    ],
  },
}
