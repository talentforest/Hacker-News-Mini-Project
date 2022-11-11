import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUserData } from "util/hnApi";
import { useButtonChange } from "hooks";
import CategoryBtn from "components/organisms/userprofile/CategoryBtn";
import Submissions, {
  Footer,
  SubmissionBox,
} from "components/template/Submissions";
import styled from "styled-components";
import SkeletonItem from "components/atom/skeleton/SkeletonItem";
import UserPointsTime from "components/molecules/UserPointsTime";
import UserInfoBox from "components/organisms/userprofile/UserInfoBox";

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
      <UserInfoBox userData={userData} />
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
  min-height: 90vh;
`;

export default UserProfile;
