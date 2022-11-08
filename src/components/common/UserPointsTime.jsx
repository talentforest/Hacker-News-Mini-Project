import { mapTime } from "util/mapTime";
import Username from "components/common/Username";
import SkeletonItem from "components/skeleton/SkeletonItem";
import styled from "styled-components";

const UserPointsTime = ({ story, style, noIcon }) => {
  return (
    <Box>
      {story ? (
        <>
          {noIcon ? (
            <span>{story.by}</span>
          ) : (
            <Username story={story} style={style} />
          )}
          <span>{story.score} points</span>
          <span>{mapTime(story.time)}</span>
        </>
      ) : (
        <SkeletonItem width="70%" />
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
