import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Label } from "../../components/atoms";
import Courses from "../../components/organisms/Courses";
import Notices from "../../components/organisms/Notices";
import TaskTracker from "../../components/organisms/TaskTracker";
import Modal from "../../components/organisms/Modal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

interface IProps {
  handleNoticeClick: (e: React.MouseEvent) => void;
  modalInfo: any;
  courseData: any[];
  noticeData: any[];
}

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

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #c2c2c2;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const localizer = momentLocalizer(moment);

const myEventList = [
  {
    title: "영상 제출",
    start: new Date(2020, 11, 2),
    end: new Date(2020, 11, 2),
    allDay: true,
  },
  {
    title: "발표",
    start: new Date(2020, 11, 4),
    end: new Date(2020, 11, 4),
    allDay: true,
  },
  {
    title: "컴퓨터구조 hw5",
    start: new Date(2020, 11, 4),
    end: new Date(2020, 11, 4),
    allDay: true,
  },
];

const HomePresenter: React.FC<IProps> = ({
  courseData,
  noticeData,
  modalInfo,
  handleNoticeClick,
}) => {
  console.log(modalInfo);
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
              <Notices data={noticeData} handleClick={handleNoticeClick} />
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
              <Calendar localizer={localizer} events={myEventList} />
            </CalendarWapper>
          </Section>
        </SectionWrapper>
      </Content>
      <Modal>
        <TitleWrapper>
          <div>
            <Label fontWeight="600" size="20px" margin="0 0 8px 0">
              {modalInfo && modalInfo.title}
            </Label>
            <Label fontWeight="500" size="16px" hexColor="#a2a2a2">
              {modalInfo && modalInfo.time}
            </Label>
          </div>
          <Label fontWeight="500">{modalInfo && modalInfo.writter}</Label>
        </TitleWrapper>
        <Label>{modalInfo && modalInfo.content}</Label>
      </Modal>
    </Container>
  );
};

export default HomePresenter;
