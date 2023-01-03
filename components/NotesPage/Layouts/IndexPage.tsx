import { utcToJst } from '../../../libs/date'
import Link from 'next/link'

export const IndexPage = ({ allContents }: { allContents: { title: string; slug: string; description: string; date: string }[] }) => {
  return (
    <div className="p-[32px]">
      <div>
        <div className="md:text-h1">最新記事</div>
        <hr className="mt-[24px] border-[1px] border-[black]" />
      </div>
      <div>
        {allContents.map(({ slug, title, description, date }) => {
          const createdAt = utcToJst({ date })

          return (
            <div
              key={slug}
              className="mt-[32px]"
            >
              <Link
                href={slug}
                passHref
                className="text-h4 text-link md:text-h1"
              >
                {title}
              </Link>
              <div className="text-h4 md:text-h3">{createdAt}</div>
              <div className="mt-[16px] md:text-h3">{description}</div>
              <hr className="mt-[24px] border-[1px] border-[black]" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
