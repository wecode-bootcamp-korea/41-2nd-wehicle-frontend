import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function BuyModal() {
  const navigate = useNavigate();
  const [option, setOption] = useState([]);

  useEffect(() => {
    fetch('/data/buyModalOption.json')
      .then(res => res.json())
      .then(data => setOption(data));
  }, []);

  const alertByBuyBtn = () => {
    alert('구매가 완료되었습니다.');
    navigate('/');
  };

  return (
    <BuyModalBox>
      <Title>구매하기</Title>
      <CarInfo>
        <CarImgBox>
          <CarImg src="/images/buyModal/car_01.png" />
        </CarImgBox>
        <CarDetailInfo>
          <CarBrand>BMW</CarBrand>
          <CarType>523d xDrive</CarType>
          <CarPrice>₩ 40,000,000</CarPrice>
        </CarDetailInfo>
      </CarInfo>
      <CarOptionContainer>
        <CarOptionBox>
          {option.map(data => {
            return (
              <OptionList key={data.id}>
                <Option>{data.option}</Option>
              </OptionList>
            );
          })}
        </CarOptionBox>
      </CarOptionContainer>
      <BuyBtnBox>
        <BuyBtn onClick={alertByBuyBtn}>
          구매하기
          <br />
          <span>(5~7일 소요)</span>
        </BuyBtn>
      </BuyBtnBox>
    </BuyModalBox>
  );
}

const BuyModalBox = styled.div`
  width: 600px;
  height: 650px;
  margin: 50px auto;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  padding-top: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

const CarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 560px;
  height: 200px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const CarImgBox = styled.div`
  width: 300px;
  height: 240px;
`;
const CarImg = styled.img`
  width: 100%;
  translate: 0 40px;
`;
const CarDetailInfo = styled.div`
  width: 230px;
  margin-top: 60px;
  font-size: 24px;

  color: #222;
`;

const CarBrand = styled.p`
  font-weight: 600;
`;

const CarType = styled.p`
  font-size: 18px;
  margin-top: -4px;
  color: #999;
`;

const CarPrice = styled.p`
  margin-top: 10px;
  color: #ef6253;
  font-size: 20px;
  font-weight: 600;
`;

const CarOptionContainer = styled.div`
  margin-top: 30px;
`;

const CarOptionBox = styled.ul`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(4, 20%);
  column-gap: 10px;
  row-gap: 10px;
`;

const OptionList = styled.li`
  padding: 16px;
  border-radius: 10px;
  background: #222;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

const Option = styled.p``;

const BuyBtnBox = styled.div`
  width: 560px;
  padding: 25px 0 23px;
  margin: 93px auto 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const BuyBtn = styled.button`
  width: 540px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background: #ef6253;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;

  span {
    margin-top: -5px;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.7;
  }
`;

export default BuyModal;
