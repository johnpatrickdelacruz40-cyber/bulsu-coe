import React from 'react';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { timelineEvents } from '../data/timelineData';

export default function About() {
  const { isDarkMode } = useOutletContext();

  const theme = {
    cardBg: isDarkMode ? "bg-[#0c0c0c]" : "bg-white",
    border: isDarkMode ? "border-white/10" : "border-gray-200",
    muted: isDarkMode ? "text-gray-400" : "text-gray-500",
  };

  return (
    <div className="pt-32 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-red-800 dark:text-red-600">About Us</h1>
        <p className={`text-xl font-light ${theme.muted}`}>The guiding principles, legacy, and excellence of BulSU COE.</p>
      </div>

      <section id="college-philosophy" className={`py-16 px-6 border-b ${theme.border} relative z-10 bg-zinc-50 dark:bg-black/20`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">College <span className="text-amber-500">Philosophy</span></h3>
            <p className={`font-light ${theme.muted}`}>The guiding principles of our engineering education.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-red-700 to-red-900 text-white p-12 md:p-16 rounded-3xl shadow-xl flex flex-col h-full relative overflow-hidden border border-red-600/50">
              <div className="absolute -top-10 -right-4 text-[12rem] font-serif text-red-950/40 leading-none pointer-events-none">"</div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-6 relative z-10">Our Vision</h4>
              <p className="text-xl md:text-2xl font-serif font-light tracking-wide leading-relaxed relative z-10 flex-grow italic">
                The primary thrust of the College of Engineering is to provide instruction and training in the various engineering disciplines reinforced with desirable work attitudes and ideals, leadership skills and work competencies capable of responding to the needs of the region and the demands of global standards.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-red-700 to-red-900 text-white p-12 md:p-16 rounded-3xl shadow-xl flex flex-col h-full relative overflow-hidden border border-red-600/50">
              <div className="absolute -top-10 -right-4 text-[12rem] font-serif text-red-950/40 leading-none pointer-events-none">"</div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-6 relative z-10">Our Mission</h4>
              <p className="text-xl md:text-2xl font-serif font-light tracking-wide leading-relaxed relative z-10 flex-grow italic">
                Empower engineering graduates making them responsive to ever changing local and international environment.
              </p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className={`p-10 md:p-12 rounded-3xl ${theme.cardBg} border ${theme.border} shadow-sm text-center relative z-10`}>
            <h4 className="text-sm font-bold uppercase tracking-widest text-red-700 dark:text-red-500 mb-6 relative z-10">Goals & Objectives</h4>
            <p className={`font-light leading-relaxed max-w-4xl mx-auto ${theme.muted}`}>
              Engineering Education is primarily concerned in the Arts and Science of Engineering and in their growth and development within the framework of the democratic ideals and spiritual values.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="awards" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 text-red-800 dark:text-red-500">Awards & Recognitions</h3>
          <p className={`font-light leading-relaxed mb-12 max-w-2xl mx-auto ${theme.muted}`}>
            Celebrating the outstanding achievements of our students and faculty in national board exams and international competitions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
               <div key={item} className={`p-8 rounded-2xl border ${theme.border} ${theme.cardBg} shadow-sm hover:shadow-md transition-shadow`}>
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🏆</div>
                  <h4 className="font-bold text-lg mb-2">Top Performing School</h4>
                  <p className={`text-xs uppercase tracking-widest ${theme.muted} mb-4`}>Licensure Examination</p>
                  <p className={`text-sm font-light ${theme.muted}`}>Consistent high passing rates producing top-notch engineers nationwide.</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="py-24 px-6 relative z-10 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-b border-white/10 pb-8">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              A Legacy of <br/>
              <span className="text-red-600">Excellence</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-16">
            {timelineEvents.map((event, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative group">
                <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-red-800 opacity-40 group-hover:bg-amber-500 group-hover:opacity-100 transition-colors"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-white/20 group-hover:text-red-500 transition-colors duration-300 mb-2 font-mono">{event.year}</span>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-3">{event.title}</h4>
                  <p className="text-sm font-light leading-relaxed text-gray-400 group-hover:text-gray-200 transition-colors">{event.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 flex justify-center">
             <div className="px-6 py-2 rounded-full border border-red-600/30 bg-red-900/20 text-[10px] font-bold tracking-[0.5em] uppercase text-red-400">
               122 Years of Institutional Heritage
             </div>
          </div>
        </div>
      </section>

      <section id="contact-us" className={`py-24 px-6 border-t ${theme.border} relative z-10`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 text-red-800 dark:text-red-500">Contact Us</h3>
          
          <div className={`grid md:grid-cols-2 gap-8 text-left ${theme.cardBg} p-10 rounded-3xl border ${theme.border} shadow-lg`}>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-amber-600 mb-2">Dean's Office</h4>
              <p className={`font-light leading-relaxed text-sm ${theme.muted} mb-6`}>
                Natividad Hall (Main Engineering Building)<br/>
                Bulacan State University<br/>
                City of Malolos, Bulacan 3000
              </p>
              <h4 className="font-bold text-sm uppercase tracking-widest text-amber-600 mb-2">Direct Lines</h4>
              <p className={`font-light leading-relaxed text-sm ${theme.muted}`}>
                Phone: (044) 919-7800<br/>
                Email: coe.dean@bulsu.edu.ph
              </p>
            </div>
            
            {/* FormSubmit - Actually sends to your email! */}
            <form action="https://formsubmit.co/johnpatrickdelacruz40@gmail.com" method="POST" className="flex flex-col gap-4">
               {/* Hidden field to set subject line */}
               <input type="hidden" name="_subject" value="New Website Message from BulSU COE!" />
               <input type="hidden" name="_captcha" value="false" />
               
               <input type="text" name="Name" placeholder="Your Name" required className={`w-full p-3 rounded-lg border ${theme.border} bg-transparent font-light text-sm focus:outline-none focus:border-red-500 transition-colors`} />
               <input type="email" name="Email" placeholder="Your Email" required className={`w-full p-3 rounded-lg border ${theme.border} bg-transparent font-light text-sm focus:outline-none focus:border-red-500 transition-colors`} />
               <textarea name="Message" placeholder="Your Message" rows="4" required className={`w-full p-3 rounded-lg border ${theme.border} bg-transparent font-light text-sm focus:outline-none focus:border-red-500 transition-colors`}></textarea>
               <button type="submit" className="w-full py-3 font-bold text-white bg-red-800 hover:bg-red-700 transition-colors tracking-widest uppercase text-xs rounded-lg shadow-md">
                 Send Message
               </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}