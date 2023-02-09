import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { ko } from 'date-fns/esm/locale';

const Calender = ({ startDate, onChange }) => {
  return (
    <Picker
      locale={ko}
      showIcon
      selected={startDate}
      dateFormat="yyyy-MM-dd"
      onChange={onChange}
      minDate={new Date()}
    />
  );
};

export default Calender;

const Picker = styled(DatePicker)`
  margin-top: 10px;
  height: 22px;
  padding: 10px 12px;
  font-size: 18px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`;
