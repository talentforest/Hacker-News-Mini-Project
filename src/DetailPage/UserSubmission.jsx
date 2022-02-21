import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { submissionFields } from "../util/selectFields";
import { mapTime } from "../util/mapTime";

const SubmissionBox = styled.div`
  width: 350px;
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 4px 3px rgba(0, 0, 0, 0.05);
  color: ${(props) => props.theme.textColor};
  margin-bottom: 16px;
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h4`
  height: 48px;
  font-weight: 600;
  line-height: 24px;
`;
const Orange = styled.span`
  color: #ed702d;
`;

const Url = styled.div`
  margin-top: 5px;
  font-size: 12px;
  line-height: 20px;
  height: 20px;
  color: #b7b7b7;
  text-decoration: underline;
  pre {
    white-space: pre-wrap;
  }
`;
const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 36px;
  font-size: 12px;
  padding: 22px 0 14px;
  color: #949494;
  img {
    width: 16px;
    height: 16px;
    margin-right: 3.3px;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textColor};
`;
const UserInfo = styled.div`
  margin-left: 6px;
  display: flex;
  color: #949494;
  span:first-child {
    margin-right: 6px;
  }
`;
const Comments = styled.div`
  display: flex;
  align-items: center;
  color: #ed702d;
`;

export default function UserSubmission({ submittedId }) {
  const [userSubmissions, setUserSubmissions] = useState();
  // 유저데이터를 얻고 submitted데이터 얻기
  const getUserSubmissions = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${submittedId}.json`)
      .then(({ data }) => data && submissionFields(data));
    return result;
  };

  useEffect(() => {
    getUserSubmissions().then((data) => data.title && setUserSubmissions(data));
  }, []);

  const orangeWords = `${userSubmissions?.title.split(" ")[0]} ${
    userSubmissions?.title.split(" ")[1]
  }`;

  const urlName = userSubmissions?.url?.slice(8).split("/")[0];

  return userSubmissions && userSubmissions.title ? (
    <SubmissionBox>
      <Title>
        {userSubmissions.title?.includes("Ask HN") ||
        userSubmissions.title?.includes("Tell HN") ||
        userSubmissions.title?.includes("Show HN") ? (
          <>
            <Orange>{`${orangeWords}`}</Orange>{" "}
            {`${userSubmissions.title?.slice(8)}`}
          </>
        ) : (
          userSubmissions.title
        )}
        <Url>
          <a href={userSubmissions?.url}>
            {urlName?.includes("www") ? urlName.slice(4) : urlName}
          </a>
        </Url>
      </Title>

      <PostInfo>
        <User>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/user.png"
            alt="userimg"
          />
          <span>{userSubmissions.by}</span>
          <UserInfo>
            <span>{userSubmissions.score} points</span>
            <span>{mapTime(userSubmissions.time)}</span>
          </UserInfo>
        </User>
        <Comments>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/comment.png"
            alt="comments"
          />
          <span>{userSubmissions.descendants}</span>
        </Comments>
      </PostInfo>
    </SubmissionBox>
  ) : null;
}
