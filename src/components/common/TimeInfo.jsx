import { AccessTime } from "@material-ui/icons";
import { mapTime } from "util";

const TimeInfo = ({ story }) => {
  return (
    <>
      <AccessTime />
      <span>{mapTime(story.time)}</span>
    </>
  );
};

export default TimeInfo;
