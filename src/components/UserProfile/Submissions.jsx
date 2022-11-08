import { useState, useEffect } from "react";
import { getUserSubmissions } from "util/hnApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Title } from "@material-ui/icons";
import { changeUrlMark } from "util";
import UserPointsTime from "components/common/UserPointsTime";
import CommentNum from "components/common/CommentNum";

const Submissions = ({ submittedId }) => {
  const navigator = useNavigate();
  const [story, setStory] = useState();

  useEffect(() => {
    getUserSubmissions(submittedId, setStory);
    return () => setStory([]);
  }, [submittedId]);

  return (
    <>
      {story?.type === "story" &&
      !(story?.deleted === true) &&
      !(story?.dead === true) ? (
        story?.title?.includes("Ask HN") ? (
          <div role="link" onClick={() => navigator(`/ask/${story.id}`)}>
            <Box>
              <Title title={story.title} />
              <span>{changeUrlMark(story?.url)}</span>
              <Footer>
                <UserPointsTime story={story} />
                <CommentNum story={story} />
              </Footer>
            </Box>
          </div>
        ) : (
          <a
            href={story.url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            <Box>
              <Title title={story.title} />
              <span>{changeUrlMark(story?.url)}</span>
              <Footer>
                <UserPointsTime story={story} />
                <CommentNum story={story} />
              </Footer>
            </Box>
          </a>
        )
      ) : null}
    </>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.container.default};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.text.default};
  margin: 0 auto 16px;
  padding: 15px 12px;
  > h4 {
    height: 48px;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;
  }
  > span {
    height: 32px;
    margin-top: 5px;
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.theme.container.header};
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.text.lightGray};
`;

export default Submissions;
