import React, { useState, memo, useEffect } from "react";
import styled from "styled-components";
import { getAskStory } from "../util/hnApi";

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

export const TAsk = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getAskStory(storyId).then((data) => data && data.title && setStory(data));
  }, []);

  const orangeWords = `${story.title?.split(" ")[0]} ${
    story.title?.split(" ")[1]
  }`;

  return (
    <Wrapper>
      <h4>
        {story.title?.includes("Ask HN") || story.title?.includes("Tell HN") ? (
          <div>
            <Orange>{`${orangeWords}`}</Orange> {`${story.title?.slice(8)}`}
          </div>
        ) : (
          story.title
        )}
      </h4>
    </Wrapper>
  );
});
