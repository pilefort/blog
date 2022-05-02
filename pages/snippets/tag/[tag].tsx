import tags from '../../../fetchData/snippets/tags.json'

import { InferGetStaticPropsType, NextPage, GetStaticPropsContext } from 'next'

import { CustomHead } from '../../../components/MetaHead/CustomHead'
import { getAllContentPaths, getContentBySlug } from '../../../libs/getContentsFromMdx'
import { CommonSnippetsIndexPage } from '../../../components/SnippetsPage/CommonSnippetsIndexPage'

const SnippetsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ contents }) => {
  return (
    <>
      <CustomHead
        title="スニペット一覧"
        description="個人的に便利だと感じたスニペット一覧です"
      />
      <CommonSnippetsIndexPage allContents={contents} />
    </>
  )
}

export const getStaticPaths = () => {
  const paths = tags.map((tag) => `/snippets/tag/${tag.slug}`)

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ tag: string }>) => {
  if (!params?.tag) throw new Error('params tag not found')

  const slugs = await getAllContentPaths({ target: 'snippets' })
  const allContents = slugs.map((slug) => getContentBySlug(slug, ['title', 'tags', 'date', 'slug']))

  allContents.sort((a, b) => {
    return a.date > b.date ? -1 : 1
  })

  const contents = allContents.filter((data) => data.tags.includes(params.tag))

  return {
    props: {
      contents,
    },
  }
}

export default SnippetsIndexPage
