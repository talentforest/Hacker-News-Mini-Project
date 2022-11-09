import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "util/hnApi";
import Comment from "components/comments/Comment";
import CommentHeader from "components/comments/CommentHeader";
import CutTitle from "components/common/CutTitle";
import styled from "styled-components";
import UserPointsTime from "components/common/UserPointsTime";

const Details = () => {
  const { id } = useParams();
  const [story, setStory] = useState([]);

  useEffect(() => {
    getData(id, setStory);
    return () => setStory([]);
  }, [id]);

  return (
    <Wrapper>
      <UserPointsTime story={story} />
      <Text>
        <CutTitle title={story.title} />
        <p dangerouslySetInnerHTML={{ __html: story?.text }} />
      </Text>
      <CommentHeader story={story} />
      {story.kids?.slice(0, 10).map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.text.default};
  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 23px 10px 18px;
    margin: 0 10px 20px;
    font-size: 14px;
    border-bottom: 1px solid ${(props) => props.theme.border.lightGray};
    background-color: ${(props) => props.theme.background.default};
    > div {
      margin-right: auto;
      font-size: 16px;
    }
  }
`;

const Text = styled.div`
  padding: 0 20px;
  > h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.4;
  }
  p {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: ${(props) => props.theme.text.default};
  }
`;

export default Details;
