import React, { ChangeEvent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import LoginPresenter from "./LoginPresenter";

const LoginContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleIdChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setId(target.value);
  };
  const handlePwChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPw(target.value);
  };
  const handleLogin = () => {
    const errorMsg = document.querySelector(".error-message") as HTMLDivElement;
    if (id.length === 0) {
      setErrorMessage("아이디를 입력해주세요.");
      errorMsg.classList.remove("hide");
      return false;
    }
    if (pw.length === 0) {
      setErrorMessage("비밀번호를 입력해주세요.");
      errorMsg.classList.remove("hide");
      return false;
    }

    history.push("/");
  };
  return (
    <LoginPresenter
      handleIdChange={handleIdChange}
      handlePwChange={handlePwChange}
      handleLogin={handleLogin}
      errorMessage={errorMessage}
    />
  );
};

export default LoginContainer;
