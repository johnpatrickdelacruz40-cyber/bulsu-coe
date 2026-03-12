import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // EXACT HASH ROUTING FIX
  const navStructure = [
    { label: 'Home', path: '/', subItems: [] },
    { label: 'About Us', path: '/about', subItems: [
        { label: 'College Philosophy', hash: '#college-philosophy' },
        { label: 'Awards', hash: '#awards' },
        { label: 'History', hash: '#history' },
        { label: 'Contact Us', hash: '#contact-us' }
    ]},
    { label: 'People', path: '/people', subItems: [
        { label: 'Faculty & Lecturers', hash: '#faculty-and-lecturers' },
        { label: 'Staff', hash: '#staff' },
        { label: 'Student Orgs', hash: '#student-orgs' }
    ]},
    { label: 'Academics', path: '/academics', subItems: [
        { label: 'Programs', hash: '#programs' },
        { label: 'Maps & Admissions', hash: '#maps-and-admissions' },
        { label: 'Enrollment Procedure', hash: '#enrollment-procedure' },
        { label: 'Uniform Guide', hash: '#uniform-guide' },
        { label: 'Why BulSU COE', hash: '#why-bulsu-coe' },
        { label: 'FAQ', hash: '#faq' }
    ]},
    { label: 'Student Experience', path: '/experience', subItems: [
        { label: 'Student Organizations', hash: '#student-organizations' },
        { label: 'Career Development', hash: '#career-development' },
        { label: 'Learning Communities', hash: '#learning-communities' },
        { label: 'Merch', hash: '#merch' }
    ]},
    { label: 'Media', path: '/media', subItems: [
        { label: 'News', hash: '#news' },
        { label: 'Connect With Us', hash: '#connect-with-us' }
    ]}
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black py-4 shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <img src="/images/logo.jpg" alt="BulSU COE Logo" className="w-11 h-11 rounded-full object-cover border-2 border-red-700 group-hover:border-amber-500 transition-colors" onError={(e) => e.target.style.display='none'} />
          <h1 className="text-xl font-black tracking-widest uppercase text-white">
            <span className="text-red-600">BulSU</span> COE
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navStructure.map((navItem, index) => (
            <div key={index} className="relative group" onMouseEnter={() => setActiveDropdown(index)} onMouseLeave={() => setActiveDropdown(null)}>
              
              <Link to={navItem.path} className={`flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase transition-colors py-2 text-white hover:text-amber-400 dark:hover:text-red-500`}>
                {navItem.label}
                {navItem.subItems.length > 0 && (
                  <svg className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                )}
              </Link>

              {navItem.subItems.length > 0 && (
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div initial={{ opacity: 0, y: 15, rotateX: -10 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, y: 15, rotateX: -10 }} transition={{ duration: 0.2 }} style={{ transformOrigin: "top center" }} className="absolute top-full left-0 mt-4 w-60 rounded-2xl shadow-2xl border bg-[#111] border-white/10 overflow-hidden py-2">
                      {navItem.subItems.map((sub, subIdx) => (
                        <Link key={subIdx} to={`${navItem.path}${sub.hash}`} className="block px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors text-gray-300 hover:bg-white/5 hover:text-amber-500 dark:hover:text-red-500">
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

          <button onClick={() => setIsDarkMode(!isDarkMode)} className="flex items-center ml-2 pl-4 border-l border-white/20">
            <div className={`w-8 h-4 rounded-full p-0.5 ${isDarkMode ? 'bg-amber-500' : 'bg-gray-500'} transition-colors`}>
              <div className={`w-3 h-3 rounded-full bg-white transform transition-transform ${isDarkMode ? 'translate-x-4' : 'translate-x-0'}`} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}