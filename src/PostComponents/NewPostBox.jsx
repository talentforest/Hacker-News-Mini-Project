import styled from "styled-components";
import React, { useState, useEffect, memo } from "react";
import { getStory } from "../util/hnApi";
import { mapTime } from "../util/mapTime";

export const NewPostBox = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Post>
      <Tag>github.com</Tag>
      <h4>{story.title}</h4>
      <Info>
        <User>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/user.png"
            alt="userimg"
          />
          <span>{story.by}</span>
          <UserInfo>
            <span>{story.score} points</span>
            <span>{mapTime(story.time)}</span>
          </UserInfo>
        </User>
        <Comments>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/comment.png"
            alt="comments"
          />
          <span>{story.descendants}</span>
        </Comments>
      </Info>
    </Post>
  );
});

const Post = styled.div`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  padding: 14px 12px 16px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.textColor};
  h4 {
    display: flex;
    align-items: center;
    font-weight: 600;
    line-height: 24px;
    height: 64px;
  }
`;
const Tag = styled.div`
  width: 63px;
  height: 20px;
  padding: 5px 6px;
  background-color: #efefef;
  font-size: 10px;
  color: #ed702d;
  border-radius: 20px;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 36px;
  font-size: 12px;
  padding: 22px 0 14px;
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
  color: ${(props) => props.theme.textColor};
`;
const UserInfo = styled.div`
  margin-left: 6px;
  display: flex;
  color: #949494;
  span:first-child {
    margin-right: 6px;
  }
`;
const Comments = styled.div`
  display: flex;
  align-items: center;
  color: #ed702d;
`;
