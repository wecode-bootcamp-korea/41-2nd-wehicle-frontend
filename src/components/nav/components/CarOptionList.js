import React, { useState } from 'react';
import styled from 'styled-components';

export default function CarOptionList({ data, arr, setArr }) {
  const [carOption, setCarOption] = useState(1);

  const toggleCarOption = () => {
    setCarOption(!carOption);
    setArr(prev => ({ ...prev, [data.name]: carOption ? 1 : 0 }));
  };

  return (
    <OptionList value={carOption} onClick={toggleCarOption}>
      {data.option}
    </OptionList>
  );
}

const OptionList = styled.li`
  padding: 16px;
  border: ${props => (props.value ? '1.5px solid #ef6253' : '')};
  border-radius: 10px;
  background: ${props => (props.value ? '#fff' : '#ef6253')};
  color: ${props => (props.value ? '#ef6253' : '#fff')};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
