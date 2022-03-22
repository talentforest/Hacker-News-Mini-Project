import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import styled from "styled-components";
import Reply from "./Reply";
import { useToggle } from "../../hooks/index"
import UserClockFolder from './UserClockFolder';

export const Comment = memo(function Story({ commentId }) {
  const [toggle, onFolder] = useToggle();
  const [commentIds, setCommentIds] = useState([]);

  const getCommentData = async () => {
    const { data } = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`);
    if (data) setCommentIds(data);
  };

  useEffect(() => {
    getCommentData().then((data) => data && data.url && setCommentIds(data));
  }, []);

  const replyIds = commentIds.kids;
  return (
    <CommentWrapper>
      <UserClockFolder commentIds={commentIds} onFolder={onFolder} />
      {toggle ? (
        <CommentText dangerouslySetInnerHTML={{ __html: commentIds.text }} />
      ) : <></>}
      {toggle
        ? replyIds?.map((replyId, i) => <Reply key={i} replyId={replyId} />)
        : <></>}
    </CommentWrapper>
  );
});

const CommentWrapper = styled.section`
  padding: 0 20px 10px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backgroundColor};
`
const CommentText = styled.p`
  background-color: ${(props) => props.theme.backgroundColor};
  display: block;
  line-height: 20px;
  color: ${(props) => props.theme.commentColor};
  word-wrap: break-word;
  white-space: pre-wrap;
`;


