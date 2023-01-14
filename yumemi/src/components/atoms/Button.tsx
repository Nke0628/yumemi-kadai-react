import React from 'react'

type Props = {
  onClickButton: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  children: React.ReactNode
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={(e) => props.onClickButton(e)}
    >
      {props.children}
    </button>
  )
}

export default Button
