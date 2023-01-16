import { AjaxReqest } from '../modules/AjaxRequest'

// 都道府県一覧取得
export const fetchPrefectures = async (
  params: object = {},
  apikey: string = '',
) => {
  const responese = await new AjaxReqest().get('/prefectures', params, apikey)
  return responese.data
}
