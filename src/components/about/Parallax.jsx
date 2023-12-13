import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { useLanguage } from '../../context/LanguageContext';
import { aboutSmallTexts } from '../../data/aboutData';

const Wrapper = styled.div`
  width: 100vw;
  margin:auto;
  display:flex;
  flex-direction:column;
  border-bottom:1px solid lightgray;
  padding-bottom:7rem;

`;

const ContentContainer = styled.div`
  text-align: start;
  color: black;
  width:88.28vw;
  margin:auto;
  
`;

const TextContent = styled.div`
  font-size:2.188rem;
  line-height:2.188rem;
  text-align: start;
  color: black;
  width: 75%;
  white-space:pre-line;
`;


const Parallax = () => {
  const { language } = useLanguage();
  const smallText = aboutSmallTexts.find((text) => text.id === 2)

    return (
        <Wrapper>
            <ParallaxBanner style={{ aspectRatio: '2 / 1', height: "80vh" }}>
                <ParallaxBannerLayer image="/img/red2.png" speed={-40} />
            </ParallaxBanner>
            <ContentContainer>
                <TextContent>
                <p>{smallText.text[language]}</p>
                </TextContent>
            </ContentContainer>
        </Wrapper>

    );
};

export default Parallax;
