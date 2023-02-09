import React from 'react';
import styled from 'styled-components';
import { ASIDE_LIST_MYINFO_DATA } from './MypageData';
import { ASIDE_LIST_SHOPPING_DATA } from './MypageData';

export default function MypageProfile() {
  return (
    <MyPageContainer>
      <AsideBar>
        <AsideMenu>
          <AsideMenuItems>{}</AsideMenuItems>
        </AsideMenu>
      </AsideBar>
      <MyPageHome>
        <UserMembership>
          <UserDetail>
            <UserImage />
            <InfoBox>
              <UserId>유저아이디</UserId>
              <ButtonBox>
                <ProfileEditBtn>프로필 수정</ProfileEditBtn>
                <ProfileEditBtn>내 스타일</ProfileEditBtn>
              </ButtonBox>
            </InfoBox>
          </UserDetail>
          <RightBox>
            <UserGradeBox>
              <UserGrade>일반회원</UserGrade>
              <UserGradeSub>회원 등급</UserGradeSub>
            </UserGradeBox>
            <UserGradeBox>
              <UserGrade>0P</UserGrade>
              <UserGradeSub>포인트</UserGradeSub>
            </UserGradeBox>
          </RightBox>
        </UserMembership>
      </MyPageHome>
    </MyPageContainer>
  );
}
const MyPageContainer = styled.div`
  margin: 0 auto;
  padding: 40px;
  max-width: 1280px;
  color: #222;
`;
const ButtonBox = styled.div`
  display: flex;
`;
const AsideBar = styled.nav`
  width: 100%;
`;
const AsideMenu = styled.ul``;
const AsideMenuItems = styled.li``;
const MyPageHome = styled.div``;
const UserMembership = styled.div`
  border: 1px solid #ebebeb;
  padding: 23px 0px 23px 23px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: lightgray;
  margin-right: 20px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const UserId = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
const UserDetail = styled.div`
  display: flex;
`;
const ProfileEditBtn = styled.button`
  margin-top: 12px;
  width: 70px;
  height: 36px;
  line-height: 34px;
  border: 1px solid #d3d3d3;
  background-color: #ffffff;
  border-radius: 10px;
  color: rgba(34, 34, 34, 0.8);
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  margin-right: 8px;
`;
const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserGradeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const UserGrade = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-right: 90px;
`;
const UserGradeSub = styled.p`
  font-size: 12px;
  color: lightgray;
`;
