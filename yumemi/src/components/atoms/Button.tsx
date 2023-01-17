import React from 'react'

type Props = {
  onClickButton: () => void
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ onClickButton, children }: Props) => (
  <button
    type="button"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => onClickButton()}
  >
    {children}
  </button>
)

export default Button
