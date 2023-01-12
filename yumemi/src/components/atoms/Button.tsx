import React from 'react'
import style from './button.module.css'

type Props = {
  onClickButton: () => void
  children: React.ReactNode
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className={style['button']} onClick={() => props.onClickButton()}>
      {props.children}
    </button>
  )
}

export default Button
