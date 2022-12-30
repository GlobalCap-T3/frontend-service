import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom"
import styled from "styled-components"
import temp_profile from "../../images/temp_profile.png";

const exampleSearchedDiscussions = [
  {
    title:"searched title0",
    content:"searched content0",
    user_id:"0",
    discussion_id:"10",
  },
  {
    title:"searched title1",
    content:"searched content1",
    user_id:"1",
    discussion_id:"11",
  },
  {
    title:"searched title2",
    content:"searched content2",
    user_id:"2",
    discussion_id:"12",
  },
  {
    title:"searched title3",
    content:"searched content3",
    user_id:"3",
    discussion_id:"13",
  },
  {
    title:"searched title4",
    content:"searched content4",
    user_id:"4",
    discussion_id:"14",
  },
  {
    title:"searched title5",
    content:"searched content5",
    user_id:"5",
    discussion_id:"15",
  },
  {
    title:"searched title6",
    content:"searched content6",
    user_id:"6",
    discussion_id:"16",
  },
  {
    title:"searched title7",
    content:"searched content7",
    user_id:"7",
    discussion_id:"17",
  },
  {
    title:"searched title8",
    content:"searched content8",
    user_id:"8",
    discussion_id:"18",
  },
  {
    title:"searched title9",
    content:"searched content9",
    user_id:"9",
    discussion_id:"19",
  },
];

const Sidebar = styled.div`
  width: 25%;
  min-width: 150px;
  max-width: 300px;
  height: 100%;
  overflow: auto;
  padding 0px 15px 10px 15px;
  box-shadow: 5px 5px 5px -5px grey;
`;

const SearchbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const SearchedContainer = styled.ul`
  list-style-type: none;
`;

const SearchedItem = styled.li`
  height: 90px;
  padding: 5px 0 5px 0;
  margin-bottom: 5px;
  font-size: 15px;
  cursor: pointer;
  &:hover{
    background-color: white;
  }
`;

export default function SearchSidebar(props) { // props : onDiscussionClicked
  const navigate = useNavigate();
  const [currentChannel, setCurrentChannel] = useState(props.currentChannel); // Information, Published Paper, Following, Notes/Documents, Message
  const [profileImage, setProfileImage] = useState(props.profileImage); // profile pic src
  const [searchedDiscussions, setSearchedDiscussions] = useState([]);

  const getSearchedDiscussion = async() => {
    // (need) code for fetching all searched discussions

    // under is temp code
    let tempSearchedDiscussions = searchedDiscussions;
    tempSearchedDiscussions = exampleSearchedDiscussions;
    setSearchedDiscussions(tempSearchedDiscussions);
  };


  const onSearchClicked = (e) => {
    console.log("search discussion with keyword ", e.target);
    getSearchedDiscussion();
  };

  const onDiscussionClicked = (e, key) => {
    console.log("key is ", key);
    navigate(`/discussion/${key}`);
  };

  const onPageButtonClicked = (e) => {
    console.log("current page is ");
    console.log("changing page is ");
    // code to change to next/previous page in the searched discussions
  };

  return (
    <Sidebar>
      <SearchbarContainer> {/* search bar*/}
        <button onClick={onSearchClicked}>Search</button>
      </SearchbarContainer>
      <div> {/* searched discussion list (pagination by 10) */}
        <SearchedContainer>
          {searchedDiscussions.map(function(value, index){ // (need) pagination
            return (
              <SearchedItem key={index} style={{"border":"5px solid black"}} onClick={e => onDiscussionClicked(e, value.discussion_id)}>
                <div>Title: {value.title}</div>
                <div>User ID: {value.user_id}</div>
              </SearchedItem>
            )
          })}
        </SearchedContainer>
      </div>
    </Sidebar>
  );
}