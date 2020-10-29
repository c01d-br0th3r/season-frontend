import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 12px;
  border-bottom: 2px solid #c2c2c2;
`;

const TaskTracker: React.FC<{}> = () => {
  return (
    <div>
      <Title>Task Tracker</Title>
    </div>
  );
};

export default TaskTracker;
