import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import MeetOurTeam from '../components/MeetOurTeam';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import WhatsAppChat from '../components/WhatsAppChat';

const Index = () => {
  return (
    <>
      <SEO />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Products />
          <WhyChooseUs />
          <MeetOurTeam />
          <Contact />
        </main>
        
        <Footer />
        <WhatsAppChat />
      </div>
    </>
  );
};

export default Index;
