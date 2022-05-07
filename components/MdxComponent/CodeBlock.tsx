import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/nightOwl'
import React from 'react'

export const CodeBlock = ({ children, className }: { children: string; className: string }) => {
  const [lang, fileName] = className && className.includes(':') ? className.split(':') : [className, '']
  const language: string = lang ? lang.replace(/language-/, '') : 'javascript'

  // cf. https://github.com/FormidableLabs/prism-react-renderer
  return (
    <div className="my-[16px] md:my-[32px]">
      {fileName && <div className="w-fit rounded-t-[10px] bg-[#011627] px-[16px] pt-[8px] text-center text-[white]">{fileName}</div>}
      <Highlight
        {...defaultProps}
        code={children}
        language={language as Language}
        theme={github}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} mb-[32px] overflow-auto p-[16px] text-[15px] md:text-[20px]`}
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
    </div>
  )
}
