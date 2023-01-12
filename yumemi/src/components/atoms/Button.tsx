import React from 'react'
import style from './button.module.css'

type Props = {
  onClickButton: () => void
  children: React.ReactNode
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => props.onClickButton()}
    >
      {props.children}
    </button>
  )
}

export default Button
