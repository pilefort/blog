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
        content="Pilefort"
      />
      <meta
        name="description"
        content={description}
      />

      <meta
        property="og:locale"
        content="ja_JP"
      />
      <meta
        property="og:title"
        content="Pilefort"
      />
      <meta
        property="og:type"
        content="article"
      />
      <meta
        property="og:description"
        content="技術ブログです。"
      />
      <meta
        property="og:url"
        content="https://pilefort.dev"
      />
      {/*<meta property="og:image" content="/assets/ogp.png" />*/}

      <link
        rel="icon"
        href="/assets/favicon.png"
      />
    </Head>
  )
}
