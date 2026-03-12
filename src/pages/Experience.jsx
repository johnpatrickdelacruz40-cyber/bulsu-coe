import React from 'react';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

export default function Experience() {
  const { isDarkMode } = useOutletContext();

  const theme = {
    cardBg: isDarkMode ? "bg-[#0c0c0c]" : "bg-white",
    border: isDarkMode ? "border-white/10" : "border-gray-200",
    muted: isDarkMode ? "text-gray-400" : "text-gray-500",
  };

  const studentOrgs = [
    { name: "PICE", desc: "Philippine Institute of Civil Engineers - BulSU Student Chapter", hex: "#22c55e" },
    { name: "PSME", desc: "Philippine Society of Mechanical Engineers - BulSU Student Unit", hex: "#3b82f6" },
    { name: "ICPEP", desc: "Institute of Computer Engineers of the Philippines - Student Edition", hex: "#eab308" },
    { name: "IIEE", desc: "Institute of Integrated Electrical Engineers - Council of Student Chapters", hex: "#ec4899" },
    { name: "IECEP", desc: "Institute of Electronics Engineers of the Philippines - Student Chapter", hex: "#ef4444" },
    { name: "PIIE", desc: "Philippine Institute of Industrial Engineers - BulSU Chapter", hex: "#a855f7" },
    { name: "SME", desc: "Society of Manufacturing Engineers - BulSU Chapter", hex: "#14b8a6" }
  ];

  return (
    <div className="pt-32 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-red-800 dark:text-red-600">Student Experience</h1>
        <p className={`text-xl font-light ${theme.muted}`}>Life, leadership, and community beyond the classroom.</p>
      </div>

      <section id="student-organizations" className={`py-16 px-6 border-b ${theme.border} relative z-10 bg-zinc-50 dark:bg-black/20`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-24">
             <div className={`p-8 md:p-12 rounded-3xl border ${theme.border} ${theme.cardBg} shadow-xl flex flex-col md:flex-row items-center gap-12`}>
               <div className="w-full md:w-1/2 aspect-square relative bg-zinc-100 dark:bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 group">
                 <img src="/images/student-council.jpg" alt="Local Student Council" className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" onError={(e) => e.target.style.display='none'} />
               </div>
               <div className="w-full md:w-1/2">
                 <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-500 text-[10px] font-bold tracking-widest uppercase mb-4 border border-amber-500/20">Official Governing Body</div>
                 <h3 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-red-800 dark:text-red-500">Local Student Council</h3>
                 <p className={`font-light leading-relaxed text-lg ${theme.muted}`}>
                   The LSC serves as the highest student governing body of the College of Engineering. We spearhead college-wide events, protect student rights, and foster a strong, unified sense of community among all engineering disciplines.
                 </p>
                 {/* BUTTON REMOVED */}
               </div>
             </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">Academic <span className="text-amber-500">Organizations</span></h3>
            <p className={`font-light max-w-2xl mx-auto ${theme.muted}`}>Find your people. Join recognized professional student chapters to network, compete, and grow your leadership skills.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentOrgs.map((org, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`p-8 rounded-2xl border ${theme.border} ${theme.cardBg} shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center`} style={{ borderTop: `4px solid ${org.hex}` }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center font-black text-2xl mb-4 text-white shadow-md" style={{ backgroundColor: org.hex }}>{org.name}</div>
                <h4 className="font-bold text-lg mb-2">{org.name}</h4>
                <p className={`text-xs font-light leading-relaxed ${theme.muted}`}>{org.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="career-development" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 text-red-800 dark:text-red-500">Career & Job Placement</h3>
          <p className={`font-light leading-relaxed mb-10 text-lg ${theme.muted}`}>
            Bulacan State University's College of Engineering bridges the gap between academic theory and industrial practice. Through robust partnerships facilitated by the University Career and Job Placement Office (CJPO), we ensure our graduates are competitive in the real-world engineering landscape.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className={`p-8 rounded-2xl border ${theme.border} ${theme.cardBg} shadow-sm`}>
              <h4 className="font-bold text-lg mb-3 text-amber-600">OJT Deployment</h4>
              <p className={`text-sm font-light leading-relaxed ${theme.muted}`}>Strictly monitored On-The-Job Training programs with partnered manufacturing plants, construction firms, and tech companies across Region 3 and Metro Manila.</p>
            </div>
            <div className={`p-8 rounded-2xl border ${theme.border} ${theme.cardBg} shadow-sm`}>
              <h4 className="font-bold text-lg mb-3 text-amber-600">PESO Partnerships</h4>
              <p className={`text-sm font-light leading-relaxed ${theme.muted}`}>Direct collaboration with the Public Employment Service Office (PESO) and DOLE for pre-employment seminars (PESOS) and local job fairs.</p>
            </div>
            <div className={`p-8 rounded-2xl border ${theme.border} ${theme.cardBg} shadow-sm`}>
              <h4 className="font-bold text-lg mb-3 text-amber-600">Mock Board Exams</h4>
              <p className={`text-sm font-light leading-relaxed ${theme.muted}`}>Intensive in-house preparation, mock licensure examinations, and career orientation seminars led by BulSU alumni and industry veterans.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="learning-communities" className={`py-24 px-6 border-t ${theme.border} bg-[#0a0a0a] text-white relative z-10`}>
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 text-amber-500">Learning Communities</h3>
          <p className="font-light leading-relaxed mb-16 max-w-3xl mx-auto text-gray-400">
            Engineering is tough, but you don't have to do it alone. Our learning communities foster a collaborative environment where students support each other to achieve academic excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-white/10 bg-[#111] hover:border-red-600/50 transition-colors">
              <h4 className="font-bold text-xl mb-3">Peer Tutoring</h4>
              <p className="text-sm font-light text-gray-400">Upperclassmen guiding junior students through complex mathematics and core engineering subjects.</p>
            </div>
            <div className="p-8 rounded-3xl border border-white/10 bg-[#111] hover:border-amber-500/50 transition-colors">
              <h4 className="font-bold text-xl mb-3">Innovation Labs</h4>
              <p className="text-sm font-light text-gray-400">Open spaces for students to collaborate on capstone projects, robotics, and software development outside class hours.</p>
            </div>
            <div className="p-8 rounded-3xl border border-white/10 bg-[#111] hover:border-red-600/50 transition-colors">
              <h4 className="font-bold text-xl mb-3">Study Groups</h4>
              <p className="text-sm font-light text-gray-400">Department-sponsored group study sessions designed to prepare students for midterms and final examinations.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="merch" className={`py-24 px-6 border-t ${theme.border} relative z-10 ${theme.bg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4 text-red-800 dark:text-red-500">Official COE Merchandise</h3>
            <p className={`font-light max-w-2xl mx-auto ${theme.muted}`}>Show your engineering pride. Available exclusively through the Local Student Council.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className={`p-8 rounded-3xl border ${theme.border} ${theme.cardBg} shadow-lg text-center group`}>
              <div className="aspect-square bg-zinc-100 dark:bg-[#0a0a0a] rounded-2xl mb-8 relative overflow-hidden border border-gray-200 dark:border-white/5">
                <img src="/images/merch-shirt.jpg" alt="COE Shirt" className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" onError={(e) => e.target.style.display='none'} />
              </div>
              <h4 className="font-bold text-xl uppercase tracking-widest text-red-800 dark:text-red-500">Official COE Shirt</h4>
            </div>
            
            <div className={`p-8 rounded-3xl border ${theme.border} ${theme.cardBg} shadow-lg text-center group`}>
              <div className="aspect-square bg-zinc-100 dark:bg-[#0a0a0a] rounded-2xl mb-8 relative overflow-hidden border border-gray-200 dark:border-white/5">
                <img src="/images/merch-bag.jpg" alt="COE Tote Bag" className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" onError={(e) => e.target.style.display='none'} />
              </div>
              <h4 className="font-bold text-xl uppercase tracking-widest text-red-800 dark:text-red-500">Engineering Tote Bag</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}