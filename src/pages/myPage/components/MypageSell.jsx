import React from 'react';
import styled from 'styled-components';

export default function MypageSell() {
  return (
    <SellContainer>
      <SellTitleBox>
        <SellTitle>History</SellTitle>
      </SellTitleBox>
      <SellTabsBox>
        <SellTabs>
          <SellTab>
            <SellTabState>입찰 진행 중</SellTabState>
            <SellTabStateValue>2</SellTabStateValue>
          </SellTab>
          <SellTab>
            <SellTabState>입찰 실패</SellTabState>
            <SellTabStateValue>0</SellTabStateValue>
          </SellTab>
          <SellTab>
            <SellTabState>구매 완료</SellTabState>
            <SellTabStateValue>1</SellTabStateValue>
          </SellTab>
          <SellTab>
            <SellTabState>판매 중</SellTabState>
            <SellTabStateValue>2</SellTabStateValue>
          </SellTab>
          <SellTab>
            <SellTabState>판매 완료</SellTabState>
            <SellTabStateValue>1</SellTabStateValue>
          </SellTab>
        </SellTabs>
      </SellTabsBox>
    </SellContainer>
  );
}
const SellContainer = styled.div`
  padding: 40px;
`;
const SellTitleBox = styled.div``;
const SellTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const SellTabsBox = styled.div``;
const SellTabs = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-top: 60px;
  margin-bottom: 10px;
`;
const SellTab = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 223.5px;
`;
const SellTabState = styled.p`
  color: #666;
  font-size: 16px;
`;
const SellTabStateValue = styled.p`
  color: #222;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;
