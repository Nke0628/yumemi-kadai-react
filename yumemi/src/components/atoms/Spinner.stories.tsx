import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Spinner from './Spinner'

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

export const commom: ComponentStory<typeof Spinner> = () => <Spinner></Spinner>
