const CommentNum = ({ story }) => {

  console.log(story)
  return (
    <div>
      <img src={"/assets/comment.png"} alt="commentimg" />
      <span>{story?.descendants}</span>
    </div>
  )
}

export default CommentNum;
