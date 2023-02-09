import React from 'react';
import styled from 'styled-components';
import MypageWish from './components/MypageWish';
import MypageProfile from './components/MypageProfile';
import MypageSell from './components/MypageSell';

export default function Mypage() {
  return (
    <MypageContainer>
      <MypageProfile />
      <MypageSell />
      <MypageWish />
    </MypageContainer>
  );
}
const MypageContainer = styled.div`
  max-width: 1280px;
  margin: 30px auto 80px;
`;
const MypageStorageBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;
