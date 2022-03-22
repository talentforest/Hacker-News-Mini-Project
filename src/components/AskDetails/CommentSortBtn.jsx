import styled from "styled-components";

export default function CommentSortBtn() {
  return (
    <Sort>
      <div>
        <div>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/circle_orange.png"
            alt="bullet"
          />
          <span>Registerd</span>
        </div>
        <div>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/circle_gray.png"
            alt="bullet"
          />
          <span>Newest</span>
        </div>
      </div>
      <img src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/comment.png" alt="commentimg" />
    </Sort>
  )
}

const Sort = styled.div`
  height: 35px;
  padding: 12px 20px 8px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundColor};
  div {
    display: flex;
    font-size: 14px;
    font-weight: 600;
    img {
      width: 6px;
      height: 6px;
      margin-right: 4px;
    }
    div {
      display: flex;
      align-items: center;
      span {
        padding-top: 2px;
        margin-right: 10px;
      }
    }
  }
`;
