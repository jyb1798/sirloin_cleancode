import React, { useCallback, useState, useEffect } from "react";
import DateTimePickers from "Util/DateTimePicker";
import Box from "@mui/material/Box";
import * as Style from "./style";

const RadioButton = () => {
  const [checkboxArry, setCheckboxArry] = useState([
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

  const handleChange = useCallback((e, value: CheckboxItem) => {});
  return <div>index</div>;
};

export default RadioButton;
