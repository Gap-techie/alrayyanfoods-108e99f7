
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/71d0eb0a-071d-4b53-b9d0-0377fba97623.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-al-green/60"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl backdrop-blur-sm bg-white/10 p-8 md:p-12 rounded-xl border border-white/20 shadow-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair leading-tight">
            Authentic Pakistani Basmati Rice, Delivered with Purity
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
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
              className="border-2 border-white text-white hover:bg-white hover:text-al-green font-medium text-base px-6 py-6 h-auto transition-colors duration-300"
              asChild
            >
              <Link to="#contact">
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link to="#about" className="text-white/80 hover:text-white">
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
