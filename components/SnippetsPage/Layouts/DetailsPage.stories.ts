import type { Meta, StoryObj } from '@storybook/react'
import { DetailsPage } from './DetailsPage'

const meta: Meta<typeof DetailsPage> = {
  title: 'Page/Snippets/Detail',
  component: DetailsPage,
}

export default meta
type Story = StoryObj<typeof DetailsPage>

const content = `
これだけです。
$の後にスペースを空けないと、文字が重なって見辛くなります。

\`\`\`bash
$ export PS1='$ '
\`\`\`

$を任意の文字に変えて使うこともできます。

<img src="../images/change-display-name-temporary/1.png" alt="test" width="253" height="68" />
`
export const Detail: Story = {
  args: {
    tags: ['shell', '便利機能'],
    content,
    createdAt: '2021年3月7日',
    title: '動画の拡張子やレンダリングを変更する方法',
  },
}
