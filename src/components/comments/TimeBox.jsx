import { AccessTime } from "@material-ui/icons";
import styled from "styled-components";
import { mapTime } from "util";

const TimeBox = ({ time }) => {
  return (
    <Box>
      <AccessTime />
      <span>{mapTime(time)}</span>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default TimeBox;
