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
import CourseAttendance from "../../components/organisms/CourseComponents/CourseAttendance";
import CourseTeam from "../../components/organisms/CourseComponents/CourseTeam";

interface IProps {
  id: string;
  pathname: string;
  lectureList: any[];
  notice: any[];
  assignmentData: any[];
  testData: any[];
  teamData: any[];
  handleTeamData: (form: any) => void;
  handleNoticeData: (form: any) => void;
  handleTestData: (form: any) => void;
  handleAssignmentData: (form: any) => void;
  handleLectureData: (form: any) => void;
  isAdmin: boolean;
  isTeamAdmin: boolean;
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
  testData,
  teamData,
  handleTeamData,
  isAdmin,
  isTeamAdmin,
  handleAssignmentData,
  handleLectureData,
  handleNoticeData,
  handleTestData,
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
                  status={pathname.includes(`/course/${id}/test`)}
                >
                  시험
                </Menu>
              </Link>
              {isAdmin ? (
                <Link to={`/course/${id}/attendance`}>
                  <Menu
                    className="team"
                    status={pathname.includes(`/course/${id}/attendance`)}
                  >
                    출석부
                  </Menu>
                </Link>
              ) : (
                <Link to={`/course/${id}/team`}>
                  <Menu
                    className="team"
                    status={pathname.includes(`/course/${id}/team`)}
                  >
                    그룹
                  </Menu>
                </Link>
              )}
            </Header>
          </Section>
          <Switch>
            <Route
              exact
              path={`/course/${id}/announcement`}
              render={() => (
                <CourseAnnouncement
                  data={notice}
                  isAdmin={isAdmin}
                  handleNoticeData={handleNoticeData}
                />
              )}
            />
            <Route
              exact
              path={`/course/${id}/video`}
              render={() => (
                <CourseVideoList
                  lectureList={lectureList}
                  isAdmin={isAdmin}
                  handleLectureData={handleLectureData}
                />
              )}
            />
            <Route
              path={`/course/${id}/assignment`}
              render={(props) => (
                <CourseAssignments
                  {...props}
                  courseId={id}
                  data={assignmentData}
                  isAdmin={isAdmin}
                  handleAssignmentData={handleAssignmentData}
                />
              )}
            />
            <Route
              path={`/course/${id}/test`}
              render={(props) => (
                <CourseTest
                  {...props}
                  courseId={id}
                  data={testData}
                  isAdmin={isAdmin}
                  handleTestData={handleTestData}
                />
              )}
            />
            {isAdmin ? (
              <Route
                path={`/course/${id}/attendance`}
                render={(props) => <CourseAttendance {...props} />}
              />
            ) : (
              <Route
                path={`/course/${id}/team`}
                render={(props) => (
                  <CourseTeam
                    {...props}
                    data={teamData}
                    handleTeamData={handleTeamData}
                    courseId={id}
                    isAdmin={isAdmin}
                    isTeamAdmin={isTeamAdmin}
                  />
                )}
              />
            )}
            <Redirect path="*" to="/" />
          </Switch>
        </SectionWrapper>
      </Content>
    </Container>
  );
};

export default CourseDetailPresenter;
