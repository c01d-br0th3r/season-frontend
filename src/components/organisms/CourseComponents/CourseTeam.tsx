import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 24px;
`;

const StyledDiv = styled.div`
  width: 100%;
  max-width: 1080px;
  min-width: 400px;
  border: 1px solid #c2c2c2;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
`;

const CourseTeam: React.FC<RouteComponentProps> = () => {
  return (
    <Container>
      <StyledDiv>Team</StyledDiv>
    </Container>
  );
};

export default CourseTeam;
