import { useState, useEffect } from "react";
import { getUserSubmissions } from "util/hnApi"
import { useNavigate } from 'react-router-dom';

import Submissions from './Submissions';

const UsersSubmission = ({ submittedId }) => {
  const navigator = useNavigate();
  const [story, setStory] = useState();

  useEffect(() => {
    getUserSubmissions(submittedId, setStory);
    return () => setStory([]);
  }, [submittedId]);

  return story && story.title ? (
    <>
      {story.title.includes("Ask HN") ?
        <div role="link" onClick={() => navigator(`/ask/${story.id}`)} style={{ cursor: "pointer" }}>
          <Submissions story={story} />
        </div>
        : <Submissions story={story} />}
    </>
  ) : <></>;
}


export default UsersSubmission;
