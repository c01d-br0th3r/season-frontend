import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import CourseDetailPresenter from "./CourseDetailPresenter";

interface IMatch {
  id: string;
}

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
    title: "Season 이용 안내1",
    writter: "관리자",
    time: "2020/11/09",
    content: "잘 쓰세요!",
  },
  {
    id: 3,
    title: "Season 이용 안내2",
    writter: "관리자",
    time: "2020/11/09",
    content: "잘 쓰세요!",
  },
  {
    id: 4,
    title: "Season 이용 안내3",
    writter: "관리자",
    time: "2020/11/09",
    content: "잘 쓰세요!",
  },
];

const lectureList = [
  {
    url: "https://youtu.be/3Q_oYDQ2whs",
    title: "WEEK 1, Google 코딩 면접 - 대학생과 함께해봅시다!",
  },
  {
    url: "https://youtu.be/qz9tKlF431k",
    title: "WEEK 2, Google 코딩 면접 - 고등학생과 함께해봅시다!",
  },
  {
    url: "https://youtu.be/gnkrDse9QKc",
    title: "WEEK 3, React 코딩 면접, 이정도는 합시다.",
  },
  {
    url: "https://youtu.be/gq5yubc1u18",
    title: "WEEK 4, 동그란 털쟁이 아저씨가 코딩하며 웃는 영상",
  },
];

const CourseDetailContainer: React.FC<RouteComponentProps<IMatch>> = ({
  match,
  location,
}) => {
  return (
    <CourseDetailPresenter
      id={match.params.id}
      pathname={location.pathname}
      lectureList={lectureList}
      notice={noticeData}
    />
  );
};

export default CourseDetailContainer;
