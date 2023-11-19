import { Card } from '@components/WorksPage/Card'
import WebChangelog2023part2 from '@public/assets/tech_dojin/web_changelog_2023part2.png'
import WebChangelog2023part1 from '@public/assets/tech_dojin/web_changelog_2023part1.jpg'
import WebChangelog2022part2 from '@public/assets/tech_dojin/web_changelog_2022part2.jpg'
import WebChangelog2022part1 from '@public/assets/tech_dojin/web_changelog_2022part1.jpg'
import WebChangelog2021 from '@public/assets/tech_dojin/web_changelog_2021.jpg'

export const IndexPage = () => {
  return (
    <div className="m-auto grid w-fit md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <Card
        src={'/samples/MyWebChangelog2023part2.pdf'}
        body={'2023年後半に登場したライブラリ・サービス・フレームワークについて紹介する本'}
        img={WebChangelog2023part2}
        priority={true}
        url={'https://booth.pm/ja/items/5258908'}
      />
      <Card
        src={'/samples/MyWebChangelog2023part1.pdf'}
        body={'2023年前半に登場したライブラリ・サービス・フレームワークについて紹介する本'}
        img={WebChangelog2023part1}
        url={'https://booth.pm/ja/items/4811054'}
      />
      <Card
        src={'/samples/MyWebChangelog2022part2.pdf'}
        body={'2022年後半に登場したライブラリ・サービス・フレームワークについて紹介する本'}
        img={WebChangelog2022part2}
        url={'https://booth.pm/ja/items/4811046'}
      />
      <Card
        src={'/works/web_changelog_2022part1/preface'}
        body={'2022年前半に登場したライブラリ・サービス・フレームワークについて紹介する本'}
        img={WebChangelog2022part1}
        url={'https://booth.pm/ja/items/4157010'}
      />
      <Card
        src={'/works/web_changelog_2021/preface'}
        body={'2021年に登場したライブラリ・サービス・フレームワークについて紹介する本'}
        img={WebChangelog2021}
        url={'https://booth.pm/ja/items/3633323'}
      />
    </div>
  )
}
