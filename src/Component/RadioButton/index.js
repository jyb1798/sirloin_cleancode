import React, { useCallback, useEffect, useState } from "react";
import * as S from "./style";

const RadioButton = () => {
  const [checkboxArray, setCheckboxArray] = useState([
    {
      id: "a123",
      name: "제한 없음",
      checked: true,
    },
    {
      id: "b123",
      name: "미노출",
      checked: false,
    },
    {
      id: "c123",
      name: "노출 기간 설정",
      checked: false,
    },
  ]);

  useEffect(() => {
    console.table(checkboxArray);
  }, [checkboxArray]);

  const handleChange = useCallback((e, value) => {
    setCheckboxArray((prev) =>
      prev.map((item) =>
        item.id === value.id ? { ...item, checeked: e.target.checked } : item
      )
    );
    console.log(setCheckboxArray);
  }, []);

  return (
    <form>
      <div>
        {checkboxArray.map((value) => (
          <S.RadioContainer key={value.id} style={{ marginBottom: "10px" }}>
            <label htmlFor={value.id}>{value.name}</label>
            <S.RadioInput
              id={value.id}
              type="radio"
              checked="checked"
              value={value.name}
              onChange={(e) => handleChange(e, value)}
            />
          </S.RadioContainer>
        ))}
      </div>
    </form>
  );
};

export default RadioButton;
