import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  Home,
  Login,
  MyPage,
  Course,
  Community,
  CourseDetail,
  CommunityDetail,
} from "../pages";

export default () => (
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/community" component={Community} />
        <Route path="/course/:id" component={CourseDetail} />
        <Route path="/community/:id" component={CommunityDetail} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  </Fragment>
);
