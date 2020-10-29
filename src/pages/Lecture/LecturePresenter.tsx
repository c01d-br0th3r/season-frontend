import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

interface IProps {
  id: string;
}

const LecturePresenter: React.FC<IProps> = ({ id }) => {
  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout>
      <Header style={{ color: "#fff" }}>
        <Link to="/">Season</Link>
      </Header>
      <Content style={{ padding: "0 50px", minHeight: "100vh" }}>
        <Breadcrumb style={{ margin: "40px 0 10px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>알고리즘및실습(001)</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1-1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="1주차">
                <Menu.Item key="1-1">1장-1</Menu.Item>
                <Menu.Item key="1-2">1장-2</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="2주차">
                <Menu.Item key="2-1">2장-1</Menu.Item>
                <Menu.Item key="2-2">2장-2</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="중간고사"
              >
                <Menu.Item key="midTerm">중간고사</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: "100vh",
              maxWidth: "1280px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=PIeiiceWe_w&feature=emb_rel_pause"
                width="100%"
                height="40vw"
                controls
              />
            </div>
          </Content>
        </Layout>
      </Content>
      <Footer>Season LMS</Footer>
    </Layout>
  );
};

export default LecturePresenter;
