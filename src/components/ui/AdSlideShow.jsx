import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AdSlideshow = ({ images, interval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <AdContainer>
      <SlideshowContainer>
        {images.map((image, index) => (
          <Slide
            key={index}
            active={index === currentIndex}
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* hello */}
          </Slide>
        ))}
      </SlideshowContainer>
      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotContainer>
    </AdContainer>
  );
};

const AdContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  color: red;
`;

const SlideshowContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no- repeat;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const Title = styled.h4`
  // color: #002063;
  color: #fff;
  margin-bottom: 1rem;
  margin-top: 0;
  font-size: 2rem;
  font-weight: bold;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;
`;

const Subheading = styled.p`
  font-size: 1.1em; /* Adjust font size as needed */
  line-height: 1.6;
  color: #fff;
  margin-bottom: 40px;
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  cursor: pointer;
  ${({ active }) =>
    active
      ? `background-color: #7359c6; width: 15px; border-radius: 50px; `
      : `background-color:rgba(114, 89, 198, 0.67);`}
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
  }
`;

export default AdSlideshow;
