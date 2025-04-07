
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet';

// Temporary image URLs until we have real images
const PLACEHOLDER_IMAGES = {
  riceField: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80',
  ricePlantation: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
  classicBasmati: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80', 
  royalBasmati: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
  brownBasmati: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
  sellaBasmati: 'https://images.unsplash.com/photo-1604422377884-ee8726482335?auto=format&fit=crop&w=800&q=80',
};

const Index = () => {
  useEffect(() => {
    // Inject the placeholder images for demo purposes
    // In a real site, you would have actual images in your public folder
    const injectPlaceholderStyles = () => {
      const style = document.createElement('style');
      style.innerHTML = `
        .hero-section {
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${PLACEHOLDER_IMAGES.riceField}');
          background-size: cover;
          background-position: center;
        }
      `;
      document.head.appendChild(style);
    };
    
    injectPlaceholderStyles();
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <SEO />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Products />
          <WhyChooseUs />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
