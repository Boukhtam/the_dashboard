import React from 'react';
import './style.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import user from '../../services/user/user';
import { Redirect } from 'react-router-dom';
import { Context } from '../contexts/AuthContext';

const {Item} = Form

const NormalLoginForm = () => {
  const [shouldRedirect, setSouldRedirect] = React.useState()
  //const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const context = React.useContext(Context)

  console.log(context)

  const onFinish = values => {
    //console.log('Received values of form: ', values);
    function callback(data, error) { 
      if (data) {
        context.setUserData(data.user, data.tokens.token)
        setSouldRedirect(true)
      } else if (error) {
        // Handle the error!
      }
     }

    user.authenticate(values, callback)
  };

  if (shouldRedirect) {
    return <Redirect to="/" />
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm