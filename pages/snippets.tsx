import tags from '../fetchData/snippets/tags.json'

import { getAllContentPaths, getContentBySlug } from '../src/libs/getContentsFromMdx'

import { InferGetStaticPropsType, NextPage } from 'next'

import { CustomSelectBox } from '../src/components/SnippetsPage/CustomSelectBox/SelectBox'
import { Contents } from '../src/components/SnippetsPage/Contents'

const SnippetsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allContents }) => {
  return (
    <div className="m-[16px]">
      <CustomSelectBox tags={tags} />
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
