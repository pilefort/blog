import type { Meta, StoryObj } from '@storybook/react'
import { TOC as WorksTOC } from './TOC'
import TOCData from '@data/works/web_changelog_2021.json'

const meta: Meta<typeof WorksTOC> = {
  title: 'Page/Works/Comopnents/TOC',
  component: WorksTOC,
}

export default meta
type Story = StoryObj<typeof WorksTOC>

export const TOC: Story = {
  args: {
    TOCData,
    title: 'ここにタイトル',
  },
}
