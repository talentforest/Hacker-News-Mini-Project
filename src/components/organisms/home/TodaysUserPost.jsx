import { useState, useEffect } from "react";
import { getData } from "util/hnApi";
import { Link } from "react-router-dom";
import JoinedKarma from "components/common/JoinedKarma";
import styled from "styled-components";
import SkeletonItem from "components/common/skeleton/SkeletonItem";

const TodaysUserPost = ({ index, storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getData(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return Object.keys(story ?? {}).length ? (
    <UserWrapper to={`/userprofile/${story?.by}`}>
      <Rank>
        <img src={require("assets/star.png")} alt="star" />
        <div>{index + 1}</div>
        <span>Today's User</span>
      </Rank>
      <Username>{story?.by}</Username>
      <Info>
        <JoinedKarma story={story} />
        <Btn src={require("assets/arrow_blue.png")} alt="arrow button" />
      </Info>
    </UserWrapper>
  ) : (
    <UserWrapper as="div">
      <Rank>
        <img src={require("assets/star.png")} alt="star" />
        <div>{index + 1}</div>
        <span>Today's User</span>
      </Rank>
      <SkeletonItem width="70%" height="26px" />
      <Info>
        <JoinedKarma />
        <Btn src={require("assets/arrow_blue.png")} alt="arrow button" />
      </Info>
    </UserWrapper>
  );
};

const UserWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: none;
  width: 228px;
  height: 146px;
  padding: 16px;
  margin-right: 16px;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 8px;
  background-color: ${(props) => props.theme.container.default};
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
    color: ${(props) => props.theme.text.orange};
    padding-top: 3px;
  }
`;

const Info = styled.div`
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
  color: ${(props) => props.theme.text.default};
  margin-bottom: 8px;
`;

export default TodaysUserPost;
