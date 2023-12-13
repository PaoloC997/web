import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Heading from '../common/Heading';
import { headings } from '../../data/homeData';
import Button from '../common/Button';
import { buttonTexts } from '../../data/homeData';
import { useLanguage } from '../../context/LanguageContext';
import { introText } from '../../data/homeData';
import ProjectList from '../projects/ProjectList';

const Wrapper = styled.div`
  width: 88.28vw;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  margin: auto;
  cursor: none;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    transition: background 0.3s;
  }

  &:hover::before {
    background: transparent;
  }
`;

const Cursor = styled.div`
  position: fixed;
  font-size: 2rem;
  font-family: 'GT America Compressed Light', sans-serif;
  color: black;
  background-color: white;
  border-radius: 50%;
  width: 8vw;
  height: 8vw;
  line-height: 8vw;
  padding: 0.5rem;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  display:flex;
  justify-content:center;
  align-content:center;
`;

const ContentContainer = styled.div`
  color: black;
  max-width: 100%;
`;

const TextContent = styled.p`
  font-size: 3.4375rem;
  line-height: 3.4375rem;
  letter-spacing:-0.01em;
  text-align: start;
  color: black;
  width: 70%;
`;

const BrandVideo = () => {
  const { language } = useLanguage();
  const buttonText = buttonTexts.find((item) => item.id === 2);
  const heading = headings.find((heading) => heading.id === 1);
  const caption = introText.find((text) => text.id === 3);
  const [isPlaying, setPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  
 
  const handleVideoClick = () => {
    if (videoRef.current) {
      setPlaying(!isPlaying);
    }
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
  

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Wrapper>
      <Heading props={heading.text[language]} />
      <VideoContainer
        onClick={handleVideoClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ReactPlayer
          ref={videoRef}
          url="https://player.vimeo.com/video/863362136"
          width="100%"
          height="100%"
          playing={isPlaying}
          controls={false}
        />
      </VideoContainer>
      <Cursor isVisible={isHovered && !isPlaying} style={{ left: mousePosition.x, top: mousePosition.y }}>
        PLAY VIDEO
      </Cursor>
      <ContentContainer>
        <TextContent>{caption.text[language]}</TextContent>
        <Link to="/projects" component={ProjectList}>
          <Button text={buttonText ? buttonText.text[language] : ''}></Button>
        </Link>
      </ContentContainer>
    </Wrapper>
  );
};

export default BrandVideo;
