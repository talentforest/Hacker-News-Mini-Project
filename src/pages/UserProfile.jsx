import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUserData } from "util/hnApi";
import { useButtonChange } from "hooks";
import JoinedKarma from "components/common/JoinedKarma";
import CategoryBtn from "components/userprofile/CategoryBtn";
import Submissions, {
  Footer,
  SubmissionBox,
} from "components/userprofile/Submissions";
import styled from "styled-components";
import SkeletonItem, { Skeleton } from "components/skeleton/SkeletonItem";
import UserPointsTime from "components/common/UserPointsTime";

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
    <Wrapper $loading={!userData?.submitted}>
      <UserInfo>
        {userData.id ? <h5>{userData.id}</h5> : <Skeleton as="h5" />}
        <JoinedKarma />
        <p dangerouslySetInnerHTML={{ __html: userData.about }} />
      </UserInfo>
      <CategoryBtn
        buttonMode={buttonMode}
        handleButtonMode={handleButtonMode}
      />
      {userData?.submitted
        ? userData.submitted
            ?.slice(0, 50)
            ?.map((submittedId) => (
              <Submissions
                buttonMode={buttonMode}
                key={submittedId}
                submittedId={submittedId}
              />
            ))
        : [1, 2].map((item) => (
            <SubmissionBox key={item}>
              <SkeletonItem height="20px" />
              <SkeletonItem height="20px" />
              <SkeletonItem height="10px" width="20%" />
              <Footer>
                <UserPointsTime />
                <SkeletonItem width="20%" />
              </Footer>
            </SubmissionBox>
          ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.background.gray};
  padding: 29px 20px 32px;
  margin: 0 auto;
  min-height: 70vh;
`;

const UserInfo = styled.div`
  padding: 24px 16px;
  background-color: ${(props) => props.theme.container.default};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 8px;
  color: ${(props) => props.theme.text.default};
  h5 {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    min-width: 40%;
    height: 26px;
    font-size: 22px;
    font-weight: 700;
  }
  p {
    color: ${(props) => props.theme.text.default};
    line-height: 24px;
    font-size: 14px;
    word-break: break-all;
    margin-top: 10px;
  }
`;

export default UserProfile;
