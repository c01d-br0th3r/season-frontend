import React from "react";
import styled from "styled-components";

interface IProps {
  name: string;
  status: string;
  department: string;
  grade: string;
  avg: string;
  credit: string;
}

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 0 36px;
  color: #fff;
`;

const UnivWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  margin-right: 16px;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bold = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

const SemiBold = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Status = styled.div`
  opacity: 0.8;
  font-size: 14px;
`;

const Avg = styled.div`
  display: flex;
`;

const MainProfile: React.FC<IProps> = ({
  name,
  status,
  department,
  grade,
  avg,
  credit,
}) => {
  return (
    <InfoWrapper>
      <Profile>
        <ProfileImg />
        <NameWrapper>
          <Bold>{name}</Bold>
          <Status>{status}</Status>
        </NameWrapper>
      </Profile>
      <UnivWrapper>
        <SemiBold>{department}</SemiBold>
        <SemiBold>{grade}</SemiBold>
        <Avg>
          <SemiBold>학기 평점: </SemiBold>
          <div style={{ marginLeft: "8px" }}>{avg} / 4.50</div>
        </Avg>
        <Avg>
          <SemiBold>이수 학점: </SemiBold>
          <div style={{ marginLeft: "8px" }}>{credit} / 140</div>
        </Avg>
      </UnivWrapper>
    </InfoWrapper>
  );
};

export default MainProfile;
