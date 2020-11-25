import React from "react";
import styled from "styled-components";
import { Label } from "../../atoms";

interface IProps {
  id: string;
  title: string;
  content: string;
  writter: string;
  time: string;
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #f2f2f2;
  padding: 16px 0;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const TitleInfo = styled.div``;

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`;

const Accordian: React.FC<IProps> = ({ id, title, content, writter, time }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const target = e.target as HTMLDivElement;
    const id = target.id;
    const content = document.querySelector(`.accordian-${id}`);
    content?.classList.toggle("hide");
  };
  return (
    <StyledDiv className="accordian">
      <TitleWrapper onClick={handleClick} id={id}>
        <TitleInfo id={id}>
          <Label id={id} fontWeight="600" size="18px" margin="0 0 8px 0">
            {title}
          </Label>
          <Label id={id} hexColor="#a2a2a2" fontWeight="500" size="14px">
            {writter}, {time}
          </Label>
        </TitleInfo>
        <Label id={id} fontWeight="500">
          <i className="fas fa-caret-down" />
        </Label>
      </TitleWrapper>
      <ContentWrapper className={`hide accordian-${id} accordian-content`}>
        {content}
      </ContentWrapper>
    </StyledDiv>
  );
};

export default Accordian;
