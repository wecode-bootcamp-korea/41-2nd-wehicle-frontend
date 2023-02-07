import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DaumPostCode from 'react-daum-postcode';

const KakaoAddr = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAddress, setTotalAddress] = useState('');
  const [zoneCode, setZoneCode] = useState('');
  const [product, setProduct] = useState({});
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
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
    fetch(`http://10.58.52.122:3000/products/50`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <Content>
      <Box>
        <ProductBox>
          <ProductImg src={product.data.productDetail.thumbnail} />
          <ProductInfo>
            <ProductBrnad>{product.data.productDetail.brandName}</ProductBrnad>
            <ProductName>{product.data.productDetail.carName}</ProductName>
            <ProductMile>
              주행거리: {product.data.productDetail.mileage}
            </ProductMile>
            <ProductYear>연식: {product.data.productDetail.year}</ProductYear>
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

export default KakaoAddr;

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

const ProductImg = styled.img`
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
