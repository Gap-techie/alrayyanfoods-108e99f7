
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 bg-pattern"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="mb-8 animate-fade-in-right">
              <img 
                src="/lovable-uploads/f95e44aa-4efe-49d8-ae69-72a5f89ee327.png"
                alt="Al Rayyan Logo" 
                className="h-32 mb-6"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-al-green mb-6 font-playfair leading-tight">
                Authentic Pakistani Basmati Rice
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Experience the finest quality, traditionally grown, aromatic long-grain
                basmati rice from the fertile plains of Punjab, Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default"
                  className="bg-al-gold hover:bg-al-gold-light text-al-green-dark font-medium text-base px-6 py-6 h-auto flex items-center gap-2"
                  asChild
                >
                  <Link to="#products">
                    Explore Our Rice
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-al-green text-al-green hover:bg-al-green hover:text-white font-medium text-base px-6 py-6 h-auto transition-colors duration-300 flex items-center gap-2"
                  onClick={scrollToContact}
                  asChild
                >
                  <Link to="#contact">
                    Get a Quote
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right content - Product showcase */}
          <div className="hidden md:flex justify-end">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-al-gold/10 rounded-full blur-xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-al-green/10 rounded-full blur-xl z-0"></div>
              <div className="relative z-10 flex gap-4">
                <img 
                  src="/lovable-uploads/d9492563-c3f4-41f0-9e4d-7046c89aa5d9.png" 
                  alt="Premium Basmati Rice"
                  className="h-[400px] object-contain transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                />
                <img 
                  src="/lovable-uploads/238c4562-6bfc-4c66-8327-f94c7ca7fe7f.png" 
                  alt="Royal Basmati Rice"
                  className="h-[400px] object-contain transform rotate-6 hover:rotate-0 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link to="#about" className="text-al-green hover:text-al-gold transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
