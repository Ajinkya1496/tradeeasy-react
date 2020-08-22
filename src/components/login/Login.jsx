import React, { Component } from 'react';
import { Form, Input, Button, Card, Row, Col } from 'antd';
import './Login.css';

const layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 9,
      span: 6,
    },
  };

export default class Login extends Component {
    onFinish = values => {
      console.log('Success:', values);
    };
  
    onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <>
            <Row className="height stocks-image" align="middle">
                <Col span={6}></Col>
                <Col span={12}>
                    <Card className="card-shadow" title="Login" size="small">
                        <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            {
                                type: "email",
                                message: "Invalid email!",
                            }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            Not a user? <a href="/temp">Register</a>
                        </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={6}></Col>
            </Row>
            </>
          );
    }
}