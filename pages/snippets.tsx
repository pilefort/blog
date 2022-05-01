import tags from '../fetchData/snippets/tags.json'

import { getAllContentPaths, getContentBySlug } from '../libs/getContentsFromMdx'

import { InferGetStaticPropsType, NextPage } from 'next'

import { SelectLists } from '../components/SnippetsPage/SelectLists'
import { SnippetsLists } from '../components/SnippetsPage/SnippetsLists'

const SnippetsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allContents }) => {
  return (
    <div className="p-[16px]">
      <SelectLists tags={tags} />
      <SnippetsLists allContents={allContents} />
    </div>
  )
}

export const getStaticProps = async () => {
  const slugs = await getAllContentPaths({ target: 'snippets' })
  const allContents = slugs.map((slug) => getContentBySlug(slug, ['title', 'tags', 'date', 'slug']))

  allContents.sort((a, b) => {
    return a.date > b.date ? -1 : 1
  })

  return {
    props: {
      allContents,
    },
  }
}

export default SnippetsIndexPage
