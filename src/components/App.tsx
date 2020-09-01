import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";

const App: React.FC<{}> = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
