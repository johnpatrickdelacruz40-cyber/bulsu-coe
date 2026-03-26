import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollHandler from './components/ScrollHandler';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import People from './pages/People';
import Experience from './pages/Experience';
import Media from './pages/Media';
import Admin from './pages/Admin'; // <-- Your new Admin page!

export default function App() {
  return (
    <Router>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="people" element={<People />} />
          <Route path="experience" element={<Experience />} />
          <Route path="media" element={<Media />} />
          {/* THE NEW ADMIN ROUTE */}
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}