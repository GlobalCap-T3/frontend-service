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

const BackgroundImgContainer = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: grey;
`

const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Name = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const EditBtn = styled.button`
  background-color: skyblue;
  border-radius: 25px;
  padding: 0 15px 0 15px;
  min-height: 20px;
  max-height: 35px;
  cursor: pointer;
  &:hover{
    background-color: darkblue;
    color:white;
  }
`;

const Infos = styled.div`
  display: flex;
`;

const SectionTitle = styled.div`
  display: flex;
  align-content: flex-start;
  color: grey;
  font-size: 24px;
`;

const SectionDivider = styled.hr`
  border-top: 3px solid #bbb;
  border-radius: 10px;
`

const LeftInfo = styled.div`
  display: block;
  width: 50%;
  padding: 10px 20px 10px 20px;
`;

const Content = styled.div`
  color: black;
  display: flex;
  align-content: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
`;

const General = styled.div`
  margin-bottom: 30px;
`;

const PageInformation = styled.div`

`;

const PageIntroduction = styled.div`
  width: 50%;
  padding: 10px 20px 10px 20px;
`;

export default function Information(props) {
  const [profileInfo, setProfileInfo] = useState({
    category: "",
    first_name: "",
    last_name: "",
    email: "",
    joinDate: ""
  });

  useEffect(() => {
    setProfileInfo(props.profileInfo);
  }, []);

  const onEditClicked = (e) => {
    // (need) code for following person
    console.log("edit profile clicked");
  }

  return (
    <Container>
      <BackgroundImgContainer> {/* background picture*/}
        <div>
          Background Image
        </div>
      </BackgroundImgContainer>
      <InfoContainer> {/* profile menu (Information, Published Paper, Following) */}

        <NameContainer>
          <Name>{profileInfo.first_name} {profileInfo.last_name}</Name>
          <EditBtn onClick={onEditClicked}>Edit Profile</EditBtn> {/* (need) make the button edit profile */}
        </NameContainer>

        <SectionTitle>Information</SectionTitle>
        <Infos>
          <LeftInfo>

            <General>
              <SectionTitle>General</SectionTitle>
              <SectionDivider />
              <Content>Field:&nbsp;&nbsp;{profileInfo.category}</Content>
              <Content>Email:&nbsp;{profileInfo.email}</Content>
            </General>

            <PageInformation>
              <SectionTitle>Page Information</SectionTitle>
              <SectionDivider />
              <Content>Join Date: {profileInfo.joinDate}</Content>
              <Content>Modify paper type</Content>
              <Content>Revised Goal</Content>
            </PageInformation>

          </LeftInfo>

          <PageIntroduction>
            <SectionTitle>Page Introduction</SectionTitle>
            <SectionDivider />
            <Content>Write something to introduce yourself..!</Content>
          </PageIntroduction>

        </Infos>

      </InfoContainer>
    </Container>
  );
}