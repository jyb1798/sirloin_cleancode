import React from "react";
import * as S from "./style";

function Radio({ radioName, id, label, checked, onChange }) {
  return (
    <S.RadioWrapper>
      <S.RadioButton
        name={radioName}
        id={id}
        defaultChecked={checked}
        onChange={onChange}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.RadioWrapper>
  );
}

export default Radio;
