import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HighChart from './HighChart'
import { populationListType } from '../../types/types'

export default {
  title: 'HighChart',
  component: HighChart,
} as ComponentMeta<typeof HighChart>

export const Commom: ComponentStory<typeof HighChart> = () => {
  const populationListData: populationListType = [
    {
      prefName: '兵庫県',
      population: [
        {
          year: 2000,
          value: 1000000,
        },
        {
          year: 2020,
          value: 2000000,
        },
      ],
    },
  ]
  return <HighChart populationList={populationListData} />
}
