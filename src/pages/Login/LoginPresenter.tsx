import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Button, Input, Label } from "../../components/atoms";

interface IProps {
  handleIdChange: (e: ChangeEvent) => void;
  handlePwChange: (e: ChangeEvent) => void;
  handleLogin: () => void;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Container = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  max-width: 600px;
  border: 1px solid #c2c2c2;
  padding: 60px 40px;
  border-radius: 8px;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
`;

const LoginPresenter: React.FC<IProps> = ({
  handleIdChange,
  handlePwChange,
  handleLogin,
}) => {
  return (
    <Wrapper>
      <Container>
        <Label size="32px" fontWeight="700" margin="0px 0px 56px 0px">
          세종대학교 Season
        </Label>
        <Input
          placeholder="학번 또는 사번"
          margin="0px 0px 16px 0px"
          handleChange={handleIdChange}
        />
        <Input
          placeholder="비밀번호"
          margin="0px 0px 56px 0px"
          handleChange={handlePwChange}
        />
        <Button
          width="100%"
          color="b_red2"
          handleClick={handleLogin}
          padding="20px 0"
        >
          <Label color="white" fontWeight="600">
            로그인
          </Label>
        </Button>
      </Container>
    </Wrapper>
  );
};

export default LoginPresenter;
