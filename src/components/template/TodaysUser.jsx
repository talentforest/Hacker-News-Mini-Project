import CutTitle from "components/common/CutTitle";
import TodaysUserPost from "components/organisms/home/TodaysUserPost";
import styled from "styled-components";

const TodaysUser = ({ topStoryIds }) => {
  return (
    <section>
      <CutTitle title="Today's User" />
      <SlideBox>
        {topStoryIds.slice(0, 5).map((storyId, index) => (
          <TodaysUserPost key={storyId} storyId={storyId} index={index} />
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

export default TodaysUser;
