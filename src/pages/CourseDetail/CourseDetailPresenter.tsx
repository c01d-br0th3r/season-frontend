import React from "react";
import styled from "styled-components";
import { Sidebar } from "../../components/organisms";

interface IProps {
  id: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionWrapper = styled.div`
  width: 1020px;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const CourseDetailPresenter: React.FC<IProps> = ({ id }) => {
  return (
    <Container>
      <Sidebar
        profileImg="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"
        profileAlt="user"
        name="이찬형"
        college="소프트웨어융합대학"
        department="컴퓨터공학과"
      />
      <Content>
        <SectionWrapper>
          <Section>{`Course Id: ${id}`}</Section>
        </SectionWrapper>
      </Content>
    </Container>
  );
};

export default CourseDetailPresenter;
