export type resasApiKeyType = string

export type prefectureType = {
  prefCode: number
  prefName: string
}

export type prefecturesType = prefectureType[]

export type populationType = {
  prefName: string
  population: {
    year: number
    value: number
  }[]
}

export type populationListType = populationType[]
