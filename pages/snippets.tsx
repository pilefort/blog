import { getAllContentPaths, getContentBySlug } from '../libs/getContentsFromMdx'

import { InferGetStaticPropsType, NextPage } from 'next'

import { CustomHead } from '@components/MetaHead/CustomHead'
import { CommonSnippetsIndexPage } from '@components/SnippetsPage/CommonSnippetsIndexPage'

const SnippetsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allContents }) => {
  return (
    <>
      <CustomHead
        title="スニペット一覧"
        description="個人的に便利だと感じたスニペット一覧です"
      />
      <CommonSnippetsIndexPage allContents={allContents} />
    </>
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
