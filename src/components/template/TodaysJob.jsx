import Title from "components/atom/Title";
import TodaysJobPost from "components/organisms/home/TodaysJobPost";
import styled from "styled-components";

const TodaysJob = ({ jobStoryIds }) => {
  return (
    <section>
      <Title title="Today's Job" />
      <SlideBox>
        {jobStoryIds.slice(0, 10).map((storyId) => (
          <TodaysJobPost key={storyId} storyId={storyId} />
        ))}
      </SlideBox>
    </section>
  );
};

const SlideBox = styled.div`
  display: flex;
  overflow: scroll;
  background-color: ${(props) => props.theme.background.default};
  padding: 5px;
  margin: 10px -5px -5px;
  min-height: 154px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default TodaysJob;
