import styled from "styled-components";

const SortView = styled.div`
  display: flex;
  justify-content: space-between;
  width: 390px;
  padding-right: 20px;
  height: 24px;
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
    width: 16px;
  }
`;
const View = styled.div`
  img {
    width: 24px;
    margin-left: 9px;
  }
`;

export const SortBtn = () => {
  return (
    <Sort>
      <div>
        <span>Results</span>
        <img src="img/arrow_down.png" alt="arrow down" />
      </div>
      <div>
        <span>Time</span>
        <img src="img/arrow_down.png" alt="arrow down" />
      </div>
    </Sort>
  );
};

export const SortListBtn = () => {
  return (
    <SortView>
      <SortBtn />
      <View>
        <img src="img/bullet_list.png" alt="bullet list" />
        <img src="img/mode_list.png" alt="mode list" />
      </View>
    </SortView>
  );
};
