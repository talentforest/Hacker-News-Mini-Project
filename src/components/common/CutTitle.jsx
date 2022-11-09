import styled from "styled-components";
import { maxChar } from "util";

const Title = ({ title }) => {
  const orangeWord =
    title?.includes("Ask HN") ||
    title?.includes("Tell HN") ||
    title?.includes("Show HN");

  return (
    <>
      {title && orangeWord ? (
        <Box>
          <OrangeColor>
            {`${title?.split(" ")[0]} ${title?.split(" ")[1]} `}
          </OrangeColor>
          {maxChar(title?.slice(8), 60)}
        </Box>
      ) : (
        <Box>{maxChar(title, 68)}</Box>
      )}
    </>
  );
};

const Box = styled.h4`
  color: ${(props) => props.theme.text.default};
`;

const OrangeColor = styled.span`
  color: ${(props) => props.theme.text.orange};
`;

export default Title;
