import React, { useState } from "react";
import * as S from "./style";
import Radio from "Util/RadioButton";
import DateTimePicker from "react-datetime-picker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";

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
    <S.Container>
      <S.TitleBox>
        <h4>{props.name}</h4>
      </S.TitleBox>
      <S.RadioContainer>
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

        <S.CheckBoxWrapper className="bottom_margin"></S.CheckBoxWrapper>
        <div>
          <S.DatePickerContainer>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params) => <TextField {...params} />}
                value={exposureStartDate}
                inputFormat="yyyy.MM.dd hh:mm"
                mask="____년 __월 __일"
                onChange={(newValue) => {
                  setExposureStartDate(newValue);
                }}
                disabled={!isExposureLimited}
              />
              <S.Separator>~</S.Separator>
              <DateTimePicker
                value={exposureEndDate}
                inputFormat="yyyy.MM.dd hh:mm"
                mask="____년 __월 __일 hh:mm"
                onChange={(newValue) => {
                  setExposureEndDate(newValue);
                }}
                minDate={exposureStartDate}
                renderInput={(params) => <TextField {...params} />}
                disabled={!isExposureLimited}
              />
            </LocalizationProvider>
          </S.DatePickerContainer>
        </div>
      </S.RadioContainer>
    </S.Container>
  );
};

export default PScontentBox;
