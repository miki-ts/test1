import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiShare2, FiShoppingBag, FiBriefcase, FiImage, FiTrendingUp } from 'react-icons/fi';

const featuresData = [
  {
    id: 1,
    title: "Custom Profiles",
    desc: "Discover our features to construct a fully customized, professional digital identity.",
    icon: FiUser,
  },
  {
    id: 2,
    title: "Social Media",
    desc: "Connect and consolidate all your social accounts into a single stream of links.",
    icon: FiShare2,
  },
  {
    id: 3,
    title: "Product Showcase",
    desc: "Display, market, and sell your physical or digital products directly with ease.",
    icon: FiShoppingBag,
  },
  {
    id: 4,
    title: "Service Listings",
    desc: "Outline and display professional services with clear descriptions and booking options.",
    icon: FiBriefcase,
  },
  {
    id: 5,
    title: "Portfolio Display",
    desc: "Showcase your work, projects, photography, or case studies with responsive grids.",
    icon: FiImage,
  },
  {
    id: 6,
    title: "Analytics",
    desc: "Track visits, clicks, geographic engagement, and conversion rates in real time.",
    icon: FiTrendingUp,
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full max-w-5xl mx-auto px-6 py-16 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-black text-black mb-12 tracking-tight uppercase font-heading">
        Key Offerings
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feat, idx) => {
          const IconComp = feat.icon;
          return (
            <motion.div
              key={feat.id}
              className="bg-[#111611] rounded-2xl p-8 border border-white/5 flex flex-col items-center text-center shadow-xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(57, 255, 20, 0.45)',
                boxShadow: '0 10px 30px rgba(57, 255, 20, 0.15)'
              }}
            >
              {/* Background Glow Ring */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#39FF14]/5 rounded-full blur-2xl group-hover:bg-[#39FF14]/10 transition-all duration-300 pointer-events-none"></div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-[#1b261b] border border-[#39FF14]/20 flex items-center justify-center text-[#39FF14] text-2xl mb-5 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <IconComp />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-xs md:text-sm font-medium leading-relaxed mb-6 flex-grow">
                {feat.desc}
              </p>

              {/* Button */}
              <button className="px-5 py-2 rounded-full bg-[#1c261c] border border-[#39FF14]/10 text-[#39FF14] font-semibold text-xs hover:bg-[#39FF14] hover:text-black transition-all duration-200 shadow-md">
                Learn More
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
