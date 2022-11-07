import { AccessTime } from "@material-ui/icons";
import styled from "styled-components";
import { mapTime } from "util";

const TimeInfo = ({ story }) => {
  return (
    <Info>
      <AccessTime />
      <span>{mapTime(story?.time)}</span>
    </Info>
  );
};

const Info = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text.lightGray};
  span {
    font-weight: 400;
    font-size: 12px;
  }
  svg {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
`;

export default TimeInfo;
