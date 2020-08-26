import React, { Component } from 'react';
import { Form, Input, Button, Card, Row, Col } from 'antd';
import { navigate } from '@reach/router';
import './Login.css';
import AuthService from '../../services/authService';

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
    authService = new AuthService();
    state = {
        invalidUser: '',
        loginDisabled: false,
    }
    onFinish = values => {
        this.setState({loginDisabled: true});
        this.authService.post(`http://localhost:3000/users/login`, values)
        .then(response => {
            if(response.statusCode === 401) {
                this.setState({invalidUser: 'Invalid username or password'});
                this.setState({loginDisabled: false});
            }
            else {
                this.authService.setToken(response.accessToken);
                navigate('dashboard');
            }
        })
    };
    onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    render() {
        if (this.authService.getToken()) {
            window.location = "/dashboard";
            return;
        }
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
                            label="Email"
                            name="email"
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
                            <Button type="primary" htmlType="submit" disabled={this.state.loginDisabled}>
                                Login
                            </Button>
                        </Form.Item>
                        {
                        this.state.invalidUser?
                        <Form.Item {...tailLayout}>
                            <span className="error-message">
                                {this.state.invalidUser}
                            </span>
                        </Form.Item> : ''
                        }
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