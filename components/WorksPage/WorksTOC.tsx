import Link from 'next/link'

export const WorksTOC = ({ TOCData }: { TOCData: { topic: boolean; depth: number; title: string; url: string }[] }) => {
  return (
    <div className="h-screen min-w-[300px] overflow-scroll p-[32px]">
      <h2 className={'text-[32px]'}>目次</h2>
      <div>
        {TOCData.map((data, index) => {
          return data.topic ? (
            <div
              key={index}
              className={data.depth === 1 ? 'mt-[40px] text-[24px]' : ''}
            >
              {data.title}
            </div>
          ) : (
            <Link
              href={data.url}
              key={index}
              className={'ml-[24px] block p-[4px] text-[18px] text-[blue]'}
            >
              {data.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
