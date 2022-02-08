import styled from "styled-components";
import React, { useState, useEffect, memo } from "react";
import { getAskStory } from "../api/hnApi";
import { mapTime } from "../time/mapTime";
import { Link } from "react-router-dom";

const Post = styled.div`
  width: 390px;
  height: 201px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.containerColor};
`;
const Title = styled.h4`
  color: ${(props) => props.theme.textColor};
  font-weight: 500;
  line-height: 24px;
  padding: 12px 20px 4px;
  /* height: 64px; */
  padding: 12px 20px 0;
  cursor: pointer;
`;
const PostText = styled.p`
  width: 390px;
  margin: 0 auto;
  height: 62px;
  overflow: hidden;
  margin-bottom: 10px;
  /* border: 1px solid blue; */
  padding: 6px 20px 10px;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
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
  /* border: 1px solid blue; */
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
const Orange = styled.span`
  color: #ed702d;
`;

export const AskPostBox = memo(function AskStory({ storyId, index }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getAskStory(storyId).then((data) => data && data.title && setStory(data));
  }, []);

  const orangeWords = `${story.title?.split(" ")[0]} ${
    story.title?.split(" ")[1]
  }`;

  return story && story.title ? (
    <Post>
      <Link to={`/ask/${story.id}`}>
        <Title>
          <Orange>{`${orangeWords}`}</Orange> {`${story.title?.slice(8)}`}
        </Title>
        <PostText
          dangerouslySetInnerHTML={{
            __html:
              story.text?.length > 150
                ? `${story.text.slice(0, 150)}...`
                : story.text,
          }}
        />
      </Link>
      <Time>{mapTime(story.time)}</Time>
      <Info>
        <User>
          <img src="/assets/user.png" alt="userimg" />
          <span>{story.by}</span>
          <UserInfo>
            <span>{story.score} points</span>
          </UserInfo>
        </User>
        <Comments>
          <img src="/assets/comment.png" alt="comments" />
          <span>{story.descendants}</span>
        </Comments>
      </Info>
    </Post>
  ) : null;
});
