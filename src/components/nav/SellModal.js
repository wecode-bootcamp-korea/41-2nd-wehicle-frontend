import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CarOptionList from './components/CarOptionList';
import SelectBoxes from './components/SelectBoxes';
import CarsInfoInput from './components/CarsInfoInput';
import { useNavigate } from 'react-router-dom';

export default function SellModal() {
  const navigate = useNavigate();
  const phoneNumRef = useRef();
  const [option, setOption] = useState([]);
  const [fileImg, setFileImg] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const priceRef = useRef();

  const [arr, setArr] = useState({
    price: '', // price
    carId: '',
    oil: '',
    year: '',
    mileage: '',
    inspectionDate: '', // startDate
    color: '',
    sunroof: '',
    parkingsensor: '',
    backcamera: '',
    navi: '',
    heatingseat: '',
    coolingseat: '',
    smartkey: '',
    leatherseat: '',
    smartkey: '',
    leatherseat: '',
    address: '',
    phoneNumber: '', // phoneNum
    images: '', // fileImg url 주소 string
  });

  const sellProductInfo = (key, value) => {
    setArr(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleChange = e => {
    let { name, value } = e.target;
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(value)) {
      setArr(prev => ({ ...prev, [name]: value }));
    }
    // phoneNumAddHypen();
  };

  // const phoneNumAddHypen = () => {
  //   const phoneNum = [...arr.phoneNumber];
  //   const name = phoneNumRef.name;

  //   if (phoneNum.length > 0) {
  //     setArr(prev => ({
  //       ...prev,
  //       [name]: arr.phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
  //     }));
  //   }
  // };

  const changeNumber = e => {
    let { name, value } = e.target;
    value = Number(value.replaceAll(',', ''));
    const formatValue = value.toLocaleString('ko-KR');
    priceRef.value = formatValue;
    setArr(prev => ({ ...prev, [name]: formatValue }));
    // setPrice(formatValue);
    // sellProductInfo('price', formatValue);
    // console.log(arr.price);
  };

  const CustomDatePicker = forwardRef(({ value, onClick }, ref) => (
    <button className="customDataPicker" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const saveImgFile = e => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const resultImage = reader.result;
      setFileImg(resultImage);
    };
    console.log(fileImg);
  };

  useEffect(() => {
    fetch('/data/sellModalOption.json')
      .then(res => res.json())
      .then(data => setOption(data));
  }, []);

  const alertByBuyBtn = () => {
    navigate('/payment');
  };

  return (
    <SellModalBox>
      <Title>판매등록</Title>
      <CarInfo>
        <CarImgBox htmlFor="picUpload">
          + <br />
          <span>사진을 등록해주세요</span>
          <CarImgInput
            id="picUpload"
            type="file"
            accept="image/*"
            onChange={saveImgFile}
          />
          <ImgPreviewBox>
            {fileImg && <ImgPreview src={fileImg} alt="previewImg" />}
          </ImgPreviewBox>
        </CarImgBox>
        <CarDetailInfo>
          <SelectBoxes setArr={setArr} />
        </CarDetailInfo>
      </CarInfo>
      <CarDetailImgContainer>
        <CarDetailImgBox htmlFor="detailPicUpload">
          + <br />
          <span>상품에 대한 상세한 사진들을 추가해주세요</span>
          <CarDetailImgInput
            id="detailPicUpload"
            type="file"
            accept="image/*"
            multiple
          />
        </CarDetailImgBox>
      </CarDetailImgContainer>
      <CarOptionContainer>
        <CarOptionTitle>탑재된 옵션을 설정해주세요</CarOptionTitle>
        <CarsInfoInput title="연식" placeholder="" unit="년" setArr={setArr} />
        <CarsInfoInput title="주행거리" placeholder="" unit="km" />
        <CarOptionBox>
          {option.map(data => {
            return (
              <CarOptionList
                key={data.id}
                data={data}
                arr={arr}
                setArr={setArr}
              />
            );
          })}
        </CarOptionBox>
      </CarOptionContainer>
      <Calender>
        <CalenderTxt>• 원하는 검수날짜를 선택해주세요</CalenderTxt>
        <DatePicker
          dateFormat="yyyy / MM / dd"
          selected={startDate}
          onChange={date => setStartDate(date)}
          minDate={new Date()}
          customInput={<CustomDatePicker />}
        />
      </Calender>
      <PhoneNumBox>
        <PhoneNumTxt>• 휴대폰 번호를 입력해주세요</PhoneNumTxt>
        <PhoneNumInput
          type="text"
          name="phoneNumber"
          ref={phoneNumRef}
          value={arr.phoneNumber}
          onkeypress="return checkNumber(event)"
          onChange={handleChange}
          placeholder="'-' 없이 입력해주세요"
        />
      </PhoneNumBox>
      <PriceInputContainer>
        <PriceInputBox>
          <PriceTitleBox>
            <PriceTitle>판매희망가</PriceTitle>
          </PriceTitleBox>
          <InfoInput
            type="text"
            name="price"
            ref={priceRef}
            onChange={changeNumber}
            value={arr.price}
            placeholder="희망가격을 입력해주세요"
          />
          <Unit>원</Unit>
        </PriceInputBox>
      </PriceInputContainer>
      <SellBtnBox>
        <SellBtn onClick={alertByBuyBtn}>판매등록하기</SellBtn>
      </SellBtnBox>
    </SellModalBox>
  );
}

const CAR_ID_LIST = [
  { carId: 1, name: '그랜저' },
  { carId: 2, name: '싼타페' },
  { carId: 3, name: '소나타' },
  { carId: 4, name: '투싼' },
  { carId: 5, name: '아반떼' },
  { carId: 6, name: '코나' },
  { carId: 7, name: '모닝' },
  { carId: 8, name: '카니발' },
  { carId: 9, name: '스포티지' },
  { carId: 10, name: '쏘렌토' },
  { carId: 11, name: 'K8' },
  { carId: 12, name: 'K5' },
  { carId: 13, name: 'K3' },
  { carId: 14, name: '레이' },
  { carId: 15, name: '5시리즈' },
  { carId: 16, name: '3시리즈' },
  { carId: 17, name: '7시리즈' },
  { carId: 18, name: 'X3' },
  { carId: 19, name: 'X5' },
  { carId: 20, name: 'X7' },
  { carId: 21, name: 'E클래스' },
  { carId: 22, name: 'C클래스' },
  { carId: 23, name: 'S클래스' },
  { carId: 24, name: 'GLE' },
  { carId: 25, name: 'GLC' },
  { carId: 26, name: 'A3' },
  { carId: 27, name: 'A4' },
  { carId: 28, name: 'A8' },
  { carId: 29, name: 'Q4' },
  { carId: 30, name: 'Q6' },
];

const SellModalBox = styled.div`
  width: 600px;
  height: 1400px;
  margin: 50px auto;
  background: #fff;
  color: #222;
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
  margin: 35px auto 20px;
`;

const CarImgBox = styled.label`
  position: relative;
  width: 240px;
  height: 237px;
  padding-top: 80px;
  margin-left: 30px;
  border: 1px solid #666;
  border-radius: 5px;
  text-align: center;
  font-size: 30px;
  color: #666;
  cursor: pointer;

  span {
    position: absolute;
    top: 55%;
    left: 23%;
    font-size: 16px;
  }
`;

const CarImgInput = styled.input`
  display: none;
`;

const ImgPreviewBox = styled.div`
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImgPreview = styled.img`
  width: 240px;
  height: 237px;
  border-radius: 5px;
  object-fit: cover;
`;

const CarDetailInfo = styled.div`
  width: 230px;
  margin-top: 10px;
  margin-right: 25px;
  font-size: 24px;

  color: #222;
`;

const CarDetailImgContainer = styled.div`
  width: 560px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const CarDetailImgBox = styled.label`
  position: relative;
  display: block;
  width: 500px;
  padding: 8px 0 8px 100px;
  margin: 25px auto 40px;
  border: 1px solid #666;
  border-radius: 5px;
  background: #eee;
  font-size: 24px;
  color: #666;
  cursor: pointer;

  span {
    position: absolute;
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    font-size: 14px;
  }
`;

const CarDetailImgInput = styled.input`
  display: none;
`;

const CarOptionContainer = styled.div`
  margin-top: 60px;
`;

const CarOptionTitle = styled.p`
  width: 500px;
  margin: 0 50px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
`;

const CarOptionBox = styled.ul`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(4, 23.5%);
  column-gap: 10px;
  row-gap: 10px;
  width: 500px;
  margin: 0 auto;
`;

const Calender = styled.div`
  margin: 0 50px;

  .customDataPicker {
    width: 100%;
    padding: 8px;
    border: 2px solid #ef6253;
    border-radius: 5px;
    background: #ef6253;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
`;

const CalenderTxt = styled.p`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #222;
  font-weight: 400;
`;

const PhoneNumBox = styled.div`
  margin: 0 50px;
`;

const PhoneNumTxt = styled(CalenderTxt)`
  margin-top: 20px;
`;

const PhoneNumInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 2px solid #ef6253;
  border-radius: 5px;
  margin-bottom: 8px;
  font-size: 16px;
  color: #ef6253;
  text-align: center;

  &::placeholder {
    font-size: 16px;
    color: rgba(239, 98, 83, 0.7);
  }

  &:focus {
    outline: none;
  }
`;

const PriceInputContainer = styled.div`
  margin-top: 50px;
`;

const PriceInputBox = styled.ul`
  position: relative;
  margin: 0 50px 0;
  text-align: right;
`;

const PriceTitleBox = styled.div`
  position: relative;
  text-align: left;
`;

const PriceTitle = styled.p`
  width: 20%;
  font-size: 20px;
  font-weight: 600;
  color: #222;
`;

const InfoInput = styled.input`
  display: inline-block;
  text-align: right;
  width: 100%;
  padding: 20px 55px;
  padding-bottom: 20px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  border-bottom: #f9f9f9;
  background: #f9f9f9;
  font-size: 20px;
  color: #222;
  z-index: 100;

  &::placeholder {
    font-size: 18px;
    color: #999;
  }

  &:focus {
    color: #222;
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
  top: 68px;
  right: 23px;
  font-size: 20px;
  color: #222;
`;

const SellBtnBox = styled.div`
  width: 560px;
  padding: 25px 0 23px;
  margin: 35px auto 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const SellBtn = styled.button`
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
