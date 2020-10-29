import React from "react";
import { RouteComponentProps } from "react-router-dom";
import LecturePresenter from "./LecturePresenter";

interface IMatchProps {
  id: string;
}

const LectureContainer: React.FC<RouteComponentProps<IMatchProps>> = ({
  match,
}) => {
  console.log(match.params.id);
  return (
    <div>
      <LecturePresenter id={match.params.id} />
    </div>
  );
};

export default LectureContainer;
