import React, { useState, memo, useEffect } from "react";
import styled from "styled-components";
import { getAskStory } from "../api/hnApi";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 76px;
  padding: 14px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  line-height: 24px;
  border-radius: 4px;
`;
const Ask = styled.span`
  color: #ed702d;
`;

export const TAsk = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getAskStory(storyId).then((data) => data && data.title && setStory(data));
  }, []);

  return (
    <Wrapper>
      <h4>{story.title}</h4>
    </Wrapper>
  );
});
