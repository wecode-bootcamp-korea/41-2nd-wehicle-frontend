import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function BidModal() {
  const navigate = useNavigate();

  const alertByBidBtn = () => {
    alert('입찰이 완료되었습니다.');
    navigate('/');
  };

  return (
    <BidModalBox>
      <Title>입찰하기</Title>
      <CarInfo>
        <CarImgBox>
          <CarImg src="/images/bidModal/car_01.png" />
        </CarImgBox>
        <CarDetailInfo>
          <CarBrand>BMW</CarBrand>
          <CarType>523d xDrive</CarType>
          <CarPrice>₩ 40,000,000</CarPrice>
        </CarDetailInfo>
      </CarInfo>
      <BidPriceContainer>
        <BidPriceBox>
          <WishPriceTitleBox>
            <WishPriceTitle>입찰희망가</WishPriceTitle>
          </WishPriceTitleBox>
          <WishPriceInput placeholder="희망가를 입력해주세요" />
          <Won>원</Won>
        </BidPriceBox>
      </BidPriceContainer>
      <BidBtnBox>
        <BidBtn onClick={alertByBidBtn}>
          입찰하기
          <br />
        </BidBtn>
      </BidBtnBox>
    </BidModalBox>
  );
}

const BidModalBox = styled.div`
  width: 600px;
  height: 588px;
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

const BidPriceContainer = styled.div`
  margin-top: 55px;
`;

const BidPriceBox = styled.ul`
  position: relative;
  margin: 0 50px;
  text-align: right;
`;

const WishPriceTitleBox = styled.div`
  text-align: left;
`;

const WishPriceTitle = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: #222;
`;

const WishPriceInput = styled.input`
  display: inline-block;
  text-align: right;
  width: 100%;
  padding: 20px 55px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  background: #f7f7f7;
  font-size: 20px;
  color: #222;

  &::placeholder {
    font-size: 18px;
    color: #999;
  }

  &:focus {
    outline: none;
  }
`;

const Won = styled.span`
  position: absolute;
  top: 68px;
  right: 23px;
  font-size: 20px;
`;

const BidBtnBox = styled.div`
  width: 560px;
  padding: 25px 0;
  margin: 30px auto;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const BidBtn = styled.button`
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
    font-size: 14px;
    font-weight: 400;
    opacity: 0.7;
  }
`;

export default BidModal;
