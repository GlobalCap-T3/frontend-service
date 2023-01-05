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

const FollowItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
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
`;

const SectionTitle = styled.div`
  display: flex;
  align-content: flex-start;
  color: #393939;
  font-size: 24px;
  padding: 20px;
`;

const SectionDivider = styled.hr`
  border-top: 3px solid #bbb;
  border-radius: 10px;
`

const LeftInfo = styled.div`
  margin: 20px 5px 5px 5px;
  display: block;
  background-color: #EBEBEB;
  border-radius: 25px;
  width: 30%;
  padding: 15px 15px 10px 20px;
`;

const RightInfo = styled.div`
    margin: 20px 5px 5px 5px;
    display: block;
    width: 70%;
    padding: 15px 15px 0px 20px;
`;

const FollowingPapers = styled.div`
  margin-bottom: 30px;
`;

const FollowingDiscussions = styled.div`

`;

const FollowingUsers = styled.div`

`;


export default function Following(props) {
//   const [followInfo, setFollowInfo] = useState({
//     followingPapers: [],
//     followingDiscussions: [],
//     followingUsers: []
//   });

  const [followingPapers, setFollowingPapers] = useState([]);
  const [followingDiscussions, setFollowingDiscussions] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);

  useEffect(() => {
    //setFollowInfo(props.followInfo);
    setFollowingPapers(props.followInfo.followingPapers);
    setFollowingDiscussions(props.followInfo.followingDiscussions);
    setFollowingUsers(props.followInfo.followingUsers);
  }, []);

  const onUnfollowPaperClicked = i => (e) => {
    let temp = [...followingPapers]
    temp.splice(i, 1);
    setFollowingPapers(temp);
  }

  const onUnfollowDiscussionClicked = i => (e) => {
    let temp = [...followingDiscussions]
    temp.splice(i, 1);
    setFollowingDiscussions(temp);
  }

  const onUnfollowUserClicked = i => (e) => {
    let temp = [...followingUsers]
    temp.splice(i, 1);
    setFollowingUsers(temp);
  }

  return (
    <Container>
      
      <InfoContainer> {/* profile menu (Information, Published Paper, Following) */}

        <SectionTitle>Following</SectionTitle>
        <Infos>
          <LeftInfo>

            <FollowingUsers>
                <SectionTitle>Following Users</SectionTitle>
                <SectionDivider />
                <ul>
                  {followingUsers.map((user, i) => (
                    <FollowItem key={i}>
                        <div>{user}</div>
                        <UnfollowBtn onClick={onUnfollowUserClicked(i)}>Unfollow</UnfollowBtn>
                    </FollowItem>
                  ))}
                </ul>     
            </FollowingUsers>

          </LeftInfo>

          <RightInfo>
            <FollowingPapers>
              <SectionTitle>Following Papers</SectionTitle>
              <SectionDivider />
              <ul>
                  {followingPapers.map((paper, i) => (
                    <FollowItem key={i}>
                        <div>{paper}</div>
                        <UnfollowBtn onClick={onUnfollowPaperClicked(i)}>Unfollow</UnfollowBtn>
                    </FollowItem>
                  ))}
              </ul>   
            </FollowingPapers>

            <FollowingDiscussions>
              <SectionTitle>Following Discussions</SectionTitle>
              <SectionDivider />
              <ul>
                  {followingDiscussions.map((discussion, i) => (
                    <FollowItem key={i}>
                        <div>{discussion}</div>
                        <UnfollowBtn onClick={onUnfollowDiscussionClicked(i)}>Unfollow</UnfollowBtn>
                    </FollowItem>
                  ))}
              </ul>     
            </FollowingDiscussions>
          </RightInfo>

        </Infos>

      </InfoContainer>
    </Container>
  );
}