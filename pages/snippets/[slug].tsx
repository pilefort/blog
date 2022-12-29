import React from 'react'

import { NextPage, InferGetStaticPropsType } from 'next'

import { getAllContentPaths, getContentBySlug } from '../../libs/getContentsFromMdx'

import { Mdx } from '@components/MdxComponent/Mdx'
import { utcToJst } from '../../libs/date'
import { CustomHead } from '@components/MetaHead/CustomHead'
import { Tag } from '@components/ScrapsPage/contents/Tag'

const SnippetDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ title, tags, date, content }) => {
  const createdAt = utcToJst({ date })

  return (
    <>
      <CustomHead
        title={title}
        description={`${title}に関するスニペットです`}
      />
      <div className="m-[24px]">
        <div className="border-l-[6px] border-[#104359] p-[8px] text-[24px] md:text-[36px]">
          <span>{title}</span>
        </div>
        <div className="flex">
          {/* TODO: なぜかnever型に推論される？ */}
          {(tags as string[]).map((tag, index) => {
            return (
              <span
                key={index}
                className={`${index === 0 ? '' : 'ml-[8px]'}`}
              >
                <Tag
                  id={tag}
                  title={tag}
                />
              </span>
            )
          })}
        </div>
        <div className="mt-[8px] md:text-[24px]">{createdAt}</div>
        <div className="mt-[32px]">
          <Mdx>{content}</Mdx>
        </div>
      </div>
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
