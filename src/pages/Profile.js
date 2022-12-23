import { useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import authenClient from "../clients/authenClient"
import { useUserContext } from "../context/user"
import LeftBar from "../components/profile/LeftBar"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`;
const InnerContainer = styled.div`
  display: block;
`;

export default function Profile() {
  const navigate = useNavigate();
  // const { tokenValid, setTokenValid } = useUserContext();
  const [ tokenValid, setTokenValid ] = useState(true); // for dev only (change to userContext later)

  const [currentChannel, setCurrentChannel] = useState("profileInfo"); // profileInfo, publishedPaper, following

  const [profileImage, setProfileImage] = useState("");
  const [profileInfo, setProfileInfo] = useState({
    category: "",
    name: "",
    email: "",
    joinDate: ""
  });

  const getProfileImage = async() => {
    // code for fetching user profile image

    // under is temp code
    setProfileImage("");
  }

  const getProfileInfo = async() => {
    // code for fetching user profile information needed

    // under is temp code
    let tempProfileInfo = profileInfo;
    tempProfileInfo.category = "math";
    tempProfileInfo.name = "Yunbo Shim";
    tempProfileInfo.email = "test@gmail.com";
    tempProfileInfo.joinDate = "2022-12-10T13:45:00.000Z";
    setProfileInfo(tempProfileInfo);
  };
  const getPublishedPaper = async() => {}
  const getFollowing = async() => {}

  useEffect(() => {
    getProfileImage();
  }, []);

  useEffect(() => {
    if (currentChannel === "profileInfo") getProfileInfo();
    else if (currentChannel === "publishedPaper") getPublishedPaper();
    else if (currentChannel === "following") getFollowing();
  }, [currentChannel]);


  return (tokenValid) ? ( // Check whether user is logged in
  <Container>
    <LeftBar currentChannel={currentChannel} setCurrentChannel={setCurrentChannel} profileImage={profileImage}/>
    {(currentChannel==="profileInfo") ? (
      <InnerContainer>Profile Information</InnerContainer>
    ) : (
    (currentChannel==="publishedPaper") ? (
      <InnerContainer>Publishsed Paper</InnerContainer>
    ) : (
      <InnerContainer>Following</InnerContainer>
    )
    )}
  </Container>
  ) : (
    // Navigate to login page if the user is not logged in
    <Navigate to="/login" />
  );
}