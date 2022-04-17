import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/github'
import React from 'react'

export const CodeBlock = ({ children, className }: { children: string; className: string }) => {
  const language: string = className ? className.replace(/language-/, '') : 'javascript'

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language as Language}
      theme={github}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: '16px', marginBottom: '32px', fontSize: '20px' }}
        >
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
            >
              <div style={{ display: 'flex' }}>
                <div>{i + 1}</div>
                <div style={{ marginLeft: '16px' }}>
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
