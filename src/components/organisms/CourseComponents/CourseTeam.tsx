import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, Label } from "../../atoms";
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
  handleTeamData: (form: any) => void;
}

const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
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

const BtnWrapper = styled.div`
  align-self: flex-end;
  text-align: right;
`;

const CourseTeam: React.FC<RouteComponentProps & IProps> = ({
  data,
  handleTeamData,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputContent, setInputContent] = useState<string>("");
  const handleTitleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputTitle(target.value);
  };
  const handleContentChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputContent(target.value);
  };
  const handleSubmit = () => {
    const form = {
      id: `${data.length + 1}`,
      title: inputTitle,
      content: inputContent,
      writter: "이찬형",
      time: "2020/11/32",
    };
    handleTeamData(form);
    setOpen((open) => !open);
  };
  return (
    <Container>
      <StyledDiv>
        {data.map((d) => (
          <Accordian
            key={d.id}
            id={d.id}
            title={d.title}
            content={d.content}
            writter={d.writter}
            time={d.time}
          />
        ))}
      </StyledDiv>
      <BtnWrapper>
        <Button
          color="b_red2"
          margin="16px 0 16px 0"
          handleClick={() => setOpen(!open)}
        >
          <Label hexColor="#f8f8f8" fontWeight="600">
            글쓰기
          </Label>
        </Button>
      </BtnWrapper>
      {open && (
        <StyledDiv>
          <Label fontWeight="500" hexColor="#929292" margin="0 0 32px 0">
            2020/11/32, 이찬형
          </Label>
          <Label fontWeight="600" size="20px" margin="0 0 16px 0">
            제목
          </Label>
          <Input handleChange={handleTitleChange} />
          <Label fontWeight="600" size="20px" margin="32px 0 16px 0">
            내용
          </Label>
          <Input handleChange={handleContentChange} />
          <BtnWrapper>
            <Button
              color="b_red3"
              margin="32px 0 16px 0"
              handleClick={handleSubmit}
            >
              <Label hexColor="#f8f8f8" fontWeight="600">
                완료
              </Label>
            </Button>
          </BtnWrapper>
        </StyledDiv>
      )}
    </Container>
  );
};

export default CourseTeam;
