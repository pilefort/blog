import React from 'react'

import { NextPage, InferGetStaticPropsType } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../libs/getContentsFromMdx'

import { Mdx } from '../../components/MdxComponent/Mdx'
import { utcToJst } from '../../libs/date'

const SnippetDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ title, tags, date, content }) => {
  const createdAt = utcToJst({ date })

  return (
    <div>
      <div>{title}</div>
      <div>{tags}</div>
      <div>{createdAt}</div>
      <Mdx>{content}</Mdx>
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
