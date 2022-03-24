import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Comment } from "../components/AskDetails/Comment";
import { getCurrIdData } from '../util/hnApi';
import styled from "styled-components";
import { mapTime } from "../util/mapTime";
import CommentSortBtn from '../components/AskDetails/CommentSortBtn';

const AskDetails = () => {
  const { id } = useParams();
  const [currIdData, setCurrIdData] = useState([]);

  useEffect(() => {
    getCurrIdData(id, setCurrIdData);
    return () => setCurrIdData([]);
  }, [id]);

  const commentIdsArr = currIdData.kids;

  const orangeWords = `${currIdData.title?.split(" ")[0]} ${currIdData.title?.split(" ")[1]
    }`;

  return (
    <Wrapper>
      <Post>
        <User>
          <img src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/user_black.png" alt="user" />
          <Info>
            {currIdData.by}
            <div>
              <span>{currIdData.score} points</span>
              <img src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/circle_gray.png" alt="bullet" />
              <span>{mapTime(currIdData.time)} ago</span>
            </div>
          </Info>
        </User>
        <Title>
          <Orange>{`${orangeWords}`}</Orange> {`${currIdData.title?.slice(8)}`}
        </Title>
        <PostText dangerouslySetInnerHTML={{ __html: currIdData.text }} />
      </Post>
      <CommentSortBtn />
      {commentIdsArr?.slice(0, 16).map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.backgroundGrayColor};
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
const Orange = styled.span`
  color: #ed702d;
`;

export default AskDetails;
