import CommentHeader from "components/comments/CommentHeader";

const Favorites = ({ story }) => {
  return <>{story?.parts ? <CommentHeader story={story} /> : null}</>;
};

export default Favorites;
