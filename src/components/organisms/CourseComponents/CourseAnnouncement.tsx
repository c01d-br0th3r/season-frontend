import React from "react";
import styled from "styled-components";
import Notices from "../Notices";

interface IData {
  id: number;
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

const CourseAnnouncement: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <Notices data={data} />
    </Container>
  );
};

export default CourseAnnouncement;
