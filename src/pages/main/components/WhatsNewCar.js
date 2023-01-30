import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function WhatsNewCar() {
  const navigate = useNavigate();
  const limit = 4;
  const [offset, setOffset] = useState(0);
  const [whatsNewList, setWhatsNewList] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/cars?limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setWhatsNewList(data.data);
      });
  }, []);

  const handleMoreBtn = () => {
    setOffset(offset + limit);

    fetch(`${BASE_URL}/cars?offset=${offset + limit}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setWhatsNewList(prev => [...prev, ...data.data]);
      });
  };

  const toDetailPage = id => {
    navigate(`/products/productId/${id}`);
  };

  return (
    <div>
      <WhatsNewCarBox>
        <NewCarContainer>
          <NewCarTitle>What's New</NewCarTitle>
          <NewCarContents>
            {whatsNewList.map(data => {
              const { id, thumbnail, brandName, name } = data;
              return (
                <ContentBox
                  key={id}
                  onClick={() => {
                    toDetailPage(id);
                  }}
                >
                  <ContentPic>
                    <ContentPicImg src={thumbnail} />
                  </ContentPic>
                  <ContentTxt>
                    <ContentTxtBrand>{brandName}</ContentTxtBrand>
                    <ContentTxtKind>{name}</ContentTxtKind>
                  </ContentTxt>
                </ContentBox>
              );
            })}
          </NewCarContents>
          <More>
            <MoreBtn onClick={handleMoreBtn}>더보기</MoreBtn>
          </More>
        </NewCarContainer>
      </WhatsNewCarBox>
    </div>
  );
}

export default WhatsNewCar;

const WhatsNewCarBox = styled.div`
  display: block;
  margin: 0 100px;
`;

const NewCarContainer = styled.div`
  margin-bottom: 100px;
`;

const NewCarTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

const NewCarContents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 340px);
  column-gap: 30px;
  margin-top: 34px;
`;

const ContentBox = styled.div`
  margin-right: 20px;
`;

const ContentPic = styled.div`
  width: 340px;
  height: 250px;
  background: #fff;
  overflow: hidden;
`;

const ContentPicImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ContentTxt = styled.div`
  margin: 15px 0 30px 8px;
  color: #222;
`;

const ContentTxtBrand = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

const ContentTxtKind = styled.p`
  margin-top: -3px;
  font-weight: 400;
`;

const More = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const MoreBtn = styled.button`
  padding: 17px 27px 15px;
  border: 1px solid #222;
  border-radius: 10px;
  background: #fff;
  font-size: 16px;
  color: #222;
  cursor: pointer;

  &:hover {
    border: 1px solid #222;
    background: #222;
    color: #fff;
  }
`;
