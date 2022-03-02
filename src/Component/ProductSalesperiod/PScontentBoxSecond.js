import React, { useContext, useEffect, useState } from "react";
import * as Style from "./style";
import RadioButton from "Util/RadioButton";
import { PDcontext } from "store/PDdata.js";

export const ProodctBox = (props) => {
  const context = useContext(PDcontext).PScontentBox;
  const state = context.state;
  const setState = context.setState;
  //console.log(state);

  const [value, setValue] = useState([true, false, false]);

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
      <Style.SelectRadio id="group2">
        <RadioButton />
      </Style.SelectRadio>
    </Style.Container>
  );
};

const PScontentBoxSecond = (props) => {
  return (
    <>
      <ProodctBox name={<h4>상품 판매 기한</h4>} />
    </>
  );
};

export default PScontentBoxSecond;
