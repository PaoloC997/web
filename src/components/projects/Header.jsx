import React from 'react'
import { styled } from 'styled-components'
import  Heading from '../common/Heading';
import { useLanguage } from '../../context/LanguageContext';
import { projectsText } from '../../data/projectsData';

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
  padding-right:3rem;
  padding-top:3rem;
  display:flex;
  align-self: stretch;
  align-items: center; 
  font-size:4rem;
  @media (max-width: 768px){
    flex:100%;
    font-size:2rem;
   padding-left:2rem;
  }
`;


const Header = () => {

  const { language } = useLanguage()

  const projectInfo =  projectsText.find((text) => text.id === 1);

    return (
        <Wrapper>
            <Container>
                <FlexLeft>
                    <Heading props={projectInfo.heading[language]} />
                </FlexLeft>
                <FlexRight>
                   <p>{projectInfo.text[language]}</p>
                </FlexRight>
            </Container>
        </Wrapper>
    )
}

export default Header
