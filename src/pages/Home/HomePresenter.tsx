import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Label } from "../../components/atoms";
import Courses from "../../components/organisms/Courses";
import Notices from "../../components/organisms/Notices";
import TaskTracker from "../../components/organisms/TaskTracker";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionWrapper = styled.div`
  width: 1020px;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const CalendarWapper = styled.div`
  width: 100%;
  height: 600px;
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const courseData = [
  {
    name: "알고리즘및실습",
    classNumber: "003",
    professor: "국형준",
    isMajor: true,
  },
  {
    name: "컴퓨터구조",
    classNumber: "001",
    professor: "송상훈",
    isMajor: true,
  },
  {
    name: "ES-디지털스토리텔링",
    classNumber: "001",
    professor: "국형준",
    isMajor: true,
  },
  {
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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const localizer = momentLocalizer(moment);

const HomePresenter: React.FC<{}> = () => {
  return (
    <Container>
      <Content>
        <SectionWrapper>
          <Section>
            <Label
              width="100%"
              size="20px"
              fontWeight="700"
              margin="0 0 16px 0"
            >
              Task Tracker
            </Label>
            <div style={{ width: "100%" }}>
              <Slider {...settings}>
                <TaskTracker title="알고리즘및실습 (003)" professor="국형준" />
                <TaskTracker title="컴퓨터구조 (001)" professor="송상훈" />
              </Slider>
            </div>
          </Section>
          <Section>
            <Label
              width="100%"
              size="20px"
              fontWeight="700"
              margin="0 0 16px 0"
            >
              코스 및 공지사항
            </Label>
            <Wrapper>
              <Courses data={courseData} />
              <Notices data={noticeData} />
            </Wrapper>
          </Section>
          <Section>
            <Label
              width="100%"
              size="20px"
              fontWeight="700"
              margin="0 0 16px 0"
            >
              Calendar
            </Label>
            <CalendarWapper>
              <Calendar localizer={localizer} events={[]} />
            </CalendarWapper>
          </Section>
        </SectionWrapper>
      </Content>
    </Container>
  );
};

export default HomePresenter;
