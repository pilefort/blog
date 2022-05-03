import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { getAllListContents } from '../../utils/getContents'
import { getListContentById } from '../../utils/getContents'

import { ScrapsType } from '../../types/microCMS/Common'
import { utcToJst } from '../../libs/date'
import { CustomHead } from '../../components/MetaHead/CustomHead'
import { CommonScrapsPage } from '../../components/ScrapsPage/CommonScrapsPage'

const ScrapsDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ date, createdAt, highlight, scraps }) => {
  const dateTime = utcToJst({ date: date || createdAt })

  return (
    <>
      <CustomHead
        title={`${dateTime}`}
        description={`${dateTime}のスクラップです`}
      />
      <CommonScrapsPage
        scraps={scraps}
        highlight={highlight}
        dateTime={dateTime}
      />
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
  props: { date: string; createdAt: string; highlight?: string; scraps: ScrapsType }
}> = async ({ params }) => {
  if (!params?.id) throw new Error('ビルドに失敗しました。再度実行してください。')

  const endpoint = 'scraps'
  const queries = {
    fields: 'date,createdAt,highlight,scraps',
    depth: 2 as const,
  }

  const { date, createdAt, highlight, scraps }: { date: string; createdAt: string; highlight?: string; scraps: ScrapsType } = await getListContentById(
    {
      endpoint,
      queries,
      contentId: params.id,
    }
  )

  return {
    props: {
      date,
      createdAt,
      highlight,
      scraps,
    },
  }
}

export default ScrapsDetailsPage
