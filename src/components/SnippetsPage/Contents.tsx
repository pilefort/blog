import Link from 'next/link'

import { Tag } from '../ScrapsPage/contents/Tag'

export const Contents = ({ allContents }: { allContents: { slug: string; title: string; tags: string[]; date: string }[] }) => {
  return (
    <div className="mt-[48px]">
      {allContents.map(({ slug, title, tags }) => {
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
            <div className="flex">
              {tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className={`${index === 0 ? '' : 'ml-[8px]'}`}
                  >
                    <Tag
                      id={tag}
                      title={tag}
                    />
                  </span>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
