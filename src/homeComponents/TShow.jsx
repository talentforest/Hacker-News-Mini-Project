import React, { useState, useEffect, memo } from "react";
import { getShowStory } from "../util/hnApi";
import { mapTime } from "../util/mapTime";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 3000px;
`;
const ShowWrapper = styled.div`
  width: 200px;
  height: 224px;
  background-color: #eaf4f8;
  padding: 16px 12px 0 12px;
  margin-right: 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
`;
const Tag = styled.div`
  width: 63px;
  height: 20px;
  padding: 5px 6px;
  background-color: #ed702d;
  font-size: 10px;
  color: #f5f5f5;
  border-radius: 20px;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  height: 106px;
  padding-top: 6px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  font-size: 12px;
  color: #727272;
  span {
    display: block;
    margin-right: 4px;
    padding-top: 3px;
  }
  img:first-child {
    width: 14px;
    height: 14px;
  }
  img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
`;
const UserComments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  font-size: 12px;
  border-top: 0.1px solid #e1e1e1;
  color: #727272;
  img {
    margin-right: 4px;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 14px;
  }
`;
const Comments = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 16px;
  }
  span {
    color: #f49664;
  }
`;
const Orange = styled.span`
  color: #ed702d;
`;

export const TShow = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getShowStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  const orangeWords = `${story.title?.split(" ")[0]} ${
    story.title?.split(" ")[1]
  }`;

  return story && story.url ? (
    <Wrapper>
      <ShowWrapper>
        <Tag>github.com</Tag>
        <Title>
          <Orange>{`${orangeWords}`}</Orange> {`${story.title?.slice(8)}`}
        </Title>
        <Info>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/point.png"
            alt="point"
          />
          <span>{story.score}</span>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/clock2.png"
            alt="clock"
          />
          <span>{mapTime(story.time)}</span>
        </Info>
        <UserComments>
          <User>
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/user.png"
              alt="userimage"
            />
            <span>{story.by}</span>
          </User>
          <Comments>
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/comment.png"
              alt="comment"
            />
            <span>{story.descendants}</span>
          </Comments>
        </UserComments>
      </ShowWrapper>
    </Wrapper>
  ) : null;
});
