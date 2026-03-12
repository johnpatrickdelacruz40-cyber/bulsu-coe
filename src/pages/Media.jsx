import React from 'react';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

export default function Media() {
  const { isDarkMode } = useOutletContext();

  const theme = {
    cardBg: isDarkMode ? "bg-[#0c0c0c]" : "bg-white",
    border: isDarkMode ? "border-white/10" : "border-gray-200",
    muted: isDarkMode ? "text-gray-400" : "text-gray-500",
  };

  const newsItems = [
    {
      date: "2025-2026",
      category: "LSC Official",
      title: "The Official COE Gazette is Live!",
      excerpt: "Scan the QR code to read the latest updates, departmental news, and student features from the Local Student Council."
    },
    {
      date: "May 2026",
      category: "Academic",
      title: "BulSU COE Dominates Licensure Exams",
      excerpt: "The College of Engineering once again proved its excellence as graduates secured top spots in the recent national board examinations."
    },
    {
      date: "February 2026",
      category: "Event",
      title: "Annual Engineering Week Kicks Off",
      excerpt: "A week of seminars, technical competitions, and community building activities led by the recognized student organizations."
    }
  ];

  return (
    <div className="pt-32 pb-20 w-full">
      
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-red-800 dark:text-red-600">Media & News</h1>
        <p className={`text-xl font-light ${theme.muted}`}>Stay updated with the latest from the College of Engineering.</p>
      </div>

      <section id="news" className={`py-16 px-6 border-y ${theme.border} relative z-10 bg-zinc-50 dark:bg-black/20`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
             <h3 className="text-3xl font-black tracking-tighter uppercase mb-2">Latest <span className="text-amber-500">Headlines</span></h3>
             <p className={`font-light ${theme.muted}`}>Breaking news, achievements, and updates from the campus.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-10 rounded-3xl border ${theme.border} ${theme.cardBg} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className="inline-block bg-red-800 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md w-max mb-4">
                  {item.category}
                </div>
                <span className={`text-[10px] font-bold tracking-widest uppercase text-amber-600 mb-2`}>{item.date}</span>
                <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">{item.title}</h4>
                <p className={`text-sm font-light leading-relaxed ${theme.muted} mb-0 flex-grow`}>{item.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="connect-with-us" className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className={`p-12 rounded-3xl border ${theme.border} bg-[#0a0a0a] text-white shadow-xl text-center`}>
            <h4 className="text-3xl font-black tracking-tighter uppercase mb-6 text-amber-500">Connect With Us</h4>
            <p className="font-light text-sm text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto">
              Follow BulSU COE on our official social media channels for real-time updates, event live streams, and community highlights.
            </p>
            <div className="flex flex-col gap-4">
              <a href="https://www.facebook.com/bulsuofficial" target="_blank" rel="noreferrer" className="w-full p-5 rounded-xl bg-[#111] border border-white/10 hover:bg-white/5 transition-colors text-left flex items-center gap-4 group">
                <span className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">f</span>
                <span className="font-bold tracking-widest uppercase group-hover:text-amber-500 transition-colors">Official Facebook Page</span>
              </a>
              {/* LSC FACEBOOK ADDED HERE */}
              <a href="https://web.facebook.com/BulSUCOELSC" target="_blank" rel="noreferrer" className="w-full p-5 rounded-xl bg-[#111] border border-white/10 hover:bg-white/5 transition-colors text-left flex items-center gap-4 group">
                <span className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center font-bold text-white text-xl">f</span>
                <span className="font-bold tracking-widest uppercase group-hover:text-amber-500 transition-colors">LSC Official Facebook</span>
              </a>
              <a href="https://www.instagram.com/bulsuofficial" target="_blank" rel="noreferrer" className="w-full p-5 rounded-xl bg-[#111] border border-white/10 hover:bg-white/5 transition-colors text-left flex items-center gap-4 group">
                <span className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">IG</span>
                <span className="font-bold tracking-widest uppercase group-hover:text-amber-500 transition-colors">Official Instagram</span>
              </a>
              <a href="https://x.com/BulSU_Official" target="_blank" rel="noreferrer" className="w-full p-5 rounded-xl bg-[#111] border border-white/10 hover:bg-white/5 transition-colors text-left flex items-center gap-4 group">
                <span className="w-10 h-10 bg-black border border-white/20 rounded-lg flex items-center justify-center font-bold text-white text-xl">𝕏</span>
                <span className="font-bold tracking-widest uppercase group-hover:text-amber-500 transition-colors">College Updates on X</span>
              </a>
              <a href="https://www.youtube.com/@BulSU_Official" target="_blank" rel="noreferrer" className="w-full p-5 rounded-xl bg-[#111] border border-white/10 hover:bg-white/5 transition-colors text-left flex items-center gap-4 group">
                <span className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">▶</span>
                <span className="font-bold tracking-widest uppercase group-hover:text-amber-500 transition-colors">Official YouTube Channel</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}