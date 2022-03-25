import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { mapTime } from "util/mapTime";
import { getUserData } from 'util/hnApi';
import UsersSubmission from "components/UserProfileDetails/UsersSubmission";
import styled from "styled-components";

export default function UserProfile() {
  const location = useLocation();
  const username = location.pathname.split("/userprofile/")[1];
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData(username, setUserData);
    return () => setUserData([]);
  }, [username]);

  const submittedIds = userData.submitted;

  return (
    <>
      <Wrapper>
        <UserInfo>
          <h5>{userData.id}</h5>
          <div>
            <span>Joined</span>
            {mapTime(userData.created)}
            <span>Karma</span>
            {userData.karma}
          </div>
          <p dangerouslySetInnerHTML={{ __html: userData.about }} />
        </UserInfo>
        <SortBtn>
          <button>submissions</button>
          <button>comments</button>
          <button>favorites</button>
        </SortBtn>
        {submittedIds?.slice(0, 50).map((submittedId) => (
          <UsersSubmission key={submittedId} submittedId={submittedId} />
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundLightGrayColor};
  padding: 29px 20px 32px;
  margin: 0 auto;
  min-height: 90vh;
`;
const UserInfo = styled.div`
  padding: 24px 16px;
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05), 0px 6px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  h5 {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    height: 32px;
    font-size: 22px;
    font-weight: 700;
    color: ${(props) => props.theme.textColor};
  }
  div {
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${(props) => props.theme.textColor};
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 18px;
      width: 45px;
      border: 1px solid;
      border-radius: 8px;
      color: ${(props) => props.theme.svelteOrangeColor};
      margin-right: 5px;
      &:last-child {
        margin-left: 10px;
      }
    }
  }
  p {
    color: ${(props) => props.theme.commentColor};
    line-height: 24px;
    font-size: 14px;
    word-break: break-all;
  }
`
const SortBtn = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 2222px;
  margin: 32px 0 20px;
  background-color: ${(props) => props.theme.containerColor};
  button {
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
  }
`;

