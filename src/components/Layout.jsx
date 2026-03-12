import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const theme = {
    bg: isDarkMode ? "bg-[#050505]" : "bg-[#FAFAFA]",
    text: isDarkMode ? "text-gray-100" : "text-gray-900",
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-500 overflow-x-hidden selection:bg-red-800 selection:text-white`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} scrolled={scrolled} />
      
      {/* Outlet is where your changing pages (Home, About, Academics) will render */}
      <main>
        <Outlet context={{ isDarkMode }} />
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}