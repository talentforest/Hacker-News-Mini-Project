import { urlName } from 'util';
import { Site } from 'theme/commonStyle';
import styled from "styled-components"
import OrangeTitle from 'components/common/OrangeTitle';
import CommentNum from 'components/common/CommentNum';
import UserPointsTime from 'components/common/UserPointsTime';

const Submissions = ({ story }) => {
  return (
    <SubmissionBox >
      <h4>
        {story?.title.includes("Ask HN" || "Tell HN" || "Show HN")
          ? <OrangeTitle story={story} />
          : story?.title}
        <Site>
          {urlName(story)}
        </Site>
      </h4 >
      <PostInfo>
        <UserPointsTime story={story} />
        <CommentNum story={story} />
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

export default Submissions;
