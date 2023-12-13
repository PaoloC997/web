import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { introText } from '../../data/homeData';
import { buttonTexts } from '../../data/homeData';
import { Link } from 'react-router-dom';
import About from '../about/About';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
 /* height: 140vh; /* 100% of the viewport height */
  position:relative;

`;

const CarouselContainer = styled.div`
 height:100vh;
  overflow: hidden;
  position: relative;
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  /*flex: 2; /* Takes 20% of the available height */
  text-align: start; /* Align text to the left */
  color: black;
  background-color: white; /* Placeholder background color */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width:88.28%;
  margin:auto;
  border-bottom:1px solid lightgray;
`;

const TextContent = styled.p`
  font-size: 3.4375rem;
  line-height: 3.4375rem;
  letter-spacing:-0.01em;
  text-align: start;
  color: black;
  max-width: 68%;
  white-space:pre-line;
  
`;


const VideoText = styled.p`
  font-size: 5.625rem;
  line-height:5.625rem;
  color: white;
  position: absolute;
  width: 50%;
  bottom: 9rem;
  left: 5.7rem;
  z-index: 15;
  letter-spacing:-0.01em;
  @media (max-width: 768px){
    font-size:2rem;
  }

&&:hover{
   animation: glitch ${getRandomDuration(2, 5)}s linear infinite;
}
 
  @keyframes glitch {
    2%, 64% {
      transform: translate(3px, 0) skew(0deg);
      animation-delay: ${getRandomDelay(0.1, 0.5)}s;
    }
    4%, 60% {
      transform: translate(-1px, 0) skew(0deg);
      animation-delay: ${getRandomDelay(0.1, 0.5)}s;
    }
    62% {
      transform: translate(0, 0) skew(5deg);
      animation-delay: ${getRandomDelay(0.1, 0.5)}s;
    }
  }

  &:before,
  &:after {
    content: attr(title);
    position: absolute;
    left: 0;
  }

  &:before {
    animation: glitchTop ${getRandomDuration(1, 3)}s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  @keyframes glitchTop {
    2%, 64% {
      transform: translate(5px, -2px);
      animation-delay: ${getRandomDelay(0.1, 0.5)}s;
    }
    4%, 60% {
      transform: translate(-2px, 2px);
      animation-delay: ${getRandomDelay(0.1, 0.5)}s;
    }
    62% {
      transform: translate(13px, -1px) skew(-13deg);
      animation-delay: ${getRandomDelay(0.1, 0.5)}s;
    }
  }

  &:after {
    animation: glitchBottom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 61%, 97% 100%, 0 100%);
  }

  @keyframes glitchBottom {
    2%, 64% {
      transform: translate(-5px, 0);
      animation-delay: ${getRandomDelay(0.1, 0.5)}s;
    }
    4%, 60% {
      transform: translate(-2px, 0);
      animation-delay: ${getRandomDelay(0.1, 0.5)}s;
    }
    62% {
      transform: translate(-22px, 5px) skew(21deg);
      animation-delay: ${getRandomDelay(0.1, 0.5)}s;
    }
  }


`;
function getRandomDelay(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomDuration(min, max) {
  return Math.random() * (max - min) + min;
}

const Intro = () => {
  const { language } = useLanguage();

  const videoHomeText = introText.find((item) => item.id === 1);
  const currentHomeText = introText.find((item) => item.id === 2);
  const buttonText = buttonTexts.find((item) => item.id === 1)

  return (
    <div>
      <MainContainer>
        <CarouselContainer>
          <VideoText className='thin-font'>
            {videoHomeText.text[language]}
          </VideoText>
          <BackgroundVideo autoPlay loop muted playsInline preload>
            <source
              src="img/video.mp4"
              type="video/mp4"
            />
          </BackgroundVideo>
        </CarouselContainer>
        <ContentContainer>
          <TextContent style={{ whiteSpace: 'pre-line' }}>
            {currentHomeText.text[language]}
          </TextContent>
          <Link to={`/about`} component={About}>
            <Button text={buttonText ? buttonText.text[language] : ""}></Button>
          </Link>
        </ContentContainer>
      </MainContainer>
    </div>
  );
};

export default Intro;
