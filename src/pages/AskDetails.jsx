import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrIdData } from 'util/hnApi';
import { mapTime } from "util/mapTime";
import Comment from "components/common/Comments/Comment";
import CommentSortBtn from 'components/common/Comments/CommentSortBtn';
import OrangeTitle from 'components/common/OrangeTitle';
import styled from "styled-components";
import Username from 'components/common/Username';

const AskDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState([]);

  useEffect(() => {
    getCurrIdData(id, setStory);
    return () => setStory([]);
  }, [id]);

  return (
    <Wrapper>
      <Post>
        <User>
          <Username story={story} />
          <Info>
            <div>
              <span>{story.score} points</span>
              <img src={"/assets/circle_gray.png"} alt="bullet" />
              <span>{mapTime(story.time)} ago</span>
            </div>
          </Info>
        </User>
        <Title>
          <OrangeTitle story={story} />
        </Title>
        <PostText dangerouslySetInnerHTML={{ __html: story.text }} />
      </Post>
      <CommentSortBtn story={story} />
      {story.kids?.slice(0, 16).map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;
const Post = styled.div`
  padding: 23px 10px 18px;
  background-color: ${(props) => props.theme.backgroundColor};
  word-break: break-word;
  overflow-wrap: break-word;
  pre {
    white-space: pre-wrap;
  }
  img {
    width: 33.33px;
    height: 33.33px;
    margin-right: 15px;
  }
`;
const User = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #b7b7b7;
  margin-bottom: 12px;
  padding: 0 10px 18px;
`;
const Info = styled.div`
  div {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    margin-top: 8px;
    color: #949494;
    img {
      width: 3px;
      height: 3px;
      margin: 0 4px;
    }
  }
`;
const Title = styled.h4`
  padding: 4px 10px 19px;
  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
`;
const PostText = styled.div`
  padding: 0px 10px 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme.commentColor};
`;

export default AskDetails;
