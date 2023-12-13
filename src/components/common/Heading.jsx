import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../context/LanguageContext';


const Container = styled.div`
  width: 80%;
  font-size: 5.625rem;
  line-height: 5.625rem;
  font-weight: normal;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Header = styled.p`
  font-weight: normal;
  letter-spacing: -0.01em;
  margin-top: 5.625rem;
  margin-bottom: 5.625rem;
`;

const Color = styled.span`
  color: #ff3a00;
`;

const Heading = ({ props, style = {} }) => {
  const { language } = useLanguage()
  const words = props.split(" ");
  const [newText, setNewText] = useState([]);
  const wordArray = ["SOUND", "SOLUTIONS", "SONORA", "SOLUCIONES", 'KLANGWAHRNEHMUNG', 'ACÚSTIQUES', "AKUSTISCHE"]

  useEffect(() => {
    const updatedText = words.map((word, index) => (
      <React.Fragment key={index}>
        {index > 0 && ' '}
        {wordArray.includes(word) ? <Color>{word}</Color> : word}
      </React.Fragment>
    ));
    setNewText(updatedText);
  }, [language]);

  

  return (
    <Container style={style}>
      <Header>{newText}</Header>
    </Container>
  );
};

export default Heading;
