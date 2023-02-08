import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const handleChangeInput = e => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    searchParams.set('keyword', searchInput);
    setSearchParams(searchParams);
  };
  const handleClear = () => {
    searchParams.delete('keyword');
    setSearchParams(searchParams);
    setSearchInput('');
  };

  return (
    <SubmitForm onSubmit={handleSubmit}>
      <SearchBarInput
        type="text"
        value={searchInput}
        onChange={handleChangeInput}
      />
      <SearchClearBtn type="button" onClick={handleClear}>
        x
      </SearchClearBtn>
    </SubmitForm>
  );
}
const SubmitForm = styled.form``;

const SearchBarInput = styled.input.attrs({
  placeholder: '상품 이름을 입력 해 주세요.',
})`
  max-width: 720px;
  width: 600px;
  height: 50px;
  border-bottom: 3px solid black;
  border-top: none;
  border-right: none;
  border-left: none;
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
`;
const SearchClearBtn = styled.button`
  border-radius: 100%;
  width: 15px;
  border: none;
  background-color: #dedede;
`;
