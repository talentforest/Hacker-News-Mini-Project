import CommentHeader from "components/common/comments/CommentHeader";

const Favorites = ({ story }) => {
  return <>{story?.parts ? <CommentHeader story={story} /> : null}</>;
};

export default Favorites;
