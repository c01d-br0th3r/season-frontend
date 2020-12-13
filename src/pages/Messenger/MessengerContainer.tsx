import React, { useState, useEffect } from "react";
import MessengerPresenter from "./MessengerPresenter";
import SendBird from "sendbird";
import { RouteComponentProps } from "react-router-dom";

const MessengerContainer: React.FC<RouteComponentProps> = ({ match }) => {
  const [groupChannels, setGroupChannels] = useState<any>([]);
  const [messages, setMessages] = useState<any>([]);
  const sb = new SendBird({ appId: "BC800848-92F0-4401-B35C-FEEFE13184AA" });
  const channelHandler = new sb.ChannelHandler();
  channelHandler.onMessageReceived = function (channel, message) {
    let c = groupChannels;
    c = c.filter((item: any) => item.url !== channel.url);
    c.unshift(channel);
    setGroupChannels(c);
    console.log(message);
    setMessages((msg: any) => [...msg, message]);
  };
  sb.addChannelHandler("UNIQUE_HANDLER_ID", channelHandler);
  useEffect(() => {
    sb.connect("17011550", (user, error) => {
      if (error) {
        console.log(error);
      } else {
        sb.updateCurrentUserInfo("이찬형", "", (user, error) => {
          if (error) {
            console.log(error);
          } else {
            console.log(user);
          }
        });
        let list = sb.GroupChannel.createMyGroupChannelListQuery();
        list.includeEmpty = true;
        list.order = "latest_last_message";
        list.limit = 20;
        if (list.hasNext) {
          list.next((GroupChannels, error) => {
            if (error) {
              return;
            }
            setGroupChannels(GroupChannels);
          });
        }
      }
    });
  }, []);
  const openChannel = (url: string) => {
    sb.GroupChannel.getChannel(url, (groupChannel, error) => {
      if (error) return;
      const mPrevMessageListQuery = groupChannel.createPreviousMessageListQuery();
      mPrevMessageListQuery.load(30, true, (messages, error) => {
        if (error) return;
        setMessages(messages);
      });
    });
  };
  const sendMessage = (url: string, msg: string, data: string) => {
    sb.GroupChannel.getChannel(url, (groupChannel, error) => {
      if (error) return;
      groupChannel.sendUserMessage(msg, (userMessage, error) => {
        if (error) {
          console.log(error);
          return;
        }
        openChannel(url);
      });
    });
  };
  const markAsRead = (url: string) => {
    sb.GroupChannel.getChannel(url, (groupChannel, error) => {
      if (error) return;
      groupChannel.markAsRead();
    });
  };
  console.log(messages);
  return (
    <MessengerPresenter
      match={match}
      groupChannels={groupChannels}
      openChannel={openChannel}
      sendMessage={sendMessage}
      markAsRead={markAsRead}
      userId={"17011550"}
      messages={messages}
      setMessages={setMessages}
    />
  );
};

export default MessengerContainer;
