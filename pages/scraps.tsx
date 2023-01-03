import { NextPage, InferGetStaticPropsType } from 'next'

import { ContentsWithNoBody } from '../types/microCMS/Common'
import { getAllListContents } from '../utils/getContents'
import { CustomHead } from '@components/MetaHead/CustomHead'
import { IndexPage } from '@components/ScrapsPage/Layouts/IndexPage'

const ScrapsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ contents }) => {
  return (
    <>
      <CustomHead
        title="最新のスクラップ"
        description="個人的に収集した情報をまとめています"
      />
      <IndexPage contents={contents} />
    </>
  )
}

export const getStaticProps: () => Promise<{ props: { contents: ContentsWithNoBody[] } }> = async () => {
  const endpoint = 'scraps'
  const queries = {
    fields: 'id,date,revisedAt,highlight',
    depth: 3 as const,
    orders: '-revisedAt',
    limit: 10,
  }

  const contents = await getAllListContents({
    endpoint,
    queries,
  })

  return {
    props: {
      contents,
    },
  }
}

export default ScrapsIndexPage
