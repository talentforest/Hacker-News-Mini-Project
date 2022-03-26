const User = ({ commentIds, replyIdData, replyReplyIdData }) => {
  return (
    <>
      <img
        src={"/assets/user.png"}
        alt="logo"
      />
      <span>{commentIds?.by || replyIdData?.by || replyReplyIdData?.by}</span>
    </>
  )
}

export default User;
