import { React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { artProjectsList } from '../../data/projectsData.js';
import { styled } from 'styled-components';
import Header from './Header'
import { useLanguage } from '../../context/LanguageContext.js';

const Wrapper = styled.div`
  display: flex;
  width: 88.20vw;
  margin: auto;
  flex-direction: column;
`;

const ListWrapper = styled.div`
display: flex;
flex-direction: row;
font-size:1.3rem;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column; 
  overflow: hidden;
  flex: 29%; 
  height:60vh; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%; 
    flex: 100%;
    height: auto; 
  }
`;


const List = styled.ul`
  display: flex;
  flex-wrap: wrap; 
  width: 100%; 
  justify-content: space-between; 
  padding: 0; 
  column-gap:0.5rem;
  align-items: stretch;
`;

const Picture = styled.img`
  width: 100%;
  max-width: 30vw;
  max-height: 30vh;
  filter:contrast(128%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%);
`;

const Description = styled.section`
  display: flex;
  width:60%;
  flex-direction: column;
  align-items: flex-start;
  white-space:pre-wrap;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;
`;
const TitleContainer = styled.div`
  display:flex;
  flex-direction:column;
`;


const ProjectList = () => {

  const { language } = useLanguage()
  const [hoveredItemId, setHoveredItemId] = useState(null);
 

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

   useEffect(() => {
    const element = document.getElementById(`wrapper`);
    if (element) {
      element.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      });
    }

  }, [])

  return (
    <Wrapper id="wrapper">
      <Header/>
      <ListWrapper>
        <List>
          {artProjectsList.map((project) => {
            return (
              <ListItem
                key={project.id}
                onMouseEnter={() => setHoveredItemId(project.id)}
                onMouseLeave={() => setHoveredItemId(null)}
              >
                <div>
                  <Link to={`/project/${project.id}`} style={linkStyle}>
                    <Picture src={project.image1} alt={project.title[language]} />
                  </Link>
                </div>
                <Description>
                  <Link to={`/project/${project.id}`} style={linkStyle}>
                    <TextContainer>
                      {hoveredItemId === project.id ? (
                        <p style={{color:"gray"}}>{project.description[language]}</p>
                      ) : (
                        <TitleContainer>
                        <h3 style={{textTransform:"uppercase"}}>{project.title[language]}</h3>
                        <p style={{textTransform:"uppercase", alignSelf:"start", justifySelf:"end", color:"gray"}}>{project.place[language]}</p>
                        </TitleContainer>
                      )}
                    </TextContainer>
                  </Link>
                </Description>  
              </ListItem>
            );
          })}
        </List>
      </ListWrapper>
    </Wrapper>
  );
};

export default ProjectList;
