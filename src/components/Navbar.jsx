import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between z-50 relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-black tracking-tight text-black flex items-center gap-1 font-heading">
        idtree
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-black/80 font-medium text-sm">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-black transition-colors font-semibold">Home</button>
        <button onClick={() => scrollToSection('about')} className="hover:text-black transition-colors font-semibold">About</button>
        <button onClick={() => scrollToSection('features')} className="hover:text-black transition-colors font-semibold">Features</button>
        <button onClick={() => scrollToSection('preview')} className="hover:text-black transition-colors font-semibold">Templates</button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button className="px-5 py-2 rounded-full border border-black text-black font-semibold text-sm hover:bg-black hover:text-white transition-all duration-300">
          Log in
        </button>
        <button className="px-5 py-2 rounded-full bg-black text-white font-semibold text-sm hover:bg-black/90 shadow-md hover:shadow-lg transition-all duration-300">
          Sign up
        </button>
      </div>
    </nav>
  );
}
