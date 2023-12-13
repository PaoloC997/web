import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import Heading from '../common/Heading';


const Wrapper = styled.div`
  width: 88.28vw;
  margin: auto;
  align-items: center;
  flex-direction: column;
  display: flex;
  position:relative;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
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
  
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  font-size: 4rem;
  width: 62vw; /* Fixed height to reserve space for the full text */
  height: 20vh;
  overflow: hidden;
`;

const TextContent = styled.div`
  font-size: 2.5rem;
  margin-bottom:5rem;
  align-self:start;
`;

const Text = styled.div`
  width: 70%;
`;
const ImageWrapper = styled.div`
  width:100%;
  position:relative;
`;

const PictureLeft = styled.img`
  width: 70%;
  object-fit: cover;
  object-position: center top;
  filter: grayscale(100%);

`;

const PictureRight = styled.img`
  width: 60%;
  object-fit: cover;
  object-position: center top;
  filter: grayscale(100%);
  position:absolute;
  right:0px;
  top:60vh;
z-index:200;
`;


const PictureDown = styled.img`
  width: 88.28%;
  margin-left:5.7rem;
  margin-top:8.7rem;
  object-fit: cover;
  object-position: center top;
  filter: grayscale(100%);

`;
const TextContainer = styled.div`
 width:88.28%;
 margin:auto;
margin-bottom:5rem;
align-self:start;
`;

const PictureSection = () => {
    return (
        <div style={{ marginBottom: "5rem" }}>
            <Wrapper>
                <Container>
                    <FlexLeft>
                        <Heading props="HOW WE CAN HELP YOU" />
                    </FlexLeft>
                    <FlexRight>
                    </FlexRight>
                </Container>
                <TextContent>
                    <Text>
                        <p style={{ marginTop: "0px" }}>
                            Step into the realm of sonic preservation and innovation with our wide range of services
                        </p>
                    </Text>
                </TextContent>
            </Wrapper>
            <ImageWrapper>
                <PictureLeft loading="lazy"  src="/img/testpic2.jpeg" />
                <PictureRight loading="lazy"  src="/img/red2.png" />
                <PictureDown loading="lazy"  src="/img/testpic.jpg" />

            </ImageWrapper>
            <TextContainer>
                <TextContent>
                    <Text>
                        <p>
                            From the 3D safeguarding of acoustic and sound heritage using impulse response technology to immersive VR/XR/360 experiences that transport you to unique acoustic spaces, we are the pioneers dedicated to
                            preserving and exploring the cultural and historical significance of sound. </p>

                           <p> Engage with us through workshops, lectures, and research initiatives, or
                            elevate your projects with our state-of-the-art equipment rental and personalized assistance.
                            Unleash the power of sound with us – where heritage meets innovation!
                        </p>
                    </Text>
                </TextContent>
            </TextContainer>
        </div>

    );
};

export default PictureSection;
