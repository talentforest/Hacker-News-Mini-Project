import styled from "styled-components";

const SortView = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;
const Sort = styled.div`
  display: flex;
  margin-left: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 76px;
    height: 22px;
    background-color: #fff;
    border: 0.5px solid #dfdfdf;
    font-size: 12px;
    margin-right: 6px;
    border-radius: 20px;
  }
  img {
    width: 8px;
    margin-left: 4px;
  }
`;
const View = styled.div`
  padding-right: 20px;
  img {
    width: 24px;
    margin-left: 9px;
    cursor: pointer;
  }
`;

export const SortBtn = () => {
  return (
    <Sort>
      <div>
        <span>Results</span>
        <img src="/assets/arrow_down_gray.png" alt="arrow down" />
      </div>
      <div>
        <span>Time</span>
        <img src="/assets/arrow_down_gray.png" alt="arrow down" />
      </div>
    </Sort>
  );
};

export const SortViewModeBtn = () => {
  return (
    <SortView>
      <SortBtn />
      <View>
        <img src="/assets/bullet_list.png" alt="bullet list" />
        <img src="/assets/mode_list.png" alt="mode list" />
      </View>
    </SortView>
  );
};
