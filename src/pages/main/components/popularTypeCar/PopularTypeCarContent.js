import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function PopularTypeCarContent({ data }) {
  const navigate = useNavigate();
  const { id, thumbnail, brandName, name } = data;

  const toDetailPage = id => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <PopularTypeCarContentBox>
      <ContentImgBox onClick={() => toDetailPage(id)}>
        <ContentImg src={thumbnail} alt="사진" />
      </ContentImgBox>
      <ContentInfo>
        <ContentBrand>{brandName}</ContentBrand>
        <ContentKind>{name}</ContentKind>
      </ContentInfo>
    </PopularTypeCarContentBox>
  );
}

const PopularTypeCarContentBox = styled.div`
  position: relative;
  margin-top: 30px;
`;

const ContentImgBox = styled.div`
  height: 250px;
  background: #f2f2f2;
  cursor: pointer;
`;

const ContentImg = styled.img`
  width: 100%;
  translate: 40px 60px;
`;

const ContentInfo = styled.div`
  position: absolute;
  left: 30px;
  top: 35%;

  font-size: 26px;
`;

const ContentBrand = styled.p`
  font-weight: 700;
`;

const ContentKind = styled.p`
  margin-top: -5px;
  font-weight: 500;
`;
