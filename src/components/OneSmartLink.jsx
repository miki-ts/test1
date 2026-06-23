import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export default function OneSmartLink() {
  const checklist = [
    "One Link for Everything",
    "Creator & Business Focused",
    "Fully Customizable",
    "Mobile Friendly",
    "Fast & Easy Sharing",
    "Modern Templates"
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <motion.div 
        className="glass-panel rounded-3xl overflow-hidden shadow-2xl relative border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* macOS Style Header Bar */}
        <div className="w-full bg-[#111611]/80 px-6 py-4 flex items-center justify-between border-b border-white/5 select-none">
          <span className="text-xs font-semibold text-white/40 tracking-widest font-heading">IDTREE // VALUE PROPOSITION</span>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Network Mesh Nodes */}
          <div className="relative flex items-center justify-center min-h-[220px]">
            {/* Ambient Glow */}
            <div className="w-48 h-48 bg-[#39FF14]/5 rounded-full blur-[60px] absolute z-0 pointer-events-none"></div>
            
            {/* Network Nodes Vector Graphic */}
            <svg 
              viewBox="0 0 200 200" 
              className="w-full max-w-[280px] h-auto text-[#39FF14] z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="meshGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#39FF14" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#39FF14" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Glowing Background Ring */}
              <circle cx="100" cy="100" r="70" fill="url(#meshGlow)" opacity="0.4" />
              
              {/* Outer Orbit Rings */}
              <circle cx="100" cy="100" r="60" fill="none" stroke="#39FF14" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
              <circle cx="100" cy="100" r="35" fill="none" stroke="#39FF14" strokeWidth="0.5" opacity="0.2" />

              {/* Connecting Lines */}
              <g stroke="#39FF14" strokeWidth="1" opacity="0.4">
                <line x1="100" y1="100" x2="60" y2="60" />
                <line x1="100" y1="100" x2="140" y2="60" />
                <line x1="100" y1="100" x2="40" y2="100" />
                <line x1="100" y1="100" x2="160" y2="100" />
                <line x1="100" y1="100" x2="60" y2="140" />
                <line x1="100" y1="100" x2="140" y2="140" />

                <line x1="60" y1="60" x2="140" y2="60" strokeDasharray="2 2" />
                <line x1="40" y1="100" x2="60" y2="60" />
                <line x1="40" y1="100" x2="60" y2="140" />
                <line x1="160" y1="100" x2="140" y2="60" />
                <line x1="160" y1="100" x2="140" y2="140" />
                <line x1="60" y1="140" x2="140" y2="140" strokeDasharray="2 2" />
              </g>

              {/* Outer Orbiting Profile Nodes */}
              <g className="cursor-pointer">
                {/* Center Node */}
                <circle cx="100" cy="100" r="14" fill="#080c08" stroke="#39FF14" strokeWidth="2.5" />
                <circle cx="100" cy="97" r="4.5" fill="#39FF14" />
                <path d="M92,109 C92,104 108,104 108,109" fill="none" stroke="#39FF14" strokeWidth="2.5" strokeLinecap="round" />

                {/* Node 1: Top Left */}
                <circle cx="60" cy="60" r="8" fill="#080c08" stroke="#39FF14" strokeWidth="1.5" />
                <circle cx="60" cy="58" r="2.5" fill="#39FF14" />
                <path d="M55,64 C55,62 65,62 65,64" fill="none" stroke="#39FF14" strokeWidth="1.5" />

                {/* Node 2: Top Right */}
                <circle cx="140" cy="60" r="8" fill="#080c08" stroke="#39FF14" strokeWidth="1.5" />
                <circle cx="140" cy="58" r="2.5" fill="#39FF14" />
                <path d="M135,64 C135,62 145,62 145,64" fill="none" stroke="#39FF14" strokeWidth="1.5" />

                {/* Node 3: Left */}
                <circle cx="40" cy="100" r="8" fill="#080c08" stroke="#39FF14" strokeWidth="1.5" />
                <circle cx="40" cy="98" r="2.5" fill="#39FF14" />
                <path d="M35,104 C35,102 45,102 45,104" fill="none" stroke="#39FF14" strokeWidth="1.5" />

                {/* Node 4: Right */}
                <circle cx="160" cy="100" r="8" fill="#080c08" stroke="#39FF14" strokeWidth="1.5" />
                <circle cx="160" cy="98" r="2.5" fill="#39FF14" />
                <path d="M155,104 C155,102 165,102 165,104" fill="none" stroke="#39FF14" strokeWidth="1.5" />

                {/* Node 5: Bottom Left */}
                <circle cx="60" cy="140" r="8" fill="#080c08" stroke="#39FF14" strokeWidth="1.5" />
                <circle cx="60" cy="138" r="2.5" fill="#39FF14" />
                <path d="M55,144 C55,142 65,142 65,144" fill="none" stroke="#39FF14" strokeWidth="1.5" />

                {/* Node 6: Bottom Right */}
                <circle cx="140" cy="140" r="8" fill="#080c08" stroke="#39FF14" strokeWidth="1.5" />
                <circle cx="140" cy="138" r="2.5" fill="#39FF14" />
                <path d="M135,144 C135,142 145,142 145,144" fill="none" stroke="#39FF14" strokeWidth="1.5" />
              </g>
            </svg>
          </div>

          {/* Right Column: Values / Checklist */}
          <div className="flex flex-col gap-6 text-left">
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
              All Your Links. <span className="text-[#39FF14]">One Smart Link.</span>
            </h2>
            
            <p className="text-neutral-400 text-xs md:text-sm font-medium leading-relaxed">
              IDTree helps individuals, creators, and businesses organize their digital presence and share everything from one smart link.
            </p>

            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-black text-[#39FF14] tracking-widest uppercase mb-1">
                WHY IDTREE ?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white">
                    <div className="w-5 h-5 rounded-full bg-[#1b261b] border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] text-xs">
                      <FiCheck />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-neutral-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="mt-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-3.5 rounded-full bg-[#25e009] text-black font-extrabold text-sm hover:bg-[#39FF14] transition-all duration-200 shadow-lg flex items-center gap-2 w-fit transform active:scale-95"
              >
                Get Started Now <span className="text-base">→</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
