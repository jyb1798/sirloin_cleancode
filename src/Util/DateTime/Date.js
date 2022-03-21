import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

// import Date from "Util/DateTime/Date";
// import "react-datepicker/dist/react-datepicker.css"; 함께 import

const Calendar = (props) => {
  const [startDate, setStartDate] = useState();
  const { state, setState } = props;

  useEffect(() => {
    setState(startDate);
  }, [startDate]);

  //console.log(state);

  return (
    <MyDatePicker
      
      dateFormat="yyyy.MM.dd"
      selected={startDate}
      closeOnScroll={true}
      onChange={(date) => setStartDate(date)}
      placeholderText="YYYY.MM.DD"
    />
  );
};

export default Calendar;

const MyDatePicker = styled(DatePicker)`
  width: 100px;
  height: 20px;
`;
