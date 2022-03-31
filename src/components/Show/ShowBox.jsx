import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { urlName } from 'util';
import styled from "styled-components";
import UserPointsTime from 'components/common/UserPointsTime';

const ShowBox = memo(function ShowStory({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Post>
      {urlName(story) ? <Tag>{urlName(story)}</Tag> : <></>}
      <a href={story.url}>
        <h4>
          <Orange>{`${story.title?.split(" ")[0]} ${story.title?.split(" ")[1]
            }`}</Orange>
          {`${story.title?.slice(8)}`}
        </h4>
      </a>
      <Info>
        <UserPointsTime story={story} />
        <Comments>
          <img
            src={require("assets/comment.png")}
            alt="comments"
          />
          <span>{story.descendants}</span>
        </Comments>
      </Info>

    </Post>
  );
});

const Post = styled.div`
  position: relative;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  margin-bottom: 16px;
  padding: 14px 12px 14px;
  color: ${(props) => props.theme.textColor};
  h4 {
    padding: 12px 0;
    margin-top: 20px;
    font-weight: 600;
    line-height: 24px;
    height: 64px;
  }
`;
const Orange = styled.span`
  color: #ed702d;
`;
const Tag = styled.div`
  position: absolute;
  width: fit-content;
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
const Comments = styled.div`
  display: flex;
  align-items: center;
  color: #ed702d;
`;

export default ShowBox;
