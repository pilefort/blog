import Link from 'next/link'
import { InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../src/libs/getContentsFromMdx'

const NotesIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allContents }) => {
  return (
    <>
      <div>
        <div>記事一覧</div>
      </div>
      <div className="mt-[48px]">
        {allContents.map(({ slug, title, description, date }) => {
          return (
            <div
              key={slug}
              className="mb-[64px]"
            >
              <Link
                href={slug}
                passHref
              >
                <a>{title}</a>
              </Link>
              <div>{date}</div>
              <div>{description}</div>
            </div>
          )
        })}
      </div>
    </>
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
