import React, { useContext, useEffect, useState } from "react";
import * as Style from "./style";
import RadioButton from "Util/RadioButton";
import DateTimePickers from "Util/DateTimePicker";
import { PDcontext } from "store/PDdata.js";

export const ProodctBox = (props) => {
  const [value, setValue] = useState([true, false, false]);
  const context = useContext(PDcontext).PScontentBox;
  const state = context.state;
  const setState = context.setState;

  useEffect(() => {
    const newState = { ...state };
    if (value[0]) {
      newState.showPeriod = "제한 없음";
    } else if (value[1]) {
      newState.showPeriod = "미판매";
    } else {
    }
    setState(newState);
  }, [value]);

  return (
    <Style.Container>
      <Style.TitleBox>
        <h4>{props.name}</h4>
      </Style.TitleBox>
      <RadioButton value={value} setValue={setValue} />

      <Style.RadioContentBox>
        <Style.CheckBoxWrapper className="bottom_margin"></Style.CheckBoxWrapper>
        <div>
          <DateTimePickers />
          <DateTimePickers />
        </div>
      </Style.RadioContentBox>
    </Style.Container>
  );
};

const PScontentBox = (props) => {
  return (
    <>
      <ProodctBox name={<h4>상품 노출 기한</h4>} />
    </>
  );
};

export default PScontentBox;
