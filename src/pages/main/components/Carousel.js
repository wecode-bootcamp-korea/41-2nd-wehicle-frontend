import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Carousel() {
  const imageBox = useRef();
  const [carouselImg, setCarouselImg] = useState([]);
  const [currIdx, setCurrIdx] = useState(0);

  const showPrevImg = () => {
    imageBox.current.style.transform = `translateX(-${(currIdx - 1) * 100}vw)`;
    setCurrIdx(prev => prev - 1);
  };

  const showNextImg = () => {
    if (currIdx !== carouselImg.length - 1) {
      imageBox.current.style.transform = `translateX(-${
        (currIdx + 1) * 100
      }vw)`;
      setCurrIdx(prev => prev + 1);
    }
  };

  useEffect(() => {
    fetch('/data/main/carouselImg.json')
      .then(res => res.json())
      .then(data => setCarouselImg(data));
  }, []);

  return (
    <CarouselBox>
      <LeftBtn onClick={showPrevImg}>
        <IoIosArrowBack />
      </LeftBtn>
      <ImgBox ref={imageBox}>
        {carouselImg.map(data => (
          <Content key={data.id}>
            <ContentImg src={data.img} alt={data.alt} />
          </Content>
        ))}
      </ImgBox>
      <RightBtn onClick={showNextImg}>
        <IoIosArrowForward />
      </RightBtn>
    </CarouselBox>
  );
}

const CarouselBox = styled.div`
  display: block;
  height: 700px;
  overflow: hidden;
`;

const ArrowBtn = styled.div`
  position: absolute;
  top: 40%;
  cursor: pointer;
`;

const RightBtn = styled(ArrowBtn)`
  right: 30px;
  font-size: 70px;
  color: rgba(255, 255, 255, 0.7);
`;

const LeftBtn = styled(ArrowBtn)`
  left: 30px;
  font-size: 70px;
  color: rgba(255, 255, 255, 0.7);
  z-index: 1;
`;

const ImgBox = styled.div`
  display: flex;
  width: 400vw;
  transition: all 0.5s ease-in-out;
`;

const Content = styled.div`
  width: 100vw;
`;

const ContentImg = styled.img`
  width: 100vw;
`;
