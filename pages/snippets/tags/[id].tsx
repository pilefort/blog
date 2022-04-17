import Link from 'next/link'
import { InferGetStaticPropsType, NextPage, GetStaticPropsContext } from 'next'

import tags from '../../../fetchData/snippets/tags.json'
import groupingData from '../../../fetchData/snippets/groupingByTag.json'

const SnippetsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ slug, group }) => {
  return (
    <div>
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
  const paths = tags.map((tag) => '/snippets/tags/' + tag.slug)

  return { paths, fallback: false }
}

export const getStaticProps: ({ params }: GetStaticPropsContext<{ id: string }>) => {
  props: { slug: string; group: { name: string; slug: string }[] }
} = ({ params }) => {
  if (!params?.id) throw new Error('params.id not found')

  const { slug, group } = groupingData.filter((data) => data.slug === params.id)[0]

  return {
    props: {
      slug,
      group,
    },
  }
}

export default SnippetsIndexPage
