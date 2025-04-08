
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import WhatsAppChat from '../components/WhatsAppChat';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <SEO />
      
      <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Products />
          <WhyChooseUs />
          <Contact />
        </main>
        
        <Footer />
        <WhatsAppChat />
      </div>
    </>
  );
};

export default Index;
