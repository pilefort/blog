import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: 'WorksPage/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Card>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    src: '/works',
    body: 'ここに本文を書きます！',
    img: {
      src: '/assets/tech-dojin/tech14.jpg',
      width: 550,
      height: 550,
    },
    priority: true,
    linkDisabled: true,
  },
}
