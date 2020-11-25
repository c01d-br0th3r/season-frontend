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
  cursor: pointer;
`;

const Number = styled.span`
  color: #dc143c;
`;

const NoticeList: React.FC<IProps> = ({ data }) => {
  const handleClick = () => {
    const bg = document.querySelector(".modal-bg");
    const modal = document.querySelector(".my-modal");
    bg?.classList.remove("hide");
    modal?.classList.remove("hide");
  };
  return (
    <StyledDiv onClick={handleClick} id={`${data.id}`}>
      <Label fontWeight="600" id={`${data.id}`}>
        <Number>#{data.id}</Number> {data.title}
      </Label>
      <Label hexColor="#161111" fontWeight="500" size="14px" id={`${data.id}`}>
        {data.writter}
      </Label>
    </StyledDiv>
  );
};

export default NoticeList;
