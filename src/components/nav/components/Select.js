import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Select({ id, title, list, onClick, selectedBrand }) {
  const [selectBox, setSelectBox] = useState('');
  const [changeTitle, setChangeTitle] = useState(title);

  const handleSelectBox = title => {
    // if (title === '차종' && !selectedBrand) {
    //   alert('브랜드를 먼저 선택해주세요!');

    //   return;
    // }

    if (title === selectBox) {
      setSelectBox('');
    } else {
      setSelectBox(title);
    }
  };

  const toggleSelectBox = data => {
    setChangeTitle(data);
    onClick(data);
    setSelectBox(false);
  };

  return (
    <SelectContainer>
      <SelectWindow>{changeTitle}</SelectWindow>
      <SelectArrowBtn onClick={() => handleSelectBox(title)}>
        <IoMdArrowDropdown />
      </SelectArrowBtn>
      <SelectBox selectBox={title === selectBox} list={list}>
        {list &&
          list.map(({ id, data }) => {
            return (
              <SelectTxt key={id} onClick={() => toggleSelectBox(data)}>
                {data}
              </SelectTxt>
            );
          })}
      </SelectBox>
    </SelectContainer>
  );
}

const OIL_SELECT_BOX = [
  { id: 1, data: '휘발유' },
  { id: 2, data: '경유' },
];

const SelectContainer = styled.div`
  position: relative;
  width: 97%;
  margin-bottom: 15px;
`;

const SelectWindow = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #222;
  border-radius: 3px;
  background: #fff;
  font-size: 16px;
  color: #222;
`;

const SelectArrowBtn = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
  cursor: pointer;
`;

const SelectBox = styled.ul`
  position: absolute;
  left: 0;
  top: 43px;
  display: ${props => (props.selectBox ? 'block' : 'none')};
  width: 100%;
  height: ${props => (props.list === OIL_SELECT_BOX ? '65px' : '80px')};
  padding: 10px;
  margin-top: 3px;
  border: 1px solid #222;
  background: #fff;
  font-size: 16px;
  text-align: center;
  overflow-y: ${props => (props.list === OIL_SELECT_BOX ? '' : 'scroll')};
  z-index: 99;
`;

const SelectTxt = styled.li`
  color: #666;
  cursor: pointer;
`;
