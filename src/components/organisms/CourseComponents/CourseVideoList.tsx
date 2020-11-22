import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

interface ILecture {
  url: string;
  title: string;
}

interface IProps {
  lectureList: ILecture[];
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

const List = styled.div<{ status: boolean }>`
  font-size: 18px;
  font-weight: 500;
  padding: 18px 0;
  border-bottom: 1px solid #c2c2c2;
  cursor: pointer;
  color: ${(props) => (props.status ? "#d43958" : "#121212")};
`;

const CourseVideoList: React.FC<IProps> = ({ lectureList }) => {
  const [index, setIndex] = useState<number>(-1);
  const [url, setUrl] = useState<string>("");
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
          <List
            key={idx}
            id={`${idx}`}
            onClick={handleClick}
            status={idx === index}
          >
            {lecture.title}
          </List>
        ))}
      </LectureListWrapper>
    </Container>
  );
};

export default CourseVideoList;
