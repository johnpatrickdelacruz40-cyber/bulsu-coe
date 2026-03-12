import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { programsData } from '../data/programsData';

export default function Academics() {
  const { isDarkMode } = useOutletContext();
  const [activeTab, setActiveTab] = useState(0);
  const [activeUniformTab, setActiveUniformTab] = useState("Mon-Sat Guide");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [procSlide, setProcSlide] = useState(1);
  const totalProcSlides = 13;

  useEffect(() => {
    const timer = setInterval(() => {
      setProcSlide((prev) => (prev === totalProcSlides ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const theme = {
    cardBg: isDarkMode ? "bg-[#0c0c0c]" : "bg-white",
    border: isDarkMode ? "border-white/10" : "border-gray-200",
    muted: isDarkMode ? "text-gray-400" : "text-gray-500",
  };

  const faqs = [
    { q: "What is the passing rate for the qualifying exam?", a: "The qualifying exam is highly competitive. We recommend reviewing core mathematics and physics concepts." },
    { q: "Can I shift to another engineering program later?", a: "Shifting is subject to academic performance and the availability of slots in the target department." },
    { q: "Are there scholarships available?", a: "Yes, BulSU offers various institutional, local government, and private scholarships for academically excellent students." }
  ];

  return (
    <div className="pt-32 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-red-800 dark:text-red-600">Academics</h1>
        <p className={`text-xl font-light ${theme.muted}`}>Discover your path to engineering excellence.</p>
      </div>

      {/* PROGRAMS PORTAL */}
      <section id="programs" className={`py-16 px-6 relative z-10 border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-2">Program <span className="text-amber-500">Offerings</span></h3>
            <p className={`font-light ${theme.muted}`}>Select a discipline to explore accreditation and curriculum focus.</p>
          </div>

          <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 border-[3px]" style={{ borderColor: programsData[activeTab].hex }}>
            <div className={`lg:w-1/3 flex flex-col bg-gray-50 dark:bg-[#0f0f0f]`}>
              {programsData.map((prog, index) => {
                const isActive = activeTab === index;
                return (
                  <button 
                    key={prog.id} 
                    onClick={() => setActiveTab(index)} 
                    style={isActive ? { 
                      borderLeft: `6px solid ${prog.hex}`, 
                      backgroundColor: `${prog.hex}15`,
                      color: prog.hex 
                    } : { borderLeft: `6px solid transparent` }} 
                    className={`text-left px-8 py-6 font-bold tracking-wide uppercase text-sm transition-all duration-300 border-b last:border-b-0 ${isDarkMode ? 'border-white/5' : 'border-gray-200'} ${!isActive && "opacity-50 hover:opacity-100 dark:text-white text-gray-900"}`}
                  >
                    {prog.title}
                  </button>
                );
              })}
            </div>
            
            <div className={`lg:w-2/3 p-10 md:p-20 relative ${theme.cardBg}`}>
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <div className="flex gap-4 mb-6">
                    <span style={{ color: programsData[activeTab].hex, borderColor: `${programsData[activeTab].hex}40`, backgroundColor: `${programsData[activeTab].hex}10` }} className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border">Est. {programsData[activeTab].year}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">AACCUP {programsData[activeTab].accreditation}</span>
                  </div>
                  
                  <h4 className="text-4xl md:text-5xl font-black mb-6" style={{ color: programsData[activeTab].hex }}>
                    {programsData[activeTab].title}
                  </h4>
                  
                  <p className={`text-lg font-light leading-relaxed mb-10 ${theme.muted}`}>{programsData[activeTab].desc}</p>
                  
                  <button onClick={() => setIsModalOpen(true)} style={{ backgroundColor: programsData[activeTab].hex }} className="px-8 py-3 text-white tracking-widest uppercase text-xs font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                    View Full Details
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL FOR PROGRAMS */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/60" onClick={() => setIsModalOpen(false)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} onClick={(e) => e.stopPropagation()} className={`w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col rounded-3xl shadow-2xl relative ${theme.cardBg} border ${theme.border}`}>
              <div className="p-8 border-b border-gray-200 dark:border-white/10 shrink-0">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors">Close</button>
                <h3 className="text-3xl font-black mb-2" style={{ color: programsData[activeTab].hex }}>{programsData[activeTab].title}</h3>
                <p className={`text-sm tracking-widest uppercase ${theme.muted}`}>AACCUP {programsData[activeTab].accreditation} • Established {programsData[activeTab].year}</p>
              </div>
              <div className="p-8 overflow-y-auto custom-scrollbar space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-amber-600">Program Description</h4>
                  <p className={`font-light leading-relaxed ${theme.muted}`}>{programsData[activeTab].desc}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-amber-600">Program Objectives</h4>
                    <ul className={`list-disc pl-5 font-light leading-relaxed space-y-2 ${theme.muted}`}>
                      {programsData[activeTab].objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-amber-600">Career Opportunities</h4>
                    <ul className={`list-disc pl-5 font-light leading-relaxed space-y-2 ${theme.muted}`}>
                      {programsData[activeTab].careers.map((career, i) => <li key={i}>{career}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-200 dark:border-white/10 pt-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-amber-600">Skills to Learn</h4>
                    <ul className={`list-disc pl-5 font-light leading-relaxed space-y-2 ${theme.muted}`}>
                      {programsData[activeTab].skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-amber-600">Sample Subjects</h4>
                    <ul className={`list-disc pl-5 font-light leading-relaxed space-y-2 ${theme.muted}`}>
                      {programsData[activeTab].subjects.map((subj, i) => <li key={i}>{subj}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAPS & ADMISSIONS */}
      <section id="maps-and-admissions" className={`py-24 px-6 relative z-10 border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black tracking-tighter uppercase mb-4 text-red-800 dark:text-red-600">Maps & Admissions</h3>
            <p className={`font-light max-w-2xl mx-auto ${theme.muted}`}>Find your way and secure your spot in the College of Engineering.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className={`rounded-3xl overflow-hidden relative shadow-xl bg-white dark:bg-[#050505] aspect-square md:aspect-video border border-gray-200 dark:border-white/5`}>
               <img src="/images/bulsu-main-map.jpg" alt="BulSU Campus Map" className="absolute inset-0 w-full h-full object-contain" onError={(e) => e.target.style.display='none'} />
               <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] backdrop-blur-md z-10">Campus Map</div>
            </div>
            <div className={`rounded-3xl overflow-hidden relative shadow-xl bg-white dark:bg-[#050505] aspect-square md:aspect-video border border-gray-200 dark:border-white/5`}>
               <img src="/images/building-codes.jpg" alt="Building Codes" className="absolute inset-0 w-full h-full object-contain" onError={(e) => e.target.style.display='none'} />
               <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] backdrop-blur-md z-10">Building Codes</div>
            </div>
          </div>

          <div className="mb-24 text-left grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className={`p-8 md:p-12 rounded-3xl border ${theme.border} ${theme.cardBg} shadow-xl`}>
                 <h4 className="font-black text-2xl uppercase tracking-tighter text-red-800 dark:text-red-500 mb-6">Program Entry Requirements</h4>
                 <ul className={`space-y-4 font-light text-sm leading-relaxed ${theme.muted}`}>
                    <li>• The minimum grade requirement for each Grade 11 subject is <strong className="text-gray-900 dark:text-white">85%</strong>.</li>
                    <li>• For Engineering, Architecture, and Accountancy programs, the minimum grade for Math and Science subjects is <strong className="text-amber-600">87%</strong>.</li>
                    <li>• Required General Weighted Average (GWA) for Non-board programs is <strong className="text-gray-900 dark:text-white">85% or better</strong> in Grade 11.</li>
                 </ul>
              </div>

              <div className={`p-8 md:p-12 rounded-3xl border ${theme.border} ${theme.cardBg} shadow-xl`}>
                 <h4 className="font-black text-2xl uppercase tracking-tighter text-red-800 dark:text-red-500 mb-6">Admission Requirements</h4>
                 <p className={`font-light text-sm mb-6 ${theme.muted}`}>Scanned copies are required as you accomplish Step 1 (Online Application). Hard copies must be submitted on or before the deadline set by the University Admissions Office (UAO).</p>
                 
                 {/* FORCED PURE WHITE BACKGROUND AND BLACK TEXT */}
                 <ul className="space-y-3 font-light text-sm text-gray-800 mb-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
                    <li><strong className="text-black">2.1.</strong> Certified True Copy (with school seal) of SF9 in Grade 11.</li>
                    <li><strong className="text-black">2.2.</strong> 2" x 2" ID picture with a name tag and white background.</li>
                    <li><strong className="text-black">2.3.</strong> Certified True Copy of Proof of Residency (Barangay Certificate).</li>
                 </ul>

                 <h5 className="font-bold text-xs uppercase tracking-widest text-amber-600 mb-3">Optional Documents (If Applicable):</h5>
                 <p className={`font-light text-xs mb-4 ${theme.muted}`}>Certified True Copy of Membership Certification / Barangay-issued Certificate / ID if the applicant is a:</p>
                 <ul className={`grid grid-cols-1 gap-2 font-light text-xs ${theme.muted}`}>
                    <li><strong>3.1.</strong> Member of an Indigenous Cultural Community (ICC) / Indigenous People (IP)</li>
                    <li><strong>3.2.</strong> Member of Pantawid Pamilya Pilipino Program (4Ps)</li>
                    <li><strong>3.3.</strong> Student with Special Needs (SSN) and other types of disabilities</li>
                    <li><strong>3.4.</strong> Graduate of Alternative Learning System (ALS)</li>
                    <li><strong>3.5.</strong> Child of Solo Parent (Solo parent ID)</li>
                    <li><strong>3.6.</strong> Orphan living with relatives (Death cert of parents)</li>
                    <li><strong>3.7.</strong> Orphaned/Abandoned living in an orphanage (Certification)</li>
                    <li><strong>3.8.</strong> Student living in GIDA (Geographically Isolated Areas)</li>
                    <li><strong>3.9.</strong> Student with Exemplary Artistic and Athletic Ability</li>
                 </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className={`p-8 md:p-12 rounded-3xl border ${theme.border} ${theme.cardBg} shadow-xl`}>
                 <h4 className="font-black text-2xl uppercase tracking-tighter text-red-800 dark:text-red-500 mb-8">Application Steps</h4>
                 
                 <div className="mb-8 relative pl-6 border-l-2 border-amber-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-500 rounded-full border-4 border-white dark:border-[#0c0c0c]"></div>
                    <h5 className="font-bold text-sm text-gray-900 dark:text-white mb-3 uppercase tracking-widest">I. Online Application to take ATBulSU</h5>
                    <ol className={`list-decimal pl-5 space-y-3 font-light text-sm ${theme.muted}`}>
                       <li>Open the link posted online by the UAO on or before the set deadline to upload admission forms and requirements.</li>
                       <li>Complete the Admission forms and submit them online with the requirements.</li>
                       <li>Wait for the confirmation email. You will be sent the ATBulSU Test Permit bearing the exam date, time, and venue if qualified. Print this test permit.</li>
                    </ol>
                 </div>
                 
                 <div className="relative pl-6 border-l-2 border-red-800">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-800 rounded-full border-4 border-white dark:border-[#0c0c0c]"></div>
                    <h5 className="font-bold text-sm text-gray-900 dark:text-white mb-3 uppercase tracking-widest">II. On-Campus ATBulSU</h5>
                    <p className={`font-light text-sm leading-relaxed ${theme.muted}`}>
                       Take the ATBulSU on the scheduled date/time/venue. Bring your ATBulSU Test Permit, valid ID, and a ballpoint pen on the day of your examination.
                    </p>
                 </div>
              </div>

              {/* FORCED PURE WHITE BACKGROUND AND BLACK TEXT */}
              <div className="p-8 md:p-12 rounded-3xl border border-gray-200 bg-white shadow-xl flex flex-col justify-center">
                 <h4 className="font-black text-lg uppercase tracking-widest text-amber-600 mb-2">Application Deadlines</h4>
                 <p className="font-light text-sm mb-8 text-gray-800">The application for Freshman College Admission will start in <strong className="text-black">September 2026</strong>.</p>
                 
                 <h4 className="font-black text-lg uppercase tracking-widest text-amber-600 mb-2">Contact For Inquiries</h4>
                 <p className="font-light text-sm text-gray-800">
                    For admissions questions, email the UAO directly at: <br/>
                    <a href="mailto:sppdo@bulsu.edu.ph" className="text-red-700 font-bold tracking-widest hover:underline mt-2 inline-block">sppdo@bulsu.edu.ph</a>
                 </p>
              </div>
            </div>
          </div>

          <div className="mb-24 text-center">
             <h4 className="font-bold uppercase tracking-widest text-sm text-red-800 dark:text-red-500 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4 inline-block">Official Admission Announcements</h4>
             <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                {['freshies-admission.jpg', 'freshies-admission2.jpg', 'freshies-admission3.jpg', 'freshies-admission4.jpg'].map((img, idx) => (
                  <div key={idx} className={`rounded-3xl overflow-hidden border ${theme.border} bg-zinc-100 dark:bg-[#0a0a0a] shadow-lg aspect-square p-2`}>
                    <img src={`/images/${img}`} alt={`Admission ${idx+1}`} className="w-full h-full object-contain rounded-2xl" onError={(e) => e.target.style.display='none'} />
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ENROLLMENT PROCEDURE */}
      <section id="enrollment-procedure" className={`py-24 px-6 relative z-10 border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-3xl font-black tracking-tighter uppercase mb-4 text-amber-500">Step-by-Step Enrollment Procedure</h4>
          <p className={`font-light max-w-2xl mx-auto mb-16 ${theme.muted}`}>Follow these 13 steps carefully to complete your registration.</p>
          
          <div className={`relative rounded-3xl overflow-hidden border ${theme.border} bg-zinc-100 dark:bg-[#0a0a0a] shadow-2xl max-w-3xl mx-auto aspect-square group`}>
            <div className="absolute inset-y-0 left-4 flex items-center z-20">
              <button onClick={() => setProcSlide((prev) => (prev === 1 ? totalProcSlides : prev - 1))} className="w-12 h-12 bg-black/50 hover:bg-amber-500 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-lg">&larr;</button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center z-20">
              <button onClick={() => setProcSlide((prev) => (prev === totalProcSlides ? 1 : prev + 1))} className="w-12 h-12 bg-black/50 hover:bg-amber-500 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-lg">&rarr;</button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={procSlide} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }} className="absolute inset-0 w-full h-full p-4 md:p-8">
                <img src={`/images/enrollment-step-${procSlide}.jpg`} alt={`Procedure Step ${procSlide}`} className="w-full h-full object-contain drop-shadow-md" onError={(e) => e.target.style.display='none'} />
                <div className="absolute top-6 left-6 bg-red-800 text-white font-black text-xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-2 border-white/20">
                  {procSlide}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* UNIFORM GUIDE */}
      <section id="uniform-guide" className={`py-24 px-6 relative z-10 border-b ${theme.border} bg-zinc-50 dark:bg-[#080808]`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">Uniform & <span className="text-amber-500">Dress Code</span></h3>
            <p className={`font-light max-w-2xl mx-auto ${theme.muted}`}>Strict compliance with the university dress code is required for all engineering students.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex flex-col gap-2">
              {["Mon-Sat Guide", "Mens", "Womens", "PE Uniform", "Proper Civilian", "Prohibited"].map(tab => (
                <button key={tab} onClick={() => setActiveUniformTab(tab)} className={`text-left px-6 py-4 font-bold tracking-widest uppercase text-xs rounded-xl transition-all ${activeUniformTab === tab ? 'bg-red-800 text-white shadow-md' : `bg-transparent ${theme.muted} hover:bg-zinc-200 dark:hover:bg-zinc-800`}`}>
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="md:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div key={activeUniformTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className={`rounded-3xl border ${theme.border} p-6 md:p-10 ${theme.cardBg} shadow-xl`}>
                  <div className="bg-zinc-100 dark:bg-[#0a0a0a] rounded-2xl overflow-hidden aspect-square relative mb-8 border border-gray-200 dark:border-white/5 max-w-md mx-auto shadow-inner">
                    <img 
                      src={
                        activeUniformTab === "Mon-Sat Guide" ? "/images/uniform-guide.jpg" :
                        activeUniformTab === "Mens" ? "/images/uniform-mens.jpg" :
                        activeUniformTab === "Womens" ? "/images/uniform-womens.jpg" :
                        activeUniformTab === "PE Uniform" ? "/images/uniform-pe.jpg" :
                        activeUniformTab === "Proper Civilian" ? "/images/civilian-proper.jpg" :
                        "/images/civilian-prohibited.jpg"
                      } 
                      alt={activeUniformTab} 
                      className="absolute inset-0 w-full h-full object-contain p-4" 
                      onError={(e) => e.target.style.display='none'} 
                    />
                  </div>
                  <div className="text-center max-w-md mx-auto">
                    <h4 className="font-bold text-2xl mb-2 text-red-800 dark:text-red-500">{activeUniformTab} Guidelines</h4>
                    <p className={`font-light leading-relaxed ${theme.muted}`}>
                      {activeUniformTab === "Mon-Sat Guide" ? "The complete schedule for wearing uniforms from Monday to Saturday." : "Official guidelines and restrictions for this attire category."}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BULSU COE & FAQ */}
      <section id="why-bulsu-coe" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 text-red-800 dark:text-red-500">Why BulSU COE?</h3>
            <p className={`font-light leading-relaxed mb-6 ${theme.muted}`}>
              The College of Engineering at Bulacan State University is recognized as a premier institution for technical education in Central Luzon. With top-performing graduates in licensure examinations and state-of-the-art laboratory facilities, we bridge the gap between theoretical knowledge and industrial application.
            </p>
            <p className={`font-light leading-relaxed ${theme.muted}`}>
              Our faculty comprises industry veterans and rigorous researchers dedicated to fostering the next generation of global engineers.
            </p>
          </div>

          <div id="faq">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 text-amber-500">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`border ${theme.border} rounded-xl overflow-hidden ${theme.cardBg}`}>
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full text-left px-6 py-4 font-bold text-sm flex justify-between items-center hover:bg-red-800/5 transition-colors">
                    {faq.q}
                    <span className="text-red-800 text-lg font-light">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                        <p className={`px-6 pb-4 font-light text-sm ${theme.muted}`}>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}