import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { HeadingAbout } from './HeadingAbout';
import { useLanguage } from '../../context/LanguageContext';
import { headingsAbout, aboutTexts, aboutSmallTexts } from '../../data/aboutData';

const Wrapper = styled.div`
  width: 88.28vw;
  /*height: 100vh;*/
  margin: auto;
  flex-direction: column;
  padding-bottom: 5rem;
  border-bottom: 1px solid lightgray;
  display: flex;
  
`;

const Container = styled.div`
  display: flex;
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
  white-space:pre-wrap;
  @media (max-width: 768px) {
    flex: 100%;
  }
`;

const FlexRight = styled.div`
  flex: 50%;
  
  padding-top: 4.5rem;
  display: flex;
  align-self: stretch;
  font-size: 3.438rem;
  line-height:3.438rem;
  width: 50vw; /* Fixed height to reserve space for the full text */
  height: 60vh;
  overflow: hidden;
  @media (max-width: 768px) {
    flex: 100%;
    font-size: 2rem;
    padding-left: 2rem;
    height: 2rem; /* Adjusted height for smaller screens */
  }
`;

const TypingText = styled.p`
  font-size: inherit;
  color: black;
  margin-top: 2.5rem;
  white-space: wrap;
  font-size:3.438rem;
  line-height:3.438rem;
 
`;

const TextContent = styled.div`
 font-size:2.188rem;
 line-height:2.188rem;
`;

const Text = styled.div`
  width: 70%;
`;

const SectionOne = () => {
  const { language } = useLanguage();
  const smallText = aboutSmallTexts.find((text) => text.id === 3)
  const headingText = headingsAbout.find((item)=> item.id == 2)
  const writingText = aboutTexts.find((item)=> item.id == 2)
  const flexRightRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        setIsTyping(true);
        setHasAnimated(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (flexRightRef.current) {
      observer.observe(flexRightRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (isTyping) {
      const fullText = writingText.text[language];
      let index = 0;

      const intervalId = setInterval(() => {
        setDisplayText(fullText.substring(0, index + 1));
        index++;

        if (index === fullText.length) {
          clearInterval(intervalId);
        }
      }, 30);

      return () => clearInterval(intervalId);
    }
  }, [isTyping,language]);

  return (
    <Wrapper>
      <Container>
        <FlexLeft>
          <HeadingAbout props={headingText.text[language]}/>
        </FlexLeft>
        <FlexRight ref={flexRightRef}>
          <TypingText>{displayText}</TypingText>
        </FlexRight>
      </Container>
      <TextContent>
        <Text>
          <p>
            {smallText.text[language]}
          </p>
        </Text>
      </TextContent>
    </Wrapper>
  );
};

export default SectionOne;
