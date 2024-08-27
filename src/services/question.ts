import axios from './ajax'
import type { ResDataType } from './ajax'

type SearchOption = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
}

// 获取指定问卷信息
export const getQuestionService = async (id: string): Promise<ResDataType> => {
  const url = `/api/question/${id}`
  const data = (await axios.get(url)) as ResDataType
  return data
}

// 新建问卷
export const createQuestionService = async (): Promise<ResDataType> => {
  const url = '/api/question'
  const data = (await axios.post(url)) as ResDataType
  return data
}

// 获取问卷列表
// Partial：用于将可某个类型的所有属性都标记为可选的
export const getQuestionListService = async (
  opt: Partial<SearchOption> = {}
): Promise<ResDataType> => {
  const url = '/api/question'
  const data = (await axios.get(url, { params: opt })) as ResDataType
  return data
}
