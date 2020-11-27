import React from "react";
import { RouteComponentProps } from "react-router-dom";
import CourseDetailPresenter from "./CourseDetailPresenter";

interface IMatch {
  id: string;
}

const noticeData = [
  {
    id: "1",
    title: "Season 이용 안내",
    writter: "관리자",
    time: "2020/11/09",
    content: "잘 쓰세요!",
  },
  {
    id: "2",
    title: "Season 이용 안내1",
    writter: "관리자",
    time: "2020/11/09",
    content: "잘 쓰세요!",
  },
  {
    id: "3",
    title: "Season 이용 안내2",
    writter: "관리자",
    time: "2020/11/09",
    content: "잘 쓰세요!",
  },
  {
    id: "4",
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

const assignmentData = [
  {
    id: "1",
    title: "HW1",
    content:
      "첨부된 파일에 설명된 Mano CPU 를 Microprogrammed 방식으로 logisim 툴을 사용하여 설계한다.\
    과제 2에서 제어신호 찾는 과제를 해봤으므로 각 명령어에 대한 마이크로 오퍼레이션에서 필요한\
    제어 신호 들을 파악할 수 있고, 과제 4 실습을 통하여 sequencer 부분 설계하는 것을 파악했으면\
    충분히 주어진 시간에 마칠 수 있습니다.\
    명령어 코드 매핑을 쉽게 할 수 있도록 Register reference 명령어에 대한 encoding 하는 회로와\
    carry 제어 모듈 회로가 포함되어 있습니다.\
    Test 프로그램은 교재에 있는 두 수를 곱하는 프로그램을 보여주고 있습니다. 이 프로그램에서 명령어 19개를\
    전부 테스트 하지는 않지만 CPU 동작을 확인할 수 있습니다.\
    여러분이 가지고 있는 과제 3 프로그램을 자신이 설계한 CPU를 구현한 회로에서 실행해 보도록 권장합니다.\
    ",
    writter: "국형준",
    time: "2020-11-27",
  },
  {
    id: "2",
    title: "HW2",
    content: "hw2",
    writter: "국형준",
    time: "2020-11-28",
  },
];

const testData = [
  {
    id: "1",
    title: "TEST1",
    questions: [
      "이 LMS의 이름을 쓰세요.",
      "본인의 학번을 쓰세요.",
      "가장 좋아하는 교수님의 이름을 쓰세요.",
    ],
    time: "2020-11-28",
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
      assignmentData={assignmentData}
      testData={testData}
    />
  );
};

export default CourseDetailContainer;
