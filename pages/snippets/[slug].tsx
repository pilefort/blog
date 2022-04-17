import React from 'react'

import { NextPage, InferGetStaticPropsType } from 'next'

import { join } from 'path'
import MDX from '@mdx-js/runtime'

import { getAllContentPaths, getContentBySlug } from '../../src/libs/getContentsFromMdx'

import { CodeBlock } from '../../src/components/Mdx/CodeBlock'
import { CustomImage } from '../../src/components/Mdx/CustomImage'

const SnippetDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ title, tags, date, content }) => {
  const components = {
    code: CodeBlock,
    img: CustomImage,
  }

  return (
    <div>
      <div>{title}</div>
      <div>{tags}</div>
      <div>{date}</div>
      <MDX components={components}>{content}</MDX>
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllContentPaths({ target: 'snippets' })

  return { paths, fallback: false }
}

export const getStaticProps = ({ params }: { params: { slug: string } }) => {
  // NOTE: paramsから取得できるslugはページの[slug]であるため、snippetsが抜けている
  const contents = getContentBySlug('snippets/' + params.slug, ['title', 'content', 'tags', 'date'])

  const { title, content, tags, date } = contents

  return {
    props: {
      title,
      content,
      tags,
      date,
    },
  }
}

export default SnippetDetailsPage
