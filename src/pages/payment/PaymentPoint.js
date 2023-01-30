import React from 'react';
import Calender from './Calender';
import styled from 'styled-components';

const PaymentPoint = () => {
  return (
    <Content>
      <Box>
        <ProductBox>
          <ProductImg>이미지자리</ProductImg>
          <ProductInfo>
            <ProductBrnad>브랜드</ProductBrnad>
            <ProductName>차이름</ProductName>
          </ProductInfo>
        </ProductBox>
      </Box>
      <Box>
        <Title>탁송주소</Title>
        <PointContent></PointContent>
      </Box>
      <Box>
        <Title>탁송날짜</Title>
        <Calender />
      </Box>
      <Box>
        <Title>포인트</Title>
        <PointContent>보유보인트 :</PointContent>
      </Box>
      <Box>
        <Title>최종 주문 정보</Title>
        <PriceBox>
          <div>총 결제금액</div>
          <Price>얼마입니다.</Price>
        </PriceBox>
        <PriceDetail>
          <DetailBox>
            <Detail>즉시 구매가</Detail>
            <DetailPrice>얼마</DetailPrice>
          </DetailBox>
          <DetailBox>
            <Detail>포인트</Detail>
            <DetailPrice>얼마</DetailPrice>
          </DetailBox>
          <DetailBox>
            <Detail>검수비</Detail>
            <DetailPrice>얼마</DetailPrice>
          </DetailBox>
        </PriceDetail>
        <OrderButton>결제하기</OrderButton>
      </Box>
    </Content>
  );
};

export default PaymentPoint;

const Content = styled.div`
  background-color: #fafafa;
`;

const Box = styled.div`
  margin: 0 auto;
  max-width: 780px;
  padding: 32px;
  background-color: #fff;
  border-top: 8px solid #fafafa;
  &:last-child {
    border-bottom: 20px solid #fafafa;
  }
`;

const ProductBox = styled.div`
  display: flex;
  width: 100%;
`;

const ProductImg = styled.div`
  padding-top: 0;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  flex: 1;
  padding-left: 16px;
`;

const ProductBrnad = styled.div`
  font-weight: 700;
  font-size: 14px;
`;
const ProductName = styled.div`
  line-height: 17px;
  margin-top: 5px;
  font-size: 14px;
`;
const Title = styled.div`
  line-height: 22px;
  font-size: 18px;
  font-weight: 700;
`;

const PointContent = styled.div`
  font-size: 15px;
  line-height: 100%;
  padding: 17px 5px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  margin-top: 25px;
  width: 100%;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  padding-bottom: 20px;
  border-bottom: 2px solid #ebebeb;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const PriceDetail = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 11px;
  font-size: 13px;
  min-height: 26px;
  font-size: 13px;
`;

const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  margin: 5px 0;
`;

const Detail = styled.div``;

const DetailPrice = styled.div``;

const OrderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-weight: 700;
  color: #fff;
  background-color: #222;
  width: 100%;
  font-size: 16px;
  height: 52px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  opacity: 0.3;
`;
