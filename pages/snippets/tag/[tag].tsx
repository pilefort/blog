import Link from 'next/link'
import { InferGetStaticPropsType, NextPage, GetStaticPropsContext } from 'next'

import tags from '../../../fetchData/snippets/tags.json'
import groupingData from '../../../fetchData/snippets/groupingByTag.json'
import { CustomSelectBox } from '../../../src/components/SnippetsPage/CustomSelectBox/SelectBox'

const SnippetsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ slug, group }) => {
  return (
    <div>
      <div>
        <CustomSelectBox tags={tags} />
      </div>
      <div>{slug}</div>
      <div>
        {group.map(({ name, slug }) => {
          return (
            <div key={slug}>
              <Link href={'/snippets/' + slug}>
                <a className="text-[#1ED3C6]">{name}</a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const getStaticPaths = () => {
  const paths = tags.map((tag) => `/snippets/tag/${tag.slug}`)

  return { paths, fallback: false }
}

export const getStaticProps: ({ params }: GetStaticPropsContext<{ tag: string }>) => {
  props: { slug: string; group: { name: string; slug: string }[] }
} = ({ params }) => {
  if (!params?.tag) throw new Error('params tag not found')

  const { slug, group } = groupingData.filter((data) => data.slug === params.tag)[0]

  return {
    props: {
      slug,
      group,
    },
  }
}

export default SnippetsIndexPage
