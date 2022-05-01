import { InferGetStaticPropsType, NextPage, GetStaticPropsContext } from 'next'

import tags from '../../../fetchData/snippets/tags.json'
import { SelectLists } from '../../../components/SnippetsPage/SelectLists'
import { CustomHead } from '../../../components/MetaHead/CustomHead'
import { SnippetsLists } from '../../../components/SnippetsPage/SnippetsLists'
import { getAllContentPaths, getContentBySlug } from '../../../libs/getContentsFromMdx'

const SnippetsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ contents }) => {
  return (
    <>
      <CustomHead
        title="スニペット一覧"
        description="個人的に便利だと感じたスニペット一覧です"
      />
      <div className="p-[16px]">
        <SelectLists tags={tags} />
        <SnippetsLists allContents={contents} />
      </div>
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
