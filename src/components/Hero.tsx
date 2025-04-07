
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/rice-field.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Glassmorphism Panel */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl glass-panel p-8 md:p-12 rounded-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair leading-tight">
            Authentic Pakistani Basmati Rice, Delivered with Purity
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Experience the finest quality, traditionally grown, aromatic long-grain
            basmati rice from the fertile plains of Punjab, Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="#products" className="btn-secondary">
              Explore Our Rice
            </Link>
            <Link to="#contact" className="btn-outline border-white text-white hover:bg-white hover:text-al-green">
              Get a Quote
            </Link>
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
