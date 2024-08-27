/**
 * 加载问卷信息
 */
import { useRequest } from 'ahooks'
import { getQuestionService } from '../services/question'
import { useParams } from 'react-router-dom'

const useLoadQuestionData = () => {
  const { id = '' } = useParams()
  const load = async () => {
    const data = await getQuestionService(id)
    return data
  }
  const { loading, data, error } = useRequest(load)
  return { loading, data, error }
}

export default useLoadQuestionData
