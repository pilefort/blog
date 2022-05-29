import React from 'react'

import { CodeBlock } from './CodeBlock'
import { CustomImage } from '../CustomImage'
import { H1, H2, H3, P, List } from './Text'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

const components = {
  code: CodeBlock,
  h1: H1,
  h2: H2,
  h3: H3,
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
