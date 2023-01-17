import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Spinner from './Spinner'

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

export const Commom: ComponentStory<typeof Spinner> = () => <Spinner />
