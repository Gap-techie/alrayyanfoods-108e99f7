import React from 'react';
import { TrendingUp, DollarSign, Users, Globe, Award, Target, Briefcase, Mail, FileText } from 'lucide-react';

const InvestorRelations = () => {
  return (
    <section id="investor-relations" className="section-padding bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-full h-64 bg-arabesque opacity-10"></div>
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-white mb-4 relative inline-block">
            Investor Relations
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-1 bg-al-gold"></span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            Join us in revolutionizing the premium basmati rice market across the GCC and beyond.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 mb-12 rounded-xl">
          <h3 className="text-2xl font-playfair font-bold text-white mb-4">Our Vision & Mission</h3>
          <p className="text-gray-300 mb-4">
            Al Rayyan is positioned to become the leading premium Pakistani basmati rice brand in Saudi Arabia and the GCC region. We're bridging authentic Pakistani heritage with the growing demand for premium, ethically sourced food products in one of the world's fastest-growing markets.
          </p>
          <p className="text-gray-300">
            Our mission is to deliver exceptional quality while building sustainable partnerships with farmers in Pakistan and distributors across the Middle East, ensuring consistent supply and uncompromising standards.
          </p>
        </div>

        {/* Market Opportunity */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
            <TrendingUp className="w-12 h-12 text-al-gold mb-4" />
            <h3 className="text-xl font-playfair font-bold text-white mb-3">Market Opportunity</h3>
            <p className="text-gray-300 mb-4">
              The Saudi Arabian rice market is valued at over $2 billion annually, with basmati rice representing a significant premium segment experiencing double-digit growth.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-al-gold mr-2">•</span>
                <span>GCC food import market projected to reach $53.1 billion by 2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-al-gold mr-2">•</span>
                <span>Rising consumer preference for premium, authentic products</span>
              </li>
              <li className="flex items-start">
                <span className="text-al-gold mr-2">•</span>
                <span>Strong demand during Ramadan, Eid, and wedding seasons</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
            <Globe className="w-12 h-12 text-al-gold mb-4" />
            <h3 className="text-xl font-playfair font-bold text-white mb-3">Why Now?</h3>
            <p className="text-gray-300 mb-4">
              Vision 2030 initiatives are diversifying the Saudi economy and creating unprecedented opportunities for food sector investments with government support for quality imports.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-al-gold mr-2">•</span>
                <span>Growing expatriate population creating demand for authentic products</span>
              </li>
              <li className="flex items-start">
                <span className="text-al-gold mr-2">•</span>
                <span>Expanding retail and e-commerce infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-al-gold mr-2">•</span>
                <span>First-mover advantage in premium Pakistani basmati segment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Highlights */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 mb-12 rounded-xl">
          <h3 className="text-2xl font-playfair font-bold text-white mb-6">Company Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-al-gold pl-4">
              <Award className="w-8 h-8 text-al-gold mb-2" />
              <h4 className="font-semibold text-white mb-2">Quality Assurance</h4>
              <p className="text-sm text-gray-300">Direct sourcing from certified farms in Punjab with rigorous quality control at every stage</p>
            </div>
            <div className="border-l-4 border-al-gold pl-4">
              <Users className="w-8 h-8 text-al-gold mb-2" />
              <h4 className="font-semibold text-white mb-2">Experienced Team</h4>
              <p className="text-sm text-gray-300">Leadership with 15+ years in international rice trade and deep market knowledge</p>
            </div>
            <div className="border-l-4 border-al-gold pl-4">
              <Target className="w-8 h-8 text-al-gold mb-2" />
              <h4 className="font-semibold text-white mb-2">Strategic Position</h4>
              <p className="text-sm text-gray-300">Established presence in Madinah with expanding distribution network across Saudi Arabia</p>
            </div>
          </div>
        </div>

        {/* Financial Snapshot & Investment Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
            <DollarSign className="w-12 h-12 text-al-gold mb-4" />
            <h3 className="text-xl font-playfair font-bold text-white mb-4">Growth Trajectory</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Revenue Growth (YoY)</p>
                <p className="text-2xl font-bold text-al-gold">45%+</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Markets Served</p>
                <p className="text-2xl font-bold text-al-gold">20+</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Distribution Partners</p>
                <p className="text-2xl font-bold text-al-gold">Growing</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
            <Briefcase className="w-12 h-12 text-al-gold mb-4" />
            <h3 className="text-xl font-playfair font-bold text-white mb-4">Investment Focus Areas</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-al-gold mr-2 mt-1">✓</span>
                <span>Expanding distribution network across GCC markets</span>
              </li>
              <li className="flex items-start">
                <span className="text-al-gold mr-2 mt-1">✓</span>
                <span>Marketing campaigns and brand awareness initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-al-gold mr-2 mt-1">✓</span>
                <span>Scaling supply chain and logistics infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-al-gold mr-2 mt-1">✓</span>
                <span>Product line expansion and packaging innovation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#4a4a38] via-[#3d3d2f] to-[#2d2d1f] backdrop-blur-md border border-white/20 p-8 text-center rounded-xl">
          <h3 className="text-2xl font-playfair font-bold text-white mb-4">Partner With Al Rayyan</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're seeking strategic investors and partners who share our vision of building a premium food brand that connects authentic Pakistani heritage with the modern Saudi market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-al-gold hover:bg-al-gold-light text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center active:scale-95 min-h-[44px] touch-manipulation"
            >
              <FileText className="w-5 h-5 mr-2" />
              Request Investor Deck
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center active:scale-95 min-h-[44px] touch-manipulation"
            >
              <Mail className="w-5 h-5 mr-2" />
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorRelations;