import JoinedKarma from "components/atom/JoinedKarma";
import { Skeleton } from "components/atom/skeleton/SkeletonItem";
import { memo } from "react";
import styled from "styled-components";

const UserInfoBox = ({ userData }) => {
  return (
    <UserInfo>
      {userData.id ? <h5>{userData.id}</h5> : <Skeleton as="h5" />}
      <JoinedKarma karma={userData?.karma} created={userData?.created} />
      <p dangerouslySetInnerHTML={{ __html: userData.about }} />
    </UserInfo>
  );
};

const UserInfo = styled.div`
  padding: 24px 16px;
  background-color: ${(props) => props.theme.background.default};
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

export default memo(UserInfoBox);
