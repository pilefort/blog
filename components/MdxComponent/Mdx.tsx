import React from 'react'

import { CodeBlock } from './CodeBlock'
import { CustomImage } from '../CustomImage'
import { H1, H2, P, List } from './Text'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

const components = {
  code: CodeBlock,
  h1: H1,
  h2: H2,
  img: CustomImage,
  p: P,
  li: List,
  a: ({ children, href }: { children: string; href: string }) => (
    <Link
      href={href}
      passHref
    >
      <a
        target="_blank"
        className="text-[#10AFA4]"
      >
        {children}
      </a>
    </Link>
  ),
  Pending: ({ children }: { children: string }) => (
    <>
      <div className="text-center text-[80px] font-bold">準備中</div>
      <div className="blur-sm">{children}</div>
    </>
  ),
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
