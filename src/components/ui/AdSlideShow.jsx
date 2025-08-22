import React, { useState, useEffect } from "react";
import styled from "styled-components";
import config from "../../config.json";

const AdSlideshow = ({ ads, interval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, interval);
    return () => clearInterval(timer);
  }, [ads.length, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <AdContainer>
      <SlideshowContainer>
        {ads.map((ad, index) => (
          <Slide
            key={index}
            active={index === currentIndex}
            style={{
              backgroundImage: `url(${config.backendUrl}${ad.image})`,
            }}
          >
            {/* hello */}
          </Slide>
        ))}
      </SlideshowContainer>
      <DotContainer>
        {ads.map((_, index) => (
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
  border-radius: 10px;
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
  width: 3px;
  height: 3px;
  border-radius: 50%;
  cursor: pointer;
  ${({ active }) =>
    active
      ? `background-color: #fff; width: 10px; border-radius: 50px; `
      : `background-color: #fff; opacity: 0.6;`}
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
  }
`;

export default AdSlideshow;
