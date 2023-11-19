import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import Link from 'next/link'

export const Card = ({
  src,
  body,
  img,
  priority,
  linkDisabled,
  url,
}: {
  src: string
  body: string
  img: StaticImageData
  priority?: true
  linkDisabled?: true
  url?: string
}) => {
  return (
    <li className="hover:color-[blue] m-[16px] flex w-fit justify-center rounded-2xl border border-[#e5e7eb] bg-[white] md:w-[400px] lg:w-[450px] xl:w-[500px]">
      {linkDisabled ? (
        <div className="cursor-not-allowed">
          <InnerCardContent
            img={img}
            body={body}
            priority={priority}
          />
        </div>
      ) : (
        <div>
          <InnerCardContent
            img={img}
            body={body}
            priority={priority}
          />
          <Link href={src}>
            <p className="ml-[4px] text-link">サンプル</p>
          </Link>
          <div className="mb-[8px] ml-[4px] mt-[8px] text-link">
            {url && (
              <Link
                href={url}
                target="_blank"
              >
                {url}
              </Link>
            )}
          </div>
        </div>
      )}
    </li>
  )
}

const InnerCardContent = ({ img, body, priority }: { body: string; img: StaticImageData; priority?: true }) => {
  return (
    <>
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        priority={priority}
        alt="画像"
      />
      <p className="mt-[24px] break-words p-[8px]">{body}</p>
    </>
  )
}
