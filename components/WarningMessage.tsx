import { MouseEventHandler } from 'react'

export const WarningMessage = ({ message, onClickHandler }: { message: string; onClickHandler: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div className={'m-[8px] rounded-[8px] bg-[yellow] bg-opacity-25 p-[8px]'}>
      <div className="flex justify-between">
        <div className={'flex items-center'}>
          <WarningIcon className="hidden fill-[red] md:block" />
          <p className="ml-[4px]">{message}</p>
        </div>
        <div onClick={onClickHandler}>
          <CloseIcon />
        </div>
      </div>
    </div>
  )
}

const WarningIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      className={className}
    >
      <path d="M2 42 24 4l22 38Zm5.2-3h33.6L24 10Zm17-2.85q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Zm-1.5-5.55h3V19.4h-3Zm1.3-6.1Z" />
    </svg>
  )
}

const CloseIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      className={className}
    >
      <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
    </svg>
  )
}
