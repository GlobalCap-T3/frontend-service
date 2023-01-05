import React, { useState, useEffect } from "react";
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const UnfollowBtn = styled.button`
  border-style: solid;
  border-color: #d02437;
  color: #d02437;
  font-size: 12px;
  border-radius: 15px;
  padding: 0 15px 0 15px;
  min-height: 20px;
  max-height: 35px;
  cursor: pointer;
  &:hover{
    background-color: #d02437;
    color:white;
  }
`;

const Infos = styled.div`
  display: flex;
  background-color: #272727;
`;

const SectionTitle = styled.div`
  text-align: center;
  padding: 25px;
  display: block;
  font-size: 24px;
`;

const SectionDivider = styled.hr`
  border-top: 3px solid #bbb;
  border-radius: 10px;
`

const LeftInfo = styled.div`
  display: block;
  background-color: white;
  border-radius: 50px;
  width: 30%;
  min-height: 85vh;
`;

const RightInfo = styled.div`
    background-color: #272727;
    display: block;
    width: 70%;
    min-height: 85vh;
`;

const ChatList = styled.ul`
  padding: 20px 10px 10px 10px;
`;

const ChatItem = styled.li`
  display: flex;
  margin-top: 5px;
  height: 90px;
  &:hover{
    background-color: lightgrey;
  }
`;

const DefaultChatImg = styled.div`
  background-color: #6d3fe6;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 15px 20px;
`;

const ChatName = styled.li`
  display: flex;
  align-content: flex-start;
  padding: 20px 10px 10px 10px;
`;

const ChatPreview = styled.li`
  padding: 0px 10px 10px 10px;
  display: flex;
  align-content: flex-start;
  width: 250px;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatDetail = styled.div`
  margin: 50px;
  border-radius: 25px;
  background-color: #6fa4e4;
  min-height: 80vh;
`;

const ChatMessage = styled.ul`
  padding: 20px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style-type: none;
`;

const UserChatMessage = styled.li`
  margin-top: 15px;
  margin-right: 5px;
  border-radius: 25px;
  background-color: #356dea;
  padding: 20px;
  align-self: flex-end;
  position: relative;
`;

const OtherChatMessage = styled.li`
  margin-top: 15px;
  margin-left: 5px;
  border-radius: 25px;
  background-color: #f8f8f8;
  padding: 20px;
  position: relative;
`;

const MessageInput = styled.input`
    padding: 15px 20px;
    margin-bottom: 0px;
    margin-top: auto;
    width: 100%;
    align-self: flex-end;
`;


// A temp fake chatlist for frontend design
const initList = [
    { 
      chatroomID: 1,
      chatName: "First Group Chat Ever!",
      chatMessages: ["Hello!", "World!"]
    },
    { 
      chatroomID: 2,
      chatName: "Climate Change Project",
      chatMessages: ["Climate change is very bad", "We need to take action", "We can start with something small"]
    },
    { 
      chatroomID: 3,
      chatName: "Machine Learning Study Group",
      chatMessages: ["Can anyone explain SVMs to me? I'm really having trouble..."]
    },
];



export default function Message() {

  const [chatList, setChatList] = useState(initList);
  const [currentChatID, setCurrentChatID] = useState(-1);
  const [currentChatName, setCurrentChatName] = useState("");
  const [currentChatMessages, setCurrentChatMessages] = useState([]);

  useEffect(() => {
  }, []);


  const onChatroomClicked = id => (e) => {
    setCurrentChatID(id);
    var chat = chatList.find(obj => { return obj.chatroomID===id});
    setCurrentChatName(chat.chatName);
    setCurrentChatMessages(chat.chatMessages);
  }

  return (
    <Container>
      
      <InfoContainer> {/* profile menu (Information, Published Paper, Following) */}

        <Infos>
          <LeftInfo>
            <SectionTitle>Chat</SectionTitle>
            <SectionDivider />

            <ChatList>                
                {chatList.map((chat) => (
                    <ChatItem selected={currentChatID===chat.chatroomID?true:false} onClick={onChatroomClicked(chat.chatroomID)}>
                        <DefaultChatImg></DefaultChatImg>
                        <ul>
                            <ChatName>{chat.chatName}</ChatName>
                            <ChatPreview>Me: {chat.chatMessages.at(-1)}</ChatPreview>
                        </ul>
                    </ChatItem>
                ))}                 
            </ChatList>

          </LeftInfo>

          <RightInfo>
            <ChatDetail>

                <ChatList>
                    <ChatItem>
                        <DefaultChatImg></DefaultChatImg>
                        <ul>
                            <ChatName>{currentChatName}</ChatName>
                        </ul>
                    </ChatItem>
                </ChatList>

                <ChatMessage>
                    {/* TODO:
                    Now temporarily make the message alternate for two users based on even/odd index. */}
                    {currentChatMessages.map((msg, i) => (
                        i % 2 ? (
                            <UserChatMessage>{msg}</UserChatMessage>
                        ) : (
                            <OtherChatMessage>{msg}</OtherChatMessage>
                        )
                    ))}         

                    {/* <MessageInput type="text"/>  */}
                </ChatMessage>

            </ChatDetail>
          </RightInfo>

        </Infos>

      </InfoContainer>
    </Container>
  );
}