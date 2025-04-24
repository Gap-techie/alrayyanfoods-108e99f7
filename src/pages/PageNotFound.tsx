import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { FaUtensils } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with gradient */}
      <header className="bg-gradient-to-r from-[#d3b036] via-[#00c400] to-[#2a593e] py-4 shadow-lg">
        <div className="container-custom">
          <Link 
            to="/"
            className="flex items-center gap-3 text-white hover:text-white/80 transition-colors w-fit"
          >
            <img
              src="/lovable-uploads/f95e44aa-4efe-49d8-ae69-72a5f89ee327.png"
              alt="Al Rayyan Logo"
              className="h-12 bg-white rounded-full p-1"
            />
            <div>
              <h1 className="text-xl font-playfair font-bold text-white drop-shadow-md">Al Rayyan</h1>
              <p className="text-xs text-white/90 drop-shadow-md">Premium Basmati Rice</p>
            </div>
          </Link>
        </div>
      </header>

      {/* Main content with Arabic pattern */}
      <main className="flex-grow bg-white relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" 
            style={{
              backgroundImage: 'radial-gradient(#2a593e 2px, transparent 2px)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        <div className="container-custom relative z-10 py-16 flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <h1 className="text-9xl font-playfair font-bold text-[#2a593e] drop-shadow-sm">404</h1>
                <div className="absolute -top-4 -right-4 text-4xl text-[#d3b036] animate-bounce">
                  <FaUtensils />
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl font-playfair font-bold text-[#2a593e] mb-6">Oops! This Page is Missing</h2>
            
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-[#d3b036] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>
            
            <p className="text-gray-600 text-lg mb-4">
              Looks like this page has gone on a rice break! 
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Don't worry, our premium basmati is still available. Let's get you back to the main course.
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d3b036] via-[#00c400] to-[#2a593e] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <IoArrowBack className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer with gradient */}
      <footer className="bg-gradient-to-r from-[#d3b036] via-[#00c400] to-[#2a593e] py-4 shadow-lg">
        <div className="container-custom">
          <div className="text-center text-white text-sm drop-shadow-md">
            <p>© {new Date().getFullYear()} Al Rayyan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageNotFound; 