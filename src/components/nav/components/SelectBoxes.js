import React, { useState } from 'react';
import styled from 'styled-components';
import Select from './Select';

export default function SelectBoxes({ setArr }) {
  const [selectedBrand, setSelectedBrand] = useState('');

  const mappedList = [
    {
      id: 1,
      title: '브랜드',
      onClick: setSelectedBrand,
      list: BRAND_SELECT_BOX,
    },
    {
      id: 2,
      title: '차종',
      onClick: () => {},
      list: CAR_DATA[selectedBrand],
    },
    { id: 3, title: '유종', onClick: () => {}, list: OIL_SELECT_BOX },
    { id: 4, title: '색상', onClick: () => {}, list: COLOR_SELECT_BOX },
  ];

  return (
    <SelectsBox>
      {mappedList.map(({ id, title, list, onClick, selectedBrand }) => {
        return (
          <Select
            key={id}
            title={title}
            list={list}
            onClick={onClick}
            selectedBrand={selectedBrand}
          />
        );
      })}

      {/* <BrandSelectContainer>
        <SelectWindow>브랜드</SelectWindow>
        <SelectArrowBtn onClick={toggleSelectBox}>
          <IoMdArrowDropdown />
        </SelectArrowBtn>
        <BrandSelectBox selectBox={selectBox}>
          {BRAND_SELECT_BOX.map(data => {
            return <BrandSelect key={data.id}>{data.brand}</BrandSelect>;
          })}
        </BrandSelectBox>
      </BrandSelectContainer>

      <NameSelectContainer>
        <SelectWindow>차종</SelectWindow>
        <SelectArrowBtn onClick={toggleSelectBox}>
          <IoMdArrowDropdown />
        </SelectArrowBtn>
        <NameSelectBox selectBox={selectBox}>
          {HYUNDAI_CAR_LIST.map(data => {
            return <NameSelect key={data.id}>{data.species}</NameSelect>;
          })}
        </NameSelectBox>
      </NameSelectContainer>

      <TypeSelectContainer>
        <SelectWindow>차타입</SelectWindow>
        <SelectArrowBtn onClick={toggleSelectBox}>
          <IoMdArrowDropdown />
        </SelectArrowBtn>
        <TypeSelectBox selectBox={selectBox}>
          {TYPE_SELECT_BOX.map(data => {
            return <TypeSelect key={data.id}>{data.type}</TypeSelect>;
          })}
        </TypeSelectBox>
      </TypeSelectContainer> */}
    </SelectsBox>
  );
}

const BRAND_SELECT_BOX = [
  { id: 1, data: 'Hyundai' },
  { id: 2, data: 'Kia' },
  { id: 3, data: 'BMW' },
  { id: 4, data: 'Benz' },
  { id: 5, data: 'Audi' },
];

const CAR_DATA = {
  Hyundai: [
    { id: 1, data: '그랜저' },
    { id: 2, data: '싼타페' },
    { id: 3, data: '쏘나타' },
    { id: 4, data: '투싼' },
    { id: 5, data: '아반떼' },
    { id: 6, data: '코나' },
    { id: 7, data: '모닝' },
  ],
  Kia: [
    { id: 1, data: '카니발' },
    { id: 2, data: '스포티지' },
    { id: 3, data: '쏘렌토' },
    { id: 4, data: 'K8' },
    { id: 5, data: 'K5' },
    { id: 6, data: 'K3' },
    { id: 7, data: '레이' },
  ],
  BMW: [
    { id: 1, data: '5시리즈' },
    { id: 2, data: '3시리즈' },
    { id: 3, data: '7시리즈' },
    { id: 4, data: 'X3' },
    { id: 5, data: 'X5' },
    { id: 6, data: 'X7' },
  ],
  Benz: [
    { id: 1, data: 'E클래스' },
    { id: 2, data: 'C클래스' },
    { id: 3, data: 'S클래스' },
    { id: 4, data: 'GLE' },
    { id: 5, data: 'GLC' },
  ],
  Audi: [
    { id: 1, data: 'A3' },
    { id: 2, data: 'A4' },
    { id: 3, data: 'A8' },
    { id: 4, data: 'Q4' },
    { id: 5, data: 'Q6' },
  ],
};

const OIL_SELECT_BOX = [
  { id: 1, data: '휘발유' },
  { id: 2, data: '경유' },
];

const COLOR_SELECT_BOX = [
  { id: 1, data: 'Black' },
  { id: 2, data: 'White' },
  { id: 3, data: 'Red' },
  { id: 4, data: 'Blue' },
  { id: 5, data: 'Gray' },
];

const SelectsBox = styled.div`
  margin-top: 5px;
`;

// const SelectContainer = styled.div`
//   position: relative;
//   width: 97%;
//   margin-bottom: 15px;
// `;

// const SelectWindow = styled.button`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #222;
//   border-radius: 3px;
//   background: #fff;
//   font-size: 16px;
//   color: #222;
// `;

// const SelectArrowBtn = styled.div`
//   position: absolute;
//   right: 10px;
//   top: 7px;
//   cursor: pointer;
// `;

// const SelectBox = styled.ul`
//   position: absolute;
//   left: 0;
//   top: 43px;
//   display: ${props => (props.selectBox ? 'block' : 'none')};
//   width: 100%;
//   height: ${props => (props.list === OIL_SELECT_BOX ? '65px' : '80px')};
//   padding: 10px;
//   margin-top: 3px;
//   border: 1px solid #222;
//   background: #fff;
//   font-size: 16px;
//   text-align: center;
//   overflow-y: ${props => (props.list === OIL_SELECT_BOX ? '' : 'scroll')};
//   z-index: 99;
// `;

// const Select = styled.li`
//   color: #666;
//   cursor: pointer;
// `;

// const BrandSelectContainer = styled.div`
//   position: relative;
//   width: 97%;
//   margin-bottom: 15px;
// `;

// const SelectWindow = styled.button`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #222;
//   border-radius: 3px;
//   background: #fff;
//   font-size: 16px;
//   color: #222;
// `;

// const SelectArrowBtn = styled.div`
//   position: absolute;
//   right: 10px;
//   top: 7px;
// `;

// const BrandSelectBox = styled.ul`
//   position: absolute;
//   left: 0;
//   top: 43px;
//   display: ${props => (props.selectBox ? 'block' : 'none')};
//   width: 100%;
//   height: 80px;
//   padding: 10px;
//   margin-top: 3px;
//   border: 1px solid #222;
//   background: #fff;
//   font-size: 16px;
//   text-align: center;
//   overflow: scroll;
//   z-index: 99;
// `;

// const BrandSelect = styled.li`
//   color: #666;
// `;

// // NameSelectContainer 셀렉트박스

// const NameSelectContainer = styled(BrandSelectContainer)``;

// const NameSelectBox = styled(BrandSelectBox)``;

// const NameSelect = styled(BrandSelect)``;

// // TypeSelectContainer 셀렉트박스

// const TypeSelectContainer = styled(BrandSelectContainer)``;

// const TypeSelectBox = styled(BrandSelectBox)``;

// const TypeSelect = styled(BrandSelect)``;

// code test ..
// const [selectBox, setSelectBox] = useState('');
// const [selectedBrand, setSelectedBrand] = useState('');

// const handleSelectBox = title => {
//   if (title === '차종' && !selectedBrand) {
//     alert('브랜드를 먼저 선택해주세요!');

//     const mappedList = [
//       {
//         id: 1,
//         title: '브랜드',
//         onClick: setSelectedBrand,
//         list: BRAND_SELECT_BOX,
//       },
//       {
//         id: 2,
//         title: '차종',
//         onClick: () => {},
//         list: CAR_DATA[selectedBrand],
//       },
//       { id: 3, title: '차타입', onClick: () => {}, list: TYPE_SELECT_BOX },
//     ];

// <SelectBox>
// {mappedList.map(({ id, title, onClick, list }) => (
//   <BrandSelectContainer key={id}>
//     <SelectWindow>{title}</SelectWindow>
//     <SelectArrowBtn onClick={() => handleSelectBox(title)}>
//       <IoMdArrowDropdown />
//     </SelectArrowBtn>
//     <BrandSelectBox selectBox={title === selectBox}>
//       {list?.map(({ id, data }) => {
//         return (
//           <BrandSelect key={id} onClick={() => onClick(data)}>
//             {data}
//           </BrandSelect>
//         );
//       })}
//     </BrandSelectBox>
//   </BrandSelectContainer>
// ))}
// </SelectBox>
// );
