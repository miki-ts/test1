import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTiktok, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaInstagram,
  FaLaptop
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiArrowLeft, FiSmartphone } from 'react-icons/fi';

// Import Assets
import williamAvatar from '../assets/william_avatar.png';
import dallasSkyline from '../assets/dallas_skyline.png';
import noahAvatar from '../assets/noah_avatar.png';
import noahShirt1 from '../assets/noah_shirt_1.png';
import noahShirt2 from '../assets/noah_shirt_2.png';

export default function Profile() {
  const { username } = useParams();
  const lowerUser = username ? username.toLowerCase() : '';

  // Determine active template based on URL handle, defaulting to company if unmatched,
  // but we also allow the user to toggle them on the fly!
  const getInitialTemplate = () => {
    if (lowerUser.includes('william') || lowerUser === 'personal') return 'personal';
    if (lowerUser.includes('noah') || lowerUser === 'creator') return 'creator';
    if (lowerUser === 'afrirobot' || lowerUser === 'company') return 'company';
    return 'personal'; // Default
  };

  const [activeTemplate, setActiveTemplate] = useState(getInitialTemplate());

  // Render Personal Template (William Johnson)
  const renderPersonal = () => (
    <div className="w-[360px] sm:w-[380px] bg-[#1070a8] rounded-[40px] overflow-hidden border-8 border-black shadow-2xl flex flex-col pb-6 text-white text-left font-sans select-none">
      
      {/* Top Banner */}
      <div className="h-[120px] w-full overflow-hidden relative">
        <img 
          src={dallasSkyline} 
          alt="Dallas Skyline" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Avatar Box overlapping the banner */}
      <div className="px-6 -mt-12 relative z-10 flex items-end">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#1070a8] bg-[#0c537d]">
          <img 
            src={williamAvatar} 
            alt="William Johnson" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact / Bio Info */}
      <div className="px-6 mt-3">
        <h1 className="text-xl font-bold tracking-tight text-white leading-none">
          William Johnson
        </h1>
        <p className="text-xs text-white/80 font-semibold mt-1">
          Front-End Developer
        </p>
        <p className="text-[10px] text-white/60 font-semibold mt-0.5">
          +1 (214) 555-0123
        </p>
        <p className="text-[10px] text-white/60 font-semibold">
          Dallas, TX, USA
        </p>
      </div>

      {/* Box Containers wrapper */}
      <div className="px-6 mt-4 flex flex-col gap-3">
        
        {/* About Card */}
        <div className="bg-[#0b517a]/70 rounded-2xl p-4 border border-[#ffffff]/10 backdrop-blur-md">
          <h2 className="text-xs font-black uppercase tracking-wider mb-1 text-white">About</h2>
          <p className="text-[11px] text-white/90 font-medium leading-relaxed">
            I am a digital designer, front-end developer, and technology enthusiast based in the United States.
          </p>
        </div>

        {/* Social Medias Card */}
        <div className="bg-[#0b517a]/70 rounded-2xl p-4 border border-[#ffffff]/10 backdrop-blur-md">
          <h2 className="text-xs font-black uppercase tracking-wider mb-2 text-white">Social Medias</h2>
          <div className="flex gap-2">
            {[
              { icon: FaTiktok, url: "https://tiktok.com" },
              { icon: FaFacebookF, url: "https://facebook.com" },
              { icon: FaLinkedinIn, url: "https://linkedin.com" },
              { icon: FaYoutube, url: "https://youtube.com" },
              { icon: FaXTwitter, url: "https://x.com" },
              { icon: FaInstagram, url: "https://instagram.com" },
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a 
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#1070a8] text-sm hover:scale-105 hover:bg-neutral-100 transition-all"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Skills Card */}
        <div className="bg-[#0b517a]/70 rounded-2xl p-4 border border-[#ffffff]/10 backdrop-blur-md">
          <h2 className="text-xs font-black uppercase tracking-wider mb-3 text-white">Skills</h2>
          <div className="grid grid-cols-2 gap-2">
            {["Next js", "JavaScript", "Vite", "Figma"].map((skill) => (
              <div 
                key={skill} 
                className="py-1.5 px-3 rounded-lg border border-white/20 bg-black/10 text-center text-[10px] font-bold tracking-wider text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-[#0b517a]/70 rounded-2xl p-4 border border-[#ffffff]/10 backdrop-blur-md">
          <h2 className="text-xs font-black uppercase tracking-wider mb-1 text-white">Education</h2>
          <div className="flex flex-col">
            <h3 className="text-[11px] font-bold text-white">Dallas Baptist University</h3>
            <p className="text-[9px] text-white/70 font-semibold leading-tight">Bachelor of Science - Computer Science</p>
            <p className="text-[8px] text-white/50 font-bold mt-0.5">2010 - 2015</p>
          </div>
        </div>

      </div>
    </div>
  );

  // Render Creator Template (Noah Foster)
  const renderCreator = () => (
    <div className="w-[360px] sm:w-[380px] bg-[#8545cc] rounded-[40px] overflow-hidden border-8 border-black shadow-2xl flex flex-col pb-6 text-white text-left font-sans select-none">
      
      {/* Top Sketch Manga Banner */}
      <div className="h-[120px] w-full bg-neutral-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]"></div>
        {/* Animated custom manga representation */}
        <div className="w-full h-full flex items-center justify-around p-2 select-none">
          <div className="border border-white/20 p-1 flex-1 text-center font-black text-[12px] uppercase opacity-45 skew-y-3">POW!</div>
          <div className="border border-white/20 p-1 flex-1 text-center font-black text-[14px] uppercase opacity-45 -skew-y-3 border-l-0">CRASH</div>
          <div className="border border-white/20 p-1 flex-1 text-center font-black text-[10px] uppercase opacity-45 border-l-0">BOOM</div>
        </div>
      </div>

      {/* Avatar Box overlapping the banner */}
      <div className="px-6 -mt-12 relative z-10 flex items-end">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#8545cc] bg-[#6733a1]">
          <img 
            src={noahAvatar} 
            alt="Noah Foster" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact / Bio Info */}
      <div className="px-6 mt-3">
        <h1 className="text-xl font-bold tracking-tight text-white leading-none">
          Noah Foster
        </h1>
        <p className="text-xs text-white/80 font-semibold mt-1">
          Content Creator | Gamer
        </p>
        <p className="text-[10px] text-[#e0b0ff] font-extrabold tracking-wider mt-0.5">
          founder of Noah cloth
        </p>
      </div>

      {/* Box Containers wrapper */}
      <div className="px-6 mt-4 flex flex-col gap-3">
        
        {/* About Card */}
        <div className="bg-[#612c9c]/70 rounded-2xl p-4 border border-[#ffffff]/10 backdrop-blur-md">
          <h2 className="text-xs font-black uppercase tracking-wider mb-1 text-white">About</h2>
          <p className="text-[11px] text-white/90 font-medium leading-relaxed">
            I enjoy exploring new games, sharing epic moments, and connecting with an amazing community through live streams.
          </p>
        </div>

        {/* Social Medias Card */}
        <div className="bg-[#612c9c]/70 rounded-2xl p-4 border border-[#ffffff]/10 backdrop-blur-md">
          <h2 className="text-xs font-black uppercase tracking-wider mb-2 text-white">Social Medias</h2>
          <div className="flex gap-2">
            {[
              { icon: FaTiktok, url: "https://tiktok.com" },
              { icon: FaFacebookF, url: "https://facebook.com" },
              { icon: FaLinkedinIn, url: "https://linkedin.com" },
              { icon: FaYoutube, url: "https://youtube.com" },
              { icon: FaXTwitter, url: "https://x.com" },
              { icon: FaInstagram, url: "https://instagram.com" },
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a 
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#8545cc] text-sm hover:scale-105 hover:bg-neutral-100 transition-all"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Product Card */}
        <div className="bg-[#612c9c]/70 rounded-2xl p-4 border border-[#ffffff]/10 backdrop-blur-md">
          <h2 className="text-xs font-black uppercase tracking-wider mb-3 text-white">Product</h2>
          
          <div className="grid grid-cols-2 gap-3">
            {/* T-Shirt 1 */}
            <div className="bg-[#8545cc]/50 rounded-xl overflow-hidden border border-white/10 flex flex-col">
              <div className="aspect-square bg-white flex items-center justify-center p-2 relative">
                <img 
                  src={noahShirt1} 
                  alt="Noah Cloth T-Shirt 1" 
                  className="w-full h-full object-contain"
                />
              </div>
              <button className="py-2 text-[10px] uppercase font-black tracking-widest bg-black text-[#e0b0ff] hover:bg-neutral-900 transition-colors">
                Buy Now
              </button>
            </div>

            {/* T-Shirt 2 */}
            <div className="bg-[#8545cc]/50 rounded-xl overflow-hidden border border-white/10 flex flex-col">
              <div className="aspect-square bg-white flex items-center justify-center p-2 relative">
                <img 
                  src={noahShirt2} 
                  alt="Noah Cloth T-Shirt 2" 
                  className="w-full h-full object-contain"
                />
              </div>
              <button className="py-2 text-[10px] uppercase font-black tracking-widest bg-black text-[#e0b0ff] hover:bg-neutral-900 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  // Render Company Template (Afrirobot)
  const renderCompany = () => (
    <div className="w-[360px] sm:w-[380px] bg-[#050605] rounded-[40px] overflow-hidden border-8 border-black shadow-2xl flex flex-col pb-6 text-white text-left font-sans select-none relative">
      
      {/* Top Tech Banner (CSS + SVG representation matching Afrirobot banner) */}
      <div className="h-[120px] w-full bg-[#121412] overflow-hidden relative flex flex-col justify-between p-3 select-none border-b border-[#39FF14]/10">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#39FF14_1px,transparent_1px)] [background-size:10px_10px]"></div>
        
        {/* Banner Texts */}
        <div className="flex justify-between items-start z-10">
          <div className="flex flex-col">
            <span className="text-[10px] font-serif font-black tracking-wide text-red-500 drop-shadow-sm">
              Design, Edit, Develop.
            </span>
            <span className="text-[8px] font-sans font-bold text-white/80 leading-none">
              Hire top talent today!
            </span>
          </div>

          {/* Yellow sticky note representation */}
          <div className="bg-yellow-200 border border-yellow-300 text-black text-[6px] p-1 font-bold rounded shadow-md rotate-6 max-w-[65px] leading-tight">
            📌 Creative Space<br/>
            Ideas Sharing<br/>
            3 Days Left
          </div>
        </div>

        {/* Laptop & Phone SVG Illustration on Banner Bottom Right */}
        <div className="flex justify-end gap-1.5 items-end text-neutral-600 z-10 pr-2">
          <FiSmartphone className="text-xs text-white/50" />
          <FaLaptop className="text-lg text-white/70" />
        </div>
      </div>

      {/* Avatar/Logo Box overlapping the banner (Glowing Afrirobot blue tetrahedron) */}
      <div className="px-6 -mt-12 relative z-10 flex items-end">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#050605] bg-[#0c0e0c] flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]">
            <path d="M50,15 L85,75 L15,75 Z" fill="none" stroke="url(#blueGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <g transform="translate(50,56) scale(0.8)">
              <polygon points="0,-12 12,-6 0,0 -12,-6" fill="#60a5fa" opacity="0.9" />
              <polygon points="0,0 12,-6 12,8 0,14" fill="#3b82f6" opacity="0.8" />
              <polygon points="0,0 -12,-6 -12,8 0,14" fill="#1d4ed8" opacity="0.8" />
            </g>
            <defs>
              <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Contact / Bio Info */}
      <div className="px-6 mt-3">
        <h1 className="text-xl font-bold tracking-tight text-white leading-none">
          Afrirobot
        </h1>
        <p className="text-xs text-white/80 font-semibold mt-1">
          Information Technology Company
        </p>
        <p className="text-[10px] text-white/60 font-semibold mt-0.5">
          Addis Ababa, Ethiopia
        </p>
      </div>

      {/* Box Containers wrapper */}
      <div className="px-6 mt-4 flex flex-col gap-3">
        
        {/* About Card */}
        <div className="bg-[#121412] rounded-2xl p-4 border border-[#ffffff]/5">
          <h2 className="text-xs font-black uppercase tracking-wider mb-1 text-white">About</h2>
          <p className="text-[11px] text-white/90 font-medium leading-relaxed">
            Graphic Design | Video Editing | Tech Dev. Crafting tomorrow's tech with Afrirobot creativity.
          </p>
        </div>

        {/* Social Medias Card */}
        <div className="bg-[#121412] rounded-2xl p-4 border border-[#ffffff]/5">
          <h2 className="text-xs font-black uppercase tracking-wider mb-2 text-white">Social Medias</h2>
          <div className="flex gap-2">
            {[
              { icon: FaTiktok, url: "https://tiktok.com" },
              { icon: FaFacebookF, url: "https://facebook.com" },
              { icon: FaLinkedinIn, url: "https://linkedin.com" },
              { icon: FaYoutube, url: "https://youtube.com" },
              { icon: FaXTwitter, url: "https://x.com" },
              { icon: FaInstagram, url: "https://instagram.com" },
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a 
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black text-sm hover:scale-105 hover:bg-neutral-100 transition-all"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Service Card */}
        <div className="bg-[#121412] rounded-2xl p-4 border border-[#ffffff]/5">
          <h2 className="text-xs font-black uppercase tracking-wider mb-3 text-white">Service</h2>
          
          <div className="flex flex-col gap-2">
            {["Graphic Design", "Video Editing", "Tech Dev"].map((service) => (
              <button 
                key={service}
                className="w-full py-2.5 rounded-lg border border-white/10 bg-[#1e201e] text-center text-xs font-bold hover:bg-[#39FF14] hover:text-black hover:border-[#39FF14] transition-all"
              >
                {service}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <div className="bg-wavy-pattern min-h-screen py-12 px-6 flex flex-col items-center justify-start relative">
      
      {/* Top Navigation Control bar allowing instant preview of all three designs */}
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-3 bg-black/90 p-2.5 rounded-full shadow-2xl border border-white/10 z-20">
        
        <Link 
          to="/" 
          className="px-4 py-2 rounded-full bg-[#25e009] text-black font-extrabold text-xs flex items-center gap-1.5 shadow-md hover:bg-[#39FF14] transition-all"
        >
          <FiArrowLeft className="text-sm" /> Home
        </Link>
        
        <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-white/50 uppercase font-black tracking-widest pl-2 pr-1">
            Template:
          </span>
          <button
            onClick={() => setActiveTemplate('personal')}
            className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wide transition-all ${
              activeTemplate === 'personal' 
                ? 'bg-[#1070a8] text-white shadow-lg' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => setActiveTemplate('creator')}
            className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wide transition-all ${
              activeTemplate === 'creator' 
                ? 'bg-[#8545cc] text-white shadow-lg' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            Creator
          </button>
          <button
            onClick={() => setActiveTemplate('company')}
            className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wide transition-all ${
              activeTemplate === 'company' 
                ? 'bg-neutral-800 text-white shadow-lg border border-white/10' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            Company
          </button>
        </div>
      </div>

      {/* Main Profile Layout container */}
      <motion.div
        key={activeTemplate}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="z-10"
      >
        {activeTemplate === 'personal' && renderPersonal()}
        {activeTemplate === 'creator' && renderCreator()}
        {activeTemplate === 'company' && renderCompany()}
      </motion.div>
    </div>
  );
}
