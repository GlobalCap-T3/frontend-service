import React, { useState, useEffect } from "react";
import styled from "styled-components"

const Sidebar = styled.div`
  width: 200px;
  height: 100%;
  background-color: white;
`;

const Menu = styled.ul`
  list-style-type: none;
  cursor: pointer;
`;

const Word = styled.span`
  color: black;
`;

export default function LeftBar(props) {
  const [currentChannel, setCurrentChannel] = useState(props.currentChannel); // profileInfo, pubilishedPaper, following
  const [profileImage, setProfileImage] = useState(props.profileImage);

  useEffect(() => {
    setCurrentChannel(props.currentChannel);
  }, [props.currentChannel]);

  useEffect(() => {
    setProfileImage(props.profileImage);
  }, [props.profileImage]);

  const onMenuClick = (e) => {
    let key = e.target.key;
    if (e.target.textContent === "Profile Information") props.setCurrentChannel("profileInfo");
    else if (e.target.textContent === "Published Paper") props.setCurrentChannel("publishedPaper");
    else if (e.target.textContent === "Following") props.setCurrentChannel("following");
  }

  return (
    <Sidebar>
      <div> {/* profile picture*/}
        <div>
          Profile Image
        </div>
      </div>
      <div> {/* profile menu (Information, Published Paper, Following) */}
        <Menu>
          <li onClick={onMenuClick}>
            <Word>Profile Information</Word>
          </li>
          <li onClick={onMenuClick}>
            <Word>Published Paper</Word>
          </li>
          <li onClick={onMenuClick}>
            <Word>Following</Word>
          </li>
        </Menu>
      </div>
    </Sidebar>
  );
}