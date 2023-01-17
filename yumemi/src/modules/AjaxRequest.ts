import axios, { AxiosInstance } from 'axios'

export class AjaxReqest {
  request: AxiosInstance

  constructor(timeout = 600000) {
    this.request = axios.create({
      baseURL: 'https://opendata.resas-portal.go.jp/api/v1',
      timeout,
    })
  }

  get(url: string, data: object = {}, apiKey: string) {
    return this.request.get(url, {
      params: data,
      headers: {
        'X-API-KEY': apiKey,
      },
    })
  }
}
