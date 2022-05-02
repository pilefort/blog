import scrapsListsData from '../fetchData/scraps/demoWithScrapLists.json'

import { NextPage, InferGetStaticPropsType } from 'next'

import { CustomSelectbox } from '../components/ScrapsPage/CustomSelectBox/CustomSelectbox'
import { Highlight } from '../components/ScrapsPage/contents/Highlight'
import { Contents } from '../components/ScrapsPage/contents/Contents'

import { ScrapsListType, ScrapsType } from '../types/microCMS/Common'
import { getListContents } from '../utils/getContents'
import { utcToJst } from '../libs/date'
import { CustomHead } from '../components/MetaHead/CustomHead'

const ScrapsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ date, createdAt, highlight, scraps, scrapsLists }) => {
  const postDate = utcToJst({ date: date || createdAt })

  return (
    <>
      <CustomHead
        title="最新のスクラップ"
        description="個人的に収集した情報をまとめています"
      />
      <div className="p-[24px] md:flex">
        <div>
          <CustomSelectbox scrapsLists={scrapsLists} />
        </div>
        <div>
          <div className="text-[32px]">{postDate}</div>
          <Highlight highlight={highlight} />
          <Contents scraps={scraps} />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: () => Promise<{
  props: { date: string; createdAt: string; highlight: string; scraps: ScrapsType; scrapsLists: ScrapsListType }
}> = async () => {
  const endpoint = 'scraps'
  const queries = {
    fields: 'date,createdAt,highlight,scraps',
    depth: 3 as const,
    orders: '-createdAt',
    limit: 1,
  }

  const { contents } = await getListContents({
    endpoint,
    queries,
  })
  const { date, createdAt, highlight, scraps }: { date: string; createdAt: string; highlight: string; scraps: ScrapsType } = contents[0]

  const { contents: scrapsLists } = scrapsListsData

  return {
    props: {
      date,
      createdAt,
      highlight,
      scraps,
      scrapsLists,
    },
  }
}

export default ScrapsIndexPage
