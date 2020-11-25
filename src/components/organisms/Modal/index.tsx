import React, { Fragment, useEffect } from "react";
import styled from "styled-components";

interface IProps {
  children?: React.ReactNode;
}

const StyledDiv = styled.div`
  width: 800px;
  height: 600px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 20;
  padding: 56px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
`;

const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 15;
  top: 0;
  left: 0;
  background-color: #121212;
  opacity: 0.3;
`;

const Btn = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 25;
  cursor: pointer;
`;

const Modal: React.FC<IProps> = ({ children }) => {
  useEffect(() => {
    const bg = document.querySelector(".modal-bg") as HTMLDivElement;
    const height = document.body.scrollHeight;
    bg.style.height = `${height}px`;
  }, []);
  const handleBgClick = () => {
    const bg = document.querySelector(".modal-bg");
    const modal = document.querySelector(".my-modal");
    bg?.classList.add("hide");
    modal?.classList.add("hide");
  };
  const handleBtnClick = () => {
    const bg = document.querySelector(".modal-bg");
    const modal = document.querySelector(".my-modal");
    bg?.classList.add("hide");
    modal?.classList.add("hide");
  };
  return (
    <Fragment>
      <Bg className="modal-bg hide" onClick={handleBgClick} />
      <StyledDiv className="my-modal hide">
        <Btn onClick={handleBtnClick}>
          <i className="fas fa-times" />
        </Btn>
        {children}
      </StyledDiv>
      ;
    </Fragment>
  );
};

export default Modal;
