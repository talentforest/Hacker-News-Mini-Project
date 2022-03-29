import { memo, useState, useEffect } from "react";
import { mapTime } from "util/mapTime"
import { getUserInfo } from 'util/hnApi';
import styled from "styled-components";

const UserInfo = memo(function Story({ story }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserInfo(story, setUserData);

    return () => setUserData([]);
  }, [story]);

  return (
    <Infobox>
      <Info>
        <div>Joined</div>
        <span>{mapTime(userData?.created)} ago</span>
      </Info>
      <Info>
        <div>karma</div>
        <span>{userData?.karma}</span>
      </Info>
    </Infobox>
  );
});

const Infobox = styled.div`
  height: 40px;
`;
const Info = styled.div`
  display: flex;
  font-size: 12px;
  color: #727272;
  div:first-child {
    border: 1px solid rgb(238, 112, 44, 0.75);
    color: #ed702d;
    font-weight: 10px;
    letter-spacing: 0.1%;
    width: 43px;
    height: 14px;
    border-radius: 20px;
    padding: 1px 2px;
    margin: 1px 4px 6px 0;
  }
  span {
    padding-top: 3px;
  }
`;

export default UserInfo;
