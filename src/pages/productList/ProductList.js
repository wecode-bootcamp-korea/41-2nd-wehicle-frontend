import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterBtn from '../../components/button/FilterBtn';
import BrandNav from './components/BrandNav';
import Products from './components/Products';
import { TbArrowsDownUp } from 'react-icons/tb';
import { FaArrowUp } from 'react-icons/fa';
import {
  SIZE_CATEGORY,
  OIL_CATEGORY,
  OPTION_CATEGORY,
  STYLE_CATEGORY,
} from './data/categoryData';
import Size from './components/Size';
import OilType from './components/OilType';
import Options from './components/Options';
import CarStyle from './components/CarStyle';

function ProductList() {
  const [selectSize, setSelectSize] = useState({});
  const [selectOption, setSelectOption] = useState([]);
  const [selectOilType, setSelectOilType] = useState({});
  const [selectCarStyle, setSelectCarStyle] = useState({});

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handelOilType = oilType => {
    if (selectOilType.name === oilType.name) {
      setSelectOilType({});
    } else {
      setSelectOilType(oilType);
    }
  };
  const handelSize = size => {
    if (selectSize.name === size.name) {
      setSelectSize({});
    } else {
      setSelectSize(size);
    }
  };
  const handelCarStyle = carStlye => {
    if (selectCarStyle.name === carStlye.name) {
      setSelectCarStyle({});
    } else {
      setSelectCarStyle(carStlye);
    }
  };
  const handleOption = option => {
    if (selectOption.includes(option)) {
      setSelectOption(selectOption.filter(option => option !== option));
    } else {
      setSelectOption(prev => [...prev, option]);
    }
  };

  return (
    <ProductListWrapper>
      <PageTitle>SHOP</PageTitle>
      <BrandNav />
      <SlideBarImage
        src="./images/productListPage/slidebar.png"
        alt="slidebarImage"
      />
      <ContentTop>
        <FilterBtn />
        <PopularOrder>
          인기순
          <TbArrowsDownUp />
        </PopularOrder>
      </ContentTop>
      <ContentWrapper>
        <AsideFilterBox>
          <Size
            categoryData={SIZE_CATEGORY}
            filterSelect={selectSize}
            selectSize={handelSize}
          />
          <OilType
            categoryData={OIL_CATEGORY}
            filterSelect={selectOilType}
            selectOilType={handelOilType}
          />
          <Options
            categoryData={OPTION_CATEGORY}
            filterSelect={selectOption}
            selectOption={handleOption}
          />
          <CarStyle
            categoryData={STYLE_CATEGORY}
            filterSelect={selectCarStyle}
            selectCarStyle={handelCarStyle}
          />
        </AsideFilterBox>
        <Products />
      </ContentWrapper>
      <GoUpBtn onClick={handleGoToTop}>
        <FaArrowUp />
      </GoUpBtn>
    </ProductListWrapper>
  );
}

export default ProductList;

const GoUpBtn = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 44px;
  height: 48px;
  padding-top: 4px;
  border-radius: 100%;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  background-color: lightgray;
  z-index: 999;
  border: none;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const PageTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const SlideBarImage = styled.img`
  object-fit: contain;
  max-width: 1280px;
`;

const PopularOrder = styled.span`
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const ProductListWrapper = styled.div`
  margin: auto;
  max-width: 1280px;
`;

const AsideFilterBox = styled.div`
  min-width: 200px;
  margin: 15px 60px 0px 0px;
`;

const ContentTop = styled.div`
  font-size: 16px;
  color: #222222;
  display: flex;
  justify-content: space-between;
  margin: 14px 0px;
`;
