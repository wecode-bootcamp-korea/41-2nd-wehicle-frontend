import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Chart from './Chart';

const ChartBox = ({ chartData, params, topPrice }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [carChartData, setCarChartData] = useState(chartData);
  const [dateTab, setDateTab] = useState(5);
  const [yearTab, setYearTab] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTab = id => {
    setDateTab(id);
    if (id === 5) {
      setSearchParams('');
      return;
    } else {
      searchParams.set('period', id);
      // searchParams.set('year', null);
      setSearchParams(searchParams);
    }
  };

  const selectedYear = event => {
    setYearTab(event.target.value);
    searchParams.set('year', event.target.value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch(`${BASE_URL}products/${params.id}?${searchParams.toString()}`)
      .then(res => res.json())
      .then(data => {
        setCarChartData(data.data.productMarketPrice);
      });
  }, [searchParams]);

  return (
    <>
      <TopBox>
        <TopTitle>상품 입찰 TOP3</TopTitle>
        {topPrice.map(price => {
          return (
            <TopList key={price}>{price.toLocaleString('ko-KR')}원</TopList>
          );
        })}
      </TopBox>
      <div>
        <ChartTitle>시세</ChartTitle>
        <Date onChange={selectedYear}>
          {YEAR_LIST.map(year => {
            return (
              <DateOption value={year.year} key={year.id}>
                {year.year}
              </DateOption>
            );
          })}
        </Date>
        <TabList>
          {CHART_LIST.map(data => {
            return (
              <TabTitle key={data.id}>
                <TabName
                  clicked={dateTab === data.id}
                  onClick={() => selectedTab(data.id)}
                >
                  {data.title}
                </TabName>
              </TabTitle>
            );
          })}
        </TabList>
        <Chart carChartData={carChartData} />
      </div>
    </>
  );
};

const ChartTitle = styled.p`
  margin: 60px 0 20px 0;
  line-height: 22px;
  font-size: 20px;
  font-weight: 700;
`;

const Date = styled.select`
  font-size: 18px;
`;

const DateOption = styled.option`
  font-size: 18px;
`;

const TabList = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 10px;
  background-color: #f4f4f4;
  list-style: none;
  font-size: 15px;
`;

const TabTitle = styled.li`
  flex: 1;
  margin: 2px;
  padding: 0;
`;

const TabName = styled.div`
  line-height: 16px;
  padding: 7px 0 9px;
  font-size: 13px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => (props.clicked ? 'white' : '')};
  font-weight: ${props => (props.clicked ? 900 : 400)};
`;

const TopBox = styled.div`
  margin-top: 60px;
`;

const TopTitle = styled.ul`
  line-height: 17px;
  padding-top: 9px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const TopList = styled.li`
  margin: 15px 0;
  font-size: 18px;
  padding: 10px 10px;
  border: 1px solid #efefef;
  border-radius: 10px;
  text-align: center;
`;

export default ChartBox;

const CHART_LIST = [
  { id: 1, title: '1개월' },
  { id: 3, title: '3개월' },
  { id: 6, title: '6개월' },
  { id: 12, title: '1년' },
  { id: 5, title: '전체' },
];

const YEAR_LIST = [
  { id: 1, year: '전체' },
  { id: 2, year: '2022' },
  { id: 3, year: '2021' },
  { id: 4, year: '2020' },
  { id: 5, year: '2019' },
  { id: 6, year: '2018' },
  { id: 7, year: '2017' },
  { id: 8, year: '2016' },
  { id: 9, year: '2015' },
  { id: 10, year: '2014' },
];
