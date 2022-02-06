import Header from "../components/Header";
import Gnb from "../components/Gnb";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AskDetail } from "../DetailPage/AskDetail";
import { commentsSelectFields } from "../util/selectFields";
import styled from "styled-components";
import { AskPostBox } from "../ArticleComponents/AskPostBox";
import { mapTime } from "../time/mapTime";

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
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 390px;
  margin: 0 auto 12px;
  padding: 23px 10px 18px;
  background-color: ${(props) => props.theme.backgroundColor};
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

  /* border: 1px solid blue; */
  img {
    width: 3px;
    height: 3px;
    margin: 0 4px;
  }
`;
const Title = styled.h4`
  display: flex;
  flex-direction: column;
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

export const AskDetailContainer = ({ toggleDark }) => {
  const { id } = useParams();
  const [currIdData, setCurrIdData] = useState([]);
  // kids 배열 데이터 얻기
  const getCurrIdData = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(({ data }) => data && commentsSelectFields(data));

    // console.log(result);
    return result;
  };

  useEffect(() => {
    getCurrIdData().then((data) => setCurrIdData(data));
  }, []);
  const commentIdsArr = currIdData.kids;

  return (
    <Wrapper>
      <Header toggleDark={toggleDark} />
      <Gnb />
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
        <Title>{currIdData.title}</Title>
        <PostText dangerouslySetInnerHTML={{ __html: currIdData.text }} />
      </Post>
      <Sort>
        <SortList>
          <Registerd>
            <img src="/assets/circle_orange.png" alt="bullet" />
            <span>Registerd</span>
          </Registerd>
          <Newest>
            <img src="/assets/circle_gray.png" alt="bullet" />
            <span>Newest</span>
          </Newest>
        </SortList>
        <img src="/assets/comment.png" alt="commentimg" />
      </Sort>
      <AskPostBox />

      {commentIdsArr?.slice(0, 16).map((commentId) => (
        <AskDetail key={commentId} commentId={commentId} />
      ))}
    </Wrapper>
  );
};
