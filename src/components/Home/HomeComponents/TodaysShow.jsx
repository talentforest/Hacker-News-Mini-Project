import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { urlName } from "util";
import { Link } from 'react-router-dom';
import Username from 'components/common/Username';
import OrangeTitle from 'components/common/OrangeTitle';
import styled from "styled-components";
import CommentNum from 'components/common/CommentNum';
import TimeInfo from 'components/common/TimeInfo';

const TodaysShow = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return story && story.url ? (
    <Wrapper>
      <ShowWrapper>
        <a href={story.url} target="_blank" rel="noreferrer">
          {urlName(story) ? <Tag>{urlName(story)}</Tag> : <></>}
          <Title>
            <OrangeTitle story={story} />
          </Title>
          <Info>
            <img
              src={"/assets/point.png"}
              alt="point"
            />
            <span>{story.score}</span>
            <TimeInfo story={story} />
          </Info>
        </a>
        <UserComments>
          <Username story={story} />
          <Link to={`show/${story.id}`}>
            <CommentNum story={story} />
          </Link>
        </UserComments>
      </ShowWrapper>
    </Wrapper>
  ) : <></>;
});

const Wrapper = styled.div`
  width: 3000px;
`;
const ShowWrapper = styled.div`
  width: 200px;
  height: 224px;
  background-color: #eaf4f8;
  margin-right: 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  padding: 1px 12px 0px  12px;
`;
const Tag = styled.div`
  box-sizing: border-box;
  width: fit-content;
  margin-top: 16px;
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
    margin-right: 7px;
    padding-top: 3px;
  }
  img:first-child {
    width: 16px;
    height: 16px;
  }
  img {
    width: 14px;
    height: 15px;
    margin-right: 2px;
    margin-top: 3px;
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
  div{
    display: flex;
    align-items: center;
    img {
      width: 20px;
      margin-right: 3px;
    }
  }
  > div {
    img {
      width: 18px;
    }
    span {
      color: #ed702d;
      font-weight: 700;
    }
  }
`;

export default TodaysShow;
