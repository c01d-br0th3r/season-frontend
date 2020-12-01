import React from "react";
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
  courseId: string;
  data: IData[];
  handleClick?: (e: React.MouseEvent) => void;
  isAdmin?: boolean;
  isDone?: boolean;
}

const CourseAssignments: React.FC<RouteComponentProps & IProps> = ({
  courseId,
  data,
  match,
  history,
  location,
  isAdmin,
}) => {
  return (
    <Board
      isAdmin={isAdmin}
      detailAdmin={!isAdmin}
      data={data}
      match={match}
      courseId={courseId}
      history={history}
      location={location}
      handleSubmit={({}) => {}}
    ></Board>
  );
};

export default CourseAssignments;
