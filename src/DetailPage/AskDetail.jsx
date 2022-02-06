import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import styled from "styled-components";
import { Reply } from "./Reply";
import { mapTime } from "../time/mapTime";

const Wrapper = styled.section`
  width: 390px;
  padding: 0 20px 10px;
  margin: 0 auto 10px;
  /* border: 1px solid red; */
  background-color: ${(props) => props.theme.backgroundColor};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  font-size: 14px;
  font-weight: 400;
  img {
    width: 12px;
    height: 7.41px;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  img:first-child {
    width: 20px;
    height: 20px;
    margin: 0 6px 0 0;
  }
  img {
    width: 13px;
    height: 13px;
    margin: 0 6px 0 10px;
  }
  span:first-child {
    color: #b7b7b7;
  }
`;
const Gray = styled.span`
  padding-top: 2px;
  color: #727272;
`;
const Comment = styled.p`
  background-color: ${(props) => props.theme.backgroundColor};
  display: block;
  line-height: 20px;
  color: ${(props) => props.theme.commentColor};
  word-wrap: break-word;
`;

export const AskDetail = memo(function Story({ commentId }) {
  // 여기서 다시 fetch로 코멘트 데이터 얻기
  const [commentIds, setCommentIds] = useState([]);
  const getCommentData = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
      .then(({ data }) => data && setCommentIds(data));

    return result;
  };

  const replyIds = commentIds.kids;

  useEffect(() => {
    getCommentData().then((data) => data && data.url && setCommentIds(data));
  }, []);

  return (
    <Wrapper>
      <UserInfo>
        <Info>
          <img src="/assets/user.png" alt="logo" />
          <span>{commentIds.by}</span>
          <img src="/assets/clock.png" alt="clock" />
          <Gray>{mapTime(commentIds.time)}</Gray>
        </Info>
        <img src="/assets/arrow_up_gray.png" alt="arrow_up_gray" />
      </UserInfo>
      <Comment dangerouslySetInnerHTML={{ __html: commentIds.text }} />
      {replyIds?.map((replyId, i) => (
        <Reply key={i} replyId={replyId} />
      ))}
    </Wrapper>
  );
});
