import React, { useCallback, useEffect, useState } from "react";
import * as S from "./style";

const RadioButton = () => {
  const [checkboxArray, setCheckboxArray] = useState([
    {
      id: "a123",
      name: "test1",
      checked: false,
    },
    {
      id: "b123",
      name: "test2",
      checked: false,
    },
    {
      id: "c123",
      name: "test3",
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
  }, []);

  return (
    <div>
      {checkboxArray.map((value) => (
        <S.RadioContainer key={value.id} style={{ marginBottom: "10px" }}>
          <label htmlFor={value.id}>{value.name}</label>
          <S.RadioInput
            id={value.id}
            type="checkbox"
            value={value.name}
            onChange={(e) => handleChange(e, value)}
          />
          <span>{value.checked.toString()}</span>
        </S.RadioContainer>
      ))}
    </div>
  );
};

export default RadioButton;
