import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollHandler from './components/ScrollHandler'; // <-- ADD THIS
import Layout from './components/Layout';
import Home from './pages/Home';
import Academics from './pages/Academics';
import People from './pages/People';
import About from './pages/About'; 
import Experience from './pages/Experience'; 
import Media from './pages/Media'; 

export default function App() {
  return (
    <Router>
      <ScrollHandler /> {/* <-- ADD THIS HERE */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} /> 
          <Route path="people" element={<People />} />
          <Route path="academics" element={<Academics />} />
          <Route path="experience" element={<Experience />} /> 
          <Route path="media" element={<Media />} />
        </Route>
      </Routes>
    </Router>
  );
}