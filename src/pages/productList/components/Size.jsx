import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Category = ({ categoryData, selectSize }) => {
  const [isFilterTab, setIsFilterTab] = useState(true);
  const { categoryList, title, subTitle } = categoryData;
  const handelCategory = () => {
    setIsFilterTab(!isFilterTab);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilter = sizeNumber => {
    const current = searchParams.get('size');
    if (current === sizeNumber) {
      searchParams.delete('size');
      setSearchParams(searchParams);
      return;
    }
    searchParams.set('size', sizeNumber);
    searchParams.set('offset', 0);
    setSearchParams(searchParams);
  };
  return (
    <CategoryWrapper>
      <Title>
        <CategoryTag>{title}</CategoryTag>
        <SeeMore onClick={handelCategory}>{isFilterTab ? '+' : '-'}</SeeMore>
      </Title>
      <SubTitle>{subTitle}</SubTitle>
      <List>
        {categoryList &&
          categoryList.map(category => {
            return (
              <Hide key={category.id} isFilterTab={isFilterTab}>
                <SelectCategory onClick={() => selectSize(category)}>
                  <CheckBox
                    onClick={() => {
                      handleFilter(category.query);
                    }}
                    type="checkBox"
                    checked={searchParams.get('size') === category.query}
                    readOnly
                  />
                  {category.name}
                </SelectCategory>
              </Hide>
            );
          })}
      </List>
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 0.5rem 0.5rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
`;

const SubTitle = styled.div`
  color: #b0b0b0;
  font-size: 14px;
`;

const CategoryTag = styled.p`
  display: block;
`;

const SeeMore = styled.button`
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  color: #bababa;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hide = styled.div`
  display: ${props => (props.isFilterTab ? 'none' : 'block')};
`;

const SelectCategory = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const CheckBox = styled.input`
  margin-right: 7px;
`;
