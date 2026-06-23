import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PreviewSection() {
  const [category, setCategory] = useState('company'); // 'personal', 'creator', 'company'
  const [tab, setTab] = useState('skills'); // 'skills', 'education', 'product', 'service'

  // Card Content Data Map
  const cardData = {
    personal: {
      logo: "MT",
      title: "Mikiyas Tesfaye",
      subtitle: "Senior Full Stack Engineer",
      location: "Addis Ababa, Ethiopia",
      skills: "React.js, Node.js, GraphQL, AWS, Python, Tailwind CSS",
      education: "BSc in Computer Science - Addis Ababa University",
      product: "Developer Portfolio Templates & Boilerplates",
      service: "Custom React Apps, Performance Audits & API Design",
    },
    creator: {
      logo: "MV",
      title: "Miki Visuals",
      subtitle: "UI Designer & Photographer",
      location: "Addis Ababa, Ethiopia",
      skills: "Figma, Framer Motion, Photoshop, UI/UX, Web Design",
      education: "Self-Taught | 6+ Years Design & Styling Experience",
      product: "Lightroom Presets & Custom Wallpapers Pack",
      service: "UI/UX Consultations, Brand Guidelines, Landing Pages",
    },
    company: {
      logo: "iD",
      title: "IDTree",
      subtitle: "Software Development Company",
      location: "Addis Ababa, Ethiopia",
      skills: "Vite, React.js, Tailwind CSS, Framer Motion, Web App Scaffolding",
      education: "Founded 2023 | Building digital identity for the modern creator",
      product: "IDTree Pro Link Builder ($5/mo, Claim your custom URL)",
      service: "Enterprise Link-in-Bio Solutions & Branding Portals",
    }
  };

  const currentData = cardData[category];

  // Helper to render current active content
  const getAboutContent = () => {
    switch (tab) {
      case 'skills': return currentData.skills;
      case 'education': return currentData.education;
      case 'product': return currentData.product;
      case 'service': return currentData.service;
      default: return currentData.skills;
    }
  };

  return (
    <section id="preview" className="w-full max-w-5xl mx-auto px-6 py-16 text-center">
      
      {/* Category Tabs (Personal, Creator, Company) */}
      <div className="flex justify-center gap-12 border-b-2 border-black/10 pb-4 mb-10 max-w-xl mx-auto">
        {['personal', 'creator', 'company'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-xl sm:text-2xl font-black capitalize tracking-tight transition-all duration-300 relative pb-2 ${
              category === cat ? 'text-black scale-105' : 'text-black/40 hover:text-black/70'
            }`}
          >
            {cat}
            {category === cat && (
              <motion.div 
                layoutId="activeCatLine"
                className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Main Grid: Left Tabs, Center Card, Right Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
        
        {/* Left Column Tabs (Skills, Education) */}
        <div className="flex md:flex-col justify-center gap-4">
          {['skills', 'education'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-8 py-4 rounded-2xl border-2 border-black font-extrabold text-lg sm:text-xl capitalize transition-all duration-300 shadow-md ${
                tab === t 
                  ? 'bg-black text-[#25e009] scale-105 shadow-xl' 
                  : 'bg-transparent text-black hover:bg-black/5'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Center Profile Card Preview */}
        <div className="flex justify-center">
          <motion.div 
            layout
            className="w-[280px] sm:w-[300px] rounded-3xl overflow-hidden shadow-2xl bg-white text-black border border-black/5"
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Top Card Section: Dark Mesh Graphic */}
            <div className="bg-[#111611] p-6 h-28 relative flex items-center justify-center overflow-hidden">
              {/* Dot Grid Background */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#39FF14_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>
              
              {/* Mesh Graphic */}
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#39FF14]/30 animate-pulse">
                <circle cx="50" cy="50" r="3" fill="currentColor" />
                <circle cx="20" cy="30" r="2" fill="currentColor" />
                <circle cx="80" cy="30" r="2" fill="currentColor" />
                <circle cx="30" cy="70" r="2" fill="currentColor" />
                <circle cx="70" cy="70" r="2" fill="currentColor" />
                <line x1="50" y1="50" x2="20" y2="30" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="80" y2="30" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="30" y2="70" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="70" y2="70" stroke="currentColor" strokeWidth="0.5" />
                <line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                <line x1="30" y1="70" x2="70" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
              </svg>
            </div>

            {/* Bottom Card Section: Bright Green info card */}
            <div className="bg-[#25e009] p-6 relative pt-12 text-center flex flex-col items-center">
              
              {/* Circle Avatar badge overlapping the split */}
              <div className="w-16 h-16 rounded-full bg-[#111611] border-4 border-[#25e009] absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center text-[#39FF14] font-black text-xl shadow-lg">
                {currentData.logo}
              </div>

              {/* Title & Details */}
              <motion.h4 
                key={category + '-title'}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-black text-black leading-tight"
              >
                {currentData.title}
              </motion.h4>
              
              <motion.p 
                key={category + '-sub'}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-extrabold text-black/70 mt-0.5 tracking-tight uppercase"
              >
                {currentData.subtitle}
              </motion.p>
              
              <p className="text-[10px] font-bold text-black/60 mt-0.5">
                {currentData.location}
              </p>

              {/* About Box - Dynamic info */}
              <div className="w-full mt-4 bg-transparent border-2 border-black rounded-2xl p-4 text-left min-h-[90px] flex flex-col justify-center">
                <span className="text-[10px] font-black text-black uppercase tracking-wider block mb-1">
                  About ({tab}):
                </span>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={category + '-' + tab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs font-bold text-black leading-snug"
                  >
                    {getAboutContent()}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Join Now Action Button */}
              <button className="w-full mt-4 py-2.5 rounded-full bg-black text-[#25e009] font-black text-sm hover:bg-neutral-900 transition-all duration-200 shadow-md transform active:scale-95">
                Join Now
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column Tabs (Product, Service) */}
        <div className="flex md:flex-col justify-center gap-4">
          {['product', 'service'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-8 py-4 rounded-2xl border-2 border-black font-extrabold text-lg sm:text-xl capitalize transition-all duration-300 shadow-md ${
                tab === t 
                  ? 'bg-black text-[#25e009] scale-105 shadow-xl' 
                  : 'bg-transparent text-black hover:bg-black/5'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
