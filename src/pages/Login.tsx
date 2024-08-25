import React, { FC, useEffect } from 'react'
import { Button, Form, Input, Space, Typography, Checkbox } from 'antd'
import styles from './Login.module.scss'
import { UserAddOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { REGISTER_PATHNAME } from '../router'

const { Title } = Typography
const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

const rememberUser = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

const deleteUser = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

const getUser = () => ({
  username: localStorage.getItem(USERNAME_KEY),
  password: localStorage.getItem(PASSWORD_KEY),
})

const Login: FC = () => {
  const [form] = Form.useForm()
  useEffect(() => {
    const { username, password } = getUser()
    form.setFieldsValue({ username, password })
  }, [])
  const onFinish = (values: any) => {
    const { username, password, remember } = values
    if (remember) {
      rememberUser(username, password)
    } else {
      deleteUser()
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined></UserAddOutlined>
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
          form={form}
        >
          <Form.Item label={'用户名'} name={'username'}>
            <Input />
          </Form.Item>
          <Form.Item label={'密码'} name={'password'}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            name={'remember'}
            valuePropName={'checked'}
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type={'primary'} htmlType={'submit'}>
                登录
              </Button>
              <Link to={REGISTER_PATHNAME}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
