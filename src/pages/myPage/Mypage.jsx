import React from 'react';
import styled from 'styled-components';
import MypageFavorite from './components/MypageFavorite';
import MypageProfile from './components/MypageProfile';
import MypageSell from './components/MypageSell';

export default function Mypage() {
  return (
    <MypageContainer>
      <MypageProfile />
      <MypageSell />
      <MypageStorageBtnBox>
        <MypageStorageBtn src="./images/mypage/mypageBtn.png" />
      </MypageStorageBtnBox>
      <MypageFavorite />
    </MypageContainer>
  );
}
const MypageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const MypageStorageBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;
const MypageStorageBtn = styled.img`
  width: 1000px;
  height: 60px;
  border-radius: 16px;
  object-fit: fill;
  cursor: pointer;
`;
