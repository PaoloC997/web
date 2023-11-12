// Import necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import Project from './components/Project';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

// Create a parent component that includes both Carousel and ProjectList
const Home = () => {
  return (
    <div>
      <Carousel />
      <ProjectList />
    </div>
  );
};

// App component
function App() {
  return (
   
    <Router>
    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
            </div>}
          />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
