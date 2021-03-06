import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Button, Label } from "../../atoms";
import Accordian from "../Accordian";
import SubmitForm from "../SubmitForm";

interface IData {
  id: string;
  title: string;
  writter: string;
  time: string;
  content: string;
}

interface IProps {
  data: IData[];
  isAdmin?: boolean;
  handleNoticeData: (form: any) => void;
}

const Container = styled.div`
  width: 100%;
  padding: 24px;
`;

const StyledDiv = styled.div`
  width: 100%;
  max-width: 1080px;
  min-width: 400px;
  border: 1px solid #c2c2c2;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  .accordian:last-child {
    margin-bottom: 0;
    border: none;
    padding-bottom: 0;
  }
  .accordian:nth-child(1) {
    padding-top: 0;
  }
`;

const BtnWrapper = styled.div`
  align-self: flex-end;
  text-align: right;
`;

const CourseAnnouncement: React.FC<IProps> = ({
  data,
  isAdmin,
  handleNoticeData,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Container>
        <StyledDiv>
          {data.map((d) => (
            <Accordian
              key={d.id}
              id={d.id}
              title={d.title}
              content={d.content}
              writter={d.writter}
              time={d.time}
              isAdmin={isAdmin}
            />
          ))}
          {isAdmin && (
            <BtnWrapper>
              <Button
                color="b_red2"
                margin="20px 0 0 0"
                handleClick={() => setOpen(!open)}
              >
                <Label hexColor="#f8f8f8" fontWeight="600">
                  글쓰기
                </Label>
              </Button>
            </BtnWrapper>
          )}
        </StyledDiv>
        {open && (
          <SubmitForm
            handleClick={handleNoticeData}
            open={open}
            setOpen={setOpen}
          />
        )}
      </Container>
    </Fragment>
  );
};

export default CourseAnnouncement;
