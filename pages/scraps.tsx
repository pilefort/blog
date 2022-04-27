import data from '../fetchData/scraps/demoWith1Scrap.json'
import scrapsListsData from '../fetchData/scraps/demoWithScrapLists.json'

import { NextPage, InferGetStaticPropsType } from 'next'

import { CustomSelectbox } from '../src/components/ScrapsPage/CustomSelectBox/CustomSelectbox'
import { Highlight } from '../src/components/ScrapsPage/contents/Highlight'
import { Contents } from '../src/components/ScrapsPage/contents/Contents'

import { ScrapsListType, ContentType } from '../src/types/microCMS/Common'

const ScrapsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content: { scraps, highlight }, scrapsLists }) => {
  return (
    <div className="p-[24px]">
      <CustomSelectbox scrapsLists={scrapsLists} />
      <Highlight highlight={highlight} />
      <Contents scraps={scraps} />
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
