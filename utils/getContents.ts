import { microCMSClient } from '../libs/microCMSClient'
import { MicroCMSQuery, MicroCMSQueryWithGetAllContents, ContentsWithNoBody, ListsApiProps } from '../types/microCMS/Common'

// NOTE: List型のコンテンツに対し、ID指定でコンテンツを取得したいときに使う
export const getListContentById = async ({ endpoint, queries, contentId }: MicroCMSQuery) => {
  if (!contentId) throw new Error('content id not found')

  return await microCMSClient.getListDetail({ endpoint, contentId, queries })
}

// NOTE: リスト型のコンテンツを複数取得したいときに使う
export const getListContents = async ({ endpoint, queries }: MicroCMSQuery) => {
  return await microCMSClient.getList({ endpoint, queries })
}

// NOTE: リスト型のコンテンツを条件に合うものを全て取得したいときに使う
export const getAllListContents = async ({ endpoint, queries, offset = 0 }: MicroCMSQueryWithGetAllContents) => {
  const limit = 100
  queries.limit = limit
  queries.offset = offset

  const { contents, totalCount }: ListsApiProps = await getListContents({ endpoint, queries })

  let articles: ContentsWithNoBody[] = []
  const getContentsCount = offset + limit

  if (totalCount > getContentsCount) articles = await getAllListContents({ offset: getContentsCount, endpoint, queries })
  if (articles.length > 0) return [...contents, ...articles]

  return [...contents]
}
