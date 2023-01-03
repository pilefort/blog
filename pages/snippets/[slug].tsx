import React from 'react'

import { NextPage, InferGetStaticPropsType } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../libs/getContentsFromMdx'

import { utcToJst } from '../../libs/date'
import { CustomHead } from '@components/MetaHead/CustomHead'
import { DetailsPage } from '@components/SnippetsPage/Layouts/DetailsPage'

const SnippetDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ title, tags, date, content }) => {
  const createdAt = utcToJst({ date })

  return (
    <>
      <CustomHead
        title={title}
        description={`${title}に関するスニペットです`}
      />
      <DetailsPage
        title={title}
        tags={tags}
        createdAt={createdAt}
        content={content}
      />
    </>
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
