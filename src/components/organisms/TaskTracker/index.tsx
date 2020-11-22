import React from "react";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { Label } from "../../atoms";

interface IProps {
  title: string;
  professor: string;
}

const StyledDiv = styled.div`
  width: 100%;
  min-width: 820px;
  max-width: 980px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c2c2c2;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Notice = styled.div`
  margin-top: 20px;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const TaskTracker: React.FC<IProps> = ({ title, professor }) => {
  return (
    <StyledDiv>
      <Label size="22px" fontWeight="600" margin="0 0 8px 0">
        {title}
      </Label>
      <Label size="18px" fontWeight="500" hexColor="#929292">
        {professor}
      </Label>
      <SectionWrapper>
        <Section>
          <Notice>
            <Label fontWeight="600" margin="0 0 8px 0">
              교수 공지사항
            </Label>
            <Label margin="0 0 4px 0" size="14px">
              - 수업을 잘 들으세요.
            </Label>
            <Label size="14px">
              - 수업을 똑바로 들으세요. 기말고사에 나옵니다.
            </Label>
          </Notice>
          <Notice>
            <Label fontWeight="600" margin="0 0 8px 0">
              이번 주 강의
            </Label>
            <Label margin="0 0 4px 0" size="14px">
              - w1-1강 / 2020-09-01 00:00 ~ 2020-09-07 23:59
            </Label>
            <Label size="14px">
              - w1-2강 / 2020-09-01 00:00 ~ 2020-09-07 23:59
            </Label>
          </Notice>
        </Section>
        <Section>
          <div>
            <Label fontWeight="600" margin="0 0 12px 0">
              <i className="far fa-clock" style={{ width: "30px" }} /> 시간
            </Label>
            <ProgressBar now={80} variant="warning b_red2" label="180분" />
          </div>
          <div>
            <Label fontWeight="600" margin="12px 0 12px 0">
              <i className="far fa-star" style={{ width: "30px" }} /> 점수
            </Label>
            <ProgressBar now={92} variant="danger b_red2" label="230.0점" />
          </div>
          <div>
            <Label fontWeight="600" margin="12px 0 12px 0">
              <i className="far fa-check-circle" style={{ width: "30px" }} />{" "}
              출석
            </Label>
            <ProgressBar now={100} variant="warning b_red2" label="12회" />
          </div>
        </Section>
      </SectionWrapper>
    </StyledDiv>
  );
};

export default TaskTracker;
