import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { Link } from 'react-router-dom';
import UserInfo from 'components/common/UserInfo';
import styled from "styled-components";

const TodaysUser = memo(function Story({ index, storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return story && story.url ? (
    <Link to={`/userprofile/${story.by}`}>
      <Wrapper>
        <UserWrapper>
          <Rank>
            <img
              src={"/assets/star.png"}
              alt="star"
            />
            <div>{index + 1}</div>
            <span>Today's User</span>
          </Rank>
          <Username>{story.by}</Username>
          <UserInfoBox>
            <UserInfo story={story} />
            <Btn
              src={"assets/arrow_blue.png"}
              alt="arrow button"
            />
          </UserInfoBox>
        </UserWrapper>
      </Wrapper>
    </Link>
  ) : <></>;
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

const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.img`
  width: 24px;
  height: 24px;
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
