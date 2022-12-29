import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import Link from 'next/link'

export const Card = ({ src, body, img }: { src: string; body: string; img: StaticImageData }) => {
  return (
    <>
      <li className="hover:color-[blue] m-[16px] flex w-[350px] justify-center rounded-2xl border border-[#e5e7eb] bg-white md:w-[400px] lg:w-[450px] xl:w-[500px]">
        <Link href={src}>
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt="画像"
          />
          <p className="mt-[24px] break-words p-[8px]">{body}</p>
        </Link>
      </li>
    </>
  )
}
