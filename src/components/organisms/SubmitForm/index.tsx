import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Input, Label } from "../../atoms";

interface IProps {
  handleClick?: (form: any) => void;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  open?: boolean;
}

const StyledDiv = styled.div`
  width: 100%;
  max-width: 1080px;
  min-width: 400px;
  border: 1px solid #c2c2c2;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
`;

const BtnWrapper = styled.div`
  align-self: flex-end;
  text-align: right;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  padding: 16px;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  &:focus {
    border: none;
    outline: 2px solid #de8a9a;
  }
  margin-bottom: 32px;
`;

const FileForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const FileLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  background-color: #a2a2a2;
  color: #fff;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 12px;
`;

const FileInput = styled.input`
  display: none;
`;

const FileName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 12px;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  font-size: 14px;
`;

const SubmitForm: React.FC<IProps> = ({ handleClick, setOpen, open }) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputContent, setInputContent] = useState<string>("");
  const [inputFile, setInputFile] = useState<any>(null);
  const handleTitleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputTitle(target.value);
  };
  const handleContentChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputContent(target.value);
  };
  const handleFileChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputFile(target.files);
  };
  const handleUserSubmit = () => {
    const form = {
      id: `${new Date().getUTCMilliseconds()}`,
      title: inputTitle,
      content: inputContent,
      writter: "이찬형",
      time: "2020/11/32",
    };
    console.log(form);
    if (open && setOpen) setOpen((open) => !open);
    if (handleClick) handleClick(form);
  };
  console.log(inputFile);
  return (
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
      <Textarea onChange={handleContentChange} />
      <Label fontWeight="600" size="20px" margin="0 0 16px 0">
        첨부파일
      </Label>
      <FileForm>
        <FileLabel htmlFor="submit_file">찾아보기..</FileLabel>
        <FileInput type="file" id="submit_file" onChange={handleFileChange} />
        <FileName>
          {inputFile !== null ? inputFile[0].name : "파일을 선택하세요."}
        </FileName>
      </FileForm>
      <BtnWrapper>
        <Button
          color="b_red3"
          margin="32px 0 16px 0"
          handleClick={handleUserSubmit}
        >
          <Label hexColor="#f8f8f8" fontWeight="600">
            완료
          </Label>
        </Button>
      </BtnWrapper>
    </StyledDiv>
  );
};

export default SubmitForm;
