import styled from "styled-components";
import CommentNum from "../common/CommentNum";

const CommentHeader = ({ story }) => {
  return (
    <Sort>
      <Mark />
      <span>Comments</span>
      <CommentNum number={story?.descendants} />
    </Sort>
  );
};

const Sort = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 32px 20px 8px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => props.theme.background.default};
  div:last-child {
    margin-left: auto;
  }
`;

const Mark = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.text.orange};
`;

export default CommentHeader;
