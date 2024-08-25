import React, { FC, useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

const { Search } = Input

const ListSearch: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [value, setValue] = useState('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  // 每次当搜索的url发生变化时，都会触发useEffect，获取url中的参数，并设置到input中
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const searchValue = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(searchValue)
  }, [searchParams])
  const handleSearch = (value: string) => {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }
  return (
    <Search
      placeholder={'请输入'}
      value={value}
      onSearch={handleSearch}
      onChange={handleChange}
      style={{ width: '200px' }}
      allowClear
    />
  )
}

export default ListSearch
