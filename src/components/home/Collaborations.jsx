import React from 'react'
import { styled } from 'styled-components'
import { logos } from '../../data/data'
import { headings } from '../../data/homeData';
import Heading from '../common/Heading';
import { useLanguage } from '../../context/LanguageContext';

const Wrapper = styled.div`
  width: 88.28vw;
  margin:auto;
  flex-direction:column;
  border-bottom:1px solid lightgray;
  padding-bottom:9.375rem;;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  column-gap: 11rem;
`;

const ListImage = styled.img`
width:15vw;
object-fit:scale-down;
filter:grayscale(100%)
`
const HeadingWrapper = styled.div`
width:100%;
white-space:pre-wrap;
`;

const Collaborations = () => {
    const heading = headings.find((heading) => {
        return heading.id === 3
    })

    const { language } = useLanguage()

    return (
        <Wrapper>
            <HeadingWrapper>
                <Heading props={heading.text[language]} />
            </HeadingWrapper>
            <ListContainer>
                {logos.map((logo) => {
                    return <ListImage loading="lazy"  key={logo.id} src={logo.src} alt={logo.text} />
                })}
            </ListContainer>
        </Wrapper>
    )
}

export default Collaborations