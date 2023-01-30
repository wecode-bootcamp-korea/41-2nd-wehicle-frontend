import React from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

export default function GoUpBtn() {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <GoUpBtnBox onClick={handleGoToTop}>
      <FaArrowUp />
    </GoUpBtnBox>
  );
}

const GoUpBtnBox = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 50px;
  height: 50px;
  padding-top: 4px;
  border-radius: 50%;
  background: rgba(229, 229, 229, 0.7);
  font-size: 16px;
  color: #666;
  z-index: 999;
  border: none;
  cursor: pointer;
`;
