import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';

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
      {searchInput && (
        <SearchClearBtn type="button" onClick={handleClear}>
          <GrFormClose />
        </SearchClearBtn>
      )}
    </SubmitForm>
  );
}
const SubmitForm = styled.form`
  margin-bottom: 30px;
`;

const SearchBarInput = styled.input.attrs({
  placeholder: '상품 이름을 입력해 주세요',
})`
  max-width: 720px;
  width: 600px;
  height: 50px;
  padding: 0 15px;
  border: none;
  border-bottom: 3px solid black;
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 18px;
    color: #999;
  }
`;

const SearchClearBtnBox = styled.div`
  position: relative;
`;

const SearchClearBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 14px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  font-size: 16px;
`;
