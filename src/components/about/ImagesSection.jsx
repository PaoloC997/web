import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { HeadingAbout } from './HeadingAbout';
import { useLanguage } from '../../context/LanguageContext';
import { headingsAbout, aboutTexts, aboutSmallTexts} from '../../data/aboutData';

const Wrapper = styled.div`
  width: 88.28vw;
  margin: auto;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
  display: flex;
 
`;

const Body = styled.div`

  
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
 
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FlexLeft = styled.div`
  flex: 50%;
  display: flex;
  align-self: stretch;
  align-items: start;
  margin-top: 0px;
  @media (max-width: 768px) {
    flex: 100%;
  }
`;

const FlexRight = styled.div`
  flex: 50%;
  padding-left: 6rem;
  padding-top:3rem;
  display: flex;
  align-self: stretch;
  align-items: center;
  font-size: 4rem;
  @media (max-width: 768px) {
    flex: 100%;
    font-size: 2rem;
    padding-left: 2rem;
  }
`;

const Text = styled.div`
  font-size:2.188rem;
 line-height:2.188rem;
  text-align: start;
  color: black;
  width: 60%;
  margin-left: 5.7rem;
  margin-top: 10rem;
  white-space:pre-line;
`;

const TextContent = styled.div`
  font-size:2.188rem;
 line-height:2.188rem;
  text-align: start;
  color: black;
  width: 60%;
  margin-left: 5.7rem;
  padding-bottom: 5.7rem;
  white-space:pre-line;
`;

const FlexImageLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  max-width: 50%;
  height: 100vh;
`;

const FlexImageRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  /*height: 100vh;*/
  align-items: end;
`;
const Picture = styled.img`
  width: 100%;
  /*height: 100%;*/
  object-fit: cover;
  object-position: center top;
  filter:contrast(128%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%);
  margin-bottom: 2rem;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-out, transform 0.4s ease-out;
  transform: translateY(${(props) => (props.isVisible ? 0 : -20)}px);
`;

const MediumPicture = styled.img`
  /*height: 90%;*/
  width: 90%;
  padding: 10px;
  object-fit: cover;
  top: 3rem;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  transform: translate(${(props) => (props.isVisible ? 0 : 100)}%, ${(props) => props.translateY}px);
`;

const SmallPicture = styled.img`
  /*height: 50%;*/
  width: 50%;
  padding-right: 4.5rem;
  padding-bottom: 3rem;
  filter:contrast(128%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%);
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.9s ease-out, transform 0.5s ease-out;
  transform: translate(${(props) => (props.isVisible ? 0 : -100)}%, ${(props) => props.translateY}px);
`;


const AnimatedText = styled.p`
  color: black;
  margin-top: 3.5rem;
  font-size:3.438rem;
  line-height:3.438rem;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: translateY(${(props) => (props.isVisible ? '0' : '1em')});
  transition: opacity 0.5s, transform 0.5s;
`;


const ImagesSection = () => {
  const smallTextOne = aboutSmallTexts.find((text) => text.id === 4)
  const smallTextTwo = aboutSmallTexts.find((text) => text.id === 5)
  const headingText = headingsAbout.find((item)=> item.id == 3)
  const writingText = aboutTexts.find((item)=> item.id == 3)
  const flexImageLeftRef = useRef(null);
  const flexImageRightRef = useRef(null);
  const textRef = useRef(null)

  const { language } = useLanguage()

  const [isVisible, setIsVisible] = useState(false);

  const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  const [isVisibleRight, setIsVisibleRight] = useState(false);

  const [translateYLeft, setTranslateYLeft] = useState(0);
  const [translateYRight, setTranslateYRight] = useState(0);

  const translateYFactor = 0.1;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersectionLeft = (entries) => {
      const entry = entries[0];
      setIsVisibleLeft(entry.isIntersecting);
      setTranslateYLeft(entry.isIntersecting ? -entry.boundingClientRect.top * translateYFactor : 0);
    };

    const handleIntersectionRight = (entries) => {
      const entry = entries[0];
      setIsVisibleRight(entry.isIntersecting);
      setTranslateYRight(entry.isIntersecting ? -entry.boundingClientRect.top * translateYFactor : 0);
    };

    const handleIntersectionText = (entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);

    };

    const observerLeft = new IntersectionObserver(handleIntersectionLeft, options);
    const observerRight = new IntersectionObserver(handleIntersectionRight, options);
    const observerText = new IntersectionObserver(handleIntersectionText, options)

    if (flexImageLeftRef.current) {
      observerLeft.observe(flexImageLeftRef.current);
    }

    if (flexImageRightRef.current) {
      observerRight.observe(flexImageRightRef.current);
    }

    if (textRef.current) {
      observerText.observe(textRef.current)
    }

    return () => {
      observerLeft.disconnect();
      observerRight.disconnect();
      observerText.disconnect();
    };
  }, []);

  return (
    <Body>
      <Wrapper>
        <Container>
          <FlexLeft>
            <HeadingAbout props={headingText.text[language]} />
          </FlexLeft>
          <FlexRight>
            <AnimatedText ref={textRef} isVisible={isVisible}>
             {writingText.text[language]}
            </AnimatedText>
          </FlexRight>
        </Container>
      </Wrapper>
      <ImageWrapper>
        <FlexImageLeft>
          <Picture
            ref={flexImageLeftRef}
            src="/img/testpic2.jpeg"
            loading="lazy"
            isVisible={isVisibleLeft}
          />
          <Text><p>{smallTextOne.text[language]}</p></Text>
        </FlexImageLeft>
        <FlexImageRight>
          <SmallPicture
            ref={flexImageRightRef}
            src="/img/testpic3.jpg"
            loading="lazy"
            isVisible={isVisibleRight}
            translateY={translateYRight}
          />
          <MediumPicture
            src="/img/red2.png"
            loading="lazy"
            isVisible={isVisibleRight}
            translateY={translateYRight}
          />
        </FlexImageRight>
      </ImageWrapper>
      <TextContent>
        <p>{smallTextTwo.text[language]}</p>
      </TextContent>
    </Body>
  );
};

export default ImagesSection;
