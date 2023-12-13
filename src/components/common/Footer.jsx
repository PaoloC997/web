import React from 'react'
import { styled } from 'styled-components'
import { useLanguage } from '../../context/LanguageContext';
import { footerText } from '../../data/data';


const Wrapper = styled.footer`
  display: flex;
  width: 100vw;
  height:40vh;
  flex-direction: row;
  font-size: 1.6rem;
  border-top:1px solid lightgray;
  @media (max-width: 768px) {
    flex-direction:column;
    margin-top:300vh;
  }
`;

const FooterLeft = styled.div`
display:flex;
flex:1;
align-items:start;
margin-bottom:5rem;
padding-top:1rem;
@media (max-width: 768px) {
  margin-bottom:0rem;
  }
`
const FooterRight = styled.div`
display:flex;
flex:1;
margin-bottom:5rem;
padding-top:1rem;
@media (max-width: 768px) {
    flex-direction:column;
    align-items:center;
  }
`
const ContainerContact = styled.div`
display:flex;
flex:1;
color:gray;
`
const TextLeft = styled.p`
margin-left:5.5rem;
`

const ContainerLinks = styled.div`
display:flex;
flex:2;
flex-direction:column;
@media (max-width: 768px) {
    flex:1;
  
  }
`

const Footer = () => {
  const { language } = useLanguage();
  console.log(language)
  const contactText = footerText.find((item)=> item.id === 1)

    return (
        <Wrapper>
            <FooterLeft>
                <TextLeft>ACOUSTIC HERITAGE COLLECTIVE 2023</TextLeft>
            </FooterLeft>
            <FooterRight>
                <ContainerContact>
                    <p>{contactText.text[language]}</p>
                </ContainerContact>
                <ContainerLinks>
                    <p>EMAIL</p>
                    <p>PATRIMONI ACUSTIC</p>
                    <p>TWITTER</p>
                </ContainerLinks>
            </FooterRight>
        </Wrapper>
    )
}

export default Footer
