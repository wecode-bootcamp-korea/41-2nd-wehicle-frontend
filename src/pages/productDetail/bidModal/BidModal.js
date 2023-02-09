import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

function BidModal({ carDetail, removeModal, setModal1 }) {
  const navigate = useNavigate();
  const { brandName, carName, thumbnail, sellingPrice } = carDetail;
  const price = Math.floor(sellingPrice).toLocaleString();

  // const closeBtn = () => {
  //   removeModal;
  // };

  const alertByBidBtn = () => {
    alert('입찰이 완료되었습니다.');
    navigate('/');
  };

  return (
    <BidModalContainer>
      <BidModalBox>
        <Title>입찰하기</Title>
        <CarInfo>
          <CarImgBox>
            <CarImg src={thumbnail} />
          </CarImgBox>
          <CarDetailInfo>
            <CarBrand>{brandName}</CarBrand>
            <CarType>{carName}</CarType>
            <CarPrice>₩ {price}</CarPrice>
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
        <CloseBtn onClick={removeModal}>
          <IoMdClose />
        </CloseBtn>
      </BidModalBox>
    </BidModalContainer>
  );
}

const BidModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #222;
  z-index: 2;
`;

const BidModalBox = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 588px;
  margin: 50px auto;
  background: #fff;
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
  height: 210px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const CarImgBox = styled.div`
  width: 270px;
  height: 150px;
  margin-top: 30px;
  margin-left: 25px;
`;

const CarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarDetailInfo = styled.div`
  width: 230px;
  margin-top: 60px;
  font-size: 24px;
  text-align: left;
  color: #222;
`;

const CarBrand = styled.p`
  font-weight: 600;
`;

const CarType = styled.p`
  margin-top: 5px;
  font-size: 18px;
  color: #999;
`;

const CarPrice = styled.p`
  margin-top: 20px;
  color: #ef6253;
  font-size: 24px;
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
  top: 65px;
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

const CloseBtn = styled.div`
  position: fixed;
  right: 25px;
  top: 25px;
  transform: (-50%, -50%);
  font-size: 24px;
  color: #222;
  cursor: pointer;
`;

export default BidModal;
