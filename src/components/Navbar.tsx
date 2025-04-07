
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/71d0eb0a-071d-4b53-b9d0-0377fba97623.png"
            alt="Al Rayyan Logo"
            className="h-12"
          />
          <div className="ml-2">
            <h1 className="text-al-green text-xl font-playfair font-bold">Al Rayyan</h1>
            <p className="text-xs text-gray-600">Premium Basmati Rice</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-al-green hover:text-al-gold transition-colors"
          >
            Home
          </Link>
          <Link
            to="#about"
            className="text-al-green hover:text-al-gold transition-colors"
          >
            About
          </Link>
          <Link
            to="#products"
            className="text-al-green hover:text-al-gold transition-colors"
          >
            Products
          </Link>
          <Link
            to="#why-us"
            className="text-al-green hover:text-al-gold transition-colors"
          >
            Why Choose Us
          </Link>
          <Link
            to="#contact"
            className="text-al-green hover:text-al-gold transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link to="#contact" className="btn-secondary">Get a Quote</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-al-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg p-5 absolute top-full left-0 right-0">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-al-green hover:text-al-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="#about"
              className="text-al-green hover:text-al-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="#products"
              className="text-al-green hover:text-al-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="#why-us"
              className="text-al-green hover:text-al-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              to="#contact"
              className="text-al-green hover:text-al-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="#contact" 
              className="btn-secondary self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
