import { useState, memo, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getStory } from "util/hnApi";
import styled from "styled-components";

const TodaysAsk = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  const orangeWords = `${story.title?.split(" ")[0]} ${story.title?.split(" ")[1]}`;

  return (
    <Wrapper>
      <Link to={`/ask/${storyId}`}>
        <h4>
          {story.title?.includes("Ask HN") || story.title?.includes("Tell HN") ? (
            <div>
              <Orange>{`${orangeWords}`}</Orange> {`${story.title?.slice(8)}`}
            </div>
          ) : (
            story.title
          )}
        </h4>
      </Link>
    </Wrapper>
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
const Orange = styled.span`
  color: #ed702d;
`;

export default TodaysAsk;

