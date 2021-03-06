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
  courseList: string[];
}

const SideDiv = styled.div<{ height: number; open: boolean }>`
  height: ${(props) => (props.height === 0 ? "100vh" : `${props.height}px`)};
  background-color: #dc143c;
  width: ${(props) => (props.open ? "320px" : "60px")};
  min-width: ${(props) => props.open && "320px"};
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;
`;

const Info = styled.div`
  width: 320px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

const Bar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 16px;
  left: ${(props) => (props.isOpen ? "280px" : "18px")};
  font-size: 20px;
  color: #fff;
  z-index: 30;
`;

const Sidebar: React.FC<IProps> = ({
  profileImg,
  profileAlt,
  name,
  college,
  department,
  width,
  courseList,
}) => {
  const [bodyHeight, setBodyHeight] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(true);
  useEffect(() => {
    const setHeight = () => {
      const root = document.querySelector("#root") as HTMLDivElement;
      const height = root.scrollHeight * 1.1;
      setBodyHeight(height);
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    window.addEventListener("click", setHeight);
  }, []);
  const handleOpen = () => {
    setOpen((open) => !open);
  };
  return (
    <Fragment>
      <SideDiv open={open} height={bodyHeight}>
        <Bar onClick={handleOpen} isOpen={open}>
          <i className="fas fa-bars" />
        </Bar>
        {open && (
          <Info>
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
              <Link to="/">
                <i className="fas fa-home" style={{ width: "32px" }} /> Home
              </Link>
            </Label>
            <Label
              size="18px"
              fontWeight="500"
              hexColor="#f2f2f2"
              padding="16px"
            >
              <Link to="/mypage">
                <i className="fas fa-user" style={{ width: "32px" }} /> MyPage
              </Link>
            </Label>
            <Label
              size="18px"
              fontWeight="500"
              hexColor="#f2f2f2"
              padding="16px"
            >
              <i className="fas fa-university" style={{ width: "32px" }} />{" "}
              Course
              {courseList.map((course, idx) => (
                <Link key={idx} to={`/course/${idx}/announcement`}>
                  <Label margin="16px 0 0 16px" fontWeight="500">
                    - {course}
                  </Label>
                </Link>
              ))}
            </Label>
            <Label
              size="18px"
              fontWeight="500"
              hexColor="#f2f2f2"
              padding="16px"
            >
              <Link to="/messenger">
                <i className="fas fa-envelope" style={{ width: "32px" }} />
                Messenger
              </Link>
            </Label>
            <Label
              size="18px"
              fontWeight="500"
              hexColor="#f2f2f2"
              padding="16px"
            >
              <Link to="/community">
                <i className="fas fa-archive" style={{ width: "32px" }} />
                Community
              </Link>
            </Label>
          </Info>
        )}
      </SideDiv>
    </Fragment>
  );
};

export default Sidebar;
