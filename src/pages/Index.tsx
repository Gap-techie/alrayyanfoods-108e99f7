
import React, { useEffect } from 'react';
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
  
  // Set RTL direction for Arabic language
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Add Arabic font class if language is Arabic
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
    
    return () => {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('font-arabic');
    };
  }, [language]);

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
