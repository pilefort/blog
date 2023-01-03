import { utcToJst } from '../../../libs/date'
import Link from 'next/link'
import { Mdx } from '@components/MdxComponent/Mdx'
import { ContentsWithNoBody } from '../../../types/microCMS/Common'

export const IndexPage = ({ contents }: { contents: ContentsWithNoBody[] }) => {
  return (
    <div className="m-auto grid max-w-[1500px] grid-flow-row grid-cols-1 items-center lg:grid-cols-2">
      {contents.map(({ id, revisedAt, highlight }) => {
        const dateTime = revisedAt && utcToJst({ date: revisedAt })

        return (
          <div
            key={id}
            className="m-[24px] rounded-[10px] border border-[black] p-[32px] hover:bg-[#d6fdff9e]"
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
  )
}
