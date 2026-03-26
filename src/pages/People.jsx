import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { getDynamicFacultyData } from '../data/facultyManager';

export default function People() {
  const { isDarkMode } = useOutletContext();
  const [activeFacultyDept, setActiveFacultyDept] = useState("Civil Engineering");
  
  // STATE TO HOLD DYNAMIC DATA
  const [data, setData] = useState({ officials: [], staff: [], departments: {} });

  // Load data when page opens
  useEffect(() => {
    setData(getDynamicFacultyData());
  }, []);

  const theme = {
    cardBg: isDarkMode ? "bg-[#0c0c0c]" : "bg-white",
    border: isDarkMode ? "border-white/10" : "border-gray-200",
    muted: isDarkMode ? "text-gray-400" : "text-gray-500",
  };

  return (
    <div className="pt-32 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-red-800 dark:text-red-600">Our People</h1>
        <p className={`text-xl font-light ${theme.muted}`}>The academic leadership and support structure of the College.</p>
      </div>

      <section id="faculty-and-lecturers" className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* DYNAMIC OFFICIALS */}
          <div className="flex flex-wrap justify-center gap-8 mb-24">
            {data.officials.map((official, idx) => (
              <div key={idx} className={`w-full md:w-96 p-10 rounded-2xl ${theme.cardBg} border border-zinc-200 dark:border-white/10 shadow-lg text-center relative`}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-800 text-white text-[10px] font-bold tracking-widest uppercase px-6 py-2 rounded-full shadow-md">College Official</div>
                <h4 className="font-black text-2xl mt-4 text-red-800 dark:text-red-500">{official.name}</h4>
                <p className={`text-xs uppercase tracking-widest mt-3 font-bold ${theme.muted}`}>{official.role}</p>
              </div>
            ))}
          </div>

          <div className={`p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-white/10 ${theme.cardBg} shadow-sm`}>
            <h4 className="text-center font-bold uppercase tracking-widest text-sm text-red-700 dark:text-red-500 mb-8 border-b border-zinc-200 dark:border-white/10 pb-4">Department Faculty</h4>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {Object.keys(data.departments).map(dept => (
                <button 
                  key={dept} 
                  onClick={() => setActiveFacultyDept(dept)}
                  className={`px-5 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all border ${activeFacultyDept === dept ? 'bg-amber-500 text-white border-amber-500 shadow-md' : `bg-zinc-50 dark:bg-[#111] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-amber-500/50 hover:text-gray-900 dark:hover:text-white`}`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* DYNAMIC FACULTY */}
            <AnimatePresence mode="wait">
              <motion.div key={activeFacultyDept} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                 {data.departments[activeFacultyDept]?.map((member, idx) => (
                    <div key={idx} className={`p-6 rounded-xl bg-zinc-900 border flex flex-col justify-center text-center transition-all ${member.role.toLowerCase().includes("chair") || member.role.toLowerCase().includes("dean") ? 'border-amber-500 ring-1 ring-amber-500/30 shadow-md' : 'border-white/10 hover:border-red-800/50'}`}>
                       <h4 className={`font-bold text-sm mb-2 ${member.role.toLowerCase().includes("chair") || member.role.toLowerCase().includes("dean") ? 'text-amber-500' : 'text-white'}`}>{member.name}</h4>
                       <p className={`text-[10px] uppercase tracking-widest text-gray-400`}>{member.role}</p>
                    </div>
                 ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="staff" className={`py-24 px-6 border-y ${theme.border} bg-zinc-50 dark:bg-[#0c0c0c]`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">College <span className="text-amber-500">Staff</span></h3>
            <p className={`font-light ${theme.muted}`}>The dedicated professionals keeping the College running smoothly.</p>
          </div>
          {/* DYNAMIC STAFF */}
          <div className="flex flex-wrap justify-center gap-6">
            {data.staff.map((staff, idx) => (
                <div key={idx} className={`w-full sm:w-64 p-6 rounded-xl ${theme.cardBg} border border-zinc-200 dark:border-white/10 shadow-sm text-center hover:shadow-md transition-shadow`}>
                  <h4 className="font-bold text-sm mb-2">{staff.name}</h4>
                  <p className={`text-[10px] uppercase tracking-widest ${theme.muted}`}>{staff.role}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section id="student-orgs" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 text-red-800 dark:text-red-500">Student Organizations</h3>
          <p className={`font-light leading-relaxed mb-10 max-w-2xl mx-auto ${theme.muted}`}>
            Engineering isn't just about what happens in the classroom. Discover the passionate student-led organizations that foster leadership, community, and technical excellence.
          </p>
          <div className={`p-16 border ${theme.border} border-dashed rounded-3xl ${theme.cardBg}`}>
            <p className={`text-sm font-bold uppercase tracking-widest ${theme.muted}`}>Student Organization Roster Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}