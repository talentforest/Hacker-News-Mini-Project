import { useState, useEffect, memo } from "react";
import { useToggle } from "hooks/index";
import { getCommentData } from "util/hnApi";
import UserClockFolder from "./UserClockFolder";
import Reply from "./Reply";
import styled from "styled-components";

const Comment = memo(function Story({ commentId }) {
  const [toggle, onFolder] = useToggle();
  const [commentIds, setCommentIds] = useState([]);

  useEffect(() => {
    getCommentData(commentId, setCommentIds);
  }, [commentId]);

  const replyIds = commentIds.kids;

  return (
    <CommentWrapper>
      <UserClockFolder commentIds={commentIds} onFolder={onFolder} />
      {toggle ? (
        <CommentText dangerouslySetInnerHTML={{ __html: commentIds.text }} />
      ) : (
        <></>
      )}
      {toggle ? (
        replyIds?.map((replyId, i) => <Reply key={i} replyId={replyId} />)
      ) : (
        <></>
      )}
    </CommentWrapper>
  );
});

const CommentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 20px 10px;
  background-color: ${(props) => props.theme.background.default};
`;
const CommentText = styled.p`
  width: 100%;
  background-color: ${(props) => props.theme.background.default};
  display: block;
  line-height: 20px;
  color: ${(props) => props.theme.container.default};
  word-wrap: break-word;
  white-space: pre-wrap;
  margin-bottom: 14px;
`;

export default Comment;
