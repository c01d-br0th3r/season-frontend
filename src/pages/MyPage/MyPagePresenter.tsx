import React from "react";
import styled from "styled-components";
import { Label } from "../../components/atoms";
import CollegeInfo from "../../components/molecules/CollegeInfo";
import MySocial from "../../components/organisms/MySocial";
import Sidebar from "../../components/organisms/Sidebar";

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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  div:nth-child(1) {
    margin-right: 24px;
  }
`;

const data = [
  {
    id: 1,
    title: "내 질문입니다 뭐가 문젤까요?",
    link: "#",
  },
  {
    id: 2,
    title: "뭐가 문제냐구 뭐가 문제냐구 뭐가 문제냐구",
    link: "#",
  },
  {
    id: 3,
    title: "내 질문3",
    link: "#",
  },
];

const MyPagePresenter: React.FC<{}> = () => {
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
          <Section>
            <CollegeInfo
              profileImg="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"
              profileAlt="user"
              name="이찬형"
              studentId="17011550"
              college="소프트웨어융합대학"
              department="컴퓨터공학과"
              grade="2"
              hashtags={["WEB", "Frontend", "React"]}
            />
          </Section>
          <Section>
            <Label
              width="100%"
              size="20px"
              fontWeight="700"
              margin="0 0 16px 0"
            >
              내 소셜 활동
            </Label>
            <Wrapper>
              <MySocial data={data} />
              <MySocial data={data} />
            </Wrapper>
          </Section>
        </SectionWrapper>
      </Content>
    </Container>
  );
};

export default MyPagePresenter;
