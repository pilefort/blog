import type { Meta, StoryObj } from '@storybook/react'
import { Footer as CommonFooter } from './Footer'

const meta: Meta<typeof CommonFooter> = {
  title: 'Common/Layout/Footer',
  component: CommonFooter,
}

export default meta

type Story = StoryObj<typeof CommonFooter>

export const Footer: Story = {
  args: {},
}
