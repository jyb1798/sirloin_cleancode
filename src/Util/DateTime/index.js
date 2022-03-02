import React, { useState, useEffect } from "react";
import * as Style from "./style";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DateTime = (props) => {
  const [value, setValue] = useState([null, null]);
  const { state, setState } = props;

  useEffect(() => {
    setState(value);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        value={value}
        inputFormat="yyyy/MM/dd hh:mm"
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <Style.Calender>
            <div>
              <Style.Input
                ref={startProps.inputRef}
                {...startProps.inputProps}
              />
              <Style.IconButton icon={faChevronDown} />
            </div>
            <Box sx={{ mx: 0.1 }}> &nbsp;&nbsp;&nbsp;&nbsp; ~</Box>
            <div>
              <Style.Input ref={endProps.inputRef} {...endProps.inputProps} />
              <Style.IconButton icon={faChevronDown} />
            </div>
          </Style.Calender>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateTime;
