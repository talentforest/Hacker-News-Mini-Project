import { useState, useEffect } from "react";
import { getUserSubmissions } from "util/hnApi"
import { useNavigate } from 'react-router-dom';
import Submissions from '../UserProfile/Submissions';

const UserProfileTemplate = ({ submittedId }) => {
  const [story, setStory] = useState();
  const navigator = useNavigate();

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
        :
        <a href={story.url} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
          <Submissions story={story} />
        </a>
      }
    </>
  ) : <></>;
}


export default UserProfileTemplate;
