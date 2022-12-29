import { NextPage, InferGetStaticPropsType } from 'next'

import { ContentsWithNoBody } from '../types/microCMS/Common'
import { getAllListContents } from '../utils/getContents'
import { utcToJst } from '../libs/date'
import { CustomHead } from '@components/MetaHead/CustomHead'
import { Mdx } from '@components/MdxComponent/Mdx'
import Link from 'next/link'

const ScrapsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ contents }) => {
  return (
    <>
      <CustomHead
        title="最新のスクラップ"
        description="個人的に収集した情報をまとめています"
      />
      <div className="m-auto grid max-w-[1500px] grid-flow-row grid-cols-1 items-center lg:grid-cols-2">
        {contents.map(({ id, revisedAt, highlight }) => {
          const dateTime = revisedAt && utcToJst({ date: revisedAt })
          return (
            <div
              key={id}
              className="m-[24px] rounded-[10px] border border-black p-[32px] hover:bg-[#d6fdff9e]"
            >
              <Link
                href={`/scraps/${id}`}
                passHref
                className="cursor-pointer"
              >
                <div>
                  <Mdx>{highlight}</Mdx>
                </div>
                <div>公開日: {dateTime}</div>
              </Link>
            </div>
          )
        })}
      </div>
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
