import styled from "styled-components";
import { SortBtn } from './SortBtn';

const SortView = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;
const View = styled.div`
  padding-right: 20px;
  img {
    width: 24px;
    margin-left: 9px;
    cursor: pointer;
  }
`;

export const SortViewModeBtn = () => {
  return (
    <SortView>
      <SortBtn />
      <View>
        <img
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/bullet_list.png"
          alt="bullet list"
        />
        <img
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/mode_list.png"
          alt="mode list"
        />
      </View>
    </SortView>
  );
};
