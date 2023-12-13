import React from 'react'
import { styled } from 'styled-components'

const LearnMoreButton = styled.button`
  background-color: white; 
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 10px;
`;

const ButtonWrapper = styled.div`
margin-bottom:9.375rem;
`

const Button = (props) => {

  return (
    <ButtonWrapper>
      <LearnMoreButton>{props.text}</LearnMoreButton>
    </ButtonWrapper>

  )
}

export default Button
