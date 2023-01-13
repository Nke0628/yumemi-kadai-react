import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputBox from './InputBox'

export default {
  title: 'InputBox',
  component: InputBox,
} as ComponentMeta<typeof InputBox>

export const commom: ComponentStory<typeof InputBox> = () => (
  <InputBox onChange={() => {}}></InputBox>
)
