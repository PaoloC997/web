import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import artProjects from '../data.js';
import { styled } from 'styled-components'
import Navbar from './Navbar.jsx';

const Wrapper = styled.div`
  display: flex;
  width: 80vw;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;

const Project = () => {
    const { id } = useParams();


    const project = artProjects.find((p) => p.id === parseInt(id, 10));

    if (!project) {

        return <div>Project not found.</div>;
    }

    return (

        <Wrapper>
        <Navbar/>
            <div>
                <h1>{project.title}</h1>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
                <p>Date: {project.date}</p>
                <Link to="../">
                    <p>Back to art projects</p>
                </Link>
            </div>
        </Wrapper>
    );

};

export default Project;
