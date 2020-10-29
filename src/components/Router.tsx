import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "../pages/Main";
import Lecture from "../pages/Lecture";

export default () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/lecture/:id" component={Lecture} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  </>
);
