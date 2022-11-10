import { useState, useEffect } from "react";
import { useToggle } from "hooks/index";
import { getData } from "util/hnApi";
import UserClockFolder from "../../molecules/UserClockFolder";
import Reply from "./Reply";
import styled from "styled-components";

const Comment = ({ commentId, userprofileComments }) => {
  const [toggle, onFolder] = useToggle();
  const [comments, setComments] = useState();

  useEffect(() => {
    getData(commentId, setComments);
    return () => {
      setComments();
    };
  }, [commentId]);

  return (
    !userprofileComments?.deleted && (
      <Box>
        <UserClockFolder
          data={comments?.by ? comments : userprofileComments}
          onFolder={onFolder}
        />
        {toggle && (
          <>
            <p
              dangerouslySetInnerHTML={{
                __html: comments?.text || userprofileComments?.text,
              }}
            />
            {!userprofileComments &&
              comments?.kids?.map((replyId) => (
                <Reply key={replyId} replyId={replyId} />
              ))}
          </>
        )}
      </Box>
    )
  );
};

const Box = styled.ul`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.background.default};
  > p {
    width: 100%;
    word-wrap: break-word;
    white-space: pre-wrap;
    line-height: 1.3;
    color: ${(props) => props.theme.text.default};
    margin-bottom: 14px;
  }
`;

export default Comment;
