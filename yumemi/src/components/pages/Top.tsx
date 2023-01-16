import React, { useContext, useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import InputBox from '../atoms/InputBox'
import Button from '../atoms/Button'
import { resasApiKey } from '../../types/types'
import Spinner from '../atoms/Spinner'
import { AuthContext } from '../../contexts/AuthContext'
import { fetchPrefectures } from '../../apis/ResasApi'

export const Top: React.FC = () => {
  const { setAuthApiKey } = useContext(AuthContext)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>(``)
  const [resasApiKey, setResasApiKey] = useState<resasApiKey>('')
  const navigate = useNavigate()

  const onClickButton = async (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetchPrefectures({}, resasApiKey)
      if (response.statusCode === '403') {
        throw new Error('error')
      } else {
        setLoading(false)
        setAuthApiKey(resasApiKey)
        navigate('/contents')
      }
    } catch (e) {
      setError('error')
      setLoading(false)
    }
  }

  const onClickbackButton = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setError('')
  }

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return (
      <>
        <h1 className="text-center font-bold my-8">都道府県人口推移グラフ</h1>
        <div className="mx-auto w-full max-w-md text-center">
          <p className="my-4">APIの呼び出しに失敗しました。</p>
          <Button onClickButton={(e) => onClickbackButton(e)}>戻る</Button>
        </div>
      </>
    )
  }

  return (
    <>
      <h1 className="text-center font-bold my-8">都道府県人口推移グラフ</h1>
      <form action="" className="w-full max-w-md mx-auto">
        <p className="font-bold text-xl my-2">RESAS APIキー</p>
        <p>APIの呼び出しに使用するAPIキーを指定します</p>
        <div className="my-4">
          <InputBox
            onChange={(inputResasApikey) => {
              setResasApiKey(inputResasApikey)
            }}
          ></InputBox>
        </div>
        <div className="text-right">
          <Button onClickButton={(e) => onClickButton(e)}>送信開始</Button>
        </div>
      </form>
    </>
  )
}
