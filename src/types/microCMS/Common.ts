import { MakeRequest } from 'microcms-js-sdk/dist/cjs/types'
import { MicroCMSQueries } from 'microcms-js-sdk'

// NOTE: 全ての記事を取得したいときのクエリの型
export type MicroCMSQueryWithGetAllContents = MakeRequest & {
  endpoint: Endpoint
  offset?: number
  queries: MicroCMSQueries
}

// NOTE: 記事を取得するときのクエリの型 (オブジェクトAPI・リストAPI共通)
export type MicroCMSQuery = MakeRequest & {
  endpoint: Endpoint
}

type Endpoint = 'scraps'

// NOTE: APIの種類によらず、常に取得できる値
export type CommonProps = {
  createdAt?: string
  updatedAt: string
  publishedAt?: string
  revisedAt?: string
}
