import styled from "styled-components";
import { maxChar } from "util";

const Title = ({ title }) => {
  return (
    <>
      {title &&
      (title?.includes("Ask HN") ||
        title?.includes("Tell HN") ||
        title?.includes("Show HN")) ? (
        <h4>
          <OrangeColor>
            {`${title?.split(" ")[0]} ${title?.split(" ")[1]} `}
          </OrangeColor>
          {maxChar(title?.slice(8), 60)}
        </h4>
      ) : (
        <h4>{maxChar(title, 68)}</h4>
      )}
    </>
  );
};

const OrangeColor = styled.span`
  color: ${(props) => props.theme.text.orange};
`;

export default Title;
