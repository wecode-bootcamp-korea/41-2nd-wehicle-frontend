import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import BrandLogo from './components/BrandLogo';
import WhatsNewCar from './components/WhatsNewCar';
import Banner from './components/Banner';
import SecondBanner from './components/SecondBanner';
import PopularTypeCar from './components/popularTypeCar/PopularTypeCar';
import GoUpBtn from './components/GoUpBtn';

function Main() {
  const [brandImg, setBrandImg] = useState([]);

  // Mock Data : 브랜드 로고 이미지
  useEffect(() => {
    fetch('/data/main/brandImg.json')
      .then(res => res.json())
      .then(data => setBrandImg(data));
  }, []);

  return (
    <div>
      <Carousel />
      <Brand>
        <BrandContainer>
          {brandImg.map(data => {
            return <BrandLogo data={data} key={data.id} />;
          })}
        </BrandContainer>
      </Brand>
      <WhatsNewCar />
      <Banner />
      <PopularTypeCar />
      <SecondBanner />
      <GoUpBtn />
    </div>
  );
}

const Brand = styled.div`
  margin: 130px 170px 120px 170px;
`;

const BrandContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;
