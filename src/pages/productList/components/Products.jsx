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
      `${BASE_URL}products/?offset=${offset}&limit=${limit || 8}&oil=${
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
      `${BASE_URL}products/?offset=${offset}&limit=${limit || 8}&oil=${
        oil || ''
      }&brand=${brandId || ''}&type=${type || ''}&size=${size || ''}&keyword=${
        keyword || ''
      }`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setProducts([...data.data]);
      });
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
              key={product.id}
              onClick={() => {
                navigate(`/productDetail/104`);
              }}
            >
              <ProductCardImage
                src={product.listThumbnailImage}
                alt="productImage"
              />
              <ProductBrandText>{product.brandName}</ProductBrandText>
              <ProductDetailText>{product.carName}</ProductDetailText>
              <FilterBtn />
              <ProductPriceText>
                {parseInt(product.price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </ProductPriceText>
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
  margin-top: 30px;
`;

const LoadMoreBox = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const LoadMore = styled.button`
  width: 100px;
  height: 35px;
  margin: 40px 0;
  padding-top: 3px;
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
`;
const ProductBrandText = styled.p`
  font-weight: bold;
  margin-top: 16px;
`;
const ProductDetailText = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;
const ProductPriceText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
`;
