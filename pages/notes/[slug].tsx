import React from 'react'

import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../libs/getContentsFromMdx'

import { utcToJst } from '../../libs/date'

import { CustomHead } from '@components/MetaHead/CustomHead'
import { DetailsPage } from '@components/NotesPage/Layouts/DetailsPage'

const NotesDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ title, content, date }) => {
  const dateTime = utcToJst({ date })

  return (
    <>
      <CustomHead
        title={`${title}`}
        description={`${title}に関するノートです`}
      />
      <DetailsPage
        title={title}
        content={content}
        dateTime={dateTime}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllContentPaths({ target: 'notes', depth: 1 })

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
