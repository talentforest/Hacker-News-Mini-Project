import styled from "styled-components";
import React, { useState, useEffect, memo } from "react";
import { getShowStory } from "../util/hnApi";
import { mapTime } from "../util/mapTime";

const Post = styled.div`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  margin-bottom: 16px;
  padding: 14px 12px 14px;
  color: ${(props) => props.theme.textColor};
  h4 {
    padding: 12px 0;
    font-weight: 600;
    line-height: 24px;
    height: 64px;
  }
`;
const Orange = styled.span`
  color: #ed702d;
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

export const ShowPostBox = memo(function ShowStory({ storyId }) {
  const [story, setStory] = useState([]);
  useEffect(() => {
    getShowStory(storyId).then((data) => data && data.title && setStory(data));
  }, []);

  const orangeWords = `${story.title?.split(" ")[0]} ${
    story.title?.split(" ")[1]
  }`;

  return (
    <Post>
      <Tag>github.com</Tag>
      <h4>
        <Orange>{`${orangeWords}`}</Orange>
        {`${story.title?.slice(8)}`}
      </h4>
      <Info>
        <User>
          <img src="/assets/user.png" alt="userimg" />
          <span>{story.by}</span>
          <UserInfo>
            <span>{story.score} points</span>
            <span>{mapTime(story.time)}</span>
          </UserInfo>
        </User>
        <Comments>
          <img src="/assets/comment.png" alt="comments" />
          <span>{story.descendants}</span>
        </Comments>
      </Info>
    </Post>
  );
});
