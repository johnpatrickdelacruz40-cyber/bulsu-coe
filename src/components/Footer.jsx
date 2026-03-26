import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-16 border-t-[6px] border-red-800 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 text-center md:text-left">
        
        <div className="md:w-1/3">
          <h2 className="text-3xl font-black tracking-tighter uppercase mb-2"><span className="text-red-600">BulSU</span> Engineering</h2>
          <p className="text-amber-500 font-bold tracking-[0.4em] uppercase mb-4 mt-2 text-[10px]">ALAB BULSU</p>
          <p className="text-gray-400 text-xs font-light leading-relaxed max-w-sm mx-auto md:mx-0">
            Empowering graduates making them responsive to ever changing local and international environment. Est. 1970.
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center md:justify-start gap-12">
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-amber-500 transition-colors">Academics & Admissions</Link></li>
              <li><Link to="/people" className="hover:text-amber-500 transition-colors">Faculty & Staff</Link></li>
              <li><Link to="/experience" className="hover:text-amber-500 transition-colors">Student Experience</Link></li>
              <li><Link to="/media" className="hover:text-amber-500 transition-colors">Media & News</Link></li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/3 md:text-right">
          <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-4">Location & Contact</h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
            Bulacan State University<br/>
            City of Malolos, Bulacan<br/>
            Philippines 3000
          </p>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Phone: (044) 919-7800<br/>
            Email: coe.dean@bulsu.edu.ph
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center flex flex-col gap-2">
        <p className="text-gray-600 text-[10px] tracking-widest uppercase">&copy; {new Date().getFullYear()} Bulacan State University College of Engineering. All Rights Reserved.</p>
        
        {/* SECURE, HARDCODED DEVELOPER CREDIT */}
        <p className="text-amber-600/70 font-bold text-[10px] tracking-widest uppercase mt-4">
          System Developed & Engineered by John Patrick DC. Dela Cruz
        </p>
      </div>
    </footer>
  );
}