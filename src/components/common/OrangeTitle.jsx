import styled from "styled-components";
import { maxChar } from "util";

const OrangeTitle = ({ story }) => {
  return (
    <>
      {story?.title?.includes("Ask HN") ||
      story?.title?.includes("Tell HN") ||
      story?.title?.includes("Show HN") ? (
        <h4>
          <OrangeColor>
            {`${story?.title?.split(" ")[0]} ${story?.title?.split(" ")[1]} `}
          </OrangeColor>
          {maxChar(story?.title?.slice(8), 60)}
        </h4>
      ) : (
        <h4>{story.title}</h4>
      )}
    </>
  );
};

const OrangeColor = styled.span`
  color: ${(props) => props.theme.text.orange};
`;

export default OrangeTitle;
