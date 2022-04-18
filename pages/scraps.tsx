import data from '../fetchData/scraps/demoWith1Scrap.json'
import scrapsListsData from '../fetchData/scraps/demoWithScrapLists.json'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { NextPage, InferGetStaticPropsType } from 'next'

import { utcToJst } from '../src/libs/date'

import TagIcon from '../public/assets/Tag.svg'
import LinkIcon from '../public/assets/Link.svg'

import { ScrapsListType, ContentType, ScrapsType } from '../src/types/microCMS/Common'

import MDX from '@mdx-js/runtime'

import { CodeBlock } from '../src/components/Mdx/CodeBlock'
import { CustomImage } from '../src/components/Mdx/CustomImage'

const ScrapsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content: { scraps, highlight }, scrapsLists }) => {
  return (
    <div className="p-[24px]">
      <SelectboxComponent scrapsLists={scrapsLists} />
      <HighlightComponent highlight={highlight} />
      <ContentsComponent scraps={scraps} />
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

// selectbox component
const SelectboxComponent = ({ scrapsLists }: { scrapsLists: ScrapsListType }) => {
  return (
    <select
      className="text-[24px]"
      name="scraps"
    >
      {scrapsLists.map(({ id, createdAt, date }) => {
        const dateTime = utcToJst({ date: date || createdAt })

        return (
          <SelectboxContentComponent
            key={id}
            id={id}
            dateTime={dateTime}
          />
        )
      })}
    </select>
  )
}

// selectbox component
const SelectboxContentComponent = ({ id, dateTime }: { id: string; dateTime: string }) => {
  return (
    <option
      key={id}
      value={id}
    >
      {dateTime}
    </option>
  )
}

// highlight component
const HighlightComponent = ({ highlight }: { highlight: string }) => {
  return (
    <div>
      <div className="mt-[24px] w-[120px] rounded-[10px_10px_0_0px] border-[5px_5px_0_5px] border-[#1ED3C6] text-center text-[18px]">ハイライト</div>
      <div
        className={'border-[5px] border-[#1ED3C6] p-[8px]'}
        dangerouslySetInnerHTML={{ __html: highlight }}
      />
    </div>
  )
}

const ContentsComponent = ({ scraps }: { scraps: ScrapsType }) => {
  return (
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
                  <TagComponent
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                  />
                )
              })}
            <div className="mt-[16px]">
              {body.map(({ content, fieldId }, index) => {
                return (
                  <ContentBodyComponent
                    key={index}
                    fieldId={fieldId}
                    content={content}
                  />
                )
              })}
            </div>
            {links &&
              links.map(({ url }, index) => {
                return (
                  <LinkComponent
                    key={index}
                    url={url}
                  />
                )
              })}
          </div>
        )
      })}
    </div>
  )
}

// content component
const ContentBodyComponent = ({ fieldId, content }: { fieldId: string; content: string }) => {
  const components = {
    code: CodeBlock,
    img: CustomImage,
  }

  return (
    <div className="break-all">
      {fieldId === 'plainText' ? <MDX components={components}>{content}</MDX> : <div dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  )
}

// content component
const TagComponent = ({ id, title, description }: { id: string; title: string; description: string }) => {
  const [isHover, setIsHover] = useState(false)

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
}

// content component
const LinkComponent = ({ url }: { url: string }) => {
  return (
    <div className="mt-[8px] flex">
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
        passHref
      >
        <a className="ml-[8px] text-[#10AFA4]">{url}</a>
      </Link>
    </div>
  )
}

export default ScrapsIndexPage
