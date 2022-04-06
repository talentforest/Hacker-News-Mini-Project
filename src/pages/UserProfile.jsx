import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getUserInfo } from 'util/hnApi';
import { useButtonChange } from 'hooks';
import UserInfo from 'components/common/UserInfo';
import UserButton from 'components/UserProfile/UserButton';
import Submissions from 'components/UserProfile/Submissions';
import Comments from 'components/UserProfile/Comments';
import Favorites from 'components/UserProfile/Favorites';
import styled from "styled-components";

export default function UserProfile() {
  const pathname = useLocation().pathname;

  const [userData, setUserData] = useState([]);
  const [buttonMode, handleButtonMode] = useButtonChange();

  const story = useMemo(() => ({
    by: pathname.split("/userprofile/")[1]
  }), [pathname]);

  useEffect(() => {
    getUserInfo(story, setUserData);
    return () => setUserData([]);
  }, [story]);



  return (
    <Wrapper>
      <div>
        <h5>{userData.id}</h5>
        <UserInfo />
        <p dangerouslySetInnerHTML={{ __html: userData.about }} />
      </div>
      <UserButton
        buttonMode={buttonMode}
        handleButtonMode={handleButtonMode}
      />
      {buttonMode === "submissions" ?
        userData.submitted?.map((submittedId) => (
          <Submissions
            key={submittedId}
            submittedId={submittedId}
          />
        ))
        : <></>}
      {buttonMode === "comments" ?
        userData.submitted?.map((submittedId) => (
          <Comments
            key={submittedId}
            submittedId={submittedId}
          />
        ))
        : <></>}
      {buttonMode === "favorites" ?
        userData.submitted?.map((submittedId) => (
          <Favorites
            key={submittedId}
            submittedId={submittedId}
          />
        ))
        : <></>}

    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundLightGrayColor};
  padding: 29px 20px 32px;
  margin: 0 auto;
  min-height: 90vh;
  > div:first-child {
    padding: 24px 16px;
    background-color: ${(props) => props.theme.containerColor};
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05), 0px 6px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    h5 {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      height: 26px;
      font-size: 22px;
      font-weight: 700;
      color: ${(props) => props.theme.textColor};
    }
    p {
      color: ${(props) => props.theme.commentColor};
      line-height: 24px;
      font-size: 14px;
      word-break: break-all;
    }
  }
`;
