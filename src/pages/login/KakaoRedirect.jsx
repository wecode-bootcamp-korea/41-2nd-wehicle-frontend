import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function KakaoRedirect() {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}users/login?code=${searchParams.get('code')}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data that resource');
        }
        return res.json();
      })
      .then(res => {
        localStorage.setItem('accessToken', res.accessToken);
        alert('성공적으로 로그인 되었습니다.');
        navigate('/');
      })
      .catch(err => {
        setError(err.message);
        alert('로그인에 실패했습니다.');
      });
  }, []);
  return <div>{error && <div>{error}</div>}</div>;
}
