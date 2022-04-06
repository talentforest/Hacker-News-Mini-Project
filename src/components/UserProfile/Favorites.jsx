import CommentHeader from 'components/common/Comments/CommentHeader';

const Favorites = ({ story }) => {
  return (
    <>
      {story?.parts ?
        <CommentHeader story={story} /> : null
      }
    </>
  )
}


export default Favorites;
