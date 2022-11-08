import { mapTime } from "util/mapTime";
import Username from "components/common/Username";
import SkeletonItem from "components/skeleton/SkeletonItem";
import styled from "styled-components";

const UserPointsTime = ({ story, style }) => {
  return (
    <>
      <Username story={story} style={style} />
      {story ? (
        <Info>
          <span>{story.score} points</span>
          <span>{mapTime(story.time)}</span>
        </Info>
      ) : (
        <SkeletonItem width="40%" />
      )}
    </>
  );
};

const Info = styled.div`
  display: flex;
  gap: 5px;
`;

export default UserPointsTime;
