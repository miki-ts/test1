import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Features from '../components/Features';
import PreviewSection from '../components/PreviewSection';
import OneSmartLink from '../components/OneSmartLink';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-wavy-pattern min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col items-center">
        <Hero />
        <AboutUs />
        <Features />
        <PreviewSection />
        <OneSmartLink />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
