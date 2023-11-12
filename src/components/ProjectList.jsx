import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import artProjects from '../data.js';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 80vw;
  margin: auto;
  flex-direction: row;
  margin-top:10vw;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 2rem; /* Add margin for spacing */
  width:20vw; /* Adjust the width of the list items */
  height:40vh;
  overflow:hidden;
  flex: 20%; /* Equal flex distribution */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%; /* Full width on small screens */
    flex:100%;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap; /* Allow items to break to the next line */
  width: 100%; /* Full width of the container */
  justify-content: space-between; /* Adjust spacing between items */
  padding: 0; /* Remove default padding */
`;

const Picture = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 200px;
`;

const Description = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;
`;

const ProjectList = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <Wrapper>
      <List>
        {artProjects.map((project) => {
          return (
            <ListItem
              key={project.id}
              onMouseEnter={() => setHoveredItemId(project.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <div>
                <Link to={`/project/${project.id}`} style={linkStyle}>
                  <Picture src={project.image} alt={project.title} />
                </Link>
              </div>
              <Description>
                <Link to={`/project/${project.id}`} style={linkStyle}>
                  <TextContainer>
                    {hoveredItemId === project.id ? (
                      <p>{project.description}</p>
                    ) : (
                      <h3>{project.title}</h3>
                    )}
                  </TextContainer>
                </Link>
              </Description>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default ProjectList;
