import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Sidebar } from "../components/organisms";
import {
  Home,
  Login,
  MyPage,
  Course,
  Community,
  CourseDetail,
  CommunityDetail,
} from "../pages";

const courseList = [
  "자료구조및실습(003)",
  "컴퓨터구조(001)",
  "ES-디지털스토리텔링(001)",
  "English Reading Practice 1 (011)",
];

export default () => (
  <Fragment>
    <Router>
      <Sidebar
        profileImg="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"
        profileAlt="user"
        name="이찬형"
        college="소프트웨어융합대학"
        department="컴퓨터공학과"
        courseList={courseList}
      />
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
