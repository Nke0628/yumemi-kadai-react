import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import fetchPrefectures from '../../apis/ResasApi'
import { AuthContext } from '../../contexts/AuthContext'
import {
  populationListType,
  populationType,
  prefecturesType,
  prefectureType,
} from '../../types/types'
import CheckBoxWithLabel from '../atoms/CheckBoxWithLabel'
import AjaxReqest from '../../modules/AjaxRequest'
import HighChart from '../atoms/HighChart'

const Contents: React.FC = () => {
  const { authApiKey } = useContext(AuthContext)
  const [prefectures, setPrefectures] = useState<prefecturesType>([])
  const [actionError, setActionError] = useState<string>(``)
  const [populationList, setPopulationList] = useState<populationListType>([])
  const navigate = useNavigate()

  const onCheck = async (value: string, checked: boolean) => {
    const response = await new AjaxReqest().get(
      'population/composition/perYear',
      authApiKey,
      {
        prefCode: value,
        cityCode: '-',
      },
    )
    const targetPrefecture: prefectureType | undefined = prefectures.find(
      (prefecture) => prefecture.prefCode === Number(value),
    )
    const tmpPopulationList = populationList.slice()
    if (targetPrefecture !== undefined) {
      if (checked) {
        const targetPopulation: populationType = {
          prefName: targetPrefecture.prefName,
          population: response.data.result.data[0].data,
        }
        tmpPopulationList.push(targetPopulation)
        setPopulationList(tmpPopulationList)
      } else {
        const deleteIndex = tmpPopulationList.findIndex(
          (prefecture) => prefecture.prefName === targetPrefecture.prefName,
        )
        if (deleteIndex === -1) return
        tmpPopulationList.splice(deleteIndex, 1)
        setPopulationList(tmpPopulationList)
      }
    }
  }

  useEffect(() => {
    if (!authApiKey) {
      navigate('/')
    }
    ;(async () => {
      try {
        const response = await fetchPrefectures({}, authApiKey)
        setPrefectures(response.result)
      } catch (e) {
        setActionError('error')
      }
    })()
  }, [authApiKey, navigate])

  if (actionError) {
    return (
      <>
        <h1 className="text-center font-bold my-8">都道府県人口推移グラフ</h1>
        <div className="mx-auto w-full max-w-md text-center">
          <p className="my-4">APIの呼び出しに失敗しました。</p>
        </div>
      </>
    )
  }

  return (
    <>
      <h1 className="text-center font-bold my-8">都道府県人口推移グラフ</h1>
      <div className="font-bold text-xl my-4">都道府県</div>
      <div className="flex flex-wrap">
        {prefectures.map((prefecture) => (
          <CheckBoxWithLabel
            key={prefecture.prefCode}
            value={String(prefecture.prefCode)}
            onCheck={(value, checked) => onCheck(value, checked)}
            labelText={prefecture.prefName}
          />
        ))}
      </div>
      <HighChart populationList={populationList} />
    </>
  )
}

export default Contents
