import { memo, useState, useEffect } from "react";
import { mapTime } from "util/mapTime";
import { getUserData } from "util/hnApi";
import styled from "styled-components";
import SkeletonItem from "components/skeleton/SkeletonItem";

const JoinedKarma = memo(function Story({ story }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData(story?.by, setUserData);
    return () => setUserData([]);
  }, [story]);

  return (
    <Box>
      <Info>
        <Name>Joined</Name>
        <span>
          {userData?.created ? (
            `${mapTime(userData?.created)} ago`
          ) : (
            <SkeletonItem width="80px" />
          )}
        </span>
      </Info>
      <Info>
        <Name>karma</Name>
        <span>{userData?.karma || <SkeletonItem width="40px" />}</span>
      </Info>
    </Box>
  );
});

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
