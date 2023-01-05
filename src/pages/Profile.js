import { useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import authenClient from "../clients/authenClient"
import { useUserContext } from "../context/user"
import LeftBar from "../components/profile/LeftBar"
import Information from "../components/profile/Information"
import Following from "../components/profile/Following"
import Message from "../components/profile/Message"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const InnerContainer = styled.div`
  display: block;
  width: 100%;
  padding: 0 10px 0 10px;
`;

export default function Profile() {
  const navigate = useNavigate();
  // const { tokenValid, setTokenValid } = useUserContext();
  const [tokenValid, setTokenValid] = useState(true); // for dev only (change to userContext later)

  const [currentChannel, setCurrentChannel] = useState("Information"); // Information, Published Paper, Following, Notes/Documents, Message

  const [profileImage, setProfileImage] = useState("");
  const [profileInfo, setProfileInfo] = useState({
    category: "",
    first_name: "",
    last_name: "",
    email: "",
    joinDate: ""
  });

  const [followInfo, setFollowInfo] = useState({
    followingPapers: [],
    followingDiscussions: [],
    followingUsers: []
  });

  const getProfileImage = async() => {
    // (need) code for fetching user profile image

    // under is temp code
    setProfileImage("");
  }

  const getProfileInfo = async() => {
    // code for fetching user profile information needed

    // under is temp code
    let tempProfileInfo = profileInfo;
    tempProfileInfo.category = "Math";
    tempProfileInfo.first_name = "Yunbo";
    tempProfileInfo.last_name = "Shim";
    tempProfileInfo.email = "test@gmail.com";
    tempProfileInfo.joinDate = "2022-12-10T13:45:00.000Z";
    setProfileInfo(tempProfileInfo);
  };

  const getPublishedPaper = async() => {}

  const getFollowing = async() => {
    // TODO:
    // temp code
    let temp = followInfo;
    temp.followingPapers = ["Development of a Machine Learning Model for Sonographic Assessment of Gestational Age", "Device for Dual Ultrasound and Dry Needling Trigger Points Treatment", "Synthetic Aperture Radar (SAR) Meets Deep Learning"];
    temp.followingDiscussions = ["Can somebody explain how SVM works?", "Researcher Job Opportunity", "What are people's thoughts about the ethics of AI in the future?", "Interdisciplinary Study of Molecular Biology and Computer Science"];
    temp.followingUsers = ["Chaewon Kwak", "Donghee Yoon", "Minh Phuong Phan", "Yujun Shen"];
    setFollowInfo(temp);
  }

  useEffect(() => {
    getProfileImage();
  }, []);

  useEffect(() => {
    if (currentChannel === "Information") getProfileInfo();
    else if (currentChannel === "Published Paper") getPublishedPaper();
    else if (currentChannel === "Following") getFollowing();
    else if (currentChannel === "Notes/Documents") getFollowing();
    else if (currentChannel === "Message") getFollowing();
  }, [currentChannel]);


  return (tokenValid) ? ( // Check whether user is logged in
  <Container>
    <LeftBar currentChannel={currentChannel} setCurrentChannel={setCurrentChannel} profileImage={profileImage}/>
    {(currentChannel==="Information") ? (
      <InnerContainer>
        <Information profileInfo={profileInfo} setProfileInfo={setProfileInfo}/>
      </InnerContainer>
    ) : (
    (currentChannel==="Published Paper") ? (
      <InnerContainer>
        Published Paper
      </InnerContainer>
    ) : (
    (currentChannel==="Following") ? (
      <InnerContainer>
        <Following followInfo={followInfo} setFollowInfo={setFollowInfo}/>
      </InnerContainer>
    ) : (
    (currentChannel==="Notes/Documents") ? (
      <InnerContainer>
        Notes/Documents
      </InnerContainer>
    ) : (
      <InnerContainer>
        <Message />
      </InnerContainer>
    )
    )
    )
    )}
  </Container>
  ) : (
    // Navigate to login page if the user is not logged in
    <Navigate to="/login" />
  );
}