import React, { Fragment, useState } from "react";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, Label } from "../../atoms";
import SubmitForm from "../SubmitForm";

interface IProps {
  isAdmin?: boolean;
  detailAdmin?: boolean;
  children?: React.ReactNode;
  data: any[];
  match: any;
  courseId: string;
  handleSubmit: (form: any) => void;
}

interface IMatch {
  id: string;
}

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
  margin-bottom: 16px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 16px;
  padding-bottom: 16px;
  &:last-child {
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const TitleInfo = styled.div`
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  align-self: flex-end;
  text-align: right;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  padding: 16px;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  &:focus {
    border: none;
    outline: 2px solid #de8a9a;
  }
`;

const Content = styled.div`
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
`;

const BoardList: React.FC<IProps> = ({
  isAdmin,
  children,
  data,
  match,
  handleSubmit,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <StyledDiv>
        {data.map((d, idx) => (
          <TitleWrapper key={idx}>
            <Link to={`${match.url}/${d.id}`}>
              <TitleInfo>
                <Label fontWeight="600" size="18px" margin="0 0 8px 0">
                  {d.title}
                </Label>
                <Label hexColor="#a2a2a2" fontWeight="500" size="14px">
                  {d.time}, {d.writter}
                </Label>
              </TitleInfo>
            </Link>
            <Label fontWeight="500">
              <i className="fas fa-caret-right" />
            </Label>
          </TitleWrapper>
        ))}
        {isAdmin && (
          <BtnWrapper>
            <Button
              color="b_red2"
              margin="8px 0 8px 0"
              handleClick={() => setOpen(!open)}
            >
              <Label hexColor="#f8f8f8" fontWeight="600">
                글쓰기
              </Label>
            </Button>
          </BtnWrapper>
        )}
      </StyledDiv>
      {open && isAdmin && (
        <SubmitForm handleClick={handleSubmit} open={open} setOpen={setOpen} />
      )}
    </Fragment>
  );
};

const BoardDetail: React.FC<RouteComponentProps<IMatch> & IProps> = ({
  match,
  data,
  detailAdmin,
}) => {
  const target = data.filter((d) => d.id === match.params.id)[0];
  console.log(target);
  return (
    <Fragment>
      <StyledDiv>
        <Label fontWeight="600" size="20px" margin="0 0 16px 0">
          {target.title}
        </Label>
        <Label
          margin="0 0 32px 0"
          size="16px"
          fontWeight="500"
          hexColor="#929292"
        >
          {target.time}, {target.writter}
        </Label>
        <Content>{target.content}</Content>
      </StyledDiv>
      {detailAdmin && <SubmitForm handleClick={({}) => {}} />}
    </Fragment>
  );
};

const Board: React.FC<RouteComponentProps & IProps> = ({
  courseId,
  data,
  match,
  isAdmin,
  handleSubmit,
  detailAdmin,
}) => {
  return (
    <Container>
      <Route
        exact
        path={match.path}
        render={(props) => (
          <BoardList
            {...props}
            courseId={courseId}
            data={data}
            isAdmin={isAdmin}
            handleSubmit={handleSubmit}
          />
        )}
      />
      <Route
        path={`${match.path}/:id`}
        render={(props) => (
          <BoardDetail
            {...props}
            courseId={courseId}
            data={data}
            handleSubmit={handleSubmit}
            detailAdmin={detailAdmin}
          />
        )}
      />
    </Container>
  );
};

export default Board;
