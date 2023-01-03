import type { Meta, StoryObj } from '@storybook/react'
import { WorksTOC } from './WorksTOC'
import TOCData from '@data/works/web_changelog_2021.json'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof WorksTOC> = {
  title: 'WorksPage/TOC',
  component: WorksTOC,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof WorksTOC>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    TOCData,
    title: 'ここにタイトル',
  },
}
