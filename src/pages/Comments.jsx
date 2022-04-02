import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { getStory } from 'util/hnApi';
import Comment from 'components/common/Comments/Comment';
import styled from "styled-components"
import CommentHeader from 'components/common/Comments/CommentHeader';
import Loading from 'components/Loading';

const Comments = () => {
  const location = useLocation();
  const [story, setStory] = useState(null);
  const storyId = location.pathname.split("/")[2]

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Container>
      <CommentHeader story={story} />
      {story === null ? <Loading /> : story?.kids?.slice(0, 20).map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      ))}
    </Container>
  )
}

const Container = styled.section`
  min-height: 100vh;
  background-color:  ${(props) => props.theme.backgroundColor};;
`

export default Comments;
