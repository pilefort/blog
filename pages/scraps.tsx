import data from '../fetchData/demo/demoWith1Scrap.json'
import scrapsListsData from '../fetchData/demo/demoWithScrapLists.json'

import { NextPage, InferGetStaticPropsType } from 'next'

type CommonMicroCMSResponse = {
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string
}

type ContentType = CommonMicroCMSResponse & {
  id: string
  date: string
  createdAt: string
  highlight?: string
  scraps: (CommonMicroCMSResponse & {
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
  })[]
}

type ScrapsListType = {
  id: string
  createdAt: string
}[]

const ScrapsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  content: { date, createdAt, scraps, highlight },
  scrapsLists,
}) => {
  return (
    <div className="p-[24px]">
      <div>scrapリスト一覧</div>
      {scrapsLists.map(({ id, createdAt }) => {
        return <div key={id}>{createdAt}</div>
      })}
      <div>Scrapページです！</div>
      <div>日付: {date ? date : createdAt}</div>
      <div>ハイライト: {highlight}</div>
      {scraps.map(({ id, title, tags, updatedAt, body, links }) => {
        return (
          <div key={id}>
            <div>{title}</div>
            <div>{tags?.join('')}</div>
            <div>{updatedAt}</div>
            {links?.map(({ url }, index) => {
              return <div key={index}>{url}</div>
            })}
            <div>
              {body.map(({ content }, index) => {
                return (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export const getStaticProps = (): {
  props: {
    content: ContentType
    scrapsLists: ScrapsListType
  }
} => {
  const content = data
  const { contents: scrapsLists } = scrapsListsData

  return {
    props: {
      content,
      scrapsLists,
    },
  }
}

export default ScrapsIndexPage
