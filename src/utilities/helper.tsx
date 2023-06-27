import React from 'react'

export const paragraphStrings = (message: string[]) => {
  return message.map((line, index) => {
    return (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    )
  })
}
