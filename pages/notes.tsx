import zennLists from '@data/notes/zenn.json'

import { InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../libs/getContentsFromMdx'

import { CustomHead } from '@components/MetaHead/CustomHead'
import { IndexPage } from '@components/NotesPage/Layouts/IndexPage'

const NotesIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allContents }) => {
  return (
    <>
      <CustomHead
        title="ノート一覧"
        description="個人的なメモ一覧です"
      />
      <IndexPage allContents={allContents} />
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
