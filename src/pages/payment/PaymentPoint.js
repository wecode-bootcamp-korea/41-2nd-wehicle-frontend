import React from 'react';
import { useState, useEffect } from 'react';
import Calender from './Calender';
import styled from 'styled-components';
import moment from 'moment';
import DaumPostCode from 'react-daum-postcode';

const PaymentPoint = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAddress, setTotalAddress] = useState('');
  const [zoneCode, setZoneCode] = useState('');
  const [product, setProduct] = useState({});
  const [point, setPoint] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const deliveryDate = moment(startDate).format('YYYY-MM-DD');

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleChange = date => {
    setStartDate(date);
  };
  useEffect(() => {
    fetch(`${BASE_URL}products/50`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.data);
      });
  }, []);

  const handleComplete = data => {
    setTotalAddress(data.address);
    setZoneCode(data.zonecode);
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
  };

  useEffect(() => {
    fetch(`${BASE_URL}orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setPoint(data.data[0]);
      });
  }, []);

  const orderBtn = () => {
    fetch(`${BASE_URL}users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        methodId: 5,
        address: totalAddress,
        deliveryDate: deliveryDate,
        dealPrice: totalPrice,
      }),
    })
      .then(res => res.json())
      .then(data => {
        alert('주문이 완료되었습니다.');
      });
  };

  const myPoint = Math.floor(point.points);
  const totalPrice = Math.floor(
    (myPoint - Math.floor(product?.productDetail.sellingPrice)) * 1.015
  );
  return (
    <Content>
      <Box>
        <ProductBox>
          <ProductImg src={product?.productDetail.thumbnail} />
          <ProductInfo>
            <ProductBrand>{product?.productDetail.brandName}</ProductBrand>
            <ProductName>{product?.productDetail.carName}</ProductName>
            <ProductMile>
              주행거리: {product?.productDetail.mileage}
            </ProductMile>
            <ProductYear>연식: {product?.productDetail.year}</ProductYear>
          </ProductInfo>
        </ProductBox>
      </Box>
      <Box>
        <Title>탁송주소</Title>
        <BtnBox>
          <AddressBtn onClick={showModal}>+ 새 주소 추가</AddressBtn>
        </BtnBox>
        {isModalOpen && (
          <AddressBox>
            <DaumPostCode
              onComplete={handleComplete}
              className="post-code"
              autoClose={true}
            />
          </AddressBox>
        )}
        <AddrForm>
          <ZipCodeInput type="text" value={zoneCode} readOnly />
          <AddrInput type="text" value={totalAddress} readOnly />
          <DetailAddrInput type="text" />
        </AddrForm>
      </Box>
      <Box>
        <Title>탁송날짜</Title>
        <Calender startDate={startDate} onChange={handleChange} />
      </Box>
      <Box>
        <Title>포인트</Title>
        <PointContent>{myPoint.toLocaleString('ko-KR')} point</PointContent>
      </Box>
      <Box>
        <Title>최종 주문 정보</Title>
        <PriceBox>
          <div>총 결제금액</div>
          <Price>{totalPrice}원</Price>
        </PriceBox>
        <PriceDetail>
          <DetailBox>
            <div>즉시 구매가</div>
            <div>
              {Math.floor(product?.productDetail.sellingPrice).toLocaleString(
                'ko-KR'
              )}
              원
            </div>
          </DetailBox>
          <DetailBox>
            <div>포인트</div>
            <div>{myPoint.toLocaleString('ko-KR')} point</div>
          </DetailBox>
          <DetailBox>
            <div>수수료</div>
            <div>1.5%</div>
          </DetailBox>
        </PriceDetail>
        <OrderButton onClick={orderBtn}>결제하기</OrderButton>
      </Box>
    </Content>
  );
};

export default PaymentPoint;

const AddressBox = styled.div``;
const AddrForm = styled.form``;
const AddrInput = styled.input.attrs({ placeholder: '주소 입력' })`
  width: 50%;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 7px;
`;
const DetailAddrInput = styled.input.attrs({ placeholder: '상세 주소' })`
  width: 100%;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 7px;
`;
const ZipCodeInput = styled.input.attrs({ placeholder: '우편 번호' })`
  width: 50%;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 7px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddressBtn = styled.p`
  width: 80px;
  height: 20px;
  color: #b2b2b2;
  font-size: 14px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 50px 0;
  background-color: #f5f5f5;
`;

const Box = styled.div`
  margin: 14px auto;
  max-width: 780px;
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
`;

const ProductBox = styled.div`
  display: flex;
  width: 100%;
`;

const ProductImg = styled.img`
  padding-top: 0;
  width: 170px;
  height: 170px;
  flex-shrink: 0;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  flex: 1;
  padding-top: 10px;
  padding-left: 26px;
`;

const ProductBrand = styled.div`
  font-weight: 700;
  font-size: 24px;
`;
const ProductName = styled.div`
  line-height: 17px;
  margin-top: 5px;
  font-size: 20px;
`;

const ProductYear = styled.div`
  line-height: 17px;
  margin-top: 7px;
  color: #666;
  font-size: 16px;
`;
const ProductMile = styled.div`
  line-height: 17px;
  margin-top: 50px;
  font-size: 16px;
  color: #666;
`;

const ProductYear = styled.div`
  line-height: 17px;
  margin-top: 5px;
  font-size: 14px;
`;
const ProductMile = styled.div`
  line-height: 17px;
  margin-top: 5px;
  font-size: 14px;
`;
const Title = styled.div`
  line-height: 22px;
  font-size: 24px;
  font-weight: 700;
`;

const PointContent = styled.div`
  font-size: 16px;
  line-height: 100%;
  padding: 16px 10px 14px;
  border: 1px solid #ebebeb;
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
  font-size: 16px;
  min-height: 26px;
`;

const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  margin: 5px 0;
`;

const OrderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-weight: 600;
  color: #fff;
  background-color: #222;
  width: 100%;
  font-size: 18px;
  height: 52px;
  border: none;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;
