import { microCMSClient } from './microCMSClient'
import { MicroCMSQuery, MicroCMSQueryWithGetAllContents } from '../types/microCMS/Common'

// NOTE: List型のコンテンツに対し、ID指定でコンテンツを取得したいときに使う
export const getListContentById = async ({ endpoint, queries, contentId }: MicroCMSQuery & { contentId: string }) => {
  try {
    const data = await microCMSClient.getListDetail<any>({ endpoint, contentId, queries })
    return { data }
  } catch (error) {
    if (error instanceof Error) {
      // NOTE: microCMSではエラー発生時でも200でエラーメッセージを返す
      return { error }
    } else {
      throw new Error('unexpected error')
    }
  }
}

// NOTE: リスト型のコンテンツを複数取得したいときに使う
export const getListContents = async ({ endpoint, queries }: MicroCMSQuery) => {
  return await microCMSClient.getList<any>({ endpoint, queries })
}

// NOTE: リスト型のコンテンツを条件に合うものを全て取得したいときに使う
export const getAllListContents: ({ endpoint, queries, offset }: MicroCMSQueryWithGetAllContents) => Promise<any[]> = async ({
  endpoint,
  queries,
  offset = 0,
}) => {
  const limit = 100
  queries.limit = limit
  queries.offset = offset

  const { contents, totalCount } = await getListContents({ endpoint, queries })

  let articles: any[] = []
  const getContentsCount = offset + limit

  if (totalCount > getContentsCount) articles = await getAllListContents({ offset: getContentsCount, endpoint, queries })
  if (articles.length > 0) return [...contents, ...articles]

  return [...contents]
}
