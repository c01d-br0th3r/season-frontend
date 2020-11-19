import React from "react";
import styled from "styled-components";
import { Label } from "../../atoms";
import Image from "../../atoms/Image";

interface IProps {
  profileImg: string;
  profileAlt: string;
  name: string;
  college: string;
  department: string;
  status?: string;
}

const Conatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 24px 0;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuProfile: React.FC<IProps> = ({
  profileImg,
  profileAlt,
  name,
  college,
  department,
  status,
}) => {
  return (
    <Conatiner>
      <Info>
        <Image
          src={profileImg}
          alt={profileAlt}
          width="100px"
          height="100px"
          border="1px solid #c2c2c2"
          radius="50px"
          margin="0 32px 0 0"
        />
        <LabelContainer>
          <Label margin="0 0 12px 0" size="20px" fontWeight="600">
            {name}
          </Label>
          <Label hexColor="#929292" fontWeight="500">
            {college}
          </Label>
          <Label hexColor="#929292" fontWeight="500">
            {department}
          </Label>
        </LabelContainer>
      </Info>
    </Conatiner>
  );
};

export default MenuProfile;
