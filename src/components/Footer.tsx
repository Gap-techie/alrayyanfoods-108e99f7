
import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-al-green text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/lovable-uploads/71d0eb0a-071d-4b53-b9d0-0377fba97623.png"
                alt="Al Rayyan Logo"
                className="h-12 bg-white rounded-full p-1"
              />
              <h3 className="text-2xl font-playfair font-bold ml-3">Al Rayyan</h3>
            </div>
            <p className="text-white/80 mb-6">
              Premium Pakistani Basmati Rice exporters, delivering quality and tradition to your table.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#products" className="text-white/80 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="#why-us" className="text-white/80 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-al-gold mr-3 mt-0.5" />
                <span className="text-white/80">info@alrayyanfoods.co</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-al-gold mr-3 mt-0.5" />
                <span className="text-white/80">+966 575 649 264</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/80 mb-4">
              Subscribe to receive updates on new products and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-al-gold"
              />
              <button className="bg-al-gold text-al-green-dark font-medium px-4 py-3 rounded-md hover:bg-al-gold-light transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="text-center text-white/70 text-sm">
          <p>© {currentYear} Al Rayyan. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            {" | "}
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
