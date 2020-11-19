import React from "react";
import { RouteComponentProps } from "react-router-dom";
import CommunityDetailPresenter from "./CommunityDetailPresenter";

interface IMatch {
  id: string;
}

const CommunityDetailContainer: React.FC<RouteComponentProps<IMatch>> = ({
  match,
}) => {
  return <CommunityDetailPresenter id={match.params.id} />;
};

export default CommunityDetailContainer;
