import React from 'react';
import styled from 'styled-components';
import { AiFillThunderbolt } from 'react-icons/ai';

export default function FilterBtn() {
  return (
    <Button>
      <AiFillThunderbolt />
      빠른출고
    </Button>
  );
}

const Button = styled.button`
  width: 70px;
  height: 20px;
  border: 1px solid #ebebeb;
  padding: 0 7px 0 7px;
  border-radius: 17px;
  font-size: 11px;
  color: #222222;
`;
