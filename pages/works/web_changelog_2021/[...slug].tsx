import React from 'react'

import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../../libs/getContentsFromMdx'

import TOCData from '@data/works/web_changelog_2021.json'
import { CommonWorksPage } from '@components/WorksPage/CommonWorksPage'
import { CustomHead } from '@components/MetaHead/CustomHead'

const WorkDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content }) => {
  return (
    <>
      <CustomHead
        title="うぇぶちぇんじろぐ2021"
        description="2021年に登場したライブラリ・サービス・フレームワーク・ツールを紹介した記事です"
      />
      <CommonWorksPage
        title={'うぇぶちぇんじろぐ2022part1'}
        content={content}
        TOCData={TOCData}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllContentPaths({ target: 'works/web_changelog_2021', depth: 3 })

  return { paths, fallback: false }
}

export const getStaticProps: ({ params }: GetStaticPropsContext<{ slug: string[] }>) => {
  props: { content: string }
} = ({ params }) => {
  if (!params?.slug) throw new Error('slug not found')

  const contents = getContentBySlug('works/web_changelog_2021/' + params.slug.join('/'), ['content'])
  const { content } = contents

  return {
    props: {
      content,
    },
  }
}

export default WorkDetailsPage
