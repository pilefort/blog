import type { Meta, StoryObj } from '@storybook/react'
import { Header as CommonHeader } from './Header'

const meta: Meta<typeof CommonHeader> = {
  title: 'Common/Layout/Header',
  component: CommonHeader,
}

export default meta

type Story = StoryObj<typeof CommonHeader>

export const Header: Story = {
  args: {},
}
