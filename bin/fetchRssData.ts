// #!/usr/bin/env ts-node
import { createJsonFile } from './common/createJsonFile'
import Parser from 'rss-parser'

const folder = 'data/notes'
const dataFileName = 'zenn.json'

export const main = async () => {
  const { items } = await new Parser().parseURL('https://zenn.dev/pilefort/feed')

  const blogs = items.map(({ title, link, pubDate, content }) => ({ title, link, pubDate, content }))

  createJsonFile({
    folder,
    filename: folder + '/' + dataFileName,
    content: JSON.stringify(Array.from(blogs)),
  })
}

main()
