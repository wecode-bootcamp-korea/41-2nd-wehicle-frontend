import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaTwitterSquare } from 'react-icons/fa';

function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterTopLogo>
          <LogoImg src="/images/logo(white).png" />
        </FooterTopLogo>
        <FooterTopSns>
          <Insta href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </Insta>
          <FaceBk href="https://ko-kr.facebook.com/" target="_blank">
            <FaFacebookF />
          </FaceBk>
          <Twitter href="https://twitter.com/" target="_blank">
            <FaTwitterSquare />
          </Twitter>
        </FooterTopSns>
      </FooterTop>
      <FooterBottom>
        <FooterBottomLeft>
          <LeftMain>
            {FOOTER_MAIN_INFO.map(data => {
              return <LeftMainInfo key={data.id}>{data.txt}</LeftMainInfo>;
            })}
          </LeftMain>
          {FOOTER_COMPANY_INFO.map(data => {
            return <LeftInfo key={data.id}>{data.info}</LeftInfo>;
          })}
          <LeftDescription>
            wehicle(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
            상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한
            의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타
            거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에
            대한 책임은 wehicle(주)에 있습니다.
          </LeftDescription>
        </FooterBottomLeft>
        <FooterBottomRight>
          <FooterBottomRightInfo>
            <RightInfoCS>고객센터 0000-0000</RightInfoCS>
            <RightInfoTime>
              운영시간 평일 10:00 - 19:00 (토, 일, 공휴일 휴무)
              <br />
              점심시간 평일 12:00 - 13:00
            </RightInfoTime>
            <RightInfoCopyRight>
              Copyright © 2023 Wehicle Enterprise Services, LLC
            </RightInfoCopyRight>
          </FooterBottomRightInfo>
        </FooterBottomRight>
      </FooterBottom>
    </FooterContainer>
  );
}

const FOOTER_MAIN_INFO = [
  {
    id: 1,
    txt: '회사소개 •',
  },
  {
    id: 2,
    txt: '이용약관 •',
  },
  {
    id: 3,
    txt: '개인정보처리방침',
  },
];

const FOOTER_COMPANY_INFO = [
  { id: 1, info: 'wehicle CEO • 대표 김승수' },
  { id: 2, info: '사업자등록번호 • 000-00-0000' },
  { id: 3, info: '통신판매업 • 제 2023-서울강남A-0000호' },
  { id: 4, info: '사업장소재지 • 서울특별시 강남구 테헤란로 427 위워크타워' },
];

const FooterContainer = styled.div`
  width: 100vw;
  height: 540px;
  padding: 0 100px;
  background: #222;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 80px 40px 20px 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const FooterTopLogo = styled.div`
  width: 150px;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const FooterTopSns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const FooterTopSnsStyle = styled.a`
  font-size: 30px;
  color: #fff;
  cursor: pointer;
`;

const Insta = styled(FooterTopSnsStyle)``;

const FaceBk = styled(FooterTopSnsStyle)``;

const Twitter = styled(FooterTopSnsStyle)``;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
`;

const FooterBottomLeft = styled.div`
  width: 600px;
  height: 400px;
  margin-top: 80px;
  color: #fff;
`;

const LeftMain = styled.div`
  padding-bottom: 10px;
`;

const LeftMainInfo = styled.span`
  margin-right: 5px;

  font-size: 16px;
  font-weight: 600;
`;

const LeftInfo = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const LeftDescription = styled.p`
  margin-top: 30px;
  width: 500px;
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
`;

const FooterBottomRight = styled.div`
  width: 400px;
  height: 400px;
  text-align: left;
  margin-top: 190px;
`;

const FooterBottomRightInfo = styled.div`
  color: #fff;
`;

const RightInfoCS = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const RightInfoTime = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;
`;

const RightInfoCopyRight = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

export default Footer;
