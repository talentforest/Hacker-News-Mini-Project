import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStory } from "util/hnApi";
import OrangeTitle from "components/common/OrangeTitle";
import styled from "styled-components";

const TodaysAsk = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    <LinkBox to={`/ask/${storyId}`}>
      <OrangeTitle story={story} />
    </LinkBox>
  );
};

const LinkBox = styled(Link)`
  display: flex;
  align-items: center;
  height: 76px;
  padding: 0 14px;
  margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.boxShadow};
  line-height: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.text.default};
  background-color: ${(props) => props.theme.container.default};
`;

export default TodaysAsk;
