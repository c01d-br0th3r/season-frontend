import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CourseList from "../../molecules/CourseList";

interface IData {
  id: number;
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
        <Link key={d.id} to={`course/${d.id}/announcement`}>
          <CourseList data={d} />
        </Link>
      ))}
    </StyledDiv>
  );
};

export default Courses;
