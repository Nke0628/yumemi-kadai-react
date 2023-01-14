import React, { Children } from 'react'

type Props = {
  children: React.ReactNode
}

export const Container: React.FC<Props> = (props) => {
  return <div className="container mx-auto my-4 px-4">{props.children}</div>
}
