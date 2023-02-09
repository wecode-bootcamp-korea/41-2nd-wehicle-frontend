import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

function BuyModal({ carDetail, removeModal }) {
  const { brandName, carName, thumbnail, options, sellingPrice } = carDetail;
  const price = Math.floor(sellingPrice).toLocaleString();

  const navigate = useNavigate();

  // const closeBtn = () => {
  //   removeModal2();
  // };

  // useEffect(() => {
  //   fetch('/data/buyModalOption.json')
  //     .then(res => res.json())
  //     .then(data => setOption(data));
  // }, []);

  const alertByBuyBtn = () => {
    navigate('/payment');
  };

  return (
    <BuyModalContainer>
      <BuyModalBox>
        <Title>구매하기</Title>
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
        <CarOptionContainer>
          <CarOptionBox>
            {OPTIONS_BOOLEAN.map(data => {
              return (
                <OptionList key={data.id} option={options[0][data.option]}>
                  <Option>{data.name}</Option>
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
        <CloseBtn onClick={removeModal}>
          <IoMdClose />
        </CloseBtn>
      </BuyModalBox>
    </BuyModalContainer>
  );
}

const OPTIONS_BOOLEAN = [
  { id: 1, option: 'navi', name: '네비게이션' },
  { id: 2, option: 'sunroof', name: '썬루프' },
  { id: 3, option: 'smartkey', name: '스마트키' },
  { id: 4, option: 'backcamera', name: '후방카메라' },
  { id: 5, option: 'coolingseat', name: '통풍시트' },
  { id: 6, option: 'heatingseat', name: '열선시트' },
  { id: 7, option: 'leatherseat', name: '가죽시트' },
  { id: 8, option: 'parkingsensor', name: '주차감지센서' },
];

const BuyModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #222;
  z-index: 2;
`;

const BuyModalBox = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 650px;
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
  border: ${props => (props.option === 1 ? '' : '2px solid #999')};
  border-radius: 10px;
  background: ${props => (props.option === 1 ? '#222' : '#fff')};
  color: ${props => (props.option === 1 ? '#fff' : '#999')};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

const Option = styled.p``;

const BuyBtnBox = styled.div`
  width: 560px;
  padding: 25px 0 23px;
  margin: 88px auto 0;
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

const CloseBtn = styled.div`
  position: fixed;
  right: 25px;
  top: 25px;
  transform: (-50%, -50%);
  font-size: 24px;
  color: #222;
  cursor: pointer;
`;

export default BuyModal;
