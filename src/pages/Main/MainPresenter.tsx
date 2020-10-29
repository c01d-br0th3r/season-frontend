import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "../../components/MainProfile";
import TaskTracker from "../../components/TaskTracker";

interface IProps {
  collapsed: boolean;
  handleCollapsed: () => void;
}

const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const MainPresenter: React.FC<IProps> = ({ collapsed, handleCollapsed }) => {
  const { Header, Sider, Content } = Layout;
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width="280px" trigger={null} collapsible collapsed={collapsed}>
          {collapsed ? (
            <Logo> </Logo>
          ) : (
            <>
              <Logo>세종대학교</Logo>
              <Profile
                name="이찬형"
                status="죽도록 공부하자."
                department="소프트웨어융합대학"
                grade="컴퓨터공학과 2-2 재학"
                avg="0.00"
                credit="0"
              />
            </>
          )}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Notice
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Course
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Calendar
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>
            <div style={{ padding: "0 20px", color: "#fff" }}>
              {collapsed ? (
                <MenuUnfoldOutlined onClick={handleCollapsed} />
              ) : (
                <MenuFoldOutlined onClick={handleCollapsed} />
              )}
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <TaskTracker />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainPresenter;
