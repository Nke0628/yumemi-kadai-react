import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CheckBoxWithLabel from './CheckBoxWithLabel'

export default {
  title: 'CheckBoxWithLabel',
  component: CheckBoxWithLabel,
} as ComponentMeta<typeof CheckBoxWithLabel>

export const Commom: ComponentStory<typeof CheckBoxWithLabel> = () => (
  <CheckBoxWithLabel
    value="1"
    onCheck={() => {}}
    labelText="checkbox sample"
  />
)
