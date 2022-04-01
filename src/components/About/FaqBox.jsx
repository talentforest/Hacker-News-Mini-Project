const FaqBox = ({ title }) => {
  return (
    <div>
      {title}
      <img
        src={require("assets/arrow_down_darkgray.png")}
        alt="arrow"
      />
    </div>
  )
}

export default FaqBox;
