import TitleReloadBtn from "components/molecules/TitleReloadBtn";
import TodaysShowPost from "components/organisms/home/TodaysShowPost";
import { useState } from "react";
import styled from "styled-components";

const TodaysShow = ({ showStoryIds }) => {
  const [num, setNum] = useState(0);

  return (
    <section>
      <TitleReloadBtn
        title="Today's Show"
        setNum={setNum}
        length={showStoryIds?.length}
      />
      <SlideBox>
        {showStoryIds.slice(num, num + 5).map((storyId) => (
          <TodaysShowPost key={storyId} storyId={storyId} />
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
  min-height: 224px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default TodaysShow;
