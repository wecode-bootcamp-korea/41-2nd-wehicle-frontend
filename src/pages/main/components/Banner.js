import React from 'react';
import styled from 'styled-components';

export default function Banner() {
  return (
    <BannerBox>
      <BannerImg src="/images/main/banner/banner_01.jpg" alt="배너사진01" />
    </BannerBox>
  );
}

const BannerBox = styled.div`
  position: relative;
  display: block;
  width: 100vw;
  height: 600px;
  overflow: hidden;
`;

const BannerImg = styled.img`
  width: 100%;
  translate: 0 -70px;
`;
