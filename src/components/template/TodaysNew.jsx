import TodaysNewPost from "components/organisms/home/TodaysNewPost";
import { useState } from "react";
import styled from "styled-components";
import TitleReloadBtn from "../molecules/TitleReloadBtn";

const TodaysNew = ({ newStoryIds }) => {
  const [num, setNum] = useState(0);

  return (
    <section>
      <TitleReloadBtn
        title="Today's New"
        setNum={setNum}
        length={newStoryIds?.length}
      />
      <ListBox>
        {newStoryIds?.slice(num, num + 5).map((storyId) => (
          <TodaysNewPost key={storyId} storyId={storyId} />
        ))}
      </ListBox>
    </section>
  );
};

const List = styled.ul`
  margin-top: 15px;
`;

const ListBox = styled(List)`
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.container.default};
  border-radius: 8px;
  min-height: 500px;
`;

export default TodaysNew;
