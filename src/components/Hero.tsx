import React from "react";
import { ChevronRight, Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/lovable-uploads/herosection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-xl">
          <div className="mb-8 animate-fade-in-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair leading-tight">
            Premium Authentic Pakistani Basmati Rice - Direct from Punjab
            {/* Authentic Pakistani Basmati Rice */}
            </h1>
            <p className="text-lg md:text-lg text-white/90 mb-8">
               Experience the finest quality, traditionally grown, aromatic long-grain basmati rice from the fertile plains of Punjab, Pakistan. Our premium basmati rice delivers exceptional taste, perfect texture, and authentic aroma for your Kabsa, Bukhari, biryani, pulao, and special dishes in Saudi Arabia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Explore Our Rice Button */}
              <ScrollLink
                to="products"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-al-gold hover:bg-al-gold-light text-al-green-dark font-medium text-base px-6 py-2.5 h-auto flex items-center justify-center sm:justify-start gap-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
              >
                Explore Our Rice
                <ChevronRight className="h-4 w-4" />
              </ScrollLink>

              {/* Get a Quote Button */}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="border-2 border-white text-white hover:bg-white hover:text-al-green font-medium text-base px-6 py-2.5 h-auto flex items-center justify-center sm:justify-start gap-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
              >
                Get a Quote
                <Mail className="h-4 w-4" />
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-white hover:text-al-gold transition-colors"
        >
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
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
