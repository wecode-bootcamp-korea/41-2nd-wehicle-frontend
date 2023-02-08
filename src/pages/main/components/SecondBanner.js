import React from 'react';
import styled from 'styled-components';

export default function SecondBanner() {
  return (
    <SecondBannerBox>
      <SecondBannerImg
        src="/images/main/banner/banner_02.jpg"
        alt="배너사진02"
      />
    </SecondBannerBox>
  );
}

const SecondBannerBox = styled.div`
  width: 100vw;
  height: 592px;
  overflow: hidden;
`;

const SecondBannerImg = styled.img`
  width: 100%;
`;
