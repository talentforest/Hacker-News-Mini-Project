import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { getStory } from 'util/hnApi';
import Comment from 'components/common/Comments/Comment';
import styled from "styled-components"
import CommentSortBtn from 'components/common/Comments/CommentSortBtn';

const ShowComments = () => {
  const location = useLocation();
  const [story, setStory] = useState([]);

  const storyId = location.pathname.split("/show/")[1]

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Container>
      <CommentSortBtn story={story} />
      {story?.kids?.slice(0, 16).map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      ))}
    </Container>
  )
}

const Container = styled.section`
  min-height: 100vh;
  background-color:  ${(props) => props.theme.backgroundColor};;
`

export default ShowComments
