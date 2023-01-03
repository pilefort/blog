import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Page/Works/Comopnents/Card',
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const EnabledCard: Story = {
  args: {
    src: '/works',
    body: 'ここに本文を書きます！',
    img: {
      src: '/assets/tech-dojin/tech14.jpg',
      width: 550,
      height: 550,
    },
  },
}

export const DisabledCard: Story = {
  args: {
    src: '/works',
    body: 'ここに本文を書きます！',
    img: {
      src: '/assets/tech-dojin/tech14.jpg',
      width: 550,
      height: 550,
    },
    linkDisabled: true,
  },
}
