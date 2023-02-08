import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PopularTypeCarContent from './PopularTypeCarContent';

export default function PopularTypeCar() {
  const [currentTab, setCurrentTab] = useState('Sedan');
  const [typeProduct, setTypeProduct] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const changeUnderLine = e => {
    setCurrentTab(e.target.value);
  };

  useEffect(() => {
    fetch(
      `${BASE_URL}cars?type=${currentTab === 'Sedan' ? 1 : 2}&offset=0&limit=6`
    )
      .then(res => res.json())
      .then(data => {
        setTypeProduct(data.data);
      });
  }, [currentTab]);

  return (
    <PopularTypeCarBox>
      <Title>What Kind of</Title>
      <CategoryBox>
        <BtnSedan title={currentTab} value="Sedan" onClick={changeUnderLine}>
          Sedan
        </BtnSedan>
        <BtnSuv title={currentTab} value="SUV" onClick={changeUnderLine}>
          SUV
        </BtnSuv>
      </CategoryBox>
      <PopularTypeCarContainer>
        {typeProduct.map(data => {
          return <PopularTypeCarContent key={data.id} data={data} />;
        })}
      </PopularTypeCarContainer>
    </PopularTypeCarBox>
  );
}

const PopularTypeCarBox = styled.div`
  display: block;
  margin: 110px 100px 110px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

const CategoryBox = styled.div`
  width: 100%;
  margin-top: 30px;
  border-bottom: 1px solid #999;
`;

const BtnSuv = styled.button`
  display: inline-block;
  width: 150px;
  padding: 10px;
  border: none;
  border-bottom: ${props => (props.title === 'SUV' ? '4px solid #222' : '')};
  background: #fff;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

const BtnSedan = styled.button`
  display: inline-block;
  width: 150px;
  padding: 10px;
  border: none;
  border-bottom: ${props => (props.title === 'Sedan' ? '4px solid #222' : '')};
  background: #fff;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

const PopularTypeCarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  column-gap: 30px;
  justify-content: center;
  padding: 40px 0;
`;
