import React from 'react'

type Props = {
  labelText: string
  value: string
  onCheck: (value: string, checkd: boolean) => void
}

const CheckBoxWithLabel: React.FC<Props> = ({
  labelText,
  value,
  onCheck,
}: Props) => (
  <div className="flex items-center mr-4">
    <input
      id={`default-checkbox-${value}`}
      type="checkbox"
      value={value}
      onChange={(e) => onCheck(e.target.value, e.target.checked)}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      htmlFor={`default-checkbox-${value}`}
      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {labelText}
    </label>
  </div>
)

export default CheckBoxWithLabel
