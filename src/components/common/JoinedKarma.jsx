import { memo, useState, useEffect } from "react";
import { mapTime } from "util/mapTime";
import { getUserData } from "util/hnApi";
import styled from "styled-components";

const JoinedKarma = memo(function Story({ story }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData(story?.by, setUserData);
    return () => setUserData([]);
  }, [story]);

  return (
    <div>
      <Info>
        <div>Joined</div>
        <span>{mapTime(userData?.created)} ago</span>
      </Info>
      <Info>
        <div>karma</div>
        <span>{userData?.karma}</span>
      </Info>
    </div>
  );
});
const Info = styled.div`
  display: flex;
  font-size: 12px;
  color: ${(props) => props.theme.text.default};
  > div:first-child {
    border: 1px solid ${(props) => props.theme.text.orange};
    color: ${(props) => props.theme.text.orange};
    font-weight: 10px;
    letter-spacing: 0.1%;
    width: 43px;
    height: 14px;
    border-radius: 20px;
    margin: 1px 4px 6px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    padding-top: 3px;
  }
`;

export default JoinedKarma;
