import React, { FC } from 'react'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import styles from './Logo.module.scss'

const { Title } = Typography

const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Space>
        <Title>
          <FormOutlined />
        </Title>
        <Title>问卷星</Title>
      </Space>
    </div>
  )
}

export default Logo
