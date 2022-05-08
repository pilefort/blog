// #!/usr/bin/env ts-node
import { createJsonFile } from './common/createJsonFile'
import { getAllListContents } from '../utils/getContents'

const folder = 'fetchData/scraps'
const categoriesDataFile = 'scrapLists.json'

export const main = async () => {
  const endpoint = 'scraps'
  const contents = await getAllListContents({
    endpoint,
    queries: {
      fields: 'id,date,createdAt',
    },
  })

  createJsonFile({
    folder,
    filename: folder + '/' + categoriesDataFile,
    content: JSON.stringify(Array.from(contents.values())),
  })
}

main()
