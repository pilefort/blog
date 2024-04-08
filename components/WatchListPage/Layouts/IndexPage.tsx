import Link from 'next/link'

const CustomLink = ({ href, description }: { href: string; description: string }) => {
  return (
    <div className="my-[16px] text-[24px]">
      <Link
        href={href}
        passHref
        target="_blank"
      >
        {description}
      </Link>
    </div>
  )
}

const Subject = ({ title }: { title: string }) => {
  return <h1 className="text-[32px]">{title}</h1>
}

const Hr = () => {
  return <hr className="my-[32px]" />
}

export const IndexPage = () => {
  return (
    <div className="mx-[32px] my-[32px]">
      <Subject title="最新技術" />
      <CustomLink
        href="https://githubnext.com/"
        description="GitHub Next"
      />
      <CustomLink
        href="https://labs.google/"
        description="Google Labs"
      />
      <CustomLink
        href="https://continuouslabs.circleci.com/"
        description="CircleCI Continuous Labs"
      />
      <Hr />

      <Subject title="製品系" />
      <CustomLink
        href="https://vercel.com/changelog"
        description="Vercel Changelog"
      />
      <CustomLink
        href="https://github.blog/changelog/"
        description="GitHub Changelog"
      />
      <CustomLink
        href="https://aws.amazon.com/jp/new/"
        description="AWS News"
      />
      <CustomLink
        href="https://www.builder.io/blog/"
        description="Builder.io Blog"
      />
      <CustomLink
        href="https://blog.cloudflare.com/"
        description="Cloudflare Blog"
      />
      <CustomLink
        href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
        description="OpenAI ChatGPT Release Notes"
      />
      <CustomLink
        href="https://pusher.com/blog/"
        description="Pusher Blog"
      />
      <Hr />

      <Subject title="ライブラリ・フレームワーク系" />
      <CustomLink
        href="https://github.com/vercel/next.js"
        description="vercel/next.js"
      />
      <CustomLink
        href="https://devblogs.microsoft.com/typescript/"
        description="TypeScript"
      />
      <CustomLink
        href="https://www.serverless.com/blog"
        description="Serverless Framework"
      />
      <Hr />

      <Subject title="HTML/CSS/JS" />
      <CustomLink
        href="https://web.dev/series/newly-interoperable?hl=ja"
        description="web.dev (Newly interoperable)"
      />
      <CustomLink
        href="https://web.dev/series/new-to-the-web?hl=ja"
        description="web.dev (クロスプラットフォーム対応した機能)"
      />
      <Hr />

      <Subject title="WebAssembly" />
      <CustomLink
        href="https://wasmer.io/posts"
        description="Wasmer Blog"
      />
      <CustomLink
        href="https://wasmlabs.dev/articles/"
        description="Wasm Labs"
      />
      <Hr />

      <Subject title="その他" />
      <CustomLink
        href="https://shopify.engineering/"
        description="Ruby (Shopify)"
      />
      <CustomLink
        href="https://developers.google.com/search/blog?hl=ja"
        description="Google検索関連"
      />
      <Hr />
    </div>
  )
}
