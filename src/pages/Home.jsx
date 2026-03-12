import React from 'react';
import { motion } from 'framer-motion';
import { useOutletContext, Link } from 'react-router-dom';

export default function Home() {
  const { isDarkMode } = useOutletContext();
  
  const theme = {
    cardBg: isDarkMode ? "bg-[#0c0c0c]" : "bg-white",
    border: isDarkMode ? "border-white/10" : "border-gray-200",
    muted: isDarkMode ? "text-gray-400" : "text-gray-500",
  };

  const quickStats = [
    { number: "8", label: "Engineering Programs" },
    { number: "1970", label: "Year Established" },
    { number: "Level III", label: "AACCUP Accredited" },
    { number: "100%", label: "Commitment to Excellence" }
  ];

  return (
    <div className="w-full">
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-zinc-100 dark:bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src="/images/Coe.jpg" alt="BulSU Campus" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-20 text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-6 py-2 rounded-full border border-red-800/30 bg-red-900/40 text-white text-xs font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-md shadow-sm">
              College of Engineering
            </span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="text-6xl md:text-[6rem] lg:text-[8rem] font-black tracking-tighter leading-[0.9] mb-6 text-white drop-shadow-lg">
            ENGINEERING <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400 drop-shadow-sm">THE FUTURE.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-3xl text-gray-200 drop-shadow-sm">
            Empowering graduates to be responsive to local and international environments since 1970.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className="flex flex-wrap justify-center gap-4">
            <Link to="/academics#maps-and-admissions" className="px-10 py-4 font-bold text-white bg-red-800 hover:bg-red-700 transition-colors tracking-widest uppercase text-sm rounded-full shadow-xl">
              Future Students
            </Link>
            <Link to="/academics#why-bulsu-coe" className="px-10 py-4 font-bold tracking-widest uppercase text-sm rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all">
              Why BulSU COE?
            </Link>
          </motion.div>
        </div>
      </section>

      <section className={`py-12 border-y ${theme.border} relative z-20 ${theme.cardBg}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 dark:divide-white/10">
            {quickStats.map((stat, idx) => (
              <div key={idx} className={`text-center ${idx === 0 ? '' : 'pl-8'}`}>
                <h4 className="text-4xl md:text-5xl font-black text-red-700 dark:text-amber-500 mb-2">{stat.number}</h4>
                <p className={`text-xs uppercase tracking-widest font-bold ${theme.muted}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-gray-200 dark:border-white/10 pb-6 gap-6">
            <div>
              <h3 className="text-5xl font-black tracking-tighter uppercase mb-2">Discover <span className="text-red-700">More</span></h3>
              <p className={`text-lg font-light ${theme.muted}`}>Explore the core pillars of the College of Engineering.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/academics" className={`group rounded-3xl overflow-hidden border ${theme.border} ${theme.cardBg} hover:shadow-2xl transition-all duration-500 flex flex-col h-[450px]`}>
              <div className="h-1/2 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                {/* Engineering Blueprints & Drafting */}
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" alt="Academics" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">Academics</h4>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-red-700 transition-colors">Programs & Departments</h3>
                  <p className={`text-sm font-light leading-relaxed ${theme.muted} line-clamp-3`}>Explore our 8 Level II and Level III AACCUP accredited engineering disciplines.</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-700 dark:text-amber-500 flex items-center gap-2 mt-4">Learn More &rarr;</span>
              </div>
            </Link>

            <Link to="/experience" className={`group rounded-3xl overflow-hidden border ${theme.border} ${theme.cardBg} hover:shadow-2xl transition-all duration-500 flex flex-col h-[450px]`}>
              <div className="h-1/2 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                {/* Engineering Lab / Students working on tech */}
                <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=600&q=80" alt="Student Life" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">Student Experience</h4>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-red-700 transition-colors">Life at BulSU COE</h3>
                  <p className={`text-sm font-light leading-relaxed ${theme.muted} line-clamp-3`}>Dive into student organizations, career development, and collaborative learning.</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-700 dark:text-amber-500 flex items-center gap-2 mt-4">Get Involved &rarr;</span>
              </div>
            </Link>

            <Link to="/media" className={`group rounded-3xl overflow-hidden border ${theme.border} ${theme.cardBg} hover:shadow-2xl transition-all duration-500 flex flex-col h-[450px]`}>
              <div className="h-1/2 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                {/* Robotics / Future Tech Innovation */}
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80" alt="Latest News" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">Media & News</h4>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-red-700 transition-colors">Latest Highlights</h3>
                  <p className={`text-sm font-light leading-relaxed ${theme.muted} line-clamp-3`}>Stay updated with recent achievements, awards, and university announcements.</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-700 dark:text-amber-500 flex items-center gap-2 mt-4">Read News &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}