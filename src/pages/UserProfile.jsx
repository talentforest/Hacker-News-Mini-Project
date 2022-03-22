import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { userSelectFields } from "../util/selectFields";
import { mapTime } from "../util/mapTime";
import UserSubmission from "../DetailPage/UserSubmission";

const Wrapper = styled.section`
  width: 390px;
  background-color: ${(props) => props.theme.backgroundLightGrayColor};
  padding: 29px 20px 32px;
`;
const Userprofile = styled.div`
  padding: 24px 16px;
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05), 0px 6px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
const Username = styled.h5`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  height: 32px;
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;
const UserInfo = styled.div`
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.textColor};
`;
const Info = styled.span`
  height: 15px;
  width: 42px;
  padding: 2px 0 0 2px;
  border: 1px solid;
  border-radius: 8px;
  color: ${(props) => props.theme.svelteOrangeColor};
  margin-right: 5px;
  &:last-child {
    margin-left: 10px;
  }
`;
const Introduction = styled.p`
  color: ${(props) => props.theme.commentColor};
  line-height: 24px;
  font-size: 14px;
  word-break: break-all;
`;
const SortBtn = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 40px;
  border-radius: 2222px;
  margin: 32px 0 20px;
  background-color: ${(props) => props.theme.containerColor};
`;
const Btn = styled.button`
  margin: 0 3px;
  width: 114px;
  height: 32px;
  border: none;
  border-radius: 16px;
  background-color: transparent;
  color: #b7b7b7;
  cursor: pointer;
  &:first-child {
    background-color: #ed702d;
    color: #fff;
  }
`;

export default function UserProfile() {
  const location = useLocation();
  const username = location.pathname.split("/userprofile/")[1];

  // username으로 유저데이터 얻기
  const [userData, setUserData] = useState([]);
  // 유저데이터를 얻고 submitted데이터 얻기

  // username으로 유저데이터 얻기
  const getUserData = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/user/${username}.json`)
      .then(({ data }) => data && userSelectFields(data));
    return result;
  };

  useEffect(() => {
    getUserData().then((data) => data && setUserData(data));
  }, []);

  const submittedIds = userData.submitted;

  return (
    <>
      <Wrapper>
        <Userprofile>
          <Username>{userData.id}</Username>
          <UserInfo>
            <Info>Joined</Info>
            {mapTime(userData.created)}
            <Info>Karma</Info>
            {userData.karma}
          </UserInfo>
          <Introduction dangerouslySetInnerHTML={{ __html: userData.about }} />
        </Userprofile>
        <SortBtn>
          <Btn>submissions</Btn>
          <Btn>comments</Btn>
          <Btn>favorites</Btn>
        </SortBtn>

        {submittedIds?.slice(0, 50).map((submittedId) => (
          <UserSubmission key={submittedId} submittedId={submittedId} />
        ))}
      </Wrapper>
    </>
  );
}
