import { NextPage, InferGetStaticPropsType } from 'next'

import { ScrapsType } from '../types/microCMS/Common'
import { getListContents } from '../utils/getContents'
import { utcToJst } from '../libs/date'
import { CustomHead } from '../components/MetaHead/CustomHead'
import { CommonScrapsPage } from '../components/ScrapsPage/CommonScrapsPage'

const ScrapsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ date, createdAt, highlight, scraps }) => {
  const dateTime = utcToJst({ date: date || createdAt })

  return (
    <>
      <CustomHead
        title="最新のスクラップ"
        description="個人的に収集した情報をまとめています"
      />
      <CommonScrapsPage
        scraps={scraps}
        highlight={highlight}
        dateTime={dateTime}
      />
    </>
  )
}

export const getStaticProps: () => Promise<{
  props: { date: string; createdAt: string; highlight: string; scraps: ScrapsType }
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

  return {
    props: {
      date,
      createdAt,
      highlight,
      scraps,
    },
  }
}

export default ScrapsIndexPage
