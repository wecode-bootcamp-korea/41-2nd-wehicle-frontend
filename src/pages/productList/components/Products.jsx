import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import FilterBtn from '../../../components/button/FilterBtn';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const brandId = searchParams.get('brand_id');
  const oil = searchParams.get('oil');
  const type = searchParams.get('type');
  const size = searchParams.get('size');
  const keyword = searchParams.get('keyword');
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `${BASE_URL}products/?offset=${offset || 8}&limit=${limit || 8}&oil=${
        oil || ''
      }&brand=${brandId || ''}&type=${type || ''}&size=${size || ''}&keyword=${
        keyword || ''
      }`
    )
      .then(res => res.json())
      .then(data => setProducts([...products, ...data.data]));
  }, [offset, limit]);

  useEffect(() => {
    fetch(
      `${BASE_URL}products/?offset=${offset || 8}&limit=${limit || 8}&oil=${
        oil || ''
      }&brand=${brandId || ''}&type=${type || ''}&size=${size || ''}&keyword=${
        keyword || ''
      }`
    )
      .then(res => res.json())
      .then(data => setProducts([...data.data]));
  }, [brandId, oil, type, size, keyword]);

  const loadMore = () => {
    setLimit(8);
    setOffset(offset + 8);
  };

  return (
    <Container>
      <ProductCards>
        {products.map(product => {
          return (
            <ProductCard
              key={product.carId}
              onClick={() => {
                navigate(`/products/productId/${product.carId}`);
              }}
            >
              <ProductCardImage
                src={product.listThumbnailImage}
                alt="productImage"
              />
              <ProductBrandText>{product.brandName}</ProductBrandText>
              <ProductDetailText>{product.carName}</ProductDetailText>
              <FilterBtn />
              <ProductPriceText>{product.price}</ProductPriceText>
            </ProductCard>
          );
        })}
      </ProductCards>
      <LoadMoreBox>
        <LoadMore onClick={loadMore}>더보기</LoadMore>
      </LoadMoreBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const LoadMoreBox = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
`;

const LoadMore = styled.button`
  width: 100px;
  height: 35px;
  margin: 40px 0;
  border: 1px solid #222;
  background: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.4s;
  &:active,
  &:hover {
    color: white;
    background: black;
  }
`;

const ProductCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  font-size: 16px;
  gap: 30px 20px;
  cursor: pointer;
`;

const ProductCard = styled.li`
  padding: 20px 0 0 0;
`;

const ProductCardImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 10px;
`;
const ProductBrandText = styled.p`
  font-weight: bold;
`;
const ProductDetailText = styled.p`
  font-size: 13px;
`;
const ProductPriceText = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-top: 12px;
`;
