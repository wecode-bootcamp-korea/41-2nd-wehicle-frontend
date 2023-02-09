import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BiBookmark, BiCheckCircle } from 'react-icons/bi';
import {
  MdAirlineSeatReclineExtra,
  MdOutlineVerified,
  MdVerified,
} from 'react-icons/md';
import { TbDeviceComputerCamera, TbCarCrash } from 'react-icons/tb';
import { GrMap } from 'react-icons/gr';
import { GiCarSeat } from 'react-icons/gi';
import { FiCircle, FiPackage } from 'react-icons/fi';
import { RiCarWashingFill } from 'react-icons/ri';
import ChartBox from './ChartBox';
import Carousel from './Carousel';
import BuyModal from './buyModal/BuyModal';
import BidModal from './bidModal/BidModal';

const ProductDetail = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [carData, setCarData] = useState({});
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const params = useParams();

  const showModal1 = () => {
    setModal1(true);
  };

  const showModal2 = () => {
    setModal2(true);
  };

  const removeModal1 = () => {
    setModal1(false);
  };

  const removeModal2 = () => {
    setModal2(false);
  };

  useEffect(() => {
    fetch(`${BASE_URL}products/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setCarData(data);
      });
  }, []);

  if (!carData.data) return <></>;

  const carDetail = carData.data.productDetail;
  const optionItems = carDetail.options[0];
  const images = carDetail.images;
  const thumbnail = carDetail.thumbnail;
  const topPrice = carDetail.biddingPrice;

  const chartData = carData.data.productMarketPrice;

  return (
    <DetailContent>
      <LeftColumn>
        <Carousel images={images} thumbnail={thumbnail} />
        <ProductInfo>
          <MainOption>주요옵션</MainOption>
          <OptionList>
            {ICON_LIST.map(data => {
              return (
                <OptionItem option={optionItems[data.keyName]} key={data.id}>
                  {data.item}
                  <ItemName>{data.title}</ItemName>
                </OptionItem>
              );
            })}
          </OptionList>
        </ProductInfo>
      </LeftColumn>

      <RightColumn>
        <div>
          <div>
            <MainTop>
              <div>
                <Title>{carDetail.brandName}</Title>
                <TitleDetail>{carDetail.carName}</TitleDetail>
                <DetailBox>
                  <DetailYear>{carDetail.year}연식</DetailYear>
                  <DetailMile>주행거리: {carDetail.mileage}km</DetailMile>
                </DetailBox>
              </div>

              <Verify>
                <MdVerified />
              </Verify>
            </MainTop>
            <PriceBox>
              <PriceTitle>최근거래가</PriceTitle>
              <Price>
                {Math.floor(carDetail.sellingPrice).toLocaleString('ko-KR')}원
              </Price>
            </PriceBox>
            <ButtonBox>
              <BuyButton onClick={showModal1}>
                {modal1 && (
                  <BidModal
                    carDetail={carDetail}
                    removeModal={removeModal1}
                    modal1={modal1}
                    setModal1={setModal1}
                  />
                )}
                <BuyTitle>입찰</BuyTitle>
              </BuyButton>
              <BuyButton onClick={showModal2}>
                {modal2 && (
                  <BuyModal carDetail={carDetail} removeModal={removeModal2} />
                )}
                <BuyTitle>바로구매</BuyTitle>
                <BuyPrice>
                  {Math.floor(carDetail.sellingPrice).toLocaleString('ko-KR')}원
                </BuyPrice>
              </BuyButton>
            </ButtonBox>
            <Wish>
              <BiBookmark className="bookMark" />
              관심상품
            </Wish>
          </div>
          <ChartBox chartData={chartData} topPrice={topPrice} params={params} />
          <GuideBox>
            {GUIDE_LIST.map(data => {
              return (
                <GuideList key={data.id}>
                  <Icon>{data.icon}</Icon>
                  <Text>
                    <TextTitle>{data.title}</TextTitle>
                    <TextContent>{data.content}</TextContent>
                  </Text>
                </GuideList>
              );
            })}
          </GuideBox>

          <Notice>
            WEHICLE은 차량 판매 중개자로서 차량 판매의 당사자가 아닙니다. 본
            상품은 개별 판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한
            의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타
            거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에
            대한 책임은 WEHICLE에 있습니다.
          </Notice>
        </div>
      </RightColumn>
    </DetailContent>
  );
};

export default ProductDetail;

const DetailContent = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 30px 40px 120px;
  overflow: hidden;
  max-width: 1280px;
`;

const LeftColumn = styled.div`
  margin: 0;
  float: left;
  width: 50%;
  padding-right: 3.4%;
`;

const RightColumn = styled.div`
  position: relative;
  float: right;
  padding-left: 3.4%;
  width: 50%;
  border-left: 1px solid #ebebeb;
  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }
`;

const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.a`
  vertical-align: top;
  line-height: 19px;
  padding-top: 1px;
  margin-bottom: 9px;
  font-size: 18px;
  font-weight: 800;
  border-bottom: 2px solid #222;
`;
const TitleDetail = styled.p`
  margin-bottom: 4px;
  font-size: 18px;
  letter-spacing: 0.9px;
  font-weight: 400;
`;
const DetailBox = styled.div`
  display: flex;
  align-items: center;
`;

const DetailYear = styled.p`
  margin: 10 0 px;
  font-size: 15px;
`;
const DetailMile = styled.span`
  padding-left: 50px;
  font-size: 15px;
`;

const Verify = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 50px;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-bottom: 12px;
  min-height: 44px;
`;

const PriceTitle = styled.div`
  display: inline-block;
  padding-top: 5px;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.8);
`;

const Price = styled.div`
  display: inline-block;
  line-height: 26px;
  vertical-align: top;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 17px;
  height: 60px;
`;

const BuyButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  border-radius: 10px;
  background-color: #ef6253;
  color: #fff;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    margin-left: 10px;
    background-color: #41b979;
  }
  &:first-child {
    justify-content: center;
  }
`;

const BuyTitle = styled.span`
  width: 100px;
  font-size: 18px;
`;

const BuyPrice = styled.span`
  margin-left: 10px;
  line-height: 15px;
  font-size: 20px;
`;

const Wish = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  color: #333;
  height: 60px;
  line-height: 58px;
  .bookMark {
    font-size: 20px;
  }
`;

const ProductInfo = styled.div``;
const MainOption = styled.div`
  padding-bottom: 13px;
  line-height: 22px;
  padding: 40px 0 20px;
  font-size: 18px;
`;

const OptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
`;
const OptionItem = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  font-size: 18px;
  font-weight: 800;
  width: 150px;
  margin-bottom: 20px;
  opacity: ${props => (props.option === 1 ? 1 : 0.2)};
`;
const ItemName = styled.span`
  padding-left: 10px;
`;

const GuideBox = styled.ul`
  padding-top: 30px;
  margin-top: 20px;
  border-top: 1px solid #f0f0f0;
  padding-left: 0;
`;
const GuideList = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`;

const Icon = styled.div`
  margin-right: 10px;
  font-size: 30px;
`;
const Text = styled.div``;

const TextTitle = styled.p`
  line-height: 16px;
  font-size: 13px;
  font-weight: 600;
`;

const TextContent = styled.p`
  margin-top: 1px;
  line-height: 16px;
  font-size: 13px;
`;
const Notice = styled.div`
  padding-top: 40px;
  margin-top: 20px;
  line-height: 16px;
  border-top: 1px solid #f0f0f0;
  font-size: 12px;
`;

const ICON_LIST = [
  {
    id: 1,
    item: <MdAirlineSeatReclineExtra />,
    title: '열선시트',
    keyName: 'heatingseat',
  },
  {
    id: 2,
    item: <TbDeviceComputerCamera />,
    title: '후방카메라',
    keyName: 'backcamera',
  },
  { id: 3, item: <GrMap />, title: '내비게이션', keyName: 'navi' },
  {
    id: 4,
    item: <MdAirlineSeatReclineExtra />,
    title: '통풍시트',
    keyName: 'coolingseat',
  },
  { id: 5, item: <GiCarSeat />, title: '가죽시트', keyName: 'leatherseat' },
  { id: 6, item: <FiCircle />, title: '스마트키', keyName: 'smartkey' },
  { id: 7, item: <RiCarWashingFill />, title: '썬루프', keyName: 'sunroof' },
  {
    id: 8,
    item: <TbCarCrash />,
    title: '주차감지센서',
    keyName: 'parkingsensor',
  },
];

const GUIDE_LIST = [
  {
    id: 1,
    icon: <MdOutlineVerified />,
    title: '100% 검증 완료',
    content: ' WHICLE에서 전문가가 검수한 차량입니다.',
  },
  {
    id: 2,
    icon: <BiCheckCircle />,
    title: '엄격한 다중 검수',
    content:
      ' 모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.',
  },
  {
    id: 2,
    icon: <FiPackage />,
    title: '검증 인증 패키지',
    content:
      '검수에 합격한 경우에 한하여 WEHICLE의 검증 완료 패키지가 포함된 상품이 배송됩니다.',
  },
];
