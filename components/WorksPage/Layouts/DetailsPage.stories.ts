import type { Meta, StoryObj } from '@storybook/react'
import { DetailsPage } from './DetailsPage'
import TOCData from '@data/works/web_changelog_2021.json'

const meta: Meta<typeof DetailsPage> = {
  title: 'Page/Works/Detail',
  component: DetailsPage,
  tags: [''],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof DetailsPage>

const content = `
# ツール編
## zx
zxはGoogleが提供するJavaScriptでシェルスクリプトをラップして書くことができるツールです[^zx]。Top Level Awaitが使えるように、\`xx.mjs\`ファイルを作成し、以下のように使うことができます。

\`\`\`javascript:index.mjs
import {$} from 'contents/tools/zx'

await $\`ls\`;
await $\`pwd\`;
await $\`git branch\`;
await Promise.all([
  $\`sleep 1; echo 1\`,
  $\`sleep 2; echo 2\`
])
\`\`\`

<figure>
  <img src="/images/web_changelog_2021/zx/sample.png" alt="" width="500" height="500" />
  <figcaption>zxでの実行結果</figcaption>
</figure>


Shellでお馴染みのcdを実行するためのcd()メソッドや一定時間処理を止めるためのsleepメソッド、シェルスクリプトの | の代わりとなる pipe()メソッドなども用意されています。

[^zx]: [https://github.com/google/zx](https://github.com/google/zx)
`

export const Detail: Story = {
  args: {
    content,
    TOCData: TOCData,
    title: 'ここにタイトルを書きます！',
  },
}
