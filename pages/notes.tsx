import Link from 'next/link'
import { InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../src/libs/getContentsFromMdx'
import { utcToJst } from '../src/libs/date'

const NotesIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allContents }) => {
  return (
    <div className="m-[32px]">
      <div>
        <div className="md:text-[36px]">最新記事</div>
        <hr className="mt-[24px] border-[1px] border-black" />
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
              >
                <a className="text-[16px] text-[#1ED3C6] md:text-[32px]">{title}</a>
              </Link>
              <div className="text-[14px] md:text-[28px]">{createdAt}</div>
              <div className="mt-[16px] md:text-[24px]">{description}</div>
              <hr className="mt-[24px] border-[1px] border-black" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const slugs = await getAllContentPaths({ target: 'notes' })
  const allContents = slugs.map((slug) => getContentBySlug(slug, ['title', 'description', 'date', 'slug']))

  return {
    props: {
      allContents,
    },
  }
}

export default NotesIndexPage
