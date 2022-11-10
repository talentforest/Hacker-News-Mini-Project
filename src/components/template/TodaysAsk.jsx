import TitleReloadBtn from "components/molecules/TitleReloadBtn";
import TodaysAskPost from "components/organisms/home/TodaysAskPost";
import { useState } from "react";
import styled from "styled-components";

const TodaysAsk = ({ userStoryIds }) => {
  const [num, setNum] = useState(0);

  return (
    <section>
      <TitleReloadBtn
        title="Today's Ask"
        setNum={setNum}
        length={userStoryIds?.length}
      />
      <List>
        {userStoryIds?.slice(num, num + 5).map((storyId) => (
          <TodaysAskPost key={storyId} storyId={storyId} />
        ))}
      </List>
    </section>
  );
};

const List = styled.ul`
  margin-top: 15px;
`;

export default TodaysAsk;
