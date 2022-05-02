import scrapsListsData from '../../fetchData/scraps/demoWithScrapLists.json'

import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { getAllListContents } from '../../utils/getContents'
import { getListContentById } from '../../utils/getContents'

import { Contents } from '../../components/ScrapsPage/contents/Contents'
import { Sidebar } from '../../components/ScrapsPage/Sidebar/Sidebar'
import { Highlight } from '../../components/ScrapsPage/contents/Highlight'

import { ScrapsListType, ScrapsType } from '../../types/microCMS/Common'
import { utcToJst } from '../../libs/date'
import { CustomHead } from '../../components/MetaHead/CustomHead'

const ScrapsDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ date, createdAt, highlight, scraps, scrapsLists }) => {
  const dateTime = utcToJst({ date: date || createdAt })

  return (
    <>
      <CustomHead
        title={`${dateTime}`}
        description={`${dateTime}のスクラップです`}
      />
      <div className="flex p-[24px]">
        <div>
          <Sidebar scrapsLists={scrapsLists} />
        </div>
        <div className="ml-[32px]">
          <div className="text-[32px]">{dateTime}</div>
          <Highlight highlight={highlight} />
          <Contents scraps={scraps} />
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: () => Promise<{ paths: string[]; fallback: boolean }> = async () => {
  const endpoint = 'scraps'
  const queries = { fields: 'id' }

  const totalContentIds = await getAllListContents({ endpoint, queries })
  const paths = totalContentIds.map(({ id }) => `/scraps/${id}`)

  return { paths, fallback: false }
}

export const getStaticProps: ({ params }: GetStaticPropsContext<{ id: string }>) => Promise<{
  props: { date: string; createdAt: string; highlight: string; scraps: ScrapsType; scrapsLists: ScrapsListType }
}> = async ({ params }) => {
  if (!params?.id) throw new Error('ビルドに失敗しました。再度実行してください。')

  const endpoint = 'scraps'
  const queries = {
    fields: 'date,createdAt,highlight,scraps',
    depth: 2 as const,
  }

  const { date, createdAt, highlight, scraps }: { date: string; createdAt: string; highlight: string; scraps: ScrapsType } = await getListContentById(
    {
      endpoint,
      queries,
      contentId: params.id,
    }
  )

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

export default ScrapsDetailsPage
