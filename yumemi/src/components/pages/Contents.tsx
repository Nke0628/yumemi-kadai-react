import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import fetchPrefectures from '../../apis/ResasApi'
import { AuthContext } from '../../contexts/AuthContext'
import { prefecturesType } from '../../types/types'
import CheckBoxWithLabel from '../atoms/CheckBoxWithLabel'

const Contents: React.FC = () => {
  const { authApiKey } = useContext(AuthContext)
  const [prefectures, setPrefectures] = useState<prefecturesType>([])
  const [actionError, setActionError] = useState<string>(``)
  const navigate = useNavigate()

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
            value={prefecture.prefCode}
            onCheck={() => {}}
            labelText={prefecture.prefName}
          />
        ))}
      </div>
    </>
  )
}

export default Contents
