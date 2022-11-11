import styled from "styled-components";
import { maxChar } from "util";

const PostTitle = ({ title, notCutted }) => {
  const checkOrangeWord =
    title?.includes("Ask HN") ||
    title?.includes("Tell HN") ||
    title?.includes("Show HN");

  const orangeWord = `${title?.split(" ")[0]} ${title?.split(" ")[1]} `;

  return (
    <Box>
      {title && checkOrangeWord ? (
        <>
          <OrangeColor>{orangeWord}</OrangeColor>
          {maxChar(title?.slice(8), notCutted ? title?.length : 60)}
        </>
      ) : (
        maxChar(title, notCutted ? title?.length : 68)
      )}
    </Box>
  );
};

const Box = styled.h4`
  color: ${(props) => props.theme.text.default};
`;

const OrangeColor = styled.span`
  color: ${(props) => props.theme.text.orange};
`;

export default PostTitle;
