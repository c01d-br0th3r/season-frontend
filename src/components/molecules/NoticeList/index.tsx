import React from "react";
import styled from "styled-components";
import { Label } from "../../atoms";

interface IData {
  id: number;
  title: string;
  writter: string;
  time: string;
  content: string;
}

interface IProps {
  data: IData;
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #f2f2f2;
`;

const Number = styled.span`
  color: #dc143c;
`;

const NoticeList: React.FC<IProps> = ({ data }) => {
  return (
    <StyledDiv>
      <Label fontWeight="600">
        <Number>#{data.id}</Number> {data.title}
      </Label>
      <Label hexColor="#a2a2a2" fontWeight="500" size="14px">
        {data.writter}
      </Label>
    </StyledDiv>
  );
};

export default NoticeList;
