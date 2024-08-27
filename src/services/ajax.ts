import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  timeout: 10 * 1000,
})

// 响应拦截器
instance.interceptors.response.use(res => {
  const resData = (res.data || {}) as ResType
  const { errno, data = {}, msg = '' } = resData
  // 如果errno不为0，说明出现错误
  if (errno !== 0) {
    if (msg) {
      message.error(msg)
    }
    throw new Error(msg)
  }
  // 如果请求正常，就直接返回data
  return data as any
})

export default instance

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  [key: string]: any
}
