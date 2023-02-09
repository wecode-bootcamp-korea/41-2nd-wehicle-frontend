import React from 'react';
import styled from 'styled-components';
import { useState, useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Carousel = ({ images, thumbnail }) => {
  const [currentId, setCurrentId] = useState(0);
  const imageBox = useRef();

  const displayNextImage = () => {
    if (currentId !== images.length - 1) {
      imageBox.current.style.transform = `translateX(-${
        (currentId + 1) * 560
      }px)`;
      setCurrentId(prev => prev + 1);
    }
  };

  const displayPrevImage = e => {
    if (currentId !== 0) {
      imageBox.current.style.transform = `translateX(-${
        (currentId - 1) * 560
      }px)`;
      setCurrentId(prev => prev - 1);
    }
  };

  return (
    <Banner>
      <BackIcon>
        <SlArrowLeft onClick={displayPrevImage} />
      </BackIcon>
      <NextIcon>
        <SlArrowRight onClick={displayNextImage} />
      </NextIcon>
      <ImageBox ref={imageBox}>
        <Image src={thumbnail} alt="car" />
        {images.map(data => {
          return <Image key={data} src={data} alt="car" />;
        })}
      </ImageBox>
    </Banner>
  );
};

export default Carousel;

const Banner = styled.div`
  display: flex;
  position: relative;
  width: 560px;
  height: 600px;
  overflow: hidden;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.5s ease-in-out;
`;

const Image = styled.img`
  top: 20px;
  overflow: hidden;
  object-fit: contain;
  width: 560px;
  height: 600px;
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 47%;
  font-size: 30px;
  z-index: 1;
  color: #000;
`;
const BackIcon = styled(Arrow)`
  left: 10px;
`;
const NextIcon = styled(Arrow)`
  right: 10px;
`;
