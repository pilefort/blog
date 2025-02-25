import { Meta, StoryObj } from '@storybook/react'
import { IndexPage } from './IndexPage'

const meta: Meta<typeof IndexPage> = {
  title: 'Page/Works/Index',
  component: IndexPage,
}

export default meta

type Story = StoryObj<typeof IndexPage>

export const Index: Story = {}
