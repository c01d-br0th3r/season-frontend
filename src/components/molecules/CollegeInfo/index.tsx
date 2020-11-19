import React from "react";
import styled from "styled-components";
import { Label, Image } from "../../atoms";

interface IProps {
  profileImg: string;
  profileAlt: string;
  name: string;
  studentId: string;
  college: string;
  department: string;
  grade: string;
  hashtags?: string[];
}

const Conatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 24px 0;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const HashTag = styled.div`
  margin-right: 8px;
  padding: 4px 8px;
  background-color: #e2e2e2;
  color: #dc143c;
  font-weight: 700;
  border-radius: 8px;
  font-size: 12px;
`;

const CollegeInfo: React.FC<IProps> = ({
  profileImg,
  profileAlt,
  name,
  studentId,
  college,
  department,
  grade,
  hashtags,
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
            {name} - {studentId}
          </Label>
          <Label margin="0 0 12px 0" hexColor="#929292" fontWeight="500">
            {college} {department} {grade}학년
          </Label>
          <TagsWrapper>
            {hashtags &&
              hashtags.map((hashtag) => <HashTag>#{hashtag}</HashTag>)}
          </TagsWrapper>
        </LabelContainer>
      </Info>
    </Conatiner>
  );
};

export default CollegeInfo;
