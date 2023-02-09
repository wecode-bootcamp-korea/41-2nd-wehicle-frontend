import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

export default function ProductSlider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('./data/productListSlide.json')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplaySpeed: 5000,
    arrows: true,
  };
  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        {images.map(image => {
          return (
            <SliderBox key={image.id}>
              <SliderContent src={image.url} />
            </SliderBox>
          );
        })}
      </StyledSlider>
    </SliderContainer>
  );
}
const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 100;
    left: 10px;
    bottom: 10px;
  }
  .slick-next {
    right: 10px;
  }
  .slick-list {
    width: 100%;
    height: 200px;
    margin: 0 auto;
    background-color: #f0f9ff;
    color: white;
  }
`;
const SliderContainer = styled.div``;
const SliderBox = styled.div`
  width: 1280px;
`;
const SliderContent = styled.img`
  width: 1280px;
  height: 200px;
  object-fit: cover;
`;
