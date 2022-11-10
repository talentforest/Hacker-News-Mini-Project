import { useState, useEffect } from "react";
import { getData } from "util/hnApi";
import { mapTime, maxChar } from "util";
import { Skeleton } from "components/skeleton/SkeletonItem";
import styled from "styled-components";
import Username from "components/common/Username";

const TodaysNew = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getData(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    <Wrapper>
      {Object.keys(story ?? {}).length ? (
        <>
          <span>{mapTime(story?.time)} ago</span>
          <a href={story?.url} target="_blank" rel="noreferrer">
            <h4>{maxChar(story?.title, 68)}</h4>
          </a>
          <Username by={story?.by} />
        </>
      ) : (
        <>
          <Skeleton as="span" />
          <Skeleton as="a" />
          <Username />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 150px;
  padding: 14px;
  border-bottom: 1px solid ${(props) => props.theme.border.lightGray};
  &:last-child {
    border-bottom: none;
  }
  > span {
    text-align: center;
    background: ${(props) => props.theme.container.lightBlue};
    padding: 5px 5px 4px;
    border-radius: 10px;
    width: 88px;
    height: 20px;
    font-size: 10px;
    font-weight: 500;
    color: ${(props) => props.theme.text.blue};
  }
  > a {
    height: 50%;
    padding: 10px 0 8px;
    font-weight: 600;
    line-height: 20px;
    h4 {
      color: ${(props) => props.theme.text.default};
    }
  }
  > div {
    padding: 8px 0 0;
    font-size: 12px;
    font-weight: 500;
    color: ${(props) => props.theme.text.default};
  }
`;

export default TodaysNew;
