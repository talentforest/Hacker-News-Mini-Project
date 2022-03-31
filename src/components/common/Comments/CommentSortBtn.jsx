import styled from "styled-components";
import CommentNum from '../CommentNum';

const CommentSortBtn = ({ story }) => {
  return (
    <Sort>
      <div>
        <img
          src={require("assets/circle_orange.png")}
          alt="bullet"
        />
        <span>Comments</span>
      </div>
      <CommentNum story={story} />
    </Sort>
  )
}

const Sort = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  margin-top: 20px;
  padding: 12px 20px 8px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => props.theme.backgroundColor};
  div {
    display: flex;
    align-items: center;
    margin-right: 5px;
    img {
      width: 8px;
      margin-right: 5px;
    }
  }
  div:last-child {
    img{
      width: 16px;
    }
  }
`;

export default CommentSortBtn;
