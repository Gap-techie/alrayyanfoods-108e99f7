import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ctaButtonClasses = `
    relative
    before:absolute before:inset-0 before:rounded-full before:p-[2px]
    before:bg-gradient-to-r before:from-[#d3b036] before:to-[#00c400] before:to-[#2a593e]
    before:-z-10
    isolate
    font-semibold px-6 py-3 rounded-full
    shadow-lg hover:shadow-xl
    transform hover:scale-105 transition-all duration-300
    flex items-center gap-2
    after:absolute after:inset-[1px] after:rounded-full
    after:bg-gradient-to-r after:from-[#d3b036] after:via-[#00c400] after:to-[#2a593e]
    after:-z-10 after:opacity-0 hover:after:opacity-100
    after:transition-opacity
    text-white
  `;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md py-2 rounded-b-2xl"
          : "bg-transparent py-4 rounded-b-2xl"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-2 sm:px-4">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex items-center cursor-pointer"
        >
          <img
            src="/lovable-uploads/f95e44aa-4efe-49d8-ae69-72a5f89ee327.png"
            alt="Al Rayyan Logo"
            className="h-12 sm:h-16 rounded-xl shadow-md"
          />
          <div className="ml-2">
            <h1 className={`text-lg sm:text-xl font-playfair font-bold transition-colors duration-300 ${
              isScrolled ? "text-al-green" : "text-white"
            }`}>
              Al Rayyan
            </h1>
            <p className={`text-xs transition-colors duration-300 ${
              isScrolled ? "text-gray-600" : "text-white/80"
            }`}>
              Premium Basmati Rice
            </p>
          </div>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={-70}
            className={`transition-colors duration-300 cursor-pointer ${
              isScrolled ? "text-al-green hover:text-al-gold" : "text-white hover:text-al-gold"
            }`}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className={`transition-colors duration-300 cursor-pointer ${
              isScrolled ? "text-al-green hover:text-al-gold" : "text-white hover:text-al-gold"
            }`}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="products"
            smooth={true}
            duration={500}
            offset={-70}
            className={`transition-colors duration-300 cursor-pointer ${
              isScrolled ? "text-al-green hover:text-al-gold" : "text-white hover:text-al-gold"
            }`}
          >
            Products
          </ScrollLink>
          <ScrollLink
            to="why-us"
            smooth={true}
            duration={500}
            offset={-70}
            className={`transition-colors duration-300 cursor-pointer ${
              isScrolled ? "text-al-green hover:text-al-gold" : "text-white hover:text-al-gold"
            }`}
          >
            Why Choose Us
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className={`transition-colors duration-300 cursor-pointer ${
              isScrolled ? "text-al-green hover:text-al-gold" : "text-white hover:text-al-gold"
            }`}
          >
            Contact
          </ScrollLink>
        </nav>

        {/* Desktop "Get a Quote" Button */}
        <div className="hidden md:block">
          <Link
            to="/pre-order"
            className={ctaButtonClasses}
          >
            Place Pre-Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? "text-white" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg p-5 absolute top-full left-0 right-0">
          <nav className="flex flex-col space-y-4">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="products"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </ScrollLink>
            <ScrollLink
              to="why-us"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </ScrollLink>
            
            {/* Mobile "Get a Quote" Button */}
            <Link
              to="/pre-order"
              className={`${ctaButtonClasses} justify-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              Place Pre-Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
