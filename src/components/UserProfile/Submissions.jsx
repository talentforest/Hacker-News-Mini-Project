import { useState, useEffect } from "react";
import { getUserSubmissions } from 'util/hnApi';
import { useNavigate } from 'react-router-dom';
import BasicItem from 'components/common/BasicItem';

const Submissions = ({ submittedId }) => {
  const navigator = useNavigate();
  const [story, setStory] = useState();

  useEffect(() => {
    getUserSubmissions(submittedId, setStory);
    return () => setStory([]);
  }, [submittedId]);

  return (
    <>
      {story?.type === "story"
        && !(story?.deleted === true)
        && !(story?.dead === true)
        ? (story?.title?.includes("Ask HN") ?
          <div
            role="link"
            onClick={() => navigator(`/ask/${story.id}`)}
          >
            <BasicItem story={story} />
          </div> :
          <a
            href={story.url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            <BasicItem story={story} />
          </a>)
        : null
      }
    </>
  )
}



export default Submissions;
