import React from "react";
import styled from "styled-components";
import CourseList from "../../molecules/CourseList";

interface IData {
  name: string;
  classNumber: string;
  professor: string;
  isMajor: boolean;
}

interface IProps {
  data: IData[];
}

const StyledDiv = styled.div`
  width: 100%;
  max-width: 1080px;
  min-width: 400px;
  border: 1px solid #c2c2c2;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  margin-right: 24px;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
`;

const Courses: React.FC<IProps> = ({ data }) => {
  return (
    <StyledDiv>
      {data.map((d) => (
        <CourseList data={d} />
      ))}
    </StyledDiv>
  );
};

export default Courses;
