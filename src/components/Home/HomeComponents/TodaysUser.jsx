import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { TUserInfo } from "./TUserInfo";
import { imgBaseUrl } from 'util/Constant';
import styled from "styled-components";

const TodaysUser = memo(function Story({ index, storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
  }, [storyId]);

  return story && story.url ? (
    <Wrapper>
      <UserWrapper>
        <Rank>
          <img
            src={`${imgBaseUrl}star.png`}
            alt="star"
          />
          <div>{index + 1}</div>
          <span>Today's User</span>
        </Rank>
        <Username>{story.by}</Username>
        <TUserInfo story={story} />
      </UserWrapper>
    </Wrapper>
  ) : null;
});

const Wrapper = styled.div``;
const UserWrapper = styled.div`
  width: 228px;
  height: 146px;
  padding: 16px;
  margin-right: 16px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
`;
const Rank = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  position: relative;
  img {
    width: 24px;
    margin-right: 4px;
  }
  div {
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    position: absolute;
    top: 6px;
    left: 8px;
  }
  span {
    font-size: 12px;
    font-weight: 500;
    color: #ed702d;
    padding-top: 3px;
  }
`;
const Username = styled.div`
  display: block;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.44px;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 8px;
`;

export default TodaysUser;
