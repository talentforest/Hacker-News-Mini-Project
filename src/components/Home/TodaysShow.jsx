import { useState, useEffect } from "react";
import { getStory } from "util/hnApi";
import { changeUrlMark } from "util";
import { Link } from "react-router-dom";
import { Tag } from "theme/commonStyle";
import Username from "components/common/Username";
import OrangeTitle from "components/common/OrangeTitle";
import styled from "styled-components";
import CommentNum from "components/common/CommentNum";
import TimeInfo from "components/common/TimeInfo";

const TodaysShow = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    story && (
      <ShowBox>
        <a href={story.url} target="_blank" rel="noreferrer">
          <Tag>{changeUrlMark(story.url)}</Tag>
          <Title>
            <OrangeTitle story={story} />
          </Title>
          <Info>
            <img src={require("assets/point.png")} alt="point" />
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
      </ShowBox>
    )
  );
};

const ShowBox = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 224px;
  background-color: ${(props) => props.theme.container.lightBlue};
  margin-right: 12px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 12px 12px 0px 12px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  height: 106px;
  padding-top: 6px;
  color: ${(props) => props.theme.text.default};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  font-size: 12px;
  color: ${(props) => props.theme.text.lightGray};
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
  border-top: 1px solid ${(props) => props.theme.border.lightGray};
  color: ${(props) => props.theme.text.default};
`;

export default TodaysShow;
