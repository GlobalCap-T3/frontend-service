import { useEffect, useState } from "react"
import { Link, useNavigate, Navigate, useParams } from "react-router-dom"
import authenClient from "../clients/authenClient"
import { useUserContext } from "../context/user"
import LeftBar from "../components/profile/LeftBar"
import Information from "../components/profile/Information"
import styled from "styled-components"

const exampleRecentDiscussions = [
  {
    title:"title0",
    content:"content0",
    user_id:"0"
  },
  {
    title:"title1",
    content:"content1",
    user_id:"1"
  },
  {
    title:"title2",
    content:"content2",
    user_id:"2"
  },
  {
    title:"title3",
    content:"content3",
    user_id:"3"
  },
  {
    title:"title4",
    content:"content4",
    user_id:"4"
  },
  {
    title:"title5",
    content:"content5",
    user_id:"5"
  },
  {
    title:"title6",
    content:"content6",
    user_id:"6"
  },
  {
    title:"title7",
    content:"content7",
    user_id:"7"
  },
  {
    title:"title8",
    content:"content8",
    user_id:"8"
  },
  {
    title:"title9",
    content:"content9",
    user_id:"9"
  },
];

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const InnerContainer = styled.div`
  display: block;
  width: 100%;
  padding: 0 10px 0 10px;
`;

export default function Discussion() {
  const navigate = useNavigate();
  const params = useParams(); // {discussionId: '123'}

  const [recentDiscussions, setRecentDiscussions] = useState([]); // Information, Published Paper, Following, Notes/Documents, Message


  const getDiscussion = async() => {
    // code for fetching recent Nth ~ Mth number of discussion
    // 1st ~ 10th in the default

    // under is temp code
    let tempRecentDiscussions = recentDiscussions;
    tempRecentDiscussions = exampleRecentDiscussions;
    setRecentDiscussions(tempRecentDiscussions);
  };


  useEffect(() => {
    getDiscussion();
  }, []);

  const onDiscussionClicked = (e, key) => {
    console.log("key is ", key);
    navigate(`/discussion/${key}`);
  };

  return ( 
    <Container>
      {/* Left side bar for discussion search */}

      {/* If URL has a id, show the specific discussion */}

      {/* Make new post */}
      {/* Recent discussions */}
      {(params.discussionId)?(
        <div onClick={() => navigate(-1)} style={{"border":"5px solid black"}}>
          Discussion thread no.{params.discussionId}
          <div>
            back
          </div>
        </div>
      ):(
        <div style={{"display":"block"}}>
          Main Discussion Page
          <div>
            Recent Discussions
          </div>
          <></>
          {recentDiscussions.map(function(value, index){
            return (
              <div key={index} style={{"border":"5px solid black"}} onClick={e => onDiscussionClicked(e, index)}>
                Title: {recentDiscussions[index].title}
                Content: {recentDiscussions[index].content}
                User ID: {recentDiscussions[index].user_id}
              </div>
            )
          })}
          

        </div>
      )}

    </Container>
  );
}