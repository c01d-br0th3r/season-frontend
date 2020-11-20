import React from "react";
import styled from "styled-components";

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
      <Content>Course</Content>
    </Container>
  );
};

export default CoursePresenter;
