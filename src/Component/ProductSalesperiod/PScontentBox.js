import React, { useState } from "react";
import * as Style from "./style";
import Radio from "Util/RadioButton";
import { DateTimePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import { ReactComponent as ChevronDown } from "assets/images/chevron-down.svg";

const PScontentBox = (props) => {
  const [isExposure, setIsExposure] = useState(true);
  const [exposureStartDate, setExposureStartDate] = useState(null);
  const [isExposureLimited, setIsExposureLimited] = useState(false);
  const [exposureEndDate, setExposureEndDate] = useState(null);

  const changeExposure = () => {
    setIsExposure((prev) => !prev);
    setIsExposureLimited(false);
  };

  const changeExposureTerm = () => {
    setIsExposure(true);
    setIsExposureLimited(true);
  };

  return (
    <Style.Container>
      <Style.TitleBox>
        <h4>{props.name}</h4>
      </Style.TitleBox>
      <Radio
        radioName="exposure"
        id="noLimitExposure"
        label="제한 없음"
        checked
        onChange={changeExposure}
      />
      <Radio
        radioName="exposure"
        id="noExposureExposure"
        label="미노출"
        onChange={changeExposure}
      />
      <Radio
        radioName="exposure"
        id="settingTermExposure"
        label="노출 기간 설정"
        onChange={changeExposureTerm}
      />
      <Style.RadioContentBox>
        <Style.CheckBoxWrapper className="bottom_margin"></Style.CheckBoxWrapper>
        <div>
          <DateTimePicker
            renderInput={(params) => <TextField {...params} />}
            value={exposureStartDate}
            inputFormat="yyyy.MM.dd hh:mm"
            mask="____년 __월 __일"
            onChange={(newValue) => {
              setExposureStartDate(newValue);
            }}
            components={{
              OpenPickerIcon: ChevronDown,
            }}
            disabled={!isExposureLimited}
          />
          <DateTimePicker
            value={exposureEndDate}
            inputFormat="yyyy.MM.dd hh:mm"
            mask="____년 __월 __일 hh:mm"
            onChange={(newValue) => {
              setExposureEndDate(newValue);
            }}
            minDate={exposureStartDate}
            components={{
              OpenPickerIcon: ChevronDown,
            }}
            renderInput={(params) => <TextField {...params} />}
            disabled={!isExposureLimited}
          />
        </div>
      </Style.RadioContentBox>
    </Style.Container>
  );
};

export default PScontentBox;
