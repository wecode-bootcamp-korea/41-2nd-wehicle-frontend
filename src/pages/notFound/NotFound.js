import React from 'react';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <NotFoundBox>
      <LogoImgBox>
        <LogoImg src="/images/logo.png" />
        <NotFoundTxt>페이지를 찾을 수 없습니다.</NotFoundTxt>
      </LogoImgBox>
    </NotFoundBox>
  );
}

const NotFoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 350px;
`;

const LogoImgBox = styled.div`
  width: 50%;
  height: 520px;
`;

const LogoImg = styled.img`
  width: 20%;
`;

const NotFoundTxt = styled.h1`
  margin-top: 20px;
  font-size: 28px;
  color: #666;
`;
