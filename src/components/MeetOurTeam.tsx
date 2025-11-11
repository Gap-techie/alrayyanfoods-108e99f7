import React, { useState } from 'react';

const teamMembers = [
  {
    name: "OBAID GHAFOORI",
    title: "Chief Executive Officer (CEO) & Founder",
    tagline: "Visionary leader shaping global growth",
    image: "/lovable-uploads/obaid-ghafoori-ceo.png", 
    description: "Defines the vision and long-term strategy, builds investor and partner relations, and oversees company expansion in Saudi Arabia and international markets."
  },
  {
    name: "ABDUL WAHID WAZIR",
    title: "Regional Marketing Manager (KSA)",
    tagline: "Driving brand success across the GCC",
    image: "/lovable-uploads/wahid-wazir-new.png",
    description: "Leads marketing campaigns across the GCC, manages distributor and retailer relationships, and drives regional branding and promotions."
  },
  {
    name: "SIBGHATULLAH WAZIR",
    title: "Supply Chain & Procurement Coordinator",
    tagline: "Ensuring seamless supply and quality",
    image: "/lovable-uploads/b867c57c-e3e2-4533-ab7c-5bd3104b6dba.png",
    description: "Sources rice from suppliers, ensures quality checks, negotiates contracts, and oversees logistics for export readiness."
  },
  {
    name: "ABDULLAH GHAFOORI ZAHID",
    title: "Business Development & Trade Relations Officer",
    tagline: "Building partnerships for global reach",
    image: "/lovable-uploads/c6a4b64b-0154-4d89-bdca-24357ab242f5.png",
    description: "Builds customer and investor relationships, develops new business opportunities, and represents the company at trade fairs and industry events."
  },
  {
    name: "DOST MUHAMMAD KHAN WAZIR",
    title: "Export & Operations Coordinator",
    tagline: "Bridging supply with international markets",
    image: "/lovable-uploads/33d1739e-39f3-45f7-99cd-aeab4bef72d3.png",
    description: "Manages export documentation, shipping coordination, and supports both supply chain operations and customer communication."
  }
];

const TeamCard = ({ member }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative rounded-2xl shadow-lg overflow-hidden flex flex-col items-center transition-all duration-300 group cursor-pointer
        ${hovered ? 'bg-gradient-to-br from-[#414d36] via-[#3a3f2d] to-[#232526]' : 'bg-white'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="w-full flex justify-center items-center bg-black rounded-t-2xl" style={{ minHeight: '400px' }}>
        <img
          src={member.image}
          alt={member.name}
          className="max-h-[400px] w-auto object-contain rounded-t-2xl"
          style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
        />
      </div>
      <div className="w-full px-6 py-4 flex flex-col items-center">
        <h3 className="text-lg md:text-xl font-playfair font-bold text-al-green mb-1 text-center">{member.name}</h3>
        <p className="text-sm md:text-base text-al-gold font-semibold text-center mb-0">{member.title}</p>
      </div>
      {/* Hover/Focus Reveal */}
      <div
        className={`absolute left-0 right-0 bottom-0 px-6 py-4 rounded-b-2xl shadow-lg transition-all duration-300 ease-in-out
          ${hovered ? 'opacity-100 translate-y-0 pointer-events-auto bg-gradient-to-br from-[#414d36] via-[#3a3f2d] to-[#232526]' : 'opacity-0 translate-y-8 pointer-events-none bg-white'}
        `}
        style={{ zIndex: 10 }}
      >
        <p className="italic text-al-gold text-sm mb-2">{`"${member.tagline}"`}</p>
        <p className="text-gray-100 text-xs md:text-sm leading-relaxed">{member.description}</p>
      </div>
    </div>
  );
};

const MeetOurTeam = () => {
  return (
  <section id="team" className="section-padding bg-gradient-to-br from-[#f0fdf4] via-[#f7fee7] to-[#fefce8] relative overflow-hidden pb-8">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-64 bg-arabesque opacity-5"></div>
  <div className="container-custom relative px-2 sm:px-4">
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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
        {/* Team Stats or Call to Action */}
        <div
          className="mt-16 bg-gradient-to-r from-[#4a4a38] via-[#3d3d2f] to-[#2d2d1f] backdrop-blur-md border border-white/20 p-8 text-center rounded-xl flex flex-col items-center justify-center w-full mx-auto md:p-16"
        >
          <h3 className="text-xl md:text-3xl font-playfair font-bold text-white mb-4">Excellence Through Teamwork</h3>
          <p className="text-gray-300 mb-2 max-w-3xl mx-auto text-base md:text-lg font-normal leading-relaxed">
            Our diverse team combines decades of experience in agriculture, international trade, marketing, and logistics. We work collaboratively to ensure every grain of Al Rayyan basmati meets the highest standards of quality and freshness. Our commitment to excellence drives us to deliver premium products and outstanding service to our customers and partners worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;