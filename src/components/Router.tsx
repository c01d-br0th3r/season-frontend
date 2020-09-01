import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "../routes/Main";

export default () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  </>
);
