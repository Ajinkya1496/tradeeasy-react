import React, { Component } from 'react';
import { Layout, Avatar, List, Badge } from 'antd';
import './Dashboard.css';
import AuthService from '../../services/authService';
const { Content, Sider } = Layout;

export default class Dashboard extends Component {
    authService = new AuthService();
    state = {
        collapsed: false,
        data : [
            {
              name: 'Steve Smith',
            },
            {
              name: 'K L Rahul',
            },
            {
              name: 'Ajinkya Rahane',
            },
            {
              name: 'M S Dhoni',
            },
          ],
    };
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        if (!this.authService.getToken()) {
            window.location = "/";
            return;
        }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <List
                    header={<div className="font-color-white">TradeEasy</div>}
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={
                            <Badge dot color="green">
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </Badge>
                        }
                        title={this.state.collapsed ? '' :<span className="font-color-white">{item.name}</span>}
                        />
                    </List.Item>
                    )}
                />
                </Sider>
                <Layout className="site-layout">
                    <Content style={{ padding: '10px 50px' }}>
                        <div className="site-layout-content">Content</div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}