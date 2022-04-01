import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { urlName } from 'util';
import { WhiteTag } from 'theme/commonStyle';
import styled from "styled-components";
import UserPointsTime from 'components/common/UserPointsTime';
import OrangeTitle from 'components/common/OrangeTitle';

const ShowBox = memo(function ShowStory({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Post>
      {urlName(story) ? <WhiteTag>{urlName(story)}</WhiteTag> : <></>}
      <a href={story.url}>
        <h4><OrangeTitle story={story} /></h4>
      </a>
      <div>
        <UserPointsTime story={story} />
        <div>
          <img
            src={require("assets/comment.png")}
            alt="comments"
          />
          <span>{story.descendants}</span>
        </div>
      </div>

    </Post>
  );
});

const Post = styled.div`
  position: relative;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  margin-bottom: 16px;
  padding: 14px 12px 14px;
  color: ${(props) => props.theme.textColor};
  h4 {
    padding: 12px 0;
    font-weight: 600;
    line-height: 24px;
    height: 80px;
    color: ${(props) => props.theme.textColor};
  }
  > div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 12px;
    color: #949494;
    img {
      width: 16px;
      height: 16px;
      margin-right: 3.3px;
    }
    > div:last-child {
      display: flex;
      align-items: center;
      color: #ed702d;
    }
  }
`;
// const Tag = styled.div`
//   position: absolute;
//   width: fit-content;
//   height: 20px;
//   padding: 5px 6px;
//   background-color: #efefef;
//   font-size: 10px;
//   color: #ed702d;
//   border-radius: 20px;
// `;

export default ShowBox;
