import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function BrandNav() {
  const [brandCards, setBrandCards] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    fetch('./data/brandList.json')
      .then(res => res.json())
      .then(data => setBrandCards(data));
  }, []);

  const handleBrandFilter = brandName => {
    searchParams.set('brand_id', brandName);
    searchParams.set('offset', 0);
    setSearchParams(searchParams);
  };

  return (
    <BrandCardContainer>
      {brandCards.map(brandCard => {
        return (
          <BrandCardList
            key={brandCard.id}
            onClick={() => handleBrandFilter(brandCard.brand_id)}
          >
            <BrandCardImages src={brandCard.img} alt="carImages" />
            <p>{brandCard.brandName}</p>
          </BrandCardList>
        );
      })}
    </BrandCardContainer>
  );
}

const BrandCardContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const BrandCardImages = styled.img`
  width: 60px;
  height: 40px;
  object-fit: contain;
`;
const BrandCardList = styled.li`
  padding: 10px 30px;
  text-align: center;
  cursor: pointer;
`;
