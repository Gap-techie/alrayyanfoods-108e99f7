import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
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
            className="h-16"
          />
          <div className="ml-2">
            <h1 className={`text-xl font-playfair font-bold transition-colors duration-300 ${
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
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className={`transition-all duration-300 cursor-pointer ${
              isScrolled 
                ? "border-2 border-al-green text-al-green hover:bg-al-green hover:text-white"
                : "border-2 border-white text-white hover:bg-white hover:text-al-green"
            } font-medium text-base px-6 py-2 h-auto flex items-center gap-2 rounded-lg shadow-lg transform hover:scale-105`}
          >
            Get a Quote
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? "text-al-green" : "text-white"
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
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn-secondary self-start cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </ScrollLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
