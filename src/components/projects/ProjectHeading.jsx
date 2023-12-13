import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:100%;
  font-size:5rem;
  font-weight:bold;
  text-transform:uppercase;
  margin-top:5.7rem;
  line-height:7rem ;
  @media (max-width: 768px) {
    font-size:2rem;
  }
`;

const Header = styled.h2`
font-weight:bold;
margin-bottom:0px;
padding:0px;
`;
const SubHeader = styled.h2`
color:gray;
margin-top:0px;
padding:0px;
`;


export const ProjectHeading = (props) => {
    const { title, subtitle } = props
  
    return (
        <Container>
            <Header>{title}</Header>
            <SubHeader>{subtitle}</SubHeader>
        </Container>

    )
}

export default ProjectHeading