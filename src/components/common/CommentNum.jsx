import styled from "styled-components";

const CommentNum = ({ story }) => {
  return (
    <Comment>
      <img src={require("assets/comment.png")} alt="commentimg" />
      <span>{story?.descendants}</span>
    </Comment>
  )
}

const Comment = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 20px;
    margin-right: 3px;
  }
  span:last-child {
    color: #ed702d;
    font-size: 13px;
    font-weight: 500;
  }
`

export default CommentNum;
