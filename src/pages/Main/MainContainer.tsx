import React, { useState } from "react";
import MainPresenter from "./MainPresenter";

const MainContainer: React.FC<{}> = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const handleCollapsed = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  return (
    <div>
      <MainPresenter collapsed={collapsed} handleCollapsed={handleCollapsed} />
    </div>
  );
};

export default MainContainer;
