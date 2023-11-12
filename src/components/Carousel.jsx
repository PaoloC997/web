import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 100% of the viewport height */
`;

const CarouselContainer = styled.div`
  flex: 8; /* Takes 80% of the available height */
  overflow: hidden;
  position: relative;
`;

const ContentContainer = styled.div`
  flex: 2; /* Takes 20% of the available height */
  text-align: start; /* Align text to the left */
  color: black;
  padding: 10px;
  max-width: 100%;
  margin-left: 0;
  background-color: #f0f0f0; /* Placeholder background color */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContent = styled.p`
  font-size: 1.5rem;
  text-align: start;
  color: black;
  max-width: 50%;
  margin-left: 1.5rem;
`;

const LearnMoreButton = styled.button`
  background-color: gray; /* Placeholder color */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 1.5rem;
  margin-bottom: 10px;
`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position:absolute;
  bottom:30%;
  right:50px;
`;

const IndicatorDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? 'black' : 'gray')};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

const images = [
  'https://source.unsplash.com/random/1920x1080',
  'https://source.unsplash.com/random/1920x1081',
  'https://source.unsplash.com/random/1920x1082',
  'https://source.unsplash.com/random/1920x1083',
  'https://source.unsplash.com/random/1920x1084',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <MainContainer>
        <CarouselContainer>
          <CarouselImage src={images[currentImageIndex]} alt="Carousel" />
          <IndicatorContainer>
            {images.map((_, index) => (
              <IndicatorDot
                key={index}
                active={index === currentImageIndex}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </IndicatorContainer>
        </CarouselContainer>
        <ContentContainer>
          <TextContent>
            We are a collective of art and culture professionals dedicated to the exploration of new forms of representation
            and enhancement of acoustic and sound heritage.
          </TextContent>
          <LearnMoreButton>Learn More +</LearnMoreButton>
        </ContentContainer>
      </MainContainer>
    </div>
  );
};

export default Carousel;
