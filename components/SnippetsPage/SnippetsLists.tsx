import Link from 'next/link'

import { Tag } from '../ScrapsPage/contents/Tag'

export const SnippetsLists = ({ allContents }: { allContents: { slug: string; title: string; tags: string[]; date: string }[] }) => {
  return (
    <div className="mt-[48px]">
      {allContents.map(({ slug, title, tags }) => {
        return (
          <div
            key={slug}
            className="mb-[32px]"
          >
            <Link
              href={slug}
              passHref
              className="text-h3 text-link md:text-h1"
            >
              {title}
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
