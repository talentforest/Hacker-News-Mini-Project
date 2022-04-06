import { useState, useEffect, memo } from "react";
import { useToggle } from "hooks/index"
import { getCommentData } from 'util/hnApi';
import { CommentWrapper, CommentText } from "theme/commonStyle";
import UserClockFolder from './UserClockFolder';
import Reply from "./Reply";

const Comment = memo(function Story({ commentId }) {
  const [toggle, onFolder] = useToggle();
  const [commentIds, setCommentIds] = useState([]);

  useEffect(() => {
    getCommentData(commentId, setCommentIds)
  }, [commentId]);

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



export default Comment;
