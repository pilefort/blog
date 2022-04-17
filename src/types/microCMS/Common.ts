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
type CommonMicroCMSResponse = {
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string
}

export type ContentType = CommonMicroCMSResponse & {
  id: string
  date: string
  createdAt: string
  highlight: string
  scraps: ScrapsType
}

export type ScrapsType = ScrapType[]

type ScrapType = CommonMicroCMSResponse & {
  id: string
  updatedAt: string
  tags?: (CommonMicroCMSResponse & {
    id: string
    title: string
    description: string
  })[]
  links?: {
    fieldId: string
    url: string
  }[]
  title: string
  body: {
    fieldId: string
    content: string
  }[]
  related?: {
    id: string
    title: string
  }[]
}

export type ScrapsListType = {
  id: string
  date?: string
  createdAt: string
}[]
