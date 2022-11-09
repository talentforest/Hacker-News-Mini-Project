import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUserData } from "util/hnApi";
import { useButtonChange } from "hooks";
import JoinedKarma from "components/common/JoinedKarma";
import CategoryBtn from "components/userprofile/CategoryBtn";
import Submissions from "components/userprofile/Submissions";
import styled from "styled-components";

const UserProfile = () => {
  const { pathname } = useLocation();
  const [userData, setUserData] = useState([]);
  const [buttonMode, handleButtonMode] = useButtonChange();
  const username = pathname?.split("/userprofile/")[1];

  useEffect(() => {
    getUserData(username, setUserData);
    return () => setUserData([]);
  }, [username]);

  return (
    <Wrapper>
      <div>
        <h5>{userData.id}</h5>
        <JoinedKarma />
        <p dangerouslySetInnerHTML={{ __html: userData.about }} />
      </div>
      <CategoryBtn
        buttonMode={buttonMode}
        handleButtonMode={handleButtonMode}
      />
      {userData.submitted?.slice(0, 100)?.map((submittedId) => (
        <Submissions
          buttonMode={buttonMode}
          key={submittedId}
          submittedId={submittedId}
        />
      ))}
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
