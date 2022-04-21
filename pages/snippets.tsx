import Link from 'next/link'
import { InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../src/libs/getContentsFromMdx'

import tags from '../fetchData/snippets/tags.json'
import { utcToJst } from '../src/libs/date'

const SnippetsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allContents }) => {
  return (
    <div className="m-[16px]">
      <TagSelectBox tags={tags} />
      <Contents allContents={allContents} />
    </div>
  )
}

export const getStaticProps = async () => {
  const slugs = await getAllContentPaths({ target: 'snippets' })
  const allContents = slugs.map((slug) => getContentBySlug(slug, ['title', 'tags', 'date', 'slug']))

  return {
    props: {
      allContents,
    },
  }
}

export default SnippetsIndexPage

const TagSelectBox = ({ tags }: { tags: { slug: string; name: string }[] }) => {
  return (
    <>
      <div>タグ一覧</div>
      <select>
        <option value="all">すべて</option>
        {tags.map((tag, index) => {
          return (
            <option
              key={tag.slug}
              className={`${index === 0 ? '' : 'ml-[8px]'}`}
            >
              <a href={`/snippets?tags=${tag.slug}`}>
                <span>{tag.name}</span>
              </a>
            </option>
          )
        })}
      </select>
    </>
  )
}

const Contents = ({ allContents }: { allContents: { slug: string; title: string; tags: string[]; date: string }[] }) => {
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
