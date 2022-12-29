import zennLists from '@data/notes/zenn.json'

import Link from 'next/link'
import { InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../libs/getContentsFromMdx'
import { utcToJst } from '../libs/date'
import { CustomHead } from '@components/MetaHead/CustomHead'

const NotesIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allContents }) => {
  return (
    <>
      <CustomHead
        title="ノート一覧"
        description="個人的なメモ一覧です"
      />
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
                  className="border-link text-h4 md:text-h1"
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
    </>
  )
}

export const getStaticProps = async () => {
  const slugs = await getAllContentPaths({ target: 'notes' })
  const markdownContents = slugs.map((slug) => getContentBySlug(slug, ['title', 'description', 'date', 'slug']))

  const customZennLists = zennLists.map(({ title, link, pubDate, content }) => ({
    title,
    slug: link,
    description: content,
    date: new Date(pubDate).toLocaleDateString(),
    content: '',
    tags: [''],
  }))

  const allContents = markdownContents.concat(customZennLists)

  allContents.sort((a, b) => (new Date(b.date) < new Date(a.date) ? -1 : 1))

  return {
    props: {
      allContents,
    },
  }
}

export default NotesIndexPage
