import { useState, useEffect } from "react";
import { mapTime } from "util/mapTime";
import { getUserData } from "util/hnApi";
import styled from "styled-components";
import SkeletonItem from "components/atom/skeleton/SkeletonItem";

const JoinedKarma = ({ username, karma, created }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (username) {
      getUserData(username, setUserData);
      return () => setUserData();
    }
  }, [username]);

  return (
    <Box>
      <Info>
        <Name>Joined</Name>
        <span>
          {userData?.created || created ? (
            `${mapTime(userData?.created || created)} ago`
          ) : (
            <SkeletonItem width="80px" />
          )}
        </span>
      </Info>
      <Info>
        <Name>Karma</Name>
        <span>
          {userData?.karma || karma ? (
            userData?.karma || karma
          ) : (
            <SkeletonItem width="40px" />
          )}
        </span>
      </Info>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: ${(props) => props.theme.text.default};
`;

const Name = styled.span`
  text-align: center;
  border: 1px solid ${(props) => props.theme.text.orange};
  color: ${(props) => props.theme.text.orange};
  font-weight: 10px;
  letter-spacing: 0.1%;
  border-radius: 20px;
  width: 48px;
  padding: 2px 4px;
`;

export default JoinedKarma;
