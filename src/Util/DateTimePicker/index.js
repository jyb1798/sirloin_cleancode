import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const DateTimePickers = (props) => {
  const setValue = props.setValue;
  const { state, setState, acitve, minDateTime, maxDateTime, callback } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        inputFormat="yyyy/MM/dd hh:mm"
        mask="____/__/__ __:__"
        onError={callback}
        value={state}
        disabled={!acitve}
        onChange={(newValue) => {
          setState(newValue);
          setValue([false, true, false]);
        }}
        minDateTime={minDateTime}
        maxDateTime={maxDateTime}
      />
    </LocalizationProvider>
  );
};

export default DateTimePickers;
