import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export const Contents: React.FC = () => {
  //TODO 都道府県取得処理
  const { authApiKey, setAuthApiKey } = useContext(AuthContext)
  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: 'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      headers: {
        'X-API-KEY': authApiKey,
      },
    })
    axiosInstance.get('').then((res) => {
      alert(res)
    })
  }, [])
  return <div>Contents{authApiKey}</div>
}
