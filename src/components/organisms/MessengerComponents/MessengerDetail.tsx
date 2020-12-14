import React, { useState, useEffect, Fragment } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { Button, Image, Input, Label } from "../../atoms";

interface IMatch {
  id: string;
}

interface IProps {
  groupChannels: any[];
  openChannel: (url: string) => void;
  sendMessage: (url: string, msg: string, data: string) => void;
  markAsRead: (url: string) => void;
  userId: string;
  messages: any[];
  setMessages: any;
}

const Container = styled.div`
  width: 100%;
  padding: 24px;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  max-width: 1080px;
  min-width: 400px;
  border: 1px solid #c2c2c2;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  max-height: 768px;
  overflow: scroll;
`;

const InitDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 12px;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ImageDiv = styled.div<{ status: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.status ? "flex-end" : "flex-start")};
  align-items: ${(props) => (props.status ? "flex-end" : "flex-start")};
`;

const Content = styled.div<{ status: boolean }>`
  padding: 12px;
  border: 1px solid #d1768a;
  font-weight: 500;
  border-radius: 8px;
  margin-right: ${(props) => !props.status && "8px"};
  margin-left: ${(props) => props.status && "8px"};
  font-size: 15px;
`;

const InfoWrapper = styled.div<{ status: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.status ? "row-reverse" : "row")};
  align-items: flex-end;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const MessengerDetail: React.FC<RouteComponentProps<IMatch> & IProps> = ({
  match,
  openChannel,
  groupChannels,
  sendMessage,
  markAsRead,
  userId,
  messages,
  setMessages,
}) => {
  const [term, setTerm] = useState<string | null>(null);
  const getLastMsgDate = (value: number) => {
    const today = new Date();
    const timeValue = new Date(value);

    let hours: any = timeValue.getHours();
    hours = hours >= 10 ? hours : "0" + hours;
    let minutes: number | string = timeValue.getMinutes();
    minutes = minutes >= 10 ? minutes : "0" + minutes;

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      if (hours < 12) {
        return `오전 ${hours}:${minutes}`;
      } else if (hours > 12) {
        return `오후 ${hours - 12}:${minutes}`;
      } else {
        return `오후 12:${minutes}`;
      }
    }
    let year = timeValue.getFullYear(); //yyyy
    let month: any = 1 + timeValue.getMonth(); //M
    month = month >= 10 ? month : "0" + month; //month 두자리로 저장
    let day: any = timeValue.getDate(); //d
    day = day >= 10 ? day : "0" + day;

    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    const id = parseInt(match.params.id);
    const target = groupChannels[id];
    openChannel(target.url);
    markAsRead(target.url);
    const inputNode = document.querySelector("input") as HTMLInputElement;
    const pressEnterEvent = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        console.log("HIT");
        handleSubmit();
      }
    };
    inputNode.addEventListener("keyup", pressEnterEvent);
    return () => {
      setMessages([]);
      inputNode.removeEventListener("keyup", pressEnterEvent);
    };
  }, []);
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTerm(target.value);
  };
  const handleSubmit = () => {
    const id = parseInt(match.params.id);
    const target = groupChannels[id];
    const inputNode = document.querySelector("input") as HTMLInputElement;
    if (inputNode.value.length !== 0) {
      sendMessage(target.url, inputNode.value, "");
      inputNode.value = "";
      setTerm(null);
    }
  };
  return (
    <Container>
      <StyledDiv>
        {messages.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <Fragment>
            {messages.map((msg) =>
              msg._sender ? (
                <List key={msg.createdAt}>
                  <ImageDiv
                    status={msg._sender && msg._sender.userId === userId}
                  >
                    <Label margin="0 0 8px 0" fontWeight="500">
                      {msg._sender && msg._sender.nickname}
                    </Label>
                  </ImageDiv>
                  <InfoWrapper
                    status={msg._sender && msg._sender.userId === userId}
                  >
                    <Content
                      status={msg._sender && msg._sender.userId === userId}
                    >
                      {msg.message}
                    </Content>
                    <Label fontWeight="500" size="14px" hexColor="#727272">
                      {getLastMsgDate(msg.createdAt)}
                    </Label>
                  </InfoWrapper>
                </List>
              ) : (
                <InitDiv>{msg.message}</InitDiv>
              )
            )}
          </Fragment>
        )}
      </StyledDiv>
      <StyledDiv>
        <InputWrapper>
          <Input
            placeholder="메시지를 입력하세요."
            handleChange={handleChange}
          />
          <Button
            width="68px"
            margin="0 0 0 12px"
            color="white b_red1"
            handleClick={handleSubmit}
          >
            <Label fontWeight="600" size="16px">
              전송
            </Label>
          </Button>
        </InputWrapper>
      </StyledDiv>
    </Container>
  );
};

export default MessengerDetail;
