import React from "react";
import styled from "styled-components";

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
      <Content>
        <SectionWrapper>
          <Section>{`Course Id: ${id}`}</Section>
        </SectionWrapper>
      </Content>
    </Container>
  );
};

export default CourseDetailPresenter;
