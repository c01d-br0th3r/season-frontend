import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

const courseData = [
  {
    id: 0,
    name: "알고리즘및실습",
    classNumber: "003",
    professor: "국형준",
    isMajor: true,
  },
  {
    id: 1,
    name: "컴퓨터구조",
    classNumber: "001",
    professor: "송상훈",
    isMajor: true,
  },
  {
    id: 2,
    name: "ES-디지털스토리텔링",
    classNumber: "001",
    professor: "국형준",
    isMajor: true,
  },
  {
    id: 3,
    name: "English Reading Practice 1",
    classNumber: "011",
    professor: "Jordan",
    isMajor: false,
  },
];

const noticeData = [
  {
    id: 1,
    title: "Season 이용 안내",
    writter: "관리자",
    time: "2020/11/09",
    content: "잘 쓰세요!",
  },
  {
    id: 2,
    title: "안녕하세요 Season입니다~",
    writter: "관리자",
    time: "2020/11/09",
    content: "잘 쓰세요!",
  },
  {
    id: 3,
    title: "하나 둘 셋 파이팅",
    writter: "관리자",
    time: "2020/11/09",
    content: "잘 쓰세요!",
  },
  {
    id: 4,
    title: "Test",
    writter: "관리자",
    time: "2020/11/09",
    content: "잘 쓰세요!",
  },
];

const HomeContainer: React.FC<{}> = () => {
  const [noticeId, setNoticeId] = useState<string>("0");
  const handleNoticeClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const id = `${target.id}`;
    setNoticeId(id);
  };
  return (
    <HomePresenter
      courseData={courseData}
      noticeData={noticeData}
      handleNoticeClick={handleNoticeClick}
      modalInfo={noticeData.filter((d) => `${d.id}` === noticeId)[0]}
    />
  );
};

export default HomeContainer;
