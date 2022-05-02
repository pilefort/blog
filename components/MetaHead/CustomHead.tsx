import Head from 'next/head'

export const CustomHead = ({ title, description }: { title?: string; description: string }) => {
  return (
    <Head>
      <title>{title ? title + ' | ' : ''}Pilefort</title>
      <link
        rel="manifest"
        href="/manifest.json"
      />
      <link
        rel="apple-touch-icon"
        href="/icon.png"
      />
      <link
        rel="icon"
        href="/assets/favicon.png"
      />
      <link
        rel="canonical"
        href="https://pilefort.dev"
      />
      <meta
        name="theme-color"
        content="#fff"
      />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <meta
        name="title"
        content={title}
      />
      <meta
        name="description"
        content={description}
      />
      {/*  OGP設定 */}
      <meta
        property="og:locale"
        content="ja_JP"
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:type"
        content="article"
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:url"
        content="https://pilefort.dev"
      />
      {/*<meta property="og:image" content="/assets/ogp.png" />*/}
      {/* Twitter OGP */}
      <meta
        property="twitter:title"
        content={title}
      />
      <meta
        property="twitter:description"
        content={description}
      />
    </Head>
  )
}
