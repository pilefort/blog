import React, { ReactElement } from 'react'

import { CodeBlock } from './CodeBlock'
import { CustomImage } from './CustomImage'
import { H1, H2, H3, P, Span, List } from './Text'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

const components = {
  code: CodeBlock,
  h1: H1,
  h2: H2,
  h3: H3,
  img: CustomImage,
  figcaption: ({ children }: { children: string }) => {
    // CustomImageで前後にmy-[32px]を設定してます
    // 画像とキャプションを近くにするために、-32pxしてます
    return <p className="mt-[-32px]">{children}</p>
  },
  p: P,
  span: Span,
  li: List,
  a: ({ children, href }: { children: string; href: string }) => (
    <Link
      href={href}
      passHref
      target="_blank"
      className="text-link"
    >
      {children}
    </Link>
  ),
  footer: ({ children }: { children: ReactElement<{ id: string; className: string; children: string[] }, string | 'div'>[] }) => {
    return (
      <>
        <hr className={'my-[32px] border-[#104359]'} />
        <div>{children}</div>
      </>
    )
  },
}

export const Mdx = ({ children }: { children: string }) => {
  return (
    <Markdown
      options={{
        forceBlock: false,
        overrides: components,
      }}
    >
      {children}
    </Markdown>
  )
}
