import React, { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Button, Label } from "../../atoms";
import SubmitForm from "../SubmitForm";

interface ILecture {
  url: string;
  title: string;
  isDone: boolean;
}

interface IProps {
  lectureList: ILecture[];
  isAdmin: boolean;
  handleLectureData: (form: any) => void;
}

const Container = styled.div`
  width: 100%;
  padding: 24px;
`;

const NonSelect = styled.div`
  width: 100%;
  height: 660px;
  padding: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

const PlayerWrapper = styled.div`
  width: 100%;
  padding: 28px;
  border: 1px solid #c2c2c2;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
`;

const LectureListWrapper = styled.div`
  width: 100%;
  padding: 28px;
  border: 1px solid #c2c2c2;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c2c2c2;
`;

const List = styled.div<{ status: boolean }>`
  font-size: 18px;
  font-weight: 500;
  padding: 18px 0;
  cursor: pointer;
  color: ${(props) => (props.status ? "#d43958" : "#121212")};
`;

const BtnWrapper = styled.div`
  align-self: flex-end;
  text-align: right;
  margin-bottom: 16px;
`;

const CourseVideoList: React.FC<IProps> = ({
  lectureList,
  isAdmin,
  handleLectureData,
}) => {
  const [index, setIndex] = useState<number>(-1);
  const [url, setUrl] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const id = parseInt(target.id);
    setIndex(id);
    setUrl(lectureList[id].url);
  };
  return (
    <Container>
      <PlayerWrapper>
        {url === "" ? (
          <NonSelect>강의를 선택하세요.</NonSelect>
        ) : (
          <ReactPlayer url={url} controls width="100%" height="660px" />
        )}
      </PlayerWrapper>
      <LectureListWrapper>
        {lectureList.map((lecture, idx) => (
          <ListWrapper key={idx}>
            <List
              key={idx}
              id={`${idx}`}
              onClick={handleClick}
              status={idx === index}
            >
              {lecture.title}
            </List>
            {!isAdmin && (
              <Label>
                {lecture.isDone ? (
                  <i
                    className="fas fa-check-square"
                    style={{ color: "#16a085" }}
                  />
                ) : (
                  <i className="far fa-square" />
                )}
              </Label>
            )}
          </ListWrapper>
        ))}
      </LectureListWrapper>
      {isAdmin && (
        <BtnWrapper>
          <Button
            color="b_red2"
            margin="20px 0 0 0"
            handleClick={() => setOpen(!open)}
          >
            <Label hexColor="#f8f8f8" fontWeight="600">
              글쓰기
            </Label>
          </Button>
        </BtnWrapper>
      )}
      {open && (
        <SubmitForm
          handleClick={handleLectureData}
          open={open}
          setOpen={setOpen}
          isLecture
        />
      )}
    </Container>
  );
};

export default CourseVideoList;
