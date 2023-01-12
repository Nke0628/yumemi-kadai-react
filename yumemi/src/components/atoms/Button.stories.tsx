import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const test: ComponentStory<typeof Button> = () => (
  <Button onClickButton={() => {}}>Click me</Button>
)
