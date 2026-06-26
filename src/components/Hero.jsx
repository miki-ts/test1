import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import mikiyasAvatar from '../assets/miki.jpg';

export default function Hero() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleClaim = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate(`/${username.toLowerCase().trim()}`);
    }
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-20 flex flex-col items-center text-center z-10">
      
      {/* Swinging ID Badge & Heading Area */}
      <div className="relative flex flex-col items-center mb-8">
        
        {/* Lanyard Line & Clip */}
        <div className="w-[3px] h-20 bg-neutral-900 absolute -top-20 z-0"></div>
        <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-neutral-600 absolute -top-2 z-10 shadow-sm flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-neutral-950"></div>
        </div>

        {/* Swinging ID Card Container */}
        <motion.div 
          className="relative mt-4 mb-8 z-10 select-none shadow-2xl rounded-2xl overflow-hidden bg-white text-black border border-neutral-200 w-[240px] flex flex-col items-center p-5 cursor-grab active:cursor-grabbing"
          drag
          dragConstraints={{ left: -100, right: 100, top: -20, bottom: 50 }}
          animate={{
            rotate: [ -3, 3, -3 ],
            y: [ 0, 4, 0 ],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'top center' }}
        >
          {/* Card Clip Hole */}
          <div className="w-10 h-3 rounded-full bg-neutral-200 border border-neutral-300 mb-4 shadow-inner"></div>
          
          {/* Brand Logo */}
          <h3 className="text-2xl font-black tracking-tighter text-black font-heading mb-3">
            Idtree
          </h3>

          {/* Photo */}
          <div className="w-32 h-32 rounded-lg overflow-hidden border border-neutral-300 mb-3 bg-neutral-100 flex items-center justify-center">
            <img 
              src={mikiyasAvatar} 
              alt="Mikiyas Tesfaye" 
              className="w-full h-full object-cover grayscale"
              onError={(e) => {
                // Fallback in case of image failure
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";
              }}
            />
          </div>

          {/* Information */}
          <div className="text-center">
            <h4 className="text-base font-bold text-neutral-800">Mikiyas Tesfaye</h4>
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold mt-0.5">Software Engineer</p>
          </div>
        </motion.div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black tracking-tight leading-none max-w-4xl text-center select-text z-0 font-heading">
          One destination for
          <span className="block mt-2">
            <span className="bg-black text-[#25e009] px-6 py-2 rounded-2xl shadow-xl inline-block">
              everything you create.
            </span>
          </span>
        </h1>
      </div>

      {/* Claim URL Form */}
      <form onSubmit={handleClaim} className="w-full max-w-md mt-6 relative">
        <div className="flex items-center bg-black rounded-full p-2.5 shadow-2xl border border-black/10 group focus-within:ring-4 focus-within:ring-black/10 transition-all duration-300">
          <span className="text-white/60 pl-5 pr-1 font-semibold text-sm sm:text-base select-none">
            idtree.to/
          </span>
          <input 
            type="text" 
            placeholder="mikiyas"
            value={username}
            onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ''))}
            className="bg-transparent border-none outline-none text-white text-sm sm:text-base font-semibold w-full focus:ring-0 placeholder-white/30"
          />
          <button 
            type="submit"
            className="px-6 py-3 rounded-full bg-[#25e009] text-black font-extrabold text-sm hover:bg-[#39FF14] transition-all duration-200 shadow-md transform active:scale-95 whitespace-nowrap"
          >
            Claim it
          </button>
        </div>
        <p className="text-black/60 font-medium text-xs mt-3 select-none">
          Try typing <strong className="text-black underline cursor-pointer" onClick={() => setUsername('mikiyas')}>mikiyas</strong> to claim a pre-built demo!
        </p>
      </form>
    </section>
  );
}
