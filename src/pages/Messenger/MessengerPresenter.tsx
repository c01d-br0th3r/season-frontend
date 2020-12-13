import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import MessengerDetail from "../../components/organisms/MessengerComponents/MessengerDetail";
import MessengerList from "../../components/organisms/MessengerComponents/MessengerList";

interface IProps {
  groupChannels: any[];
  openChannel: (url: string) => void;
  sendMessage: (url: string, msg: string, data: string) => void;
  markAsRead: (url: string) => void;
  match: any;
  userId: string;
  messages: any[];
  setMessages: any;
}

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  padding: 20px;
  width: 100%;
`;

const MessengerPresenter: React.FC<IProps> = ({
  groupChannels,
  openChannel,
  match,
  sendMessage,
  markAsRead,
  userId,
  messages,
  setMessages,
}) => {
  return (
    <Container>
      <Content>
        <Switch>
          <Route
            exact
            path={match.path}
            render={(props) => (
              <MessengerList {...props} groupChannels={groupChannels} />
            )}
          />
          <Route
            path={`${match.path}/:id`}
            render={(props) => (
              <MessengerDetail
                {...props}
                groupChannels={groupChannels}
                openChannel={openChannel}
                sendMessage={sendMessage}
                markAsRead={markAsRead}
                userId={userId}
                messages={messages}
                setMessages={setMessages}
              />
            )}
          />
        </Switch>
      </Content>
    </Container>
  );
};

export default MessengerPresenter;
