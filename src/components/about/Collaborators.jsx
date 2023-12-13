import React from 'react'
import { styled } from 'styled-components'
import { logosAbout } from '../../data/data'
import { headings } from '../../data/homeData';
import { HeadingAbout } from './HeadingAbout';
import { useLanguage } from '../../context/LanguageContext';
import { headingsAbout, aboutSmallTexts} from '../../data/aboutData';

const Wrapper = styled.div`
  width: 88.28vw;
  border-top:1px solid lightgray;
  margin:auto;
  /*height:350vh;*/
  flex-direction:column;
  border-bottom:1px solid lightgray;

 padding-bottom:5.7rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
 
  padding: 20px;
  row-gap: 1.7rem;
  column-gap:1.7rem;
`;

const ListImage = styled.img`
width:15vw;
height:15vw;
padding:25px;
object-fit:scale-down;
filter:grayscale(100%)

`

const TextContainer = styled.div`
font-size:2.188rem;
 line-height:2.188rem;
  text-align: start;
  color: black;
width:70vw;
`

const Collaborators = () => {
    const heading = headingsAbout.find((heading) => heading.id === 4)
    const smallText = aboutSmallTexts.find((text) => text.id === 6)
    const { language } = useLanguage()

    return (
        <Wrapper>
            <HeadingAbout props={heading.text[language]} />
            <ListContainer>
                {logosAbout.map((logo) => {
                    return <ListImage key={logo.id} src={logo.src} alt={logo.text} />
                })}
            </ListContainer>
            <TextContainer>
                <p>{smallText.text[language]}</p>
            </TextContainer>

        </Wrapper>
    )
}

export default Collaborators