import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../src/libs/getContentsFromMdx'
import { CodeBlock } from '../../src/components/Mdx/CodeBlock'
import { CustomImage } from '../../src/components/Mdx/CustomImage'
import MDX from '@mdx-js/runtime'
import React from 'react'

const NotesDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ title, content, date }) => {
  const components = {
    code: CodeBlock,
    img: CustomImage,
  }

  return (
    <>
      <div>
        <div>{title}</div>
        <div>{date}</div>
        <MDX components={components}>{content}</MDX>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllContentPaths({ target: 'notes', depth: 1 })
  console.warn('paths!!!', paths)

  return { paths, fallback: false }
}

export const getStaticProps: ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  props: { title: string; date: string; content: string }
} = ({ params }) => {
  if (!params?.slug) throw new Error('slug not found')

  const contents = getContentBySlug('notes/' + params.slug, ['title', 'content', 'date'])
  const { title, content, date } = contents

  return {
    props: {
      title,
      content,
      date,
    },
  }
}

export default NotesDetailsPage
