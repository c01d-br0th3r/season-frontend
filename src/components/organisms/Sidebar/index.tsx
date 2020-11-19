import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Label } from "../../atoms";
import { MenuProfile } from "../../molecules";

interface IProps {
  profileImg: string;
  profileAlt: string;
  name: string;
  college: string;
  department: string;
  width?: string;
}

const SideDiv = styled.div<{ height: number; open: boolean }>`
  height: ${(props) => (props.height === 0 ? "100vh" : `${props.height}px`)};
  background-color: #dc143c;
  width: ${(props) => (props.open ? "320px" : "60px")};
  min-width: ${(props) => props.open && "320px"};
  position: relative;
  left: 0;
  z-index: 10;
`;

const Bar = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: #fff;
`;

const Sidebar: React.FC<IProps> = ({
  profileImg,
  profileAlt,
  name,
  college,
  department,
  width,
}) => {
  const [bodyHeight, setBodyHeight] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(true);
  useEffect(() => {
    const setHeight = () => {
      const height = document.body.clientHeight;
      setBodyHeight(height);
    };
    setHeight();
    window.addEventListener("resize", setHeight);
  }, []);
  console.log(open);
  const handleOpen = () => {
    setOpen((open) => !open);
  };
  return (
    <Fragment>
      <SideDiv open={open} height={bodyHeight}>
        <Bar onClick={handleOpen}>
          <i className="fas fa-bars" />
        </Bar>
        {open && (
          <Fragment>
            <Label
              size="32px"
              hexColor="#fff"
              fontWeight="600"
              padding="16px 16px"
            >
              Season
            </Label>
            <MenuProfile
              profileImg={profileImg}
              profileAlt={profileAlt}
              name={name}
              college={college}
              department={department}
              status="열심히 합시다."
            />
            <Label
              size="18px"
              fontWeight="500"
              hexColor="#f2f2f2"
              padding="16px"
              margin="8px 0 0 0"
            >
              <Link to="/">Home</Link>
            </Label>
            <Label
              size="18px"
              fontWeight="500"
              hexColor="#f2f2f2"
              padding="16px"
            >
              <Link to="/mypage">MyPage</Link>
            </Label>
            <Label
              size="18px"
              fontWeight="500"
              hexColor="#f2f2f2"
              padding="16px"
            >
              <Link to="/course">Course</Link>
            </Label>
            <Label
              size="18px"
              fontWeight="500"
              hexColor="#f2f2f2"
              padding="16px"
            >
              <Link to="/community">Community</Link>
            </Label>
          </Fragment>
        )}
      </SideDiv>
    </Fragment>
  );
};

export default Sidebar;
