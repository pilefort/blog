import React from 'react'

import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../libs/getContentsFromMdx'

import { GitHubLink } from '../../components/ScrapsPage/contents/GitHubLink'

import { utcToJst } from '../../libs/date'

import { Mdx } from '../../components/MdxComponent/Mdx'

const NotesDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ slug, title, content, date }) => {
  const createdAt = utcToJst({ date })

  return (
    <>
      <div className="m-[24px]">
        <div className="border-l-[6px] border-[#104359] p-[8px] text-[24px] md:text-[36px]">
          <span>{title}</span>
        </div>
        <GitHubLink slug={slug} />

        <div className="mt-[8px] md:text-[24px]">{createdAt}</div>
        <div className="mt-[32px]">
          <Mdx>{content}</Mdx>
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
  props: { slug: string; title: string; date: string; content: string }
} = ({ params }) => {
  if (!params?.slug) throw new Error('slug not found')

  const contents = getContentBySlug('notes/' + params.slug, ['title', 'content', 'date'])
  const { title, content, date } = contents

  return {
    props: {
      slug: '/blob/master/notes/' + params.slug,
      title,
      content,
      date,
    },
  }
}

export default NotesDetailsPage
