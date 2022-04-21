import React from 'react'

import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'

import { getAllContentPaths, getContentBySlug } from '../../src/libs/getContentsFromMdx'

import { GitHubLink } from '../../src/components/GitHubLink'

import { utcToJst } from '../../src/libs/date'

import GoalFlag from '../../public/assets/Goal.svg'

import { Mdx } from '../../src/components/MdxComponent/Mdx'

const NotesDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ slug, title, content, date, goals }) => {
  const createdAt = utcToJst({ date })

  return (
    <>
      <div className="m-[24px]">
        <div className="border-l-[6px] border-[#104359] p-[8px] text-[24px]">{title}</div>
        <GitHubLink slug={slug} />
        <div className="mt-[8px]">{createdAt}</div>
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
  props: { slug: string; title: string; date: string; content: string; goals: string[] }
} = ({ params }) => {
  if (!params?.slug) throw new Error('slug not found')

  const contents = getContentBySlug('notes/' + params.slug, ['title', 'content', 'date', 'goals'])
  const { title, content, date, goals } = contents

  return {
    props: {
      slug: '/blob/master/notes/' + params.slug,
      title,
      content,
      date,
      goals,
    },
  }
}

export default NotesDetailsPage
