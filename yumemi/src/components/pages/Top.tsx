import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputBox from '../atoms/InputBox'
import Button from '../atoms/Button'
import { resasApiKeyType } from '../../types/types'
import Spinner from '../atoms/Spinner'
import { AuthContext } from '../../contexts/AuthContext'
import fetchPrefectures from '../../apis/ResasApi'

const Top: React.FC = () => {
  const { setAuthApiKey } = useContext(AuthContext)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [actionError, setActionError] = useState<string>(``)
  const [resasApiKey, setResasApiKey] = useState<resasApiKeyType>('')
  const navigate = useNavigate()

  const onClickButton = async () => {
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
    } catch (error) {
      setActionError('error')
      setLoading(false)
    }
  }

  const onClickbackButton = () => {
    setActionError('')
  }

  if (isLoading) {
    return <Spinner />
  }

  if (actionError) {
    return (
      <>
        <h1 className="text-center font-bold my-8">都道府県人口推移グラフ</h1>
        <div className="mx-auto w-full max-w-md text-center">
          <p className="my-4">APIの呼び出しに失敗しました。</p>
          <Button onClickButton={() => onClickbackButton()}>戻る</Button>
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
          />
        </div>
        <div className="text-right">
          <Button onClickButton={() => onClickButton()}>送信開始</Button>
        </div>
      </form>
    </>
  )
}

export default Top
