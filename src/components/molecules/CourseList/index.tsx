import React from "react";
import styled from "styled-components";
import { Label } from "../../atoms";

interface IData {
  id: number;
  name: string;
  classNumber: string;
  professor: string;
  isMajor: boolean;
}

interface IProps {
  data: IData;
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f2f2f2;
  padding: 16px;
`;

const ClassNumber = styled.span`
  opacity: 0.7;
`;

const Check = styled.span`
  opacity: 1;
  color: #dc143c;
`;

const CourseList: React.FC<IProps> = ({ data }) => {
  return (
    <StyledDiv>
      <Label fontWeight="600" size="16px" margin="0 0 4px 0">
        {data.name}{" "}
        <ClassNumber>
          ({data.classNumber}){" "}
          {data.isMajor && (
            <Check>
              <i className="fas fa-check-double"></i>
            </Check>
          )}
        </ClassNumber>
      </Label>
      <Label size="14px" fontWeight="500">
        지도교수: {data.professor}
      </Label>
    </StyledDiv>
  );
};

export default CourseList;
