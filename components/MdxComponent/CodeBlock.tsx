import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/nightOwl'

export const CodeBlock = ({ children, className }: { children: string; className: string }) => {
  if (!className) {
    return <code className="bg-[#e1ecf7] p-[4px]">{children}</code>
  }

  const [lang, fileName] = className && className.includes(':') ? className.split(':') : [className, '']
  const language: string = lang ? lang.replace(/lang-/, '') : 'javascript'

  // cf. https://github.com/FormidableLabs/prism-react-renderer
  return (
    <div className="my-[16px] md:my-[32px]">
      <>
        <div className="h-[35px] rounded-t-[10px] bg-black py-[4px] text-center">
          <div className="relative ml-[16px] items-center">
            <div className="absolute top-[5px] left-0 h-[15px] w-[15px] rounded-[50%] bg-[#FF5F56]" />
            <div className="absolute top-[5px] left-[24px] h-[15px] w-[15px] rounded-[50%] bg-[#FFBD2E]" />
            <div className="absolute top-[5px] left-[48px] h-[15px] w-[15px] rounded-[50%] bg-[#27C93F]" />
          </div>
          <span className="text-center text-white">{fileName}</span>
        </div>
        <Highlight
          {...defaultProps}
          code={children}
          language={language as Language}
          theme={github}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} mb-[32px] overflow-auto rounded-b-[10px] p-[16px] text-[15px] md:text-[20px]`}
              style={{ ...style }}
            >
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index })

                return (
                  <div
                    key={lineProps.key}
                    {...lineProps}
                  >
                    <div className="flex">
                      <div>{index + 1}</div>
                      <div className="ml-[16px]">
                        {line.map((token, index) => {
                          return (
                            <span
                              key={index}
                              {...getTokenProps({ token, index })}
                            />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </pre>
          )}
        </Highlight>
      </>
    </div>
  )
}
