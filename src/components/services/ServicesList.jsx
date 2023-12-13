import React, { useState, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { texts } from '../../data/servicesData';
import { useParams } from 'react-router-dom';

const MainContainer = styled.div`
  width: 100vw;
  margin-bottom: 5.7rem;
`;

const ServiceElement = styled.div`
  height: ${(props) => (props.isExpanded ? '100vh' : '42.5vh')};
  background-color: ${(props) => (props.isExpanded ? 'lightgray' : 'white')};
  width: 100vw;
  flex: 100%;
  border-bottom: 1px solid darkgray;
  overflow: hidden;
  cursor: pointer;
  transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
`;

const ServiceElementNoSubtitle = styled.div`
  height: ${(props) => (props.isExpanded ? '100vh' : '30vh')};
  background-color: ${(props) => (props.isExpanded ? 'lightgray' : 'white')};
  width: 100vw;
  flex: 100%;
  border-bottom: 1px solid darkgray;
  overflow: hidden;
  cursor: pointer;
  transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  width: 88.28vw;
  margin: auto;
  height: 100vh;
`;

const TitleWrapper = styled.div`
  height: 15vh;
  width: 55vw;
`;

const Title = styled.p`
  color: ${(props) => (props.isExpanded ? 'gray' : 'black')};
  font-size: 5rem;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 0px;
  margin-top: 1rem;
  transition: color 0.3s ease-in-out;
`;

const SubTitle = styled.p`
  color: ${(props) => (props.isExpanded ? 'gray' : 'lightgray')};
  font-size: 5rem;
  text-transform: uppercase;
  margin-top: 0px;
  margin-bottom: 0px;
  transition: color 0.3s ease-in-out;
`;

const Text = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
  transition: 0.3s ease-in-out;
  display: ${(props) => (props.isExpanded ? 'visible' : 'none')};
`;




const ServicesList = () => {
  const { id } = useParams();

  const [expandedStates, setExpandedStates] = useState(texts.map(() => false));

  const handleClick = (index) => {
    setExpandedStates((prevStates) => {
      const newExpandedStates = prevStates.map(() => false);
      if (prevStates[index] === true) {
        return newExpandedStates;
      } else {
        newExpandedStates[index] = true;
      }
      return newExpandedStates;
    });
  };

  useEffect(() => {

    if (id) {
      setExpandedStates(() => {
        const newExpandedStates = texts.map(() => false);
        newExpandedStates[id] = true;
        return newExpandedStates;
      });

     
      setTimeout(() => {
        const element = document.getElementById(`service-${id}`);
        if (element) {
          element.scrollIntoView({
            behavior: 'auto',
            block: 'start', 
          });
        }
      }, 100);

    }
  }, [id]);

  return (
    <MainContainer>
      {texts.map((text, index) => (
        text.subtext === '' ? (
          <ServiceElementNoSubtitle
            key={text.id}
            onClick={() => handleClick(index)}
            isExpanded={expandedStates[index]}
            id={`service-${text.id}`}
          >
            <Wrapper>
              <TitleWrapper>
                <Title isExpanded={expandedStates[index]}>{text.text}</Title>
                <SubTitle isExpanded={expandedStates[index]}>{text.subtext}</SubTitle>
                <Text isExpanded={expandedStates[index]}>{text.content}</Text>
              </TitleWrapper>
            </Wrapper>
          </ServiceElementNoSubtitle>
        ) : (
          <ServiceElement
            key={text.id}
            onClick={() => handleClick(index)}
            isExpanded={expandedStates[index]}
            id={`service-${text.id}`}
          >
            <Wrapper>
              <TitleWrapper>
                <Title isExpanded={expandedStates[index]}>{text.text}</Title>
                <SubTitle isExpanded={expandedStates[index]}>{text.subtext}</SubTitle>
                <Text isExpanded={expandedStates[index]}>{text.content}</Text>
              </TitleWrapper>
            </Wrapper>
          </ServiceElement>
        )
      ))}
    </MainContainer>
  );
};

export default ServicesList;
