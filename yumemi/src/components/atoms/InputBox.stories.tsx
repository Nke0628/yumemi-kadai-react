import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputBox from './InputBox'

export default {
  title: 'InputBox',
  component: InputBox,
} as ComponentMeta<typeof InputBox>

export const Commom: ComponentStory<typeof InputBox> = () => (
  <InputBox onChange={() => {}} />
)
