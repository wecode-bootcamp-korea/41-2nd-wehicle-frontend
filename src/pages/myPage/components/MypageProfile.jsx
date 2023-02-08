import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function MypageProfile() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [myData, setMyData] = useState('');
  useEffect(() => {
    fetch(`${BASE_URL}users`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => setMyData(data));
  }, []);
  return (
    <MyPageContainer>
      <MyPageHome>
        <UserMembership>
          <UserDetail>
            <UserImage src="./images/mypage/ww.jpeg" />
            <InfoBox>
              <UserIdBox>
                <UserId>{myData.userData?.nickname} 님</UserId>
              </UserIdBox>
              <ButtonBox>
                <ProfileEditBtn>프로필 수정</ProfileEditBtn>
              </ButtonBox>
            </InfoBox>
          </UserDetail>
          <RightBox>
            <UserGradeBox>
              <UserGrade>VIP 회원</UserGrade>
              <UserGradeSub>회원 등급</UserGradeSub>
            </UserGradeBox>
            <UserGradeBox>
              <UserGrade>
                {parseInt(myData.userData?.points)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                P
              </UserGrade>
              <UserGradeSub>포인트</UserGradeSub>
            </UserGradeBox>
          </RightBox>
        </UserMembership>
      </MyPageHome>
    </MyPageContainer>
  );
}
const UserIdBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const MyPageContainer = styled.div`
  margin: 0 auto;
  padding: 50px 60px 40px 60px;
  max-width: 1280px;
  color: #222;
`;
const ButtonBox = styled.div`
  display: flex;
`;
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
  margin-right: 30px;
  margin-left: 20px;
  object-fit: contain;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const UserId = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
const UserDetail = styled.div`
  display: flex;
`;
const ProfileEditBtn = styled.button`
  margin-top: 12px;
  width: 90px;
  height: 36px;
  line-height: 34px;
  border: 1px solid #d3d3d3;
  background-color: #ffffff;
  border-radius: 10px;
  color: #222;
  font-size: 14px;
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
  font-size: 18px;
  font-weight: bold;
  margin-right: 90px;
`;
const UserGradeSub = styled.p`
  font-size: 14px;
  color: #999;
`;
