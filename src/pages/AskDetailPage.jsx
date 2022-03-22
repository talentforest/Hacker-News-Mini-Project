import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Comment } from "../DetailPage/Comment";
import { commentsSelectFields } from "../util/selectFields";
import styled from "styled-components";
import { mapTime } from "../util/mapTime";

const Wrapper = styled.section`
  width: 390px;
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.backgroundGrayColor};
  color: ${(props) => props.theme.textColor};
`;
const Sort = styled.div`
  height: 35px;
  padding: 12px 20px 8px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const SortList = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  img {
    width: 6px;
    height: 6px;
    margin-right: 4px;
  }
`;
const Registerd = styled.div`
  display: flex;
  align-items: center;
  span {
    padding-top: 2px;
    margin-right: 10px;
  }
`;
const Newest = styled.div`
  display: flex;
  align-items: center;
  span {
    padding-top: 2px;
  }
`;
const Post = styled.div`
  width: 390px;
  margin: 0 auto 12px;
  padding: 23px 10px 18px;
  background-color: ${(props) => props.theme.backgroundColor};
  word-break: break-word;
  overflow-wrap: break-word;
  pre {
    white-space: pre-wrap;
  }
  width: 390px;
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
const Info = styled.div``;
const UserInfo = styled.div`
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

export const AskDetailPage = () => {
  const { id } = useParams();
  const [currIdData, setCurrIdData] = useState([]);

  // kids 배열 데이터 얻기
  const getCurrIdData = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(({ data }) => data && commentsSelectFields(data));
    return result;
  };

  useEffect(() => {
    getCurrIdData().then((data) => setCurrIdData(data));
  }, []);
  const commentIdsArr = currIdData.kids;

  const orangeWords = `${currIdData.title?.split(" ")[0]} ${currIdData.title?.split(" ")[1]
    }`;

  return (
    <Wrapper>

      <Post>
        <User>
          <img src="/assets/user_black.png" alt="user" />
          <Info>
            {currIdData.by}
            <UserInfo>
              <span>{currIdData.score} points</span>
              <img src="/assets/circle_gray.png" alt="bullet" />
              <span>{mapTime(currIdData.time)} ago</span>
            </UserInfo>
          </Info>
        </User>
        <Title>
          <Orange>{`${orangeWords}`}</Orange> {`${currIdData.title?.slice(8)}`}
        </Title>
        <PostText dangerouslySetInnerHTML={{ __html: currIdData.text }} />
      </Post>
      <Sort>
        <SortList>
          <Registerd>
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/circle_orange.png"
              alt="bullet"
            />
            <span>Registerd</span>
          </Registerd>
          <Newest>
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/circle_gray.png"
              alt="bullet"
            />
            <span>Newest</span>
          </Newest>
        </SortList>
        <img src="/assets/comment.png" alt="commentimg" />
      </Sort>
      {commentIdsArr?.slice(0, 16).map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      ))}
    </Wrapper>
  );
};

export default AskDetailPage;
