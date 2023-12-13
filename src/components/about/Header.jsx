import React from 'react'
import { styled } from 'styled-components'
import { HeadingAbout } from './HeadingAbout';
import { useLanguage } from '../../context/LanguageContext';
import { headingsAbout } from '../../data/aboutData';
import { aboutTexts } from '../../data/aboutData';

const Wrapper = styled.div`
  width: 88.28vw;
  height:45vh;
  margin:auto;
  align-items: center;
  flex-direction:column;
  padding-bottom:5rem;
  display:flex;
  margin-top:10rem;
 
`;

const Container = styled.div`
 display:flex;
 align-items: center;
 flex-direction:row;
 @media (max-width: 768px){
    flex-direction:column;
  }
`;

const FlexLeft = styled.div`
  flex:50%;
  display:flex;
  align-self: stretch;
  align-items: start; 
  margin-top:0px;
  @media (max-width: 768px){
    flex:100%;
  }
`;
const FlexRight = styled.div`
  flex:50%;
  display:flex;
  align-self: stretch;
  align-items: center; 
  font-size:3.438rem;
  line-height:3.438rem;
  @media (max-width: 768px){
    flex:100%;
    font-size:2rem;
    padding-left:2rem;
  }
`;


const Header = () => {
  const headingText = headingsAbout.find((item)=> item.id == 1);
  const headingTextSmall = aboutTexts.find((item)=> item.id == 1);
  const { language } = useLanguage()

    return (
        <Wrapper>
            <Container>
                <FlexLeft>
                    <HeadingAbout props={headingText.text[language]}/>
                </FlexLeft>
                <FlexRight>
                   <p>{headingTextSmall.text[language]}</p>
                </FlexRight>
            </Container>
        </Wrapper>
    )
}

export default Header
