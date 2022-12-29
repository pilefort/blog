import React from 'react'

import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../libs/getContentsFromMdx'

import { Mdx } from '../../components/MdxComponent/Mdx'

const NotesDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content }) => {
  return (
    <div className="m-auto w-auto overflow-x-auto">
      <Mdx>{content}</Mdx>
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllContentPaths({ target: 'works', depth: 3 })

  return { paths, fallback: false }
}

export const getStaticProps: ({ params }: GetStaticPropsContext<{ slug: string[] }>) => {
  props: { content: string }
} = ({ params }) => {
  console.warn('params', params)
  if (!params?.slug) throw new Error('slug not found')

  const contents = getContentBySlug('works/' + params.slug.join('/'), ['content'])
  const { content } = contents

  return {
    props: {
      content,
    },
  }
}

export default NotesDetailsPage
