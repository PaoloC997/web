import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
position:fixed;
bottom:2rem;
right:2rem;
`;

export const UpButton = () => {
  return (
    <Wrapper>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/chevron-up.css' rel='stylesheet'></link>
    </Wrapper>
  )
}
