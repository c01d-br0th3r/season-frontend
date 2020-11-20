import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  padding: 20px;
  width: 100%;
`;

const CommunityPresenter: React.FC<{}> = () => {
  return (
    <Container>
      <Content>Community</Content>
    </Container>
  );
};

export default CommunityPresenter;
