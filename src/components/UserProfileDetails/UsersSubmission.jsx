import { useState, useEffect } from "react";
import { getUserSubmissions } from "util/hnApi"
import { mapTime } from "util/mapTime";
import { imgBaseUrl } from 'util/Constant';
import styled from "styled-components";

const UsersSubmission = ({ submittedId }) => {
  const [userSubmissions, setUserSubmissions] = useState();

  useEffect(() => {
    getUserSubmissions(submittedId, setUserSubmissions);
  }, [submittedId]);

  const orangeWords = `${userSubmissions?.title?.split(" ")[0]} ${userSubmissions?.title?.split(" ")[1]} `;

  const urlName = userSubmissions?.url

  return userSubmissions && userSubmissions.title ? (
    <SubmissionBox>
      <h4>
        {userSubmissions.title?.includes("Ask HN") ||
          userSubmissions.title?.includes("Tell HN") ||
          userSubmissions.title?.includes("Show HN") ? (
          <>
            <Orange>{`${orangeWords}`}</Orange>
            {`${userSubmissions.title?.slice(8)}`}
          </>
        ) : (
          userSubmissions.title
        )}
        <Url>
          <a href={userSubmissions?.url}>
            {urlName?.includes("http://") ?
              urlName.slice(7) : urlName?.includes("https://") ?
                urlName.slice(8) : urlName}
          </a>
        </Url>
      </h4>

      <PostInfo>
        <User>
          <img
            src={`${imgBaseUrl}user.png`}
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
            src={`${imgBaseUrl}comment.png`}
            alt="comments"
          />
          <span>{userSubmissions.descendants}</span>
        </Comments>
      </PostInfo>
    </SubmissionBox>
  ) : <></>;
}

const SubmissionBox = styled.div`
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 4px 3px rgba(0, 0, 0, 0.05);
  color: ${(props) => props.theme.textColor};
  margin: 0 auto 16px;
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    height: 48px;
    font-weight: 600;
    line-height: 24px;
  }
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

export default UsersSubmission;
