import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from './OAuth';

export default function Login() {
  return (
    <LoginArea>
      <LogoImg src="./images/wehicleLogo.png" alt="logo" className="logoImg" />
      <SubTitle>KICKS RULE EVERYTHING AROUND ME</SubTitle>
      <a href={KAKAO_AUTH_URL}>
        <img src="./images/kakao_login_medium_wide.png" alt="kakaoLogin" />
      </a>
    </LoginArea>
  );
}

const LoginArea = styled.div`
  width: 400px;
  height: 745.5px;
  margin: 0 auto;
  padding: 160px 0;
  font-size: 16px;
  text-align: center;
`;
const SubTitle = styled.p`
  margin-bottom: 70px;
  font-size: 12px;
  font-weight: bold;
`;
const LogoImg = styled.img`
  width: 150px;
`;
