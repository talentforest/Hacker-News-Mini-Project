import styled from "styled-components";
import { useLocation } from "react-router-dom";

const SortView = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;
const Sort = styled.div`
  display: flex;
  margin-left: 20px;
  select {
    background: url("/assets/arrow_down_darkgray.png") no-repeat 80% 50%/10px
      auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 76px; */
    height: 22px;
    background-color: ${(props) => props.theme.containerColor};
    color: ${(props) => props.theme.textColor};
    font-size: 12px;
    margin-right: 6px;
    padding: 0 16px 0 11px;
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
      <select name="result" id="result-select">
        <option value="Result">Result</option>
        <option value="Point">Point</option>
        <option value="Comment">Comment</option>
        <option value="Writer">Writer</option>
      </select>

      <select name="time" id="time">
        <option value="time">time</option>
        <option value="06:00">06:00</option>
        <option value="07:00">07:00</option>
        <option value="08:00">08:00</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
      </select>
    </Sort>
  );
};

export const SortViewModeBtn = () => {
  const location = useLocation();

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
