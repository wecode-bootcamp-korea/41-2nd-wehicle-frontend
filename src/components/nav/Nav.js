import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const [showSellModal, setShowSellModal] = useState(false);
  const navigate = useNavigate();

  const isValidToken = localStorage.getItem('accessToken');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.replace('/');
  };

  const removeSellModal = () => {
    setShowSellModal(false);
  };

  return (
    <NavBox>
      <NavTop>
        <NavTopItem>고객센터</NavTopItem>
        <NavTopItem>관심상품</NavTopItem>
        <NavTopItem>
          {isValidToken ? (
            <NavTopItem onClick={handleLogout}>
              <Link to="/">로그아웃</Link>
            </NavTopItem>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </NavTopItem>
      </NavTop>
      <NavMain>
        <Link to="/">
          <LogoImg src="/images/nav/logo.png" alt="logo" />
        </Link>
        <NavMainList>
          <NavMainItem>
            <Link to="/">HOME</Link>
          </NavMainItem>
          <NavMainItem>
            <Link to="/productList">SHOP</Link>
          </NavMainItem>
          <NavMainItem>
            <Link to="/mypage">MY</Link>
          </NavMainItem>
          <NavMainItem onClick={() => setShowSellModal(true)}>
            <Link to="/sell">바로판매</Link>
          </NavMainItem>
        </NavMainList>
      </NavMain>
    </NavBox>
  );
};

export default Nav;

const NavBox = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
`;

const NavTop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 40px 0;
  height: 40px;
`;

const NavTopItem = styled.div`
  display: flex;
  font-size: 15px;
  margin-left: 24px;
  cursor: pointer;
  a {
    color: #222;
  }
`;

const NavMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px 0 60px;
  height: 70px;
`;

const LogoImg = styled.img`
  position: absolute;
  left: 60px;
  top: 42px;
  width: 8%;
`;

const NavMainList = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavMainItem = styled.div`
  font-size: 20px;
  margin-right: 50px;

  cursor: pointer;
  a {
    color: #222;
  }
  &:first-child {
    font-weight: 700;
  }
  &:last-child {
    margin-right: 0;
  }
`;
