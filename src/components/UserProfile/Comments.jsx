import { useState, useEffect } from "react";
import { getUserSubmissions } from "util/hnApi";
import { CommentWrapper, CommentText } from "theme/commonStyle";
import UserClockFolder from "components/common/comments/UserClockFolder";
import styled from "styled-components";

const Comments = ({ submittedId }) => {
  const [story, setStory] = useState();

  useEffect(() => {
    getUserSubmissions(submittedId, setStory);
    return () => setStory([]);
  }, [submittedId]);

  return (
    <>
      {story?.type === "comment" &&
      !(story?.deleted === true) &&
      !(story?.dead === true) ? (
        <CommentsWrapper>
          <UserClockFolder story={story} />
          <CommentText>{story?.text}</CommentText>
        </CommentsWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

const CommentsWrapper = styled(CommentWrapper)`
  border-radius: 10px;
  margin-bottom: 10px;
`;

export default Comments;
