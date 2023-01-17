import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Container: React.FC<Props> = ({ children }: Props) => (
  <div className="container mx-auto my-4 px-4">{children}</div>
)
