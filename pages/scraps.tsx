import data from '../fetchData/demo/demoWith1Scrap.json'
import scrapsListsData from '../fetchData/demo/demoWithScrapLists.json'

import { NextPage, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { utcToJst } from '../src/libs/date'
import Image from 'next/image'

import TagIcon from '../public/assets/Tag.svg'
import LinkIcon from '../public/assets/Link.svg'

type CommonMicroCMSResponse = {
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string
}

type ContentType = CommonMicroCMSResponse & {
  id: string
  date: string
  createdAt: string
  highlight: string
  scraps: (CommonMicroCMSResponse & {
    id: string
    updatedAt: string
    tags?: (CommonMicroCMSResponse & {
      id: string
      title: string
      description: string
    })[]
    links?: {
      fieldId: string
      url: string
    }[]
    title: string
    body: {
      fieldId: string
      content: string
    }[]
    related?: {
      id: string
      title: string
    }[]
  })[]
}

type ScrapsListType = {
  id: string
  date?: string
  createdAt: string
}[]

const ScrapsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content: { scraps, highlight }, scrapsLists }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="p-[24px]">
      <select
        className="text-[24px]"
        name="scraps"
      >
        {scrapsLists.map(({ id, createdAt, date }) => {
          const dateTime = utcToJst({ date: date || createdAt })

          return (
            <option
              key={id}
              value={id}
            >
              {dateTime}
            </option>
          )
        })}
      </select>

      <div>
        <div className="mt-[24px] w-[120px] rounded-[10px_10px_0_0px] border-[5px_5px_0_5px] border-[#1ED3C6] text-center text-[18px]">
          ハイライト
        </div>
        <div
          className={'border-[5px] border-[#1ED3C6] p-[8px]'}
          dangerouslySetInnerHTML={{ __html: highlight }}
        />
      </div>
      <div className="mt-[64px]">
        {scraps.map(({ id, title, tags, updatedAt, body, links }) => {
          const date = utcToJst({ date: updatedAt })

          return (
            <div
              className="mt-[52px]"
              key={id}
            >
              <div className="text-[32px]">{title}</div>
              <div>{date}</div>
              {tags &&
                tags.map(({ id, title, description }) => {
                  return (
                    <div
                      key={id}
                      className="mr-[8px] flex items-center"
                    >
                      <Image
                        src={TagIcon}
                        alt="tag"
                      />
                      <span
                        className="ml-[4px]"
                        onMouseOver={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                      >
                        {title}
                      </span>
                      {isHover && <div dangerouslySetInnerHTML={{ __html: description }} />}
                    </div>
                  )
                })}
              <div className="mt-[16px]">
                {body.map(({ content, fieldId }, index) => {
                  return fieldId === 'plainText' ? (
                    <div key={index}>MarkdownToHTMLで表示する部分</div>
                  ) : (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  )
                })}
              </div>
              {links &&
                links.map(({ url }, index) => {
                  return (
                    <div
                      key={index}
                      className="mt-[8px] flex"
                    >
                      <div className="mt-[2px] h-[24px] w-[60px]">
                        <Image
                          src={LinkIcon}
                          width={24}
                          height={24}
                          alt="link"
                        />
                      </div>
                      <Link
                        href={url}
                        key={index}
                        passHref
                      >
                        <a className="ml-[8px] text-[#10AFA4]">{url}</a>
                      </Link>
                    </div>
                  )
                })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const getStaticProps = (): {
  props: {
    content: ContentType
    scrapsLists: ScrapsListType
  }
} => {
  const content = data
  const { contents: scrapsLists } = scrapsListsData

  return {
    props: {
      content,
      scrapsLists,
    },
  }
}

export default ScrapsIndexPage
