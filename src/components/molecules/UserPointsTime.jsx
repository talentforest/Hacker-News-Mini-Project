import { mapTime } from "util/mapTime";
import Username from "components/atom/Username";
import SkeletonItem from "components/atom/skeleton/SkeletonItem";
import styled from "styled-components";

const UserPointsTime = ({ story, noIcon }) => {
  return (
    <Box>
      {story ? (
        <>
          {noIcon ? <span>{story.by}</span> : <Username by={story.by} />}
          <span>{story.score} points</span>
          <span>{mapTime(story.time)}</span>
        </>
      ) : (
        <>
          <Username />
          <SkeletonItem width="50px" />
        </>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.text.lightGray};
`;

export default UserPointsTime;
