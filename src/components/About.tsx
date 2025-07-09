import React from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-al-cream-light relative overflow-hidden">
      {/* Arabic pattern decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-arabesque opacity-5"></div>
      
      <div className="container-custom">
        {/* Section Header - Mobile First */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="section-title text-2xl md:text-4xl font-bold relative inline-block">
            About Al Rayyan - Premium Pakistani Basmati Rice
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-1 bg-al-gold"></span>
          </h2>
          <p className="section-subtitle mt-6 md:mt-8 text-sm md:text-base font-light text-gray-700 max-w-xl mx-auto">
            A heritage of excellence in bringing Pakistan's finest premium basmati rice to Saudi Arabia.
          </p>
        </div>

        {/* Content Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Section - Shows first on mobile */}
          <div className="order-1 md:order-2 h-full">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/asset-uploads/6eab4cdc-9b8e-4ade-b086-0a0c1d6a399c.png"
                alt="Premium Punjab basmati rice fields - Al Rayyan's source for quality basmati in Saudi Arabia" 
                className="w-full h-full object-cover rounded-lg transition-transform hover:scale-105 duration-700"
                style={{ minHeight: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 md:order-1 h-full">
            <div className="arabic-border p-6 md:p-8 rounded-lg bg-white/90 backdrop-blur-sm w-full h-full flex flex-col">
              <div>
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-al-green mb-4 md:mb-6">
                  Our Heritage in Premium Basmati
                  <span className="block w-16 h-0.5 bg-al-gold mt-2"></span>
                </h3>
                
                <div className="space-y-4 text-sm md:text-base">
                  <p className="text-gray-700 leading-relaxed">
                    Al Rayyan was founded with a singular mission: to import the world's finest basmati rice from 
                    the fertile plains of Punjab, Pakistan to discerning consumers in Saudi Arabia and beyond.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our premium Pakistani basmati rice is carefully cultivated using traditional farming practices that have been 
                    perfected over generations, ensuring each grain carries the authentic aroma and 
                    texture that genuine Punjab basmati is known for.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We work directly with farming communities in Punjab, ensuring fair trade practices 
                    while maintaining strict quality control from field to packaging, delivering the best basmati rice in Saudi Arabia.
                  </p>
                </div>
              </div>

              {/* Features - Mobile Optimized */}
              <div className="mt-auto pt-6 md:pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
                  <a href="#products" className="inline-flex items-center group" aria-label="View our premium basmati rice products">
                    <span className="text-al-green text-sm md:text-base font-medium mr-2 group-hover:text-al-gold transition-colors">
                      Discover Our Premium Basmati Products
                    </span>
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-al-gold transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;