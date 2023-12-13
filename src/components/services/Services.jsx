import { React, useEffect } from 'react';
import Header from './Header'
import ServicesList from './ServicesList';
import Image from './Image';
import PictureSection from './PictureSection';


const Services = () => {

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
    <div id="wrapper">
      <Header />
      <ServicesList/>
      <Image/>
      <PictureSection/>
    </div>
  );
};

export default Services;
