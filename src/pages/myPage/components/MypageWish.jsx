import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function MypageWish() {
  const [wishList, setWishList] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}wishlists`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => setWishList(data.data));
  }, []);
  return (
    <FavoriteContainer>
      <FavoriteTitleBox>
        <FavoriteTitle>Wish List</FavoriteTitle>
      </FavoriteTitleBox>
      <FavoriteContent>
        {wishList ? (
          wishList.map(item => {
            return (
              <WishItemContainer key={item.productId}>
                <WishItemImg src={item.thumbnail} />
                <WishItemBrandText>{item.brandName}</WishItemBrandText>
                <WishItemText>{item.carName}</WishItemText>
                <WishItemPrice>
                  {parseInt(item.price)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </WishItemPrice>
              </WishItemContainer>
            );
          })
        ) : (
          <FavoriteEmpty>
            <FavoriteEmptyNotice>
              추가하신 관심 상품이 없습니다.
            </FavoriteEmptyNotice>
            <GoToShopBtn>SHOP 바로가기</GoToShopBtn>
          </FavoriteEmpty>
        )}
      </FavoriteContent>
    </FavoriteContainer>
  );
}
const WishItemContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-right: 30px;
`;
const WishItemText = styled.p`
  font-size: 14px;
`;
const WishItemBrandText = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
const WishItemPrice = styled.p`
  font-size: 16px;
`;
const WishItemImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;
const FavoriteContainer = styled.div`
  border-top: 1px solid #999;
  padding: 40px;
  margin-top: 10px;
  margin-bottom: 40px;
`;
const FavoriteTitleBox = styled.div``;
const FavoriteTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 30px;
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
  font-size: 16px;
  color: #999;
`;
const GoToShopBtn = styled.button`
  width: 130px;
  margin-top: 12px;
  padding: 10px 16px 8px;
  font-size: 14px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: inherit;
  cursor: pointer;
`;
