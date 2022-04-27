import tags from '../fetchData/snippets/tags.json'

import { getAllContentPaths, getContentBySlug } from '../libs/getContentsFromMdx'

import { InferGetStaticPropsType, NextPage } from 'next'

import { CustomSelectBox } from '../components/SnippetsPage/CustomSelectBox/SelectBox'
import { Contents } from '../components/SnippetsPage/Contents'

const SnippetsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allContents }) => {
  return (
    <div className="m-[16px]">
      <div>
        <CustomSelectBox tags={tags} />
      </div>
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
