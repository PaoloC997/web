import React from 'react'
import { styled } from 'styled-components'
import Heading from '../common/Heading'
import { useLanguage } from '../../context/LanguageContext';
import { aboutSmallTexts } from '../../data/aboutData';

const Wrapper = styled.div`
  width: 88.28vw;
  /*height:160vh;*/
  margin:auto;
  flex-direction:column;
  border-bottom:1px solid lightgray;
  padding-bottom:7rem;
  display:flex;
  margin-top:5rem;
  
`;

const Picture = styled.img`
width:100%;
object-fit:cover;
filter:contrast(128%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%);
`
const ContentContainer = styled.div`
  text-align: start;
  color: black;
white-space:pre-line;
max-width:70%;
  
`;

const TextContent = styled.p`
  font-size:2.188rem;
  line-height:2.188rem;
  text-align: start;
  color: black;
  width: 100%;
`;

const Image = () => {

  const { language } = useLanguage();
  const smallText = aboutSmallTexts.find((text) => text.id === 1)

  return (
    <Wrapper>
      <Picture loading="lazy" src="/img/testpic.jpg" />
      <ContentContainer>
        <TextContent
        >{smallText.text[language]}
        </TextContent>
      </ContentContainer>
    </Wrapper>

  )
}

export default Image
