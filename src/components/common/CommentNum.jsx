import { Comment } from "@material-ui/icons";
import styled from "styled-components";

const CommentNum = ({ story }) => {
  return (
    <CommentBox>
      <Comment />
      <span>{story?.descendants}</span>
    </CommentBox>
  );
};

const CommentBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    width: 18px;
    margin-right: 3px;
    fill: ${(props) => props.theme.text.orange};
  }
  span:last-child {
    color: ${(props) => props.theme.text.orange};
    font-size: 13px;
    font-weight: 500;
  }
`;

export default CommentNum;
