import { useState } from 'react'
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../../libs/getContentsFromMdx'

import TOCData from '@data/works/web_changelog_2021.json'
import { CommonWorksPage } from '@components/WorksPage/CommonWorksPage'
import { CustomHead } from '@components/MetaHead/CustomHead'
import { WarningMessage } from '@components/WarningMessage'

const WorkDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content }) => {
  const [show, setShow] = useState(true)

  return (
    <>
      <CustomHead
        title="うぇぶちぇんじろぐ2021"
        description="2021年に登場したライブラリ・サービス・フレームワーク・ツールを紹介した記事です"
      />
      {show && (
        <WarningMessage
          message={'このページ内容は2021年1月21日以降、再調査・再検証してません。実際に扱う際は最新の情報にアクセスしてください。'}
          onClickHandler={() => setShow(!show)}
        />
      )}
      <CommonWorksPage
        title={'うぇぶちぇんじろぐ2021'}
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
