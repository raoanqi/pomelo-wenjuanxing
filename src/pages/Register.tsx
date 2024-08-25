import React, { FC } from 'react'
import { Typography, Space, Form, Input, Button } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../router'
import styles from './Register.module.scss'

const { Title } = Typography

const Register: FC = () => {
  const onFinish = (values: any) => {}
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined></UserAddOutlined>
          </Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>
      <div>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
          <Form.Item
            label={'用户名'}
            name={'username'}
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={'密码'}
            name={'password'}
            rules={[
              { required: true, message: '请输入密码' },
              {
                pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,20}$/,
                message: '密码至少包含数字和字母，长度在5-20之间',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          {/*password变化，会引起确认密码的重新校验*/}
          <Form.Item
            label={'确认密码'}
            name={'confirm'}
            dependencies={['password']}
            rules={[
              { required: true, message: '请输入密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  } else {
                    return Promise.reject(new Error('两次密码输入不一致'))
                  }
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label={'昵称'} name={'nickname'}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type={'primary'} htmlType={'submit'}>
                注册
              </Button>
              <Link to={LOGIN_PATHNAME}>直接登录</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register
