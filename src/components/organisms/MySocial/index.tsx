import React from "react";
import styled from "styled-components";
import { MySocialList } from "../../molecules";

interface IData {
  id: number;
  title: string;
  link: string;
}

interface IProps {
  data: IData[];
}

const StyledDiv = styled.div`
  width: 100%;
  max-width: 480px;
  min-width: 400px;
  border: 1px solid #c2c2c2;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
`;

const MySocial: React.FC<IProps> = ({ data }) => {
  return (
    <StyledDiv>
      {data.map((d) => (
        <MySocialList data={d} />
      ))}
    </StyledDiv>
  );
};

export default MySocial;
