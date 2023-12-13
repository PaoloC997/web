import React from 'react';
import { styled } from 'styled-components';
import { useLanguage } from '../../context/LanguageContext';
import Heading from '../common/Heading';

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const BackgroundPicture = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const FlexContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexLeft = styled.div`
  flex: 1;
  z-index: 30;
  text-align: left;
  padding-left: 5.7rem; /* Adjust as needed */
`;

const FlexRight = styled.div`
  flex: 1;
  z-index: 30;
  text-align: left;
  padding-right: 20px; /* Adjust as needed */
  color: white; /* Set text color to match your design */
`;
const TextContent = styled.p`
  font-size: 5.625rem;
  line-height:5.625rem;
  color: white;
  position: absolute;
  width: 50%;
  bottom: 9rem;
  left: 5.7rem;
  z-index: 15;
  padding-right:5.7rem;
`;

const Header = () => {
  const { language } = useLanguage();

  return (
    <div>
      <MainContainer>
        <BackgroundPicture src="/img/testpic3.jpg" />
        <FlexContainer>
          <FlexLeft>
            <Heading style={{ color: "white" }} props="SERVICES" />
          </FlexLeft>
          <FlexRight>
            <TextContent>
              Leverage the power of sound heritage with our cutting-edge services, from
              3D safeguarding to immersive experiences and top-notch equipment rental for your sonic endeavors.
            </TextContent>
          </FlexRight>
        </FlexContainer>
      </MainContainer>
    </div>
  );
};

export default Header;
