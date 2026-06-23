import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section className="w-full max-w-lg mx-auto px-6 py-12 flex flex-col items-center">
      
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-black text-black tracking-widest uppercase mb-6 font-heading">
        SEND MESSAGE
      </h2>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="w-full bg-[#111611] rounded-3xl p-6 border-2 border-black flex flex-col gap-4 shadow-xl">
        
        {/* Name Input */}
        <div className="flex flex-col">
          <input 
            type="text" 
            placeholder="YOUR NAME" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-5 py-4 bg-[#0a0d0a] border border-[#1c261c] rounded-2xl text-white text-xs sm:text-sm font-bold tracking-wider placeholder-neutral-500 focus:outline-none focus:border-[#39FF14] transition-colors"
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-5 py-4 bg-[#0a0d0a] border border-[#1c261c] rounded-2xl text-white text-xs sm:text-sm font-bold tracking-wider placeholder-neutral-500 focus:outline-none focus:border-[#39FF14] transition-colors"
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col">
          <textarea 
            placeholder="YOUR MESSAGE" 
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-5 py-4 bg-[#0a0d0a] border border-[#1c261c] rounded-2xl text-white text-xs sm:text-sm font-bold tracking-wider placeholder-neutral-500 focus:outline-none focus:border-[#39FF14] transition-colors resize-none"
            required
          ></textarea>
        </div>

        {/* Status message */}
        {submitted && (
          <motion.p 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-[#39FF14] font-bold text-center"
          >
            Thank you! Your message has been sent successfully.
          </motion.p>
        )}
      </form>

      {/* Submit Button outside the form container box as shown in the design image */}
      <div className="mt-6 w-full flex justify-center">
        <button 
          onClick={handleSubmit}
          type="submit"
          className="px-8 py-3.5 rounded-full bg-black text-[#25e009] font-extrabold text-sm hover:bg-neutral-900 transition-all duration-200 shadow-lg flex items-center gap-2 transform active:scale-95"
        >
          SEND MESSAGE <span className="text-base">→</span>
        </button>
      </div>
    </section>
  );
}
