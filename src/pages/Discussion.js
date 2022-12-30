import { useEffect, useState } from "react"
import { Link, useNavigate, Navigate, useParams } from "react-router-dom"
import authenClient from "../clients/authenClient"
import { useUserContext } from "../context/user"
import SearchSidebar from "../components/discussion/SearchSidebar"
import Information from "../components/profile/Information"
import Modal from "../components/modal/Modal"
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
  padding: 0 20px 0 20px;
`;

const EventsSidebar = styled.div`
  width: 25%;
  min-width: 150px;
  max-width: 300px;
  height: 100%;
  background-color: lightgrey;
`;

const DiscussionPreview = styled.div`
  min-width: 400px;
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

const NewPostPreview = styled.div`
  display: flex;
  width: 400px;
  height: auto;
  height: 50px;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: #737373;
`
const NewPostButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  color: #737373;
  font-size: 15px;
  font-weight: bold;
  visibility: ${(props) => (props.invisible && 'hidden')};
  pointer-events: ${(props) => (props.invisible && 'none')};
  cursor: pointer;
  &:hover{
    background-color: lightgrey;
  }
`
const NewPostTitle= styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`
const NewPostModalForm = styled.form`
  height: 100%;
  display: block;
`
const NewPostLabel = styled.label`
  display: flex;
  width: 100%;
  vertical-align: top;
`
const NewPostInput = styled.input`
  width: 100%;
  border: 1px black solid;
  padding-bottom: 5px;
`
const NewPostTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  border: 1px black solid;
  margin-top: 10px;
  margin-bottom: 10px;
`
const NewPostTable = styled.table`
  width: 100%;
`
const NewPostTbody = styled.tbody`
  width: 100%;
`
const NewPostSubmit = styled.input`
  padding: 5px 10px 3px 10px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`


export default function Discussion() {

  const navigate = useNavigate();
  const params = useParams(); // {discussionId: '123'}

  const [recentDiscussions, setRecentDiscussions] = useState([]);
  const [newPostModalVisible, setNewPostModalVisible] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");


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

  const openModal = () => {
    setNewPostModalVisible(true)
  }
  const closeModal = () => {
    setNewPostModalVisible(false)
  }

  const handleModalInput = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    if (name === "title") {
      setNewPostTitle(value);
    }
    else if (name === "content") {
      setNewPostContent(value);
    }
    console.log("value is", value);
  }

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
          <NewPostPreview> 
            <NewPostButton onClick={openModal}>+</NewPostButton>
            {
              newPostModalVisible && <Modal
                visible={newPostModalVisible}
                closable={true}
                maskClosable={true}
                onClose={closeModal}>
                  <NewPostModalForm>
                    <NewPostTitle>New Post</NewPostTitle>
                    <NewPostTable>
                      <NewPostTbody>
                        <tr>
                          <td>Title</td>
                          <td><NewPostInput type="text" name="title" value={newPostTitle} onChange={handleModalInput}/></td>
                        </tr>
                        <tr>
                          <td>Content</td>
                          <td><NewPostTextarea name="content" value={newPostContent} onChange={handleModalInput} /></td>
                        </tr>
                      </NewPostTbody>
                    </NewPostTable>
                    <NewPostSubmit type="submit" value="Submit" />
                  </NewPostModalForm>
                </Modal>
            }
            <div>Make new Post</div>
            <NewPostButton invisible={true}></NewPostButton>  
          </NewPostPreview>

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