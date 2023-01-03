import Link from 'next/link'

export const TOC = ({
  TOCData,
  className,
  title,
}: {
  TOCData: { topic: boolean; depth: number; title: string; url: string }[]
  className: string
  title: string
}) => {
  return (
    <div className={className}>
      <h2 className={'text-h4'}>{title}</h2>
      <h2 className={'text-h1'}>目次</h2>
      <div>
        {TOCData.map((data, index) => {
          return data.topic ? (
            <div
              key={index}
              className={data.depth === 1 ? 'mt-[40px] text-h3' : ''}
            >
              {data.title}
            </div>
          ) : (
            <Link
              href={data.url}
              key={index}
              className={'ml-[24px] block p-[8px] text-h4 text-[blue]'}
            >
              {data.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
