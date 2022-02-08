import React, { useState, useEffect, memo } from "react";
import { getTopStory } from "../api/hnApi";
import styled from "styled-components";
import axios from "axios";
import { userSelectFields } from "../util/selectFields";
import { mapTime } from "../time/mapTime";
import { TUserInfo } from "./TUserInfo";
// import { TUserInfo } from "./TUserInfo";

const Wrapper = styled.div`
  width: 3000px;
`;
const UserWrapper = styled.div`
  width: 228px;
  height: 146px;
  padding: 16px;
  margin-right: 16px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
`;
const Rank = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  position: relative;
  img {
    width: 24px;
    margin-right: 4px;
  }
  div {
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    position: absolute;
    top: 6px;
    left: 8px;
  }
  span {
    font-size: 12px;
    font-weight: 500;
    color: #ed702d;
    padding-top: 3px;
  }
`;
const Username = styled.div`
  display: block;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.44px;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 8px;
`;
const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
`;
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
const Btn = styled.img`
  width: 24px;
  height: 24px;
`;

export const TUser = memo(function Story({ index, storyId }) {
  // 탑스토리 가져오고
  const [story, setStory] = useState([]);

  useEffect(() => {
    getTopStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  const userNames = story.by;
  // console.log(userNames);

  return story && story.url ? (
    <Wrapper>
      <UserWrapper>
        <Rank>
          <img src="/assets/star.png" alt="star" />
          <div>{index + 1}</div>
          <span>Today's User</span>
        </Rank>
        <Username>{story.by}</Username>
        <UserInfoBox>
          {/* <Infobox>
            <Info>
              <div>Joined</div>
              <span>{mapTime(topUserData.created)} ago</span>
            </Info>
            <Info>
              <div>karma</div>
              <span>{topUserData.karma}</span>
            </Info>
          </Infobox> */}
          {/* {userNames.map((userName, i) => (
            <TUserInfo userName={userName} key={i} />
          ))} */}
          <Btn src="/assets/arrow_blue.png" alt="arrow button" />
        </UserInfoBox>
      </UserWrapper>
    </Wrapper>
  ) : null;
}, []);
