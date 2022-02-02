import styled from "styled-components";
import React, { useState, useEffect, memo } from "react";
import { getAskStory } from "../api/hnApi";
import { mapTime } from "../time/mapTime";

const Article = styled.div`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  width: 390px;
  height: 201px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  h4 {
    font-weight: 500;
    line-height: 24px;
    padding: 12px 20px 4px;
    height: 64px;
  }
  p {
    width: 390px;
    margin: 0 auto;
    height: 70px;
    padding: 6px 20px 10px;
    font-size: 14px;
    line-height: 18px;
    color: #727272;
  }
`;
const Time = styled.span`
  border-bottom: 1px solid #e2e2e2;
  height: 27px;
  display: block;
  text-align: end;
  padding: 2px 20px 13px 0;
  font-size: 12px;
  color: #949494;
  font-weight: 400;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 12px;
  padding: 12px 20px;
  color: #949494;
  img {
    width: 16px;
    height: 16px;
    margin-right: 3.3px;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  color: #111;
`;
const UserInfo = styled.div`
  margin-left: 6px;
  display: flex;
  color: #949494;
  font-weight: 400;
  span:first-child {
    margin-right: 6px;
  }
`;
const Comments = styled.div`
  display: flex;
  align-items: center;
  color: #ed702d;
`;

export const AskPostBox = memo(function Story({ storyId, index }) {
  const [story, setStory] = useState([]);
  useEffect(() => {
    getAskStory(storyId).then((data) => data && data.title && setStory(data));
  }, []);
  // console.log(story);
  return story && story.title ? (
    <Article>
      <h4>{story.title}</h4>
      <p>{story.text.slice(0, 145)}...</p>
      <Time>{mapTime(story.time)}</Time>
      <Info>
        <User>
          <img src="img/user.png" alt="userimg" />
          <span>{story.by}</span>
          <UserInfo>
            <span>{story.score} points</span>
          </UserInfo>
        </User>
        <Comments>
          <img src="img/comment.png" alt="comments" />
          <span>{story.descendants}</span>
        </Comments>
      </Info>
    </Article>
  ) : null;
});
