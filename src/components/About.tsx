
import React from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-al-cream-light relative overflow-hidden">
      {/* Arabic pattern decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-arabesque opacity-5"></div>
      
      <div className="container-custom">
        {/* Section Header - Mobile First */}
        <div className="text-center px-4 mb-8 md:mb-16">
          <h2 className="section-title text-2xl md:text-4xl font-bold relative inline-block">
            About Al Rayyan
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-1 bg-al-gold"></span>
          </h2>
          <p className="section-subtitle mt-6 md:mt-8 text-sm md:text-base font-light text-gray-700 max-w-xl mx-auto">
            A heritage of excellence in bringing Pakistan's finest basmati rice to Saudi Arabia
          </p>
        </div>

        {/* Content Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image Section - Shows first on mobile */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/6eab4cdc-9b8e-4ade-b086-0a0c1d6a399c.png"
                alt="Rice farmer showcasing premium basmati rice in Punjab fields at sunset" 
                className="w-full h-auto object-cover rounded-lg transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 md:order-1 space-y-6 px-4 md:px-0">
            <div className="arabic-border p-6 md:p-8 rounded-lg bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-playfair font-bold text-al-green mb-4 md:mb-6">
                Our Heritage
                <span className="block w-16 h-0.5 bg-al-gold mt-2"></span>
              </h3>
              
              <div className="space-y-4 text-sm md:text-base">
                <p className="text-gray-700 leading-relaxed">
                  Al Rayyan was founded with a singular mission: to import the world's finest basmati rice from 
                  the fertile plains of Punjab, Pakistan to discerning consumers in Saudi Arabia and beyond.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our rice is carefully cultivated using traditional farming practices that have been 
                  perfected over generations, ensuring each grain carries the authentic aroma and 
                  texture that premium basmati is known for.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We work directly with farming communities in Punjab, ensuring fair trade practices 
                  while maintaining strict quality control from field to packaging.
                </p>
              </div>

              {/* Features - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6 md:mt-8">
                <div className="flex items-center bg-al-gold/10 px-4 py-2 rounded-md border-r-4 border-al-gold transition-all hover:translate-x-1">
                  <span className="text-al-green text-sm md:text-base font-medium">100% Pure Basmati</span>
                </div>
                <div className="flex items-center bg-al-gold/10 px-4 py-2 rounded-md border-r-4 border-al-gold transition-all hover:translate-x-1">
                  <span className="text-al-green text-sm md:text-base font-medium">Ethically Sourced</span>
                </div>
                <div className="flex items-center bg-al-gold/10 px-4 py-2 rounded-md border-r-4 border-al-gold transition-all hover:translate-x-1">
                  <span className="text-al-green text-sm md:text-base font-medium">Premium Quality</span>
                </div>
              </div>
              
              {/* CTA - Mobile Optimized */}
              <div className="mt-8">
                <a href="#products" className="inline-flex items-center group">
                  <span className="text-al-green text-sm md:text-base font-medium mr-2 group-hover:text-al-gold transition-colors">
                    Discover Our Products
                  </span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-al-gold transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
