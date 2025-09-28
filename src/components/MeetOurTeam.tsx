import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: "OBAID GHAFOORI",
    title: "Chief Executive Officer (CEO) & Founder",
    tagline: "Visionary leader shaping global growth",
    image: "/lovable-uploads/obaid-ghafoori-ceo.png", 
    description: "Defines the vision and long-term strategy, builds investor and partner relations, and oversees company expansion in Saudi Arabia and international markets."
  },
  {
    name: "WAHID WAZIR",
    title: "Regional Marketing Manager (Saudi Arabia & GCC)",
    tagline: "Driving brand success across the GCC",
    image: "/lovable-uploads/wahid-wazir-new.png",
    description: "Leads marketing campaigns across the GCC, manages distributor and retailer relationships, and drives regional branding and promotions."
  },
  {
    name: "SIBGHAT WAZIR",
    title: "Supply Chain & Procurement Coordinator",
    tagline: "Ensuring seamless supply and quality",
    image: "/lovable-uploads/b867c57c-e3e2-4533-ab7c-5bd3104b6dba.png",
    description: "Sources rice from suppliers, ensures quality checks, negotiates contracts, and oversees logistics for export readiness."
  },
  {
    name: "ZAHID GHAFOORI",
    title: "Business Development & Trade Relations Officer",
    tagline: "Building partnerships for global reach",
    image: "/lovable-uploads/c6a4b64b-0154-4d89-bdca-24357ab242f5.png",
    description: "Builds customer and investor relationships, develops new business opportunities, and represents the company at trade fairs and industry events."
  },
  {
    name: "DOST MOHAMMED",
    title: "Export & Operations Coordinator",
    tagline: "Bridging supply with international markets",
    image: "/lovable-uploads/33d1739e-39f3-45f7-99cd-aeab4bef72d3.png",
    description: "Manages export documentation, shipping coordination, and supports both supply chain operations and customer communication."
  }
];

const MeetOurTeam = () => {
  return (
    <section id="team" className="section-padding bg-al-cream-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-64 bg-arabesque opacity-5"></div>
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-2xl md:text-4xl font-bold relative inline-block">
            Meet Our Team
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-1 bg-al-gold"></span>
          </h2>
          <p className="section-subtitle mt-6 md:mt-8 text-sm md:text-base font-light text-gray-700 max-w-2xl mx-auto">
            The dedicated professionals behind Al Rayyan's commitment to delivering premium Pakistani basmati rice to Saudi Arabia and beyond.
          </p>
        </div>

        {/* Team Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>

        {/* Team Stats or Call to Action */}
        <div className="mt-16 glass-panel p-8 rounded-xl text-center">
          <h3 className="text-xl md:text-2xl font-playfair font-bold text-al-green mb-4">
            Excellence Through Teamwork
          </h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Our diverse team combines decades of experience in agriculture, international trade, marketing, and logistics 
            to ensure every grain of Al Rayyan basmati meets the highest standards of quality and freshness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-al-gold mb-2">20+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-al-gold mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-al-gold mb-2">100%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;