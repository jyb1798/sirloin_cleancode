import React, { useCallback, useState } from "react";
import DateTimePickers from "Util/DateTimePicker";
import Box from "@mui/material/Box";
import * as Style from "./style";

const RedioButton = (props) => {
  const [startDate, setstartDate] = useState([null, null]);
  const [endDate, setendDate] = useState([null, null]);

  const value = props.value;
  const setValue = props.setValue;

  const [clickedCondition, setclickedCondition] = useState({
    selectValue: "제한 없음",
  });
  const [periodsData, setPeriodData] = useState(`상품 판매 기한 : 제한 없음`);

  const HandleValue = (e) => {
    console.log(e);
    console.log(e.target.value, value);
    if (e.target.value === "제한 없음") {
      setValue([true, false, false]);
    } else if (e.target.value === "미판매") {
      setValue([false, true, false]);
    } else {
      setValue([false, false, true]);
    }
  };

  return (
    <Style.ProductListContainer>
      <Style.ContentsBox>
        <Style.Box>
          <Style.Input
            id="periodShow"
            type="radio"
            name="group2"
            value="제한 없음"
            checked
            // checked={
            //   clickedCondition.selectValue === "제한 없음" ? true : false
            // }
            onChange={useCallback((e) => HandleValue(e))}
          />
          <label for="periodShow">
            <span>제한 없음</span>
          </label>
        </Style.Box>
        <Style.Box>
          <Style.Input
            id="periodHide"
            type="radio"
            name="group2"
            value="미판매"
            // checked={value[1] === undefined ? true : value[1]}
            // checked={clickedCondition.selectValue === "미판매" ? true : false}
            onChange={useCallback((e) => HandleValue(e))}
          />
          <label for="periodHide">
            <span>미판매</span>
          </label>
        </Style.Box>
        <Style.Box>
          <Style.Input
            id="periodSetting"
            type="radio"
            name="group2"
            value="판매 기간 설정"
            // checked={value[2] === undefined ? true : value[2]}
            // checked={
            //   clickedCondition.selectValue === "판매 기간 설정" ? true : false
            // }
            onChange={useCallback((e) => HandleValue(e))}
          />
          <label for="periodSetting">
            <span>판매 기간 설정</span>
          </label>
        </Style.Box>
        <Style.DateTimePickersContainer>
          <DateTimePickers />
          <Box sx={{ mx: 0.1 }}>
            &nbsp;&nbsp;&nbsp;&nbsp; ~&nbsp;&nbsp;&nbsp;&nbsp;
          </Box>
          <DateTimePickers />
        </Style.DateTimePickersContainer>
      </Style.ContentsBox>
    </Style.ProductListContainer>
  );
};

export default RedioButton;
