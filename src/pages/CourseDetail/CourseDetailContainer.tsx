import React from "react";
import { RouteComponentProps } from "react-router-dom";
import CourseDetailPresenter from "./CourseDetailPresenter";

interface IMatch {
  id: string;
}

const CourseDetailContainer: React.FC<RouteComponentProps<IMatch>> = ({
  match,
}) => {
  return <CourseDetailPresenter id={match.params.id} />;
};

export default CourseDetailContainer;
