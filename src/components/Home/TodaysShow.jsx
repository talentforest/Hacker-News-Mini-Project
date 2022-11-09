import { useState, useEffect } from "react";
import { getData } from "util/hnApi";
import { changeUrlMark } from "util";
import { Link } from "react-router-dom";
import SkeletonItem, { Skeleton } from "components/skeleton/SkeletonItem";
import Username from "components/common/Username";
import Title from "components/common/CutTitle";
import styled from "styled-components";
import CommentNum from "components/common/CommentNum";
import { AccessTime } from "@material-ui/icons";
import { mapTime } from "util";

const TodaysShow = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getData(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    <ShowBox>
      {Object.keys(story ?? {}).length ? (
        <>
          <A href={story?.url} target="_blank" rel="noreferrer">
            <Tag>{changeUrlMark(story?.url)}</Tag>
            <Title title={story?.title} />
            <Info>
              <img src={require("assets/point.png")} alt="point" />
              <span>{story?.score}</span>
              <Time>
                <AccessTime />
                <span>{mapTime(story?.time)}</span>
              </Time>
            </Info>
          </A>
          <UserComments>
            <Username by={story?.by} />
            <Link to={`show/${story?.id}`}>
              <CommentNum number={story?.descendants} />
            </Link>
          </UserComments>
        </>
      ) : (
        <>
          <A>
            <SkeletonItem width="50%" height="20px" />
            <Skeleton as="h4" />
            <SkeletonItem height="20px" />
          </A>
          <UserComments>
            <Username />
            <SkeletonItem width="20%" height="20px" />
          </UserComments>
        </>
      )}
    </ShowBox>
  );
};

const ShowBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 200px;
  height: 224px;
  background-color: ${(props) => props.theme.container.lightBlue};
  margin-right: 12px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 12px 12px 0px 12px;
`;

const A = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  h4 {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    height: 106px;
    margin-top: 6px;
    margin-bottom: 10px;
    color: ${(props) => props.theme.text.default};
  }
`;

export const Tag = styled.div`
  box-sizing: border-box;
  min-width: 60px;
  max-width: fit-content;
  height: 20px;
  padding: 5px 6px;
  font-size: 10px;
  color: ${(props) =>
    props.orange ? props.theme.background.default : props.theme.text.orange};
  background-color: ${(props) =>
    props.orange ? props.theme.text.orange : props.theme.background.default};
  border-radius: 20px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 12px;
  color: ${(props) => props.theme.text.lightGray};
  span {
    display: block;
    margin-right: 7px;
    padding-top: 3px;
  }
  img:first-child {
    width: 16px;
    height: 16px;
    margin-bottom: 2px;
  }
  img {
    width: 14px;
    height: 15px;
    margin-right: 2px;
    margin-top: 2px;
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text.lightGray};
  span {
    font-weight: 400;
    font-size: 12px;
  }
  svg {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
`;

const UserComments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  font-size: 12px;
  border-top: 1px solid ${(props) => props.theme.border.lightGray};
  color: ${(props) => props.theme.text.default};
`;

export default TodaysShow;
