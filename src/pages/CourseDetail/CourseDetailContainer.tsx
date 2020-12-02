import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import CourseDetailPresenter from "./CourseDetailPresenter";

interface IMatch {
  id: string;
}

const CourseDetailContainer: React.FC<RouteComponentProps<IMatch>> = ({
  match,
  location,
}) => {
  const [teamData, setTeamData] = useState<any>([
    {
      id: "1",
      title: "12월 2일까지 조장님이 해야할 것",
      writter: "이찬형",
      time: "2020/11/29",
      content: "관련 자료 조사해오기, 역할분담 하기",
      isDone: true,
    },
    {
      id: "2",
      title: "우리는 팀입니다!",
      writter: "이찬형",
      time: "2020/11/30",
      content: "하나 둘 셋 파이팅",
      isDone: false,
    },
  ]);
  const [testData, setTestData] = useState<any>([
    {
      id: "1",
      title: "중간고사",
      writter: "국형준",
      questions: [
        { content: "이 LMS의 이름을 쓰세요.", answer: "Season", point: 30 },
        { content: "본인의 학번을 쓰세요.", ansewr: "17011550", point: 20 },
        {
          content: "가장 좋아하는 교수님의 이름을 쓰세요.",
          answer: "국형준",
          point: 100,
        },
      ],
      time: "2020-11-28",
      testTime: 3599,
      isDone: true,
    },
    {
      id: "2",
      title: "기말고사",
      writter: "국형준",
      questions: [
        { content: "이 LMS의 이름을 쓰세요.", answer: "Season", point: 30 },
        { content: "본인의 학번을 쓰세요.", ansewr: "17011550", point: 20 },
        {
          content: "가장 좋아하는 교수님의 이름을 쓰세요.",
          answer: "국형준",
          point: 100,
        },
      ],
      time: "2020-11-30",
      testTime: 3599,
      isDone: false,
    },
  ]);
  const [assignmentData, setAssignmentData] = useState<any>([
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
      time: "~2020-11-27",
      isDone: true,
    },
    {
      id: "2",
      title: "HW2",
      content: "hw2",
      writter: "국형준",
      time: "~2020-11-28",
      isDone: false,
    },
  ]);
  const [noticeData, setNoticeData] = useState<any>([
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
  ]);
  const [lectureData, setLectureData] = useState<any>([
    {
      url: "https://youtu.be/3Q_oYDQ2whs",
      title: "WEEK 1, Google 코딩 면접 - 대학생과 함께해봅시다!",
      isDone: true,
    },
    {
      url: "https://youtu.be/qz9tKlF431k",
      title: "WEEK 2, Google 코딩 면접 - 고등학생과 함께해봅시다!",
      isDone: true,
    },
    {
      url: "https://youtu.be/gnkrDse9QKc",
      title: "WEEK 3, React 코딩 면접, 이정도는 합시다.",
      isDone: false,
    },
    {
      url: "https://youtu.be/gq5yubc1u18",
      title: "WEEK 4, 동그란 털쟁이 아저씨가 코딩하며 웃는 영상",
      isDone: false,
    },
  ]);
  const handleTeamData = (form: any) => {
    setTeamData([...teamData, form]);
  };
  const handleTestData = (form: any) => {
    setTestData([...testData, form]);
  };
  const handleAssignmentData = (form: any) => {
    setAssignmentData([...assignmentData, form]);
  };
  const handleNoticeData = (form: any) => {
    setNoticeData([...noticeData, form]);
  };
  const handleLectureData = (form: any) => {
    setLectureData([...lectureData, form]);
  };
  return (
    <CourseDetailPresenter
      id={match.params.id}
      pathname={location.pathname}
      lectureList={lectureData}
      notice={noticeData}
      assignmentData={assignmentData}
      testData={testData}
      teamData={teamData}
      handleTeamData={handleTeamData}
      isAdmin={true}
      isTeamAdmin={true}
      handleTestData={handleTestData}
      handleAssignmentData={handleAssignmentData}
      handleNoticeData={handleNoticeData}
      handleLectureData={handleLectureData}
    />
  );
};

export default CourseDetailContainer;
