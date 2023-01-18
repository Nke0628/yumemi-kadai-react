import React, { useRef } from 'react'
import HighchartsReact from 'highcharts-react-official'
import HighCharts from 'highcharts'
import { populationListType } from '../../types/types'

type Props = {
  populationList: populationListType
}

const HighChart: React.FC<Props> = ({ populationList }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  const series: HighCharts.SeriesOptionsType[] = []
  const categories: string[] = []

  populationList.forEach((population) => {
    const data: number[] = []
    population.population.forEach((pd) => {
      data.push(pd.value)
      categories.push(String(pd.year))
    })
    series.push({
      type: 'line',
      name: population.prefName,
      data,
    })
  })

  const xAxis: HighCharts.XAxisOptions = {
    title: {
      text: '年度',
    },
    categories,
  }
  const options: HighCharts.Options = {
    title: {
      text: '人口推移',
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    xAxis,
    series:
      series.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series,
  }

  return (
    <HighchartsReact
      highcharts={HighCharts}
      options={options}
      ref={chartComponentRef}
    />
  )
}

export default HighChart
