import React from 'react'

export const H1 = ({ children }: { children: string }) => (
  <h1
    id={children}
    className="text-[32px] font-bold"
  >
    {children}
  </h1>
)

export const H2 = ({ children }: { children: string }) => (
  <h2
    id={children}
    className="text-[24px] font-bold"
  >
    {children}
  </h2>
)
