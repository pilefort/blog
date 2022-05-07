import React from 'react'

import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../libs/getContentsFromMdx'

import { utcToJst } from '../../libs/date'

import { Mdx } from '../../components/MdxComponent/Mdx'
import { TOC } from '../../components/MdxComponent/TOC'
import { CustomHead } from '../../components/MetaHead/CustomHead'

const NotesDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ title, content, date }) => {
  const dateTime = utcToJst({ date })

  return (
    <>
      <CustomHead
        title={`${title}`}
        description={`${title}に関するノートです`}
      />
      <div className="flex">
        <div className="m-auto w-auto overflow-x-auto">
          <div className="m-[24px]">
            <div className="border-l-[6px] border-[#104359] p-[8px] text-[24px] md:text-[36px]">
              <span>{title}</span>
            </div>
            <div className="mt-[8px] md:text-[24px]">{dateTime}</div>
            <div className="mt-[32px]">
              <Mdx>{content}</Mdx>
            </div>
          </div>
        </div>
        <div className="fixed right-0 mt-[100px] hidden text-[#104359] xl:block">
          <TOC>{content}</TOC>
        </div>
      </div>
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
