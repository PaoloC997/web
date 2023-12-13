import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Services from './components/services/Services';
import ProjectList from './components/projects/ProjectList';
import Project from './components/projects/Project';
import Home from './components/home/Home'; 
import About from './components/about/About';
import { ParallaxProvider } from "react-scroll-parallax";
import { UpButton } from './components/common/UpButton';


function App() {
  return (
    <ParallaxProvider>
      <LanguageProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/services/:id" element={<Services/>} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/project" element={<Project />} />
          </Routes>
          <UpButton/>
          <Footer />
        </Router>
      </LanguageProvider>
    </ParallaxProvider>
  );
}

export default App;
