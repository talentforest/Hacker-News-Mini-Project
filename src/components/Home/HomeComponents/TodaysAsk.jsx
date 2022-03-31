import { useState, memo, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getStory } from "util/hnApi";
import OrangeTitle from 'components/common/OrangeTitle';
import styled from "styled-components";

const TodaysAsk = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Link to={`/ask/${storyId}`}>
      <Wrapper>
        <h4>
          {story?.title?.includes("Ask HN") || story?.title?.includes("Tell HN") ? (
            <OrangeTitle story={story} />
          ) : (
            story?.title
          )}
        </h4>
      </Wrapper>
    </Link>
  );
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 76px;
  padding: 0 14px;
  margin-bottom: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  line-height: 24px;
  background-color: ${(props) => props.theme.containerColor};
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;

export default TodaysAsk;

