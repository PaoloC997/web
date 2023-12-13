import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Heading from '../common/Heading';
import { buttonTexts, headings, introText } from '../../data/homeData';
import Button from '../common/Button.jsx';
import { useLanguage } from '../../context/LanguageContext.js';
import Services from '../services/Services.jsx';
import { services } from '../../data/homeData';

const Wrapper = styled.div`
  width: 88.28vw;
  margin: auto;
  border-bottom: 1px solid lightgray;
  @media (max-width: 768px) {
    height: 500vh;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  margin: auto;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
`;

const ListItem = styled.div`
  position: relative;
  width: 32%;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer; 
`;

const ServiceVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
`;

const ServiceText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.5rem;
  font-size: 2rem;
  color: black;
  z-index: 1; 
`;

const ContentContainer = styled.div`
  flex: 2;
  text-align: start;
  color: black;
  max-width: 100%;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const TextContent = styled.p`
  font-size: 3.4375rem;
  line-height: 3.4375rem;
  letter-spacing: -0.01em;
  text-align: start;
  color: black;
  white-space: pre-wrap;
`;

const ServicePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  opacity: ${(props) => (props.showVideo ? '0' : '1')};
  transition: opacity 6s ease-in-out;
`;

const ServiceList = () => {
  const { language } = useLanguage();
  const heading = headings.find((heading) => heading.id === 2);
  const caption = introText.find((text) => text.id === 4);
  const buttonText = buttonTexts.find((item) => item.id === 3);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState({});

  const handleHover = (id) => {
    if (!videoLoaded[id]) return; 
    setHoveredItemId(id);
    const video = document.getElementById(`video${id}`);

    try {
      if (videoLoaded[id] && video.paused) {
        video.play().catch((error) => {
          console.error('Error playing video:', error);
        });
      }
    } catch (error) {
      console.error('Error playing video:', error);
    }
  };

  const handleHoverOut = (id) => {
    if (!videoLoaded[id]) return;
    setHoveredItemId(null);
    const video = document.getElementById(`video${id}`);

    try {
      if (videoLoaded[id] && !video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    } catch (error) {
      console.error('Error pausing video:', error);
    }
  };

  const handleVideoLoaded = (id) => {
    setVideoLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <Wrapper>
      <Heading props={heading.text[language]} />
      <ListContainer>
        {services.map((service) => (
          <ListItem
            key={service.id}
            onMouseEnter={() => handleHover(service.id)}
            onMouseLeave={() => handleHoverOut(service.id)}
          >
            <VideoContainer>
              <ServiceVideo
                className="videos"
                id={`video${service.id}`}
                loading="eager"
                muted
                loop
                playsInline
                onLoadedData={() => handleVideoLoaded(service.id)}
              >
                <source src={service.video} type="video/mp4" />
                Your browser does not support the video tag.
              </ServiceVideo>
            </VideoContainer>
            <Link to={`/services/${service.id}`} component={Services}>
              <ServicePicture
                showVideo={videoLoaded}
                loading="eager"
                src={service.image}
                alt={service.name[language]}
              />
            </Link>
            <ServiceText>{service.name[language]}</ServiceText>
          </ListItem>
        ))}
        <ContentContainer>
          <TextContent>{caption.text[language]}</TextContent>
          <Link to={`/services`} component={Services}>
            <Button text={buttonText.text[language]}></Button>
          </Link>
        </ContentContainer>
      </ListContainer>
    </Wrapper>
  );
};

export default ServiceList;
