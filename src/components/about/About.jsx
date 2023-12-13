import { React, useEffect } from 'react';
import Header from './Header';
import Image from './Image';
import Parallax from './Parallax';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import ImagesSection from './ImagesSection'
import Collaborators from './Collaborators';

const About = () => {
  useEffect(() => {
    const element = document.getElementById(`wrapper`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

  }, [])

  return (
    <div id="wrapper">
      <Header />
      <Image />
      <Parallax />
      <SectionOne />
      <ImagesSection />
      <Collaborators />
      <SectionTwo />
    </div>
  );
};

export default About;
