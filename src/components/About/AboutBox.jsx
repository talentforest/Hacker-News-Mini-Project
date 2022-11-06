import { Link } from "react-router-dom";

const AboutBox = ({ title, text }) => {
  return (
    <div>
      <Link to={`/${title.toLowerCase()}`}>
        <span>
          {title}{" "}
          <img src={require("assets/arrow_right_orange.png")} alt="arrow" />
        </span>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default AboutBox;
