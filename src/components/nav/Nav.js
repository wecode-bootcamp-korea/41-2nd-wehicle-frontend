import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavBox>
      <NavTop>
        <NavTopItem>고객센터</NavTopItem>
        <NavTopItem>관심상품</NavTopItem>
        <NavTopItem>로그인</NavTopItem>
      </NavTop>
      <NavMain>
        <LogoImg src="/images/nav/logo.png" alt="logo" />
        <NavMainList>
          <NavMainItem>HOME</NavMainItem>
          <NavMainItem>SHOP</NavMainItem>
          <NavMainItem>MY</NavMainItem>
          <NavMainItem>바로판매</NavMainItem>
        </NavMainList>
      </NavMain>
    </NavBox>
  );
};

export default Nav;

const NavBox = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
`;

const NavTop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 40px 0;
  height: 22px;
`;

const NavTopItem = styled.div`
  display: flex;
  font-size: 12px;
  margin-left: 24px;
`;

const NavMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  height: 68px;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 20px;
`;

const NavMainList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavMainItem = styled.div`
  display: flex;
  font-size: 18px;
  margin-right: 50px;
  &:first-child {
    font-weight: 700;
  }
  &:last-child {
    margin-right: 0;
  }
`;
