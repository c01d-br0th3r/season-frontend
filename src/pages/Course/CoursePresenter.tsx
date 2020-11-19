import React from "react";
import styled from "styled-components";
import Sidebar from "../../components/organisms/Sidebar";

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  padding: 20px;
  width: 100%;
`;

const CoursePresenter: React.FC<{}> = () => {
  return (
    <Container>
      <Sidebar
        profileImg="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"
        profileAlt="user"
        name="이찬형"
        college="소프트웨어융합대학"
        department="컴퓨터공학과"
      />
      <Content>Course</Content>
    </Container>
  );
};

export default CoursePresenter;
