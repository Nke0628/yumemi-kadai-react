import React from 'react'

type Props = {
  labelText: string
  value: number | string
  onCheck: (value: number | string) => void
}

const CheckBoxWithLabel: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center mr-4">
      <input
        id={'default-checkbox-' + props.value}
        type="checkbox"
        value={props.value}
        onChange={(e) => props.onCheck(e.target.value)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      ></input>
      <label
        htmlFor={'default-checkbox-' + props.value}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {props.labelText}
      </label>
    </div>
  )
}

export default CheckBoxWithLabel
