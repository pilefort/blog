import { Card } from '@components/WorksPage/Card'
import tech14 from '@public/assets/tech-dojin/tech14.jpg'
import tech13 from '@public/assets/tech-dojin/tech13.jpg'
import tech12 from '@public/assets/tech-dojin/tech12.jpg'

export const IndexPage = () => {
  return (
    <div className="m-auto grid w-fit md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <Card
        src={'/works'}
        body={'2022年後半に登場したライブラリ・サービス・フレームワークについて紹介する本 (準備中)'}
        img={tech14}
        priority={true}
        linkDisabled={true}
      />
      <Card
        src={'/works/web_changelog_2022part1/preface'}
        body={'2022年前半に登場したライブラリ・サービス・フレームワークについて紹介する本'}
        img={tech13}
      />
      <Card
        src={'/works/web_changelog_2021/preface'}
        body={'2021年に登場したライブラリ・サービス・フレームワークについて紹介する本'}
        img={tech12}
      />
    </div>
  )
}
