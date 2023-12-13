import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { HeadingAbout } from './HeadingAbout';
import { theGang } from '../../data/aboutData';
import { useLanguage } from '../../context/LanguageContext';
import { headingsAbout, aboutTexts, aboutSmallTexts } from '../../data/aboutData';

const Wrapper = styled.div`
  width: 88.28vw;
  margin: auto;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
  border-bottom: 1px solid lightgray;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction:column;
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
  padding-left: 7rem;
  padding-top: 5.7rem;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  font-size: 4rem;
  width: 62vw; /* Fixed height to reserve space for the full text */
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
  margin-top: 1.5rem;
  font-size:3.438rem;
  line-height:3.438rem;
  white-space: wrap; /* Ensure text doesn't wrap */
`;

const TextContent = styled.div`
  font-size:2.188rem;
 line-height:2.188rem;
  margin-bottom:5rem;
`;

const Text = styled.div`
  width: 70%;
`;

const FlexContainer = styled.div`
display:flex;
flex-direction:row;
font-size:2rem;
width:100%;
align-items:start;

`;

const FlexContainerLeft = styled.div`
flex:50%;
justify-content:start;
height:7rem;
width:50%;
`;
const FlexContainerRight = styled.div`
flex:50%;
justify-content:start;
color:gray;
height:7rem;
width:50%;
`;

const SectionTwo = () => {
    const smallText = aboutSmallTexts.find((text) => text.id === 7)
    const writingText = aboutTexts.find((item) => item.id == 4)
    const flexRightRef = useRef(null);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const headingText = headingsAbout.find((item) => item.id == 5)
    const { language } = useLanguage()


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
            const fullText = writingText.text[language]
            let index = 0;

            const intervalId = setInterval(() => {
                setDisplayText(fullText.substring(0, index + 1));
                index++;

                if (index === fullText.length) {
                    clearInterval(intervalId);
                }
            }, 20);

            return () => clearInterval(intervalId);
        }
    }, [isTyping,language]);

    return (
        <Wrapper>
            <Container>
                <FlexLeft>
                    <HeadingAbout props={headingText.text[language]} />
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

            {theGang.map((item) => {
                return (
                    <FlexContainer className="light-font">
                        <FlexContainerLeft>{item.name}</FlexContainerLeft>
                        <FlexContainerRight>{item.title[language]}</FlexContainerRight>
                    </FlexContainer>
                )
            })}

        </Wrapper>
    );
};

export default SectionTwo;
