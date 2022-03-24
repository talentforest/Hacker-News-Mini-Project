import styled from "styled-components";

export default function SortBtn() {
  const selectResult = ["Result", "Point", "Comment", "Writer"];
  const selectTime = ["time", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

  return (
    <Sort>
      <select name="result" id="result-select" >
        {selectResult.map((item) =>
          <option key={item} value={item}>{item}</option>)}
      </select>

      <select name="time" id="time">
        {selectTime.map((item) =>
          <option key={item} value={item}>{item}</option>)}
      </select>
    </Sort>
  );
};

const Sort = styled.div`
  display: flex;
  margin-left: 20px;
  select {
    background: url("https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_down_darkgray.png")
      no-repeat 80% 50%/10px auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
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



