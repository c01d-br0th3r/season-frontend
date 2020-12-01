import React, { useState, useEffect, Fragment } from "react";
import { Tab } from "react-bootstrap";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, Label } from "../../atoms";
import dummyGenerator from "../../atoms/dummyGenerator";
import TableView from "../TableView";

interface IMatch {
  id: string;
}

interface IData {
  id: string;
  title: string;
  time: string;
  questions: any[];
  testTime: number;
}

interface IProps {
  courseId?: string;
  data: IData[];
  handleClick?: (e: React.MouseEvent) => void;
  isAdmin?: boolean;
}

const Container = styled.div`
  width: 100%;
  padding: 24px;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  min-width: 400px;
  border: 1px solid #c2c2c2;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const Questions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;
`;

const ContentPoint = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  text-align: right;
`;

const Point = styled.div`
  padding: 8px;
  font-weight: 600;
  background-color: #f2f2f2;
  color: #dc143c;
  font-size: 14px;
  border-radius: 8px;
`;

const QuestionInfo = styled.div`
  padding: 16px;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const TestList: React.FC<RouteComponentProps & IProps> = ({
  match,
  data,
  isAdmin,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [numberInput, setNumberInput] = useState<string>("");
  const [questionCount, setQuestionCount] = useState<any>(0);
  const [timer, setTimer] = useState<string>("");
  const handleNumberChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setNumberInput(target.value);
  };
  const handleTimerChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTimer(target.value);
  };
  const handleCreate = () => {
    const number = parseInt(numberInput);
    setQuestionCount(number);
  };
  const handleSubmit = () => {
    let qus: any[] = [];
    const _ques = document.querySelectorAll(".questions");
    const _ans = document.querySelectorAll(".answers");
    const _poi = document.querySelectorAll(".points");
    const ques: any[] = Array.from(_ques);
    const ans: any[] = Array.from(_ans);
    const poi: any[] = Array.from(_poi);
    for (let i = 0; i < ques.length; i++) {
      const data = {
        content: ques[i].value,
        answer: ans[i].value,
        point: parseInt(poi[i].value),
      };
      qus.push(data);
    }
    const form = {
      id: `${data.length + 1}`,
      title: "TEST TEST",
      time: "2020-12-01",
      questions: qus,
      writter: "국형준",
      testTime: parseInt(timer),
    };
    console.log(form);
  };
  return (
    <Fragment>
      <StyledDiv>
        {data.map((d) => (
          <ListWrapper key={d.id}>
            <List>
              <Link to={`${match.url}/${d.id}`}>
                <Label fontWeight="600" size="18px">
                  {d.title}
                </Label>
              </Link>
              <Label hexColor="#DC143C" fontWeight="500">
                {d.time}
              </Label>
            </List>
          </ListWrapper>
        ))}
        {isAdmin && (
          <ButtonWrapper>
            <Button
              color="b_red2"
              margin="8px 0 8px 0"
              handleClick={() => setOpen(!open)}
            >
              <Label hexColor="#f8f8f8" fontWeight="600">
                테스트 추가
              </Label>
            </Button>
          </ButtonWrapper>
        )}
      </StyledDiv>
      {open && isAdmin && (
        <StyledDiv>
          <Label size="18px" fontWeight="600" margin="0 0 32px 0">
            총 문제 수
          </Label>
          <Input margin="0 0 32px 0" handleChange={handleNumberChange} />
          <Label size="18px" fontWeight="600" margin="0 0 32px 0">
            제한시간
          </Label>
          <Input margin="0 0 32px 0" handleChange={handleTimerChange} />
          <ButtonWrapper>
            <Button handleClick={handleCreate} margin="0 0 32px 0">
              <Label fontWeight="500">문제 생성</Label>
            </Button>
          </ButtonWrapper>
          {questionCount !== 0 && (
            <Fragment>
              {[...Array(questionCount)].map((q, idx) => (
                <QuestionInfo key={idx}>
                  <Label size="18px" fontWeight="600" margin="0 0 16px 0">
                    {idx + 1}번
                  </Label>
                  <Label margin="0 0 12px 0" fontWeight="500">
                    점수
                  </Label>
                  <Input margin="0 0 16px 0" className="points" />
                  <Label margin="0 0 12px 0" fontWeight="500">
                    문제
                  </Label>
                  <Input margin="0 0 16px 0" className="questions" />
                  <Label margin="0 0 12px 0" fontWeight="500">
                    답
                  </Label>
                  <Input className="answers" />
                </QuestionInfo>
              ))}
              <ButtonWrapper>
                <Button handleClick={handleSubmit} margin="0 0 32px 0">
                  <Label fontWeight="500">생성</Label>
                </Button>
              </ButtonWrapper>
            </Fragment>
          )}
        </StyledDiv>
      )}
    </Fragment>
  );
};

const TestDetail: React.FC<RouteComponentProps<IMatch> & IProps> = ({
  data,
  match,
  isAdmin,
}) => {
  const target = data.filter((d) => d.id === match.params.id)[0];
  const [timer, setTimer] = useState<number>(target.testTime);
  useEffect(() => {
    if (!isAdmin) {
      const Counter = setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);
      return () => clearInterval(Counter);
    }
  }, []);
  const timeFormatter = (time: number): string => {
    let minute = Math.floor(time / 60).toString();
    let second = (time % 60).toString();
    if (minute.length == 1) minute = `0${minute}`;
    if (second.length == 1) second = `0${second}`;
    return `${minute}분 ${second}초`;
  };
  return (
    <StyledDiv>
      {isAdmin ? (
        <Fragment>
          <Label fontWeight="600" size="24px" margin="0 0 24px 0">
            {target.title}
          </Label>
          <TableView data={dummyGenerator()} />
        </Fragment>
      ) : (
        <Fragment>
          <List style={{ marginBottom: "24px" }}>
            <Label fontWeight="600" size="24px">
              {target.title}
            </Label>
            <Label hexColor="#DC143C" fontWeight="500" size="18px">
              {target.time}
            </Label>
          </List>
          <ButtonWrapper>
            <Label fontWeight="500">남은 시간: {timeFormatter(timer)}</Label>
          </ButtonWrapper>
          <Questions>
            {target.questions.map((q, idx) => (
              <QuestionList key={idx}>
                <ContentPoint>
                  <Label margin="0 0 12px 0" fontWeight="500">
                    Q. {q.content}
                  </Label>
                  <Point>{q.point}점</Point>
                </ContentPoint>
                <Input />
              </QuestionList>
            ))}
          </Questions>
          <ButtonWrapper>
            <Button color="b_red1">
              <Label hexColor="#f8f8f8" fontWeight="600">
                제출
              </Label>
            </Button>
          </ButtonWrapper>
        </Fragment>
      )}
    </StyledDiv>
  );
};

const CourseTest: React.FC<RouteComponentProps & IProps> = ({
  data,
  match,
  isAdmin,
}) => {
  return (
    <Container>
      <Route
        exact
        path={match.path}
        render={(props) => (
          <TestList {...props} data={data} isAdmin={isAdmin} />
        )}
      />
      <Route
        path={`${match.path}/:id`}
        render={(props) => (
          <TestDetail {...props} data={data} isAdmin={isAdmin} />
        )}
      />
    </Container>
  );
};

export default CourseTest;
