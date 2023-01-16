import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchPrefectures } from '../../apis/ResasApi'
import { AuthContext } from '../../contexts/AuthContext'

export const Contents: React.FC = () => {
  //TODO 都道府県取得処理
  const { authApiKey, setAuthApiKey } = useContext(AuthContext)
  const [prefectures, setPrefectures] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    if (!authApiKey) {
      navigate('/')
    }
    ;(async () => {
      try {
        const response = await fetchPrefectures({}, authApiKey)
        setPrefectures(response.result)
      } catch (e) {}
    })()
  }, [])

  return (
    <>
      <h1 className="text-center font-bold my-8">都道府県人口推移グラフ</h1>
      <div>Contents{authApiKey}</div>
    </>
  )
}
