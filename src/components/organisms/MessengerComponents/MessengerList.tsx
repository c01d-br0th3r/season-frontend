import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { Image, Label } from "../../atoms";

interface IProps {
  groupChannels: any[];
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
`;

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 16px;
`;

const Images = styled.div`
  margin-right: 24px;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BottomInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Alarm = styled.div<{ status: boolean }>`
  height: 24px;
  display: ${(props) => (props.status ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 16px;
  background-color: #dc143c;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

const MessengerList: React.FC<RouteComponentProps & IProps> = ({
  match,
  groupChannels,
}) => {
  console.log(groupChannels);

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
    if (betweenTime < 1) return "방금전";

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      if (hours < 12) {
        return `오전 ${hours}:${minutes}`;
      } else {
        return `오후 ${hours - 12}:${minutes}`;
      }
    }
    let year = timeValue.getFullYear(); //yyyy
    let month: any = 1 + timeValue.getMonth(); //M
    month = month >= 10 ? month : "0" + month; //month 두자리로 저장
    let day: any = timeValue.getDate(); //d
    day = day >= 10 ? day : "0" + day;

    return `${year}-${month}-${day}`;
  };
  return (
    <Container>
      <StyledDiv>
        {groupChannels.map((channel, idx) => (
          <Link key={idx} to={`${match.url}/${idx}`}>
            <List>
              <Images>
                <Image
                  width="60px"
                  height="60px"
                  src={channel.coverUrl}
                  alt="Img"
                  radius="30px"
                />
              </Images>
              <Contents>
                <TopInfo>
                  <NameWrapper>
                    <Label size="18px" fontWeight="600" margin="0 12px 0 0">
                      {channel.name}
                    </Label>
                    <Label fontWeight="500" hexColor="#929292">
                      {channel.memberCount}
                    </Label>
                  </NameWrapper>
                  <Label fontWeight="500" hexColor="#828282">
                    {getLastMsgDate(channel.lastMessage.createdAt)}
                  </Label>
                </TopInfo>
                <BottomInfo>
                  <Label fontWeight="500" hexColor="#727272">
                    {channel.lastMessage.message}
                  </Label>
                  <Alarm status={channel.unreadMessageCount === 0}>
                    {channel.unreadMessageCount}
                  </Alarm>
                </BottomInfo>
              </Contents>
            </List>
          </Link>
        ))}
      </StyledDiv>
    </Container>
  );
};

export default MessengerList;
