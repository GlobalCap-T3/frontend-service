import React, { useState, useEffect } from "react";
import styled from "styled-components"
import temp_profile from "../../images/temp_profile.png";

const Sidebar = styled.div`
  width: 200px;
  height: 100%;
  background-color: lightgrey;
`;

const ProfileImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const ProfileImg = styled.img`

`;

const Menu = styled.ul`
  list-style-type: none;
`;

const MenuList = styled.li`
  padding: 7px 0 7px 0;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? 'white' : 'none')};
  &:hover{
    background-color: white;
  }
`;

const Word = styled.span`
`;

export default function LeftBar(props) {
  const [currentChannel, setCurrentChannel] = useState(props.currentChannel); // Information, Published Paper, Following, Notes/Documents, Message
  const [profileImage, setProfileImage] = useState(props.profileImage); // profile pic src

  useEffect(() => {
    setCurrentChannel(props.currentChannel);
  }, [props.currentChannel]);

  useEffect(() => {
    setProfileImage(props.profileImage);
  }, [props.profileImage]);

  const onMenuClick = (e) => {
    if(currentChannel !== e.target.textContent){
      if (e.target.textContent === "Information") props.setCurrentChannel("Information");
      else if (e.target.textContent === "Published Paper") props.setCurrentChannel("Published Paper");
      else if (e.target.textContent === "Following") props.setCurrentChannel("Following");
      else if (e.target.textContent === "Notes/Documents") props.setCurrentChannel("Notes/Documents");
      else if (e.target.textContent === "Message") props.setCurrentChannel("Message");
    }
  }

  return (
    <Sidebar>
      <ProfileImgContainer> {/* profile picture*/}
        <ProfileImg src={temp_profile}/>
      </ProfileImgContainer>
      <div> {/* profile menu (Information, Published Paper, Following) */}
        <Menu>
          <MenuList selected={currentChannel==="Information"?true:false} onClick={onMenuClick}>
            Information
          </MenuList>
          <MenuList selected={currentChannel==="Published Paper"?true:false} onClick={onMenuClick}>
            Published Paper
          </MenuList>
          <MenuList selected={currentChannel==="Following"?true:false} onClick={onMenuClick}>
            Following
          </MenuList>
          <MenuList selected={currentChannel==="Notes/Documents"?true:false} onClick={onMenuClick}>
            Notes/Documents
          </MenuList>
          <MenuList selected={currentChannel==="Message"?true:false} onClick={onMenuClick}>
            Message
          </MenuList>
        </Menu>
      </div>
    </Sidebar>
  );
}