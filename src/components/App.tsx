import React from "react";
import GlobalStyles from "./GlobalStyles";
import { Router } from "../routes";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const App: React.FC<{}> = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
