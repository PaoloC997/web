import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
  width:100vw;
  /*height:160vh;*/
  margin:auto;
  flex-direction:column;
  display:flex;
  margin-top:5rem;
  
`;

const Picture = styled.img`
width:100%;
object-fit:cover;
filter:grayscale(100%)
`

const Image = () => {
    return (
        <Wrapper>
            <Picture loading="eager"  src="/img/testpic.jpg" />
        </Wrapper>

    )
}

export default Image
