import { useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionListService } from '../services/question'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

type OptionType = {
  isStar: boolean
  isDeleted: boolean
}

const useLoadQuestionListData = (opt: Partial<OptionType> = {}) => {
  const { isStar, isDeleted } = opt
  const [searchParams] = useSearchParams()
  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const data = await getQuestionListService({ keyword, isStar, isDeleted })
      return data
    },
    {
      refreshDeps: [searchParams], // 依赖 searchParams 变化时重新请求
    }
  )
  return { data, loading, error }
}

export default useLoadQuestionListData
