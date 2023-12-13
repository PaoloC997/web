import React from 'react';
import Intro from './Intro'; 
import BrandVideo from './BrandVideo'; 
import ServiceList from './ServiceList'; 
import Collaborations from './Collaborations'; 
import Contact from './Contact'; 

const Home = () => {
  return (
    <div>
      <Intro />
      <BrandVideo />
      <ServiceList />
      <Collaborations />
      <Contact />
    </div>
  );
};

export default Home;
