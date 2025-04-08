
import React from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-al-cream-light relative overflow-hidden">
      {/* Arabic pattern decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-arabesque opacity-5"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title font-bold relative inline-block">
            About Al Rayyan
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-al-gold"></span>
          </h2>
          <p className="section-subtitle mt-8 font-light text-gray-700">
            A heritage of excellence in bringing Pakistan's finest basmati rice to Saudi Arabia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="arabic-border p-8 rounded-md">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-al-green mb-6 after:content-[''] after:block after:w-16 after:h-0.5 after:bg-al-gold after:mt-2">
                Our Heritage
              </h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Al Rayyan was founded with a singular mission: to import the world's finest basmati rice from 
                the fertile plains of Punjab, Pakistan to discerning consumers in Saudi Arabia and beyond.
              </p>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Our rice is carefully cultivated using traditional farming practices that have been 
                perfected over generations, ensuring each grain carries the authentic aroma and 
                texture that premium basmati is known for.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We work directly with farming communities in Punjab, ensuring fair trade practices 
                while maintaining strict quality control from field to packaging.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center bg-al-gold/10 px-5 py-3 rounded-md border-r-4 border-al-gold transition-all hover:translate-x-1">
                  <span className="text-al-green font-medium">100% Pure Basmati</span>
                </div>
                <div className="flex items-center bg-al-gold/10 px-5 py-3 rounded-md border-r-4 border-al-gold transition-all hover:translate-x-1">
                  <span className="text-al-green font-medium">Ethically Sourced</span>
                </div>
                <div className="flex items-center bg-al-gold/10 px-5 py-3 rounded-md border-r-4 border-al-gold transition-all hover:translate-x-1">
                  <span className="text-al-green font-medium">Premium Quality</span>
                </div>
              </div>
              
              <div className="mt-10">
                <a href="#products" className="inline-flex items-center group">
                  <span className="text-al-green font-medium mr-2 group-hover:text-al-gold transition-colors">Discover Our Products</span>
                  <ChevronRight className="w-5 h-5 text-al-gold transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-in-right">
            <div className="about-image-container rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/public/lovable-uploads/34814bf5-17f6-4574-a795-5daab106d507.png" 
                alt="Traditional rice farming in Punjab, Pakistan" 
                className="w-full h-full object-cover rounded-xl transition-transform hover:scale-105 duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
