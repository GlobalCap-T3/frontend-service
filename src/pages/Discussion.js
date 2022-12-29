import { useEffect, useState } from "react"
import { Link, useNavigate, Navigate, useParams } from "react-router-dom"
import authenClient from "../clients/authenClient"
import { useUserContext } from "../context/user"
import SearchSidebar from "../components/discussion/SearchSidebar"
import Information from "../components/profile/Information"
import styled from "styled-components"

const exampleRecentDiscussions = [
  {
    title:"title0",
    content:"content0",
    user_id:"0",
    discussion_id:"0",
  },
  {
    title:"title1",
    content:"content1",
    user_id:"1",
    discussion_id:"1",
  },
  {
    title:"title2",
    content:"content2",
    user_id:"2",
    discussion_id:"2",
  },
  {
    title:"title3",
    content:"content3",
    user_id:"3",
    discussion_id:"3",
  },
  {
    title:"title4",
    content:"content4",
    user_id:"4",
    discussion_id:"4",
  },
  {
    title:"title5",
    content:"content5",
    user_id:"5",
    discussion_id:"5",
  },
  {
    title:"title6",
    content:"content6",
    user_id:"6",
    discussion_id:"6",
  },
  {
    title:"title7",
    content:"content7",
    user_id:"7",
    discussion_id:"7",
  },
  {
    title:"title8",
    content:"content8",
    user_id:"8",
    discussion_id:"8",
  },
  {
    title:"title9",
    content:"content9",
    user_id:"9",
    discussion_id:"9",
  },
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: auto;
  min-height: 100%;
`;

const InnerContainer = styled.div`
  display: block;
  overflow: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 10px;
`;

const EventsSidebar = styled.div`
  width: 25%;
  min-width: 150px;
  max-width: 300px;
  height: 100%;
  background-color: lightgrey;
`;

const DiscussionPreview = styled.div`
  max-width: 800px;
  height: auto;
  min-height: 100px;
  max-height: 200px;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  color: white;
  background-color: #737373;
`



export default function Discussion() {
  const navigate = useNavigate();
  const params = useParams(); // {discussionId: '123'}

  const [recentDiscussions, setRecentDiscussions] = useState([]);


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
      <SearchSidebar onDiscussionClicked={onDiscussionClicked} />

      {/* If URL has a id, show the specific discussion */}
      {/* Recent discussions */}
      {(params.discussionId)?(
        <InnerContainer onClick={() => navigate(-1)} style={{"border":"5px solid black"}}>
          Discussion thread no.{params.discussionId}
          <div>
            back
          </div>
        </InnerContainer>
      ):(
        <InnerContainer>
          Main Discussion Page
          
          {/* Make new post */}
          <div> Make new Post </div>

          <div>
            Recent Discussions
          </div>
          {recentDiscussions.map(function(value, index){
            return (
              <DiscussionPreview key={index} onClick={e => onDiscussionClicked(e, value.discussion_id)}>
                <div>Title: {value.title}</div>
                <div>User ID: {value.user_id}</div>
                
                <div>Content: {value.content}</div>
              </DiscussionPreview>
            )
          })}          

        </InnerContainer>
      )}
      
      <EventsSidebar></EventsSidebar>

    </Container>
  );
}