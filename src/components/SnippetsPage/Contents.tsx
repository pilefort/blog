import { utcToJst } from '../../libs/date'
import Link from 'next/link'

export const Contents = ({ allContents }: { allContents: { slug: string; title: string; tags: string[]; date: string }[] }) => {
  return (
    <div className="mt-[48px]">
      {allContents.map(({ slug, title, tags, date }) => {
        const createdAt = utcToJst({ date })

        return (
          <div
            key={slug}
            className="mb-[16px]"
          >
            <Link
              href={slug}
              passHref
            >
              <a className="text-[#1ED3C6]">{title}</a>
            </Link>
            <div>
              {tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className={`${index === 0 ? '' : 'ml-[8px]'}`}
                  >
                    {tag}
                  </span>
                )
              })}
            </div>
            <div>{createdAt}</div>
          </div>
        )
      })}
    </div>
  )
}
