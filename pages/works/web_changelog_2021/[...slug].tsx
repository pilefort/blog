import React from 'react'

import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../../libs/getContentsFromMdx'

import { Mdx } from '../../../components/MdxComponent/Mdx'
import TOCData from '../../../data/works/web_changelog_2021.json'
import { WorksTOC } from '../../../components/WorksPage/WorksTOC'

const NotesDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content }) => {
  return (
    <div className={'flex'}>
      <WorksTOC TOCData={TOCData} />
      <div className="m-[32px] w-auto overflow-x-auto">
        <Mdx>{content}</Mdx>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllContentPaths({ target: 'works/web_changelog_2021', depth: 3 })

  return { paths, fallback: false }
}

export const getStaticProps: ({ params }: GetStaticPropsContext<{ slug: string[] }>) => {
  props: { content: string }
} = ({ params }) => {
  console.warn('params', params)
  if (!params?.slug) throw new Error('slug not found')

  const contents = getContentBySlug('works/web_changelog_2021/' + params.slug.join('/'), ['content'])
  const { content } = contents

  return {
    props: {
      content,
    },
  }
}

export default NotesDetailsPage
