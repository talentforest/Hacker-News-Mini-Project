import { mapTime, urlName } from 'util';
import styled from "styled-components"
import OrangeTitle from 'components/common/OrangeTitle';

const Submissions = ({ story }) => {

  return (
    <SubmissionBox >
      <h4>
        {story?.title.includes("Ask HN") ||
          story?.title.includes("Tell HN") ||
          story?.title.includes("Show HN") ? (
          <>
            <OrangeTitle story={story} />
          </>
        ) : (
          story?.title
        )}
        <Url>
          <a href={story.url} target="blank">
            {urlName(story)}
          </a>
        </Url>
      </h4 >
      <PostInfo>
        <User>
          <img
            src={"/assets/user.png"}
            alt="userimg"
          />
          <span>{story?.by}</span>
          <UserInfo>
            <span>{story?.score} points</span>
            <span>{mapTime(story?.time)}</span>
          </UserInfo>
        </User>
        <Comments>
          <img
            src={"/assets/comment.png"}
            alt="comments"
          />
          <span>{story?.descendants}</span>
        </Comments>
      </PostInfo >
    </SubmissionBox >
  )
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

const Url = styled.div`
  margin-top: 5px;
  font-size: 12px;
  line-height: 20px;
  height: 20px;
  a {
    color: #b7b7b7;
    text-decoration: underline;
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


export default Submissions;
