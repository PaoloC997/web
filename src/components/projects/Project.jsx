import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { artProjectsList } from '../../data/projectsData.js';
import { styled } from 'styled-components'
import Button from '../common/Button.jsx';
import { useLanguage } from '../../context/LanguageContext.js';
import ProjectHeading from './ProjectHeading.jsx';
import ProjectList from './ProjectList.jsx';


const Wrapper = styled.div`
  display: flex;
  width: 88.28vw;
  margin: auto;
  flex-direction: column;
  border-bottom:3rem;
`;

const Picture = styled.img`
width:100%;
object-fit:cover;
filter:grayscale(100%)
`
const TextContent = styled.div`
 width:70
`;

const Text = styled.p`
 font-size:4rem;
 text-transform:uppercase;
`;
const TextSmall = styled.p`
 font-size:2rem;
 margin-left:2rem;
 margin-top:0px;
`;
const FlexContainer = styled.div`
 display:flex;
 flex-direction:row;
 margin-bottom:3rem;
`;
const FlexLeft = styled.div`
 display:flex;
 flex:50%;
 flex-direction:row;
`;
const FlexRight = styled.div`
 display:flex;
 flex:50%;
 flex-direction:column;
 position:relative;
`;
const ButtonWrapper = styled.div`
 position:absolute;
 top:23rem;
 left:2rem;
`;

const NextButtonWrapper = styled.div`
 display:flex;
 flex-direction:row;
 width:100%;
 height:30vh;
 align-items:center;
 
`;

const ButtonNext = styled.div`
 display:flex;
 flex:1;
 font-size:2rem;
 align-items:center;
 justify-content:center;
 flex-wrap:wrap;
 cursor:pointer;
 position:relative;
`;


const RightArrow = styled.img`
 max-width:1.6rem;
 opacity:0.9;
 margin-left:1rem;
`;

const TopArrow = styled.img`
  max-width: 1.9rem;
  opacity: 0.8;
  position: absolute;
  bottom: 3rem;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;

  ${({ animate }) =>
        animate &&
        `
    animation: bounceUpDown 1s ease-in-out 2;
  `}

  @keyframes bounceUpDown {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const LeftArrow = styled.img`
max-width:1.6rem;
opacity:0.9;
margin-right:1rem;
`;



const Project = () => {
    const { id } = useParams();
    const { language } = useLanguage()
    const [topScroll, setTopScroll] = useState(false)
    const [animate, setAnimate] = useState(false)

    let nextProjectsId = parseInt(id)
    const project = artProjectsList.find((p) => p.id === parseInt(id, 10));
    const nextProject = nextProjectsId + 1
    const prevProject = nextProjectsId - 1
    const linkStyle = {
        color: "black",
        textDecoration: "none"
    }



    const handleHover = () => {
        setAnimate(true)
    }

    const handleMouseLeave = () => {
        setAnimate(false)
    }

    useEffect(() => {
        const element = document.getElementById(`wrapper`);
        if (element) {
            element.scrollIntoView({
                behavior: 'auto',
                block: 'start',
            });
        }

        setTopScroll(false)

    }, [nextProject, prevProject, topScroll])

    const handleClick = () => {
        setTopScroll(true)
    }


    if (!project) {

        return <div>Project not found.</div>;
    }

    return (

        <Wrapper id="wrapper">
            <ProjectHeading title={project.title[language]} subtitle={project.place[language]} />
            <Picture src={project.image1} />
            <TextContent>
                <Text>{project.description[language]}</Text>
            </TextContent>
            <FlexContainer>
                <FlexLeft>
                    <Picture src={project.image2} />
                </FlexLeft>
                <FlexRight>
                    <TextSmall>{project.description[language]}</TextSmall>
                </FlexRight>
            </FlexContainer>
            <FlexContainer>
                <FlexLeft>
                    <Picture src={project.image2} />
                </FlexLeft>
                <FlexRight>
                    <TextSmall>{project.description[language]}</TextSmall>
                    <Link to={`/projects`} component={ProjectList}>
                        <ButtonWrapper>
                            <Button text="SEE ALL PROJECTS +"></Button>
                        </ButtonWrapper>
                    </Link>
                </FlexRight>
            </FlexContainer>
            <NextButtonWrapper>

                {prevProject > 0 &&
                    <div>
                        <Link style={linkStyle} to={`/project/${prevProject}`} component={Project}>
                            <ButtonNext className='thin-font'> <LeftArrow src="/img/arrow-left.jpg" /> PREVIOUS</ButtonNext>

                        </Link>
                    </div>
                }

                <ButtonNext
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick()} className='thin-font'>BACK TO TOP   <TopArrow animate={animate} onMouseEnter={() => handleHover} src="/img/top-img.jpg" /></ButtonNext>
                <div>
                    {nextProject < artProjectsList.length + 1 &&
                        <Link style={linkStyle} to={`/project/${nextProject}`} component={Project}>
                            <ButtonNext className='thin-font'>NEXT  <RightArrow src="/img/arrow-right.jpg" /></ButtonNext>

                        </Link>
                    }
                </div>
            </NextButtonWrapper>
        </Wrapper>
    );

};

export default Project;
