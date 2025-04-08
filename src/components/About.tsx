
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-al-cream-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">About Al Rayyan</h2>
          <p className="section-subtitle">
            A commitment to quality that spans generations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-al-green mb-4">
              Our Heritage of Excellence
            </h3>
            <p className="text-gray-700 mb-4">
              Al Rayyan was founded with a singular mission: to bring the world's finest basmati rice from 
              the fertile plains of Punjab, Pakistan to discerning consumers worldwide.
            </p>
            <p className="text-gray-700 mb-4">
              Our rice is carefully cultivated using traditional farming practices that have been 
              perfected over generations, ensuring each grain carries the authentic aroma and 
              texture that premium basmati is known for.
            </p>
            <p className="text-gray-700 mb-6">
              We work directly with farming communities in Punjab, ensuring fair trade practices 
              while maintaining strict quality control from field to packaging.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center bg-al-green/10 px-4 py-3 rounded-md">
                <span className="text-al-green font-medium">100% Pure Basmati</span>
              </div>
              <div className="flex items-center bg-al-green/10 px-4 py-3 rounded-md">
                <span className="text-al-green font-medium">Ethically Sourced</span>
              </div>
              <div className="flex items-center bg-al-green/10 px-4 py-3 rounded-md">
                <span className="text-al-green font-medium">Premium Quality</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 glass-card overflow-hidden animate-fade-in-right">
            <img 
              src="../../public/images/about1.jpg" 
              alt="Traditional rice farming in Punjab, Pakistan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
