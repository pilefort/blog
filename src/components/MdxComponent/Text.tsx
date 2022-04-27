import React from 'react'

export const H1 = ({ children }: { children: string }) => (
  <h1
    id={children}
    className="mt-[56px] text-[32px] font-bold md:text-[48px]"
  >
    {children}
  </h1>
)

export const H2 = ({ children }: { children: string }) => (
  <h2
    id={children}
    className="mt-[40px] text-[24px] font-bold md:text-[42px]"
  >
    {children}
  </h2>
)

export const P = ({ children }: { children: string }) => <p className="text-[16px] md:text-[24px]">{children}</p>

// TODO: listのdictを作る
export const List = ({ children }: { children: string }) => <div className="text-[16px] md:text-[24px]">・ {children}</div>
