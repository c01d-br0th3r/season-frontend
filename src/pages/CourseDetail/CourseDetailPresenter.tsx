import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Label } from "../../components/atoms";
import {
  CourseAnnouncement,
  CourseAssignments,
  CourseTest,
  CourseVideoList,
} from "../../components/organisms/CourseComponents";

interface IProps {
  id: string;
  pathname: string;
  lectureList: any[];
  notice: any[];
  assignmentData: any[];
}

const Container = styled.div`
  width: 100%;
  display: flex;
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

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    cursor: pointer;
  }
  font-size: 18px;
  font-weight: 600;
`;

const Menu = styled.div<{ status: boolean }>`
  color: ${(props) => (props.status ? "#d43958" : "#121212")};
`;

const CourseDetailPresenter: React.FC<IProps> = ({
  id,
  pathname,
  lectureList,
  notice,
  assignmentData,
}) => {
  return (
    <Container>
      <Content>
        <Label>{`course ID: ${id}`}</Label>
        <SectionWrapper>
          <Section>
            <Header className="course-header">
              <Link to={`/course/${id}/announcement`}>
                <Menu
                  className="announcement"
                  status={pathname === `/course/${id}/announcement`}
                >
                  공지사항
                </Menu>
              </Link>
              <Link to={`/course/${id}/video`}>
                <Menu
                  className="video"
                  status={pathname === `/course/${id}/video`}
                >
                  강의
                </Menu>
              </Link>
              <Link to={`/course/${id}/assignment`}>
                <Menu
                  className="assignment"
                  status={pathname.includes(`/course/${id}/assignment`)}
                >
                  과제
                </Menu>
              </Link>
              <Link to={`/course/${id}/test`}>
                <Menu
                  className="test"
                  status={pathname === `/course/${id}/test`}
                >
                  시험
                </Menu>
              </Link>
            </Header>
          </Section>
          <Switch>
            <Route
              exact
              path={`/course/${id}/announcement`}
              render={() => <CourseAnnouncement data={notice} />}
            />
            <Route
              exact
              path={`/course/${id}/video`}
              render={() => <CourseVideoList lectureList={lectureList} />}
            />
            <Route
              path={`/course/${id}/assignment`}
              render={(props) => (
                <CourseAssignments
                  {...props}
                  courseId={id}
                  data={assignmentData}
                />
              )}
            />
            <Route
              exact
              path={`/course/${id}/test`}
              render={() => <CourseTest />}
            />
            <Redirect path="*" to="/" />
          </Switch>
        </SectionWrapper>
      </Content>
    </Container>
  );
};

export default CourseDetailPresenter;
