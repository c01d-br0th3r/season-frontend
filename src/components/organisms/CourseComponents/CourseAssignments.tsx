import React from "react";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { Label } from "../../atoms";

const Container = styled.div`
  width: 100%;
  padding: 24px;
`;

const StyledDiv = styled.div`
  width: 100%;
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
  margin-bottom: 12px;
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

interface IMatch {
  id: string;
}

interface IData {
  id: string;
  title: string;
  writter: string;
  time: string;
  content: string;
}

interface IProps {
  courseId?: string;
  data: IData[];
  handleClick?: (e: React.MouseEvent) => void;
}

const AssignmentList: React.FC<RouteComponentProps & IProps> = ({
  match,
  courseId,
  data,
}) => {
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
              ~{d.time}
            </Label>
          </List>
          <Label lineHeight="1.5">{d.content}</Label>
        </ListWrapper>
      ))}
    </StyledDiv>
  );
};

const AssignmentSubmit: React.FC<RouteComponentProps<IMatch> & IProps> = ({
  match,
  courseId,
  data,
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
          ~{target.time}
        </Label>
      </List>
      <Label
        margin="0 0 32px 0"
        size="18px"
        fontWeight="500"
        hexColor="#929292"
      >
        {target.writter}
      </Label>
      <Label margin="0 0 32px 0" size="18px" lineHeight="2">
        {target.content}
      </Label>
      <div>
        <div>SubmitForm</div>
      </div>
    </StyledDiv>
  );
};

const CourseAssignments: React.FC<RouteComponentProps & IProps> = ({
  courseId,
  data,
  match,
}) => {
  return (
    <Container>
      <Route
        exact
        path={match.path}
        render={(props) => (
          <AssignmentList {...props} courseId={courseId} data={data} />
        )}
      />
      <Route
        path={`${match.path}/:id`}
        render={(props) => (
          <AssignmentSubmit {...props} courseId={courseId} data={data} />
        )}
      />
    </Container>
  );
};

export default CourseAssignments;
