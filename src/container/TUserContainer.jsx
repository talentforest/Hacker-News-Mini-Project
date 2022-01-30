import { useState, useEffect } from "react";
import styled from "styled-components";
import { TUser } from "../homeComponents/TUser";
// import { getUserIds } from "../api/hnApi";

// 유저 데이터 받아오는 법
// const baseUrl = https://hacker-news.firebaseio.com/v0/user/
// const userId = {story.by}.json

const Container = styled.div`
  /* width: 1244px; */
  height: 222px;
  overflow: scroll;
  padding: 20px 20px 56px 20px;
  background-color: #fff;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;

export const TUserContainer = () => {
  // 유저 아이디 목록값 상태관리
  const [userIds, setUserIds] = useState([]);

  // useEffect(() => {
  //   getUserIds().then((data) => setUserIds(data));
  // }, []);

  return (
    <Container>
      <TUser />
    </Container>
  );
};
