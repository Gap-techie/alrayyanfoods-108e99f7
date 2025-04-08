
import React, { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md py-3"
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
          <div className={`${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
            <h1 className="text-al-green text-xl font-playfair font-bold">Al Rayyan</h1>
            <p className="text-xs text-gray-600">Premium Basmati Rice</p>
          </div>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
          >
            {t('nav.home')}
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
          >
            {t('nav.about')}
          </ScrollLink>
          <ScrollLink
            to="products"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
          >
            {t('nav.products')}
          </ScrollLink>
          <ScrollLink
            to="why-us"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
          >
            {t('nav.whyChooseUs')}
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
          >
            {t('nav.contact')}
          </ScrollLink>
          
          {/* Language Toggle Button */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-al-green hover:text-al-gold transition-colors"
          >
            <Languages className="w-5 h-5 mr-1" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </nav>

        {/* Desktop "Get a Quote" Button */}
        <div className="hidden md:block">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn-secondary cursor-pointer"
          >
            {t('nav.getQuote')}
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-al-green px-2"
          >
            <Languages className="w-5 h-5" />
          </button>
          
          <button
            className="text-al-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
              {t('nav.home')}
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </ScrollLink>
            <ScrollLink
              to="products"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.products')}
            </ScrollLink>
            <ScrollLink
              to="why-us"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.whyChooseUs')}
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-al-green hover:text-al-gold transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </ScrollLink>
            {/* Mobile "Get a Quote" Button */}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn-secondary self-start cursor-pointer"
              onClick={() => setIsMenuOpen(false)} // Close the menu after clicking
            >
              {t('nav.getQuote')}
            </ScrollLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
