import React from "react";
import styled from "styled-components";
import NoticeList from "../../molecules/NoticeList";

interface IData {
  id: number;
  title: string;
  writter: string;
  time: string;
  content: string;
}

interface IProps {
  data: IData[];
  handleClick?: (e: React.MouseEvent) => void;
}

const StyledDiv = styled.div`
  width: 100%;
  max-width: 1080px;
  min-width: 400px;
  border: 1px solid #c2c2c2;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
`;

const Notices: React.FC<IProps> = ({ data, handleClick }) => {
  return (
    <StyledDiv onClick={handleClick}>
      {data.map((d) => (
        <NoticeList key={d.id} data={d} />
      ))}
    </StyledDiv>
  );
};

export default Notices;
