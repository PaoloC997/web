import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../context/LanguageContext';

const Container = styled.div`
  width:100%;
  @media (max-width: 768px) {
    font-size:2rem;
  }
`;

const Header = styled.h2`
font-weight:normal;
letter-spacing: -0.03em;
font-size: 7.5rem;
line-height: ${(props) => (props.setLineHeight == "es" ? '7.2rem' : '6.25rem')};
`;


const HeadingAbout = ({ props, style = {} }) =>{

  const { language } = useLanguage()

    return (
        <Container style={style}>
            <Header setLineHeight={language} className="light-font">{props}</Header>
        </Container>

    )
}

export { HeadingAbout };