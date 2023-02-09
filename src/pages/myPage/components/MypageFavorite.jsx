import React from 'react';
import styled from 'styled-components';

export default function MypageFavorite() {
  return (
    <FavoriteContainer>
      <FavoriteTitleBox>
        <FavoriteTitle>Favorite Product</FavoriteTitle>
      </FavoriteTitleBox>
      <FavoriteContent>
        <FavoriteEmpty>
          <FavoriteEmptyNotice>
            추가하신 관심 상품이 없습니다.
          </FavoriteEmptyNotice>
          <GoToShopBtn>SHOP 바로가기</GoToShopBtn>
        </FavoriteEmpty>
      </FavoriteContent>
    </FavoriteContainer>
  );
}
const FavoriteContainer = styled.div`
  padding: 40px;
`;
const FavoriteTitleBox = styled.div``;
const FavoriteTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
const FavoriteContent = styled.div`
  width: 100%;
  height: 223.5px;
`;
const FavoriteEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 223.5px;
  margin: 0 10px;
  padding: 80px 0;
`;
const FavoriteEmptyNotice = styled.p`
  font-size: 14px;
  color: #a3a3a3;
`;
const GoToShopBtn = styled.button`
  width: 110px;
  height: 34px;
  margin-top: 12px;
  padding: 0 14px;
  font-size: 12px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: inherit;
  cursor: pointer;
`;
