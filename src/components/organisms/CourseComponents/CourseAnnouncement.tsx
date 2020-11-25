import React from "react";
import styled from "styled-components";
import Accordian from "../Accordian";

interface IData {
  id: string;
  title: string;
  writter: string;
  time: string;
  content: string;
}

interface IProps {
  data: IData[];
}

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
  .accordian:last-child {
    margin-bottom: 0;
    border: none;
    padding-bottom: 0;
  }
  .accordian:nth-child(1) {
    padding-top: 0;
  }
`;

const CourseAnnouncement: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <StyledDiv>
        {data.map((d) => (
          <Accordian
            id={d.id}
            title={d.title}
            content={d.content}
            writter={d.writter}
            time={d.time}
          />
        ))}
      </StyledDiv>
    </Container>
  );
};

export default CourseAnnouncement;
