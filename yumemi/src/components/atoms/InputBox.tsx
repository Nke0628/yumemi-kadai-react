import React from 'react'

type Props = {
  onChange: (text: string) => void
}

const InputBox: React.FC<Props> = ({ onChange }: Props) => (
  <input
    type="text"
    onChange={(e) => onChange(e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
)

export default InputBox
