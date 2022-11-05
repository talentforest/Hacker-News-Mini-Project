import styled from "styled-components";
import CommentNum from "../CommentNum";

const CommentHeader = ({ story }) => {
  return (
    <Sort>
      <div>
        <img src={require("assets/circle_orange.png")} alt="bullet" />
        <span>Comments</span>
      </div>
      <CommentNum story={story} />
    </Sort>
  );
};

const Sort = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  padding: 32px 20px 8px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => props.theme.background.default};
  div {
    display: flex;
    align-items: center;
    margin-right: 5px;
    img {
      width: 8px;
      margin-right: 5px;
    }
  }
  > div:first-child {
    span {
      color: ${(props) => props.theme.text.default};
    }
  }
  > div:last-child {
    img {
      width: 16px;
    }
  }
`;

export default CommentHeader;
