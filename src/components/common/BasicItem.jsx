import { urlName } from 'util';
import { Site } from 'theme/commonStyle';
import styled from "styled-components"
import OrangeTitle from 'components/common/OrangeTitle';
import CommentNum from 'components/common/CommentNum';
import UserPointsTime from 'components/common/UserPointsTime';

const BasicItem = ({ story }) => {
  return (
    <SubmissionBox >
      <div>
        <OrangeTitle story={story} />
        <Site>
          {urlName(story)}
        </Site>
      </div>
      <PostInfo>
        <div>
          <UserPointsTime story={story} />
        </div>
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
  > div {
    height: 48px;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;
  }
`;
const PostInfo = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #949494;
  > div:first-child {
    display: flex;
    align-items: center;
    height: 40px;
    span {
      margin-right: 8px;
    }
  }
  img {
    width: 16px;
    height: 16px;
    margin-right: 3.3px;
  }
`;

export default BasicItem;
