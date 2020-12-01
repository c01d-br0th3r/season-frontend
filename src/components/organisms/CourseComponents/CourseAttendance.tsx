import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router-dom";
import TableView from "../TableView";
import dummyGenerator from "../../atoms/dummyGenerator";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 24px;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  min-width: 400px;
  border: 1px solid #c2c2c2;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
`;

const dummyList = dummyGenerator();

const CourseAttendance: React.FC<RouteComponentProps> = () => {
  return (
    <Container>
      <StyledDiv>
        <TableView data={dummyList} />;
      </StyledDiv>
    </Container>
  );
};

export default CourseAttendance;
