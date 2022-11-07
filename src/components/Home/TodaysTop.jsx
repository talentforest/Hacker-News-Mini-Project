import { useState, useEffect } from "react";
import { maxChar } from "util";
import { getStory } from "util/hnApi";
import SkeletonItem, { Skeleton } from "components/skeleton/SkeletonItem";
import styled from "styled-components";
import UsernamePointsTime from "components/common/UsernamePointsTime";

const TodaysTop = ({ storyId, index }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    <ListBox>
      <span>{index + 1}</span>
      {story ? (
        <div>
          <a href={story?.url} target="_blank" rel="noreferrer">
            <h4>{maxChar(story?.title, 55)}</h4>
          </a>
          <UsernamePointsTime story={story} />
        </div>
      ) : (
        <div>
          <Skeleton as="h4" />
          <SkeletonItem width="70%" />
        </div>
      )}
    </ListBox>
  );
};

const ListBox = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 98px;
  padding: 16px 14px 14px;
  > span {
    width: 15%;
    height: 68px;
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.text.orange};
  }
  > div {
    width: 100%;
    height: 100%;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      min-height: 60%;
      font-weight: 600;
      line-height: 20px;
      color: ${(props) => props.theme.text.default};
    }
  }
`;

export default TodaysTop;
