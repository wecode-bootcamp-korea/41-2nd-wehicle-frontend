import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function BrandLogo({ data }) {
  const { id, img1, img2, alt } = data;
  const navigate = useNavigate();

  const carBrandQuery = id => {
    navigate(`/productList?brand_id=${id}`);
  };

  return (
    <BrandLogoBox onClick={() => carBrandQuery(id)} key={id}>
      <Logo>
        <LogoImg src={img1} alt={alt} />
        <LogoBG src={img2} alt={alt} />
      </Logo>
      <BrandName>{alt}</BrandName>
    </BrandLogoBox>
  );
}

const BrandLogoBox = styled.div`
  display: inline-block;
  margin: 0 12px;
`;

const Logo = styled.p`
  position: relative;
  display: block;
  width: 255px;
  height: 130px;
  border-radius: 20px;
  background: #222;
  cursor: pointer;
`;

const LogoImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75px;
  height: 50px;
  object-fit: contain;
`;

const LogoBG = styled.img`
  display: none;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  opacity: 0.3;
  ${BrandLogoBox}:hover & {
    display: block;
  }
`;

const BrandName = styled.span`
  display: block;
  width: inherit;
  margin-top: 10px;
  color: #222;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
`;
