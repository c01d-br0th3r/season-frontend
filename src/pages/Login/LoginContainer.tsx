import React, { ChangeEvent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import LoginPresenter from "./LoginPresenter";

const LoginContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const handleIdChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setId(target.value);
  };
  const handlePwChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPw(target.value);
  };
  const handleLogin = () => {
    console.log(id, pw);
    history.push("/");
  };
  return (
    <LoginPresenter
      handleIdChange={handleIdChange}
      handlePwChange={handlePwChange}
      handleLogin={handleLogin}
    />
  );
};

export default LoginContainer;
