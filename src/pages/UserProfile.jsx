import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getUserInfo } from "util/hnApi";
import { useButtonChange } from "hooks";
import UserInfo from "components/common/UserInfo";
import UserButton from "components/userprofile/UserButton";
import Submissions from "components/userprofile/Submissions";
import Comments from "components/userprofile/Comments";
import Favorites from "components/userprofile/Favorites";
import styled from "styled-components";

const UserProfile = () => {
  const { pathname } = useLocation();

  const [userData, setUserData] = useState([]);
  const [buttonMode, handleButtonMode] = useButtonChange();

  const story = useMemo(
    () => ({
      by: pathname?.split("/userprofile/")[1],
    }),
    [pathname]
  );

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
      <UserButton buttonMode={buttonMode} handleButtonMode={handleButtonMode} />
      {buttonMode === "submissions" ? (
        userData.submitted?.map((submittedId) => (
          <Submissions key={submittedId} submittedId={submittedId} />
        ))
      ) : (
        <></>
      )}
      {buttonMode === "comments" ? (
        userData.submitted?.map((submittedId) => (
          <Comments key={submittedId} submittedId={submittedId} />
        ))
      ) : (
        <></>
      )}
      {buttonMode === "favorites" ? (
        userData.submitted?.map((submittedId) => (
          <Favorites key={submittedId} submittedId={submittedId} />
        ))
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.background.gray};
  padding: 29px 20px 32px;
  margin: 0 auto;
  min-height: 90vh;
  > div:first-child {
    padding: 24px 16px;
    background-color: ${(props) => props.theme.container.default};
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 8px;
    h5 {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      height: 26px;
      font-size: 22px;
      font-weight: 700;
      color: ${(props) => props.theme.text.default};
    }
    p {
      color: ${(props) => props.theme.container.default};
      line-height: 24px;
      font-size: 14px;
      word-break: break-all;
    }
  }
`;

export default UserProfile;
