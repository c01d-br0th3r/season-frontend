import React from "react";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, Label } from "../../atoms";

interface IMatch {
  id: string;
}

interface IData {
  id: string;
  title: string;
  time: string;
  questions: string[];
}

interface IProps {
  courseId?: string;
  data: IData[];
  handleClick?: (e: React.MouseEvent) => void;
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
  border-bottom: 1px solid #c2c2c2;
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
  margin-top: 48px;
`;

const QuestionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
`;

const TestList: React.FC<RouteComponentProps & IProps> = ({ match, data }) => {
  return (
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
    </StyledDiv>
  );
};

const TestDetail: React.FC<RouteComponentProps<IMatch> & IProps> = ({
  data,
  match,
}) => {
  const target = data.filter((d) => d.id === match.params.id)[0];
  console.log(target);
  return (
    <StyledDiv>
      <List>
        <Label fontWeight="600" size="24px">
          {target.title}
        </Label>
        <Label hexColor="#DC143C" fontWeight="500" size="18px">
          {target.time}
        </Label>
      </List>
      <Questions>
        {target.questions.map((q, idx) => (
          <QuestionList key={idx}>
            <Label margin="0 0 12px 0" fontWeight="500">
              Q. {q}
            </Label>
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
    </StyledDiv>
  );
};

const CourseTest: React.FC<RouteComponentProps & IProps> = ({
  data,
  match,
}) => {
  return (
    <Container>
      <Route
        exact
        path={match.path}
        render={(props) => <TestList {...props} data={data} />}
      />
      <Route
        path={`${match.path}/:id`}
        render={(props) => <TestDetail {...props} data={data} />}
      />
    </Container>
  );
};

export default CourseTest;
