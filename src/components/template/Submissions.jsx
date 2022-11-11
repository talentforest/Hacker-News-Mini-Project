import { useState, useEffect } from "react";
import { getData } from "util/hnApi";
import { changeUrlMark } from "util";
import { Link } from "react-router-dom";
import UserPointsTime from "components/molecules/UserPointsTime";
import CommentNum from "components/atom/CommentNum";
import PostTitle from "components/atom/PostTitle";
import styled from "styled-components";
import Comment from "components/organisms/comments/Comment";
import SkeletonItem from "components/atom/skeleton/SkeletonItem";

const Submissions = ({ buttonMode, submittedId }) => {
  const [story, setStory] = useState();

  useEffect(() => {
    getData(submittedId, setStory);
    return () => setStory();
  }, [submittedId]);

  const innerDoc =
    story?.title?.includes("Ask HN") ||
    story?.title?.includes("Show HN") ||
    story?.title?.includes("Tell HN");

  const checkDocLink = () => {
    if (story?.title?.includes("Ask HN")) return `/ask/${story?.id}`;
    if (story?.title?.includes("Show HN")) return `/show/${story?.id}`;
    if (story?.title?.includes("Tell HN")) return `/show/${story?.id}`;
  };

  const deletedItem = story?.deleted || story?.dead;

  return story ? (
    <>
      {buttonMode === "submissions" && story?.type === "story" && !deletedItem && (
        <SubmissionBox>
          <a href={story?.url} target="_blank" rel="noreferrer">
            <PostTitle title={story.title} />
            <span>{changeUrlMark(story?.url)}</span>
          </a>
          <Footer>
            <UserPointsTime story={story} />
            <Link to={innerDoc ? checkDocLink() : `/ask/${story?.id}`}>
              <CommentNum number={story?.descendants} />
            </Link>
          </Footer>
        </SubmissionBox>
      )}
      {buttonMode === "comments" &&
        story?.type === "comment" &&
        !deletedItem && <Comment userprofileComments={story} />}
    </>
  ) : (
    <SubmissionBox>
      <SkeletonItem height="20px" />
      <SkeletonItem height="20px" />
      <SkeletonItem height="10px" width="20%" />
      <Footer>
        <UserPointsTime />
        <SkeletonItem width="20%" />
      </Footer>
    </SubmissionBox>
  );
};

export const SubmissionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.background.default};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.text.default};
  margin: 0 auto 16px;
  padding: 15px 12px;
  > a {
    height: 100%;
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
  }
  > ul {
    padding: 0;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.text.lightGray};
  a {
    width: 40px;
  }
`;

export default Submissions;
