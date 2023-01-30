import React from 'react';
import styled from 'styled-components';

function SecondBanner() {
  return (
    <SecondBannerBox>
      <SecondBannerImg
        src="/images/main/banner/banner_02.jpg"
        alt="배너사진02"
      />
    </SecondBannerBox>
  );
}

export default SecondBanner;

const SecondBannerBox = styled.div`
  width: 100vw;
  height: 600px;
  overflow: hidden;
`;

const SecondBannerImg = styled.img`
  width: 100%;
`;
