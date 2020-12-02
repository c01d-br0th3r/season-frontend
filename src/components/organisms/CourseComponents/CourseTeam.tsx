import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router-dom";
import Board from "../Board";

interface IData {
  id: string;
  title: string;
  writter: string;
  time: string;
  content: string;
}

interface IProps {
  data: IData[];
  handleTeamData: (form: any) => void;
  courseId: string;
  isAdmin?: boolean;
  isTeamAdmin: boolean;
}

const CourseTeam: React.FC<RouteComponentProps & IProps> = ({
  data,
  handleTeamData,
  history,
  location,
  match,
  courseId,
  isAdmin,
  isTeamAdmin,
}) => {
  return (
    <Fragment>
      <Board
        isAdmin={isTeamAdmin}
        isTeam={true}
        data={data}
        match={match}
        courseId={courseId}
        history={history}
        location={location}
        handleSubmit={handleTeamData}
      ></Board>
    </Fragment>
  );
};

export default CourseTeam;
