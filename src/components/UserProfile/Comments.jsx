import { useState, useEffect } from "react";
import { getUserSubmissions } from "util/hnApi";
import UserClockFolder from "components/comments/UserClockFolder";
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
        <CommentWrapper>
          <UserClockFolder story={story} />
          <CommentText>{story?.text}</CommentText>
        </CommentWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

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
export default Comments;
