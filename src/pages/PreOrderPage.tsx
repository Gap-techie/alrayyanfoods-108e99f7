import React from 'react';
import PreOrder from '../components/PreOrder';
import SEO from '../components/SEO';
import ArabicPattern from '../components/ArabicPattern';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
const PreOrderPage = () => {
  return (
    <>
      <SEO
        title="Pre-Order Rice | Al Rayyan | Premium Basmati Rice"
        description="Pre-order your premium Pakistani Basmati rice from Al Rayyan. Place your bulk order for Classic, Royal, Brown, or Sella Basmati rice varieties."
      />
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#deff46] via-[#00c400] to-[#2a593e] py-4 shadow-lg">
          <div className="container-custom">
            <Link
              to="/"
              className="flex items-center gap-3 text-al-green hover:text-al-green/80 transition-colors w-fit"
            >
              <img
                src="/asset-uploads/f95e44aa-4efe-49d8-ae69-72a5f89ee327.png"
                alt="Al Rayyan Logo"
                className="h-12"
              />
              <div>
                <h1 className="text-xl font-playfair font-bold text-al-green drop-shadow-md">Al Rayyan</h1>
                <p className="text-xs text-al-green drop-shadow-md">Premium Basmati Rice</p>
              </div>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow bg-white relative">
          <ArabicPattern className="text-[#00c400]/10" />
          <div className="relative z-10 py-8">
            <PreOrder />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#deff46]   via-[#00c400] to-[#2a593e] py-4 shadow-lg">
          <div className="container-custom">
            <div className="text-center text-white text-sm drop-shadow-md">
              <p>© {new Date().getFullYear()} Al Rayyan. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PreOrderPage; 