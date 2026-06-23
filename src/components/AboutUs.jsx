import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-6 py-12">
      <motion.div 
        className="glass-panel rounded-3xl overflow-hidden shadow-2xl relative border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* macOS Style Bar */}
        <div className="w-full bg-[#111611]/80 px-6 py-4 flex items-center justify-between border-b border-white/5 select-none">
          <span className="text-xs font-semibold text-white/40 tracking-widest font-heading">IDTREE // ABOUT US</span>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="flex flex-col gap-6 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none uppercase">
              ABOUT US
            </h2>
            
            <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed">
              IDTree is an all-in-one digital profile platform that helps individuals, creators, and businesses share links, portfolios, products, services, and contact info, and build a professional online representation from a single customizable page.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-[#121612] p-4 rounded-xl border border-white/5 hover:border-[#39FF14]/25 transition-colors duration-300">
                <span className="block text-xl md:text-2xl font-black text-[#39FF14] font-heading">1000+</span>
                <span className="block text-[10px] uppercase font-bold text-neutral-500 tracking-wider mt-1">Profiles Created</span>
              </div>
              <div className="bg-[#121612] p-4 rounded-xl border border-white/5 hover:border-[#39FF14]/25 transition-colors duration-300">
                <span className="block text-xl md:text-2xl font-black text-[#39FF14] font-heading">1500+</span>
                <span className="block text-[10px] uppercase font-bold text-neutral-500 tracking-wider mt-1">Links Shared</span>
              </div>
              <div className="bg-[#121612] p-4 rounded-xl border border-white/5 hover:border-[#39FF14]/25 transition-colors duration-300">
                <span className="block text-xl md:text-2xl font-black text-[#39FF14] font-heading">500+</span>
                <span className="block text-[10px] uppercase font-bold text-neutral-500 tracking-wider mt-1">Companies Active</span>
              </div>
            </div>
          </div>

          {/* Right Image/SVG Column */}
          <div className="relative flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="w-64 h-64 bg-[#39FF14]/10 rounded-full blur-[80px] absolute z-0 pointer-events-none"></div>

            {/* Glowing Mountain SVG */}
            <svg 
              viewBox="0 0 400 400" 
              className="w-full max-w-[320px] h-auto z-10 filter drop-shadow-[0_0_20px_rgba(57,255,20,0.15)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Stars / Lights */}
              <g opacity="0.3">
                <circle cx="50" cy="100" r="1.5" fill="#39FF14" />
                <circle cx="90" cy="60" r="1" fill="#fff" />
                <circle cx="150" cy="120" r="1.5" fill="#39FF14" />
                <circle cx="320" cy="80" r="1" fill="#fff" />
                <circle cx="340" cy="180" r="2" fill="#39FF14" />
                <circle cx="280" cy="110" r="1" fill="#fff" />
              </g>

              {/* Glowing Peaks */}
              {/* Left Ridge */}
              <polygon points="120,380 200,220 280,380" fill="#080f08" opacity="0.8" />
              
              {/* Right Ridge */}
              <polygon points="180,380 260,260 320,380" fill="#0f1f0e" opacity="0.6" />

              {/* Main Peak (Green Mountain) */}
              <polygon points="80,380 200,140 320,380" fill="url(#mountainGrad)" />
              
              {/* Peak Shadow side */}
              <polygon points="200,140 200,380 320,380" fill="#000" opacity="0.35" />

              {/* Mountain Grid Lines (Retro low-poly details) */}
              <path d="M 200,140 L 140,380 M 200,140 L 260,380 M 200,140 L 200,380" stroke="#39FF14" strokeWidth="1" opacity="0.25" />
              <path d="M 120,300 L 280,300 M 150,240 L 250,240" stroke="#39FF14" strokeWidth="1" opacity="0.2" />

              {/* Flagpole */}
              <line x1="200" y1="140" x2="200" y2="85" stroke="#39FF14" strokeWidth="3" strokeLinecap="round" />
              
              {/* Waving Flag */}
              <path d="M 200,85 C 215,80 220,95 235,90 L 235,110 C 220,115 215,100 200,105 Z" fill="#39FF14" />

              {/* Star/Glow on flag */}
              <circle cx="200" cy="85" r="4" fill="#fff" />
              <circle cx="200" cy="85" r="8" fill="#39FF14" opacity="0.4" />

              {/* Glowing beacon rays */}
              <g opacity="0.25">
                <line x1="200" y1="85" x2="160" y2="45" stroke="#39FF14" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="85" x2="240" y2="45" stroke="#39FF14" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="85" x2="200" y2="35" stroke="#39FF14" strokeWidth="2" />
              </g>

              {/* Base ground grid lines */}
              <ellipse cx="200" cy="380" rx="140" ry="12" fill="none" stroke="#39FF14" strokeWidth="2" opacity="0.3" />
              
              {/* Gradients */}
              <defs>
                <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#39FF14" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#1b5e20" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#080c08" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
