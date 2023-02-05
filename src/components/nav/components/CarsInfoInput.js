import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export default function CarsInfoInput({ title, placeholder, unit, setArr }) {
  const [tomato, setTomato] = useState('');

  const onBlurInput = e => {
    e.target.name !== '판매희망가' && setTomato('tomato');
  };

  const carInfo = () => {
    const { name, value } = e.target;
    setArr(prev => [
      ...prev,
      {
        year: '',
        mileage: '',
        price: '',
      },
    ]);
  };

  return (
    <CarsInfoInputContainer title={title}>
      <InputBox title={title}>
        <TitleBox>
          <Title title={title}>{title}</Title>
        </TitleBox>
        <InfoInput
          type="number"
          name={title}
          className={tomato}
          title={title}
          placeholder={placeholder}
          onChange={onBlurInput}
        />
        <Unit title={title}>{unit}</Unit>
      </InputBox>
    </CarsInfoInputContainer>
  );
}

const CarsInfoInputContainer = styled.div`
  margin-bottom: ${props => props.title === '주행거리' && '30px'};
`;

const InputBox = styled.ul`
  position: relative;
  margin: 0 50px 0;
  margin-top: ${props => props.title === '주행거리' && '-10px'};
  text-align: right;
`;

const TitleBox = styled.div`
  position: relative;
  text-align: left;
`;

const Title = styled.p`
  position: absolute;
  left: 10px;
  top: 45px;
  width: 20%;
  font-size: 20px;
  font-weight: 400;
  color: #ef6253;
`;

const InfoInput = styled.input`
  display: inline-block;
  text-align: right;
  width: 100%;
  padding: 0px 55px;
  padding-bottom: 13px;
  margin-top: 50px;
  border: none;
  border-bottom: 1px solid #ef6253;
  background: #fff;
  font-size: 20px;
  color: #222;
  z-index: 100;

  &::placeholder {
    font-size: 18px;
    color: #999;
  }

  &:focus {
    color: #ef6253;
    outline: none;
  }

  &.tomato {
    color: #ef6253;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

const Unit = styled.span`
  position: absolute;
  top: 49px;
  right: 23px;
  font-size: 20px;
  color: rgba(289, 98, 83, 0.7);
`;
