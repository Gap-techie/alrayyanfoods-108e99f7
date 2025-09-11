import React from 'react';

interface TeamMemberCardProps {
  member: {
    name: string;
    title: string;
    tagline: string;
    image: string;
    description: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="group glass-card p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white/70">
      {/* Photo Container with Hover Effects */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <div className="aspect-square overflow-hidden rounded-xl bg-al-cream">
          <img
            src={member.image}
            alt={`${member.name} - ${member.title}`}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = '/images/placeholder-team.jpg';
            }}
          />
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-al-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col">
        {/* Name */}
        <h3 className="text-xl md:text-2xl font-playfair font-bold text-al-green mb-2 group-hover:text-al-gold transition-colors duration-300">
          {member.name}
        </h3>

        {/* Job Title */}
        <p className="text-sm md:text-base font-medium text-al-gold mb-3 leading-tight">
          {member.title}
        </p>

        {/* Tagline */}
        <p className="text-sm font-medium text-al-green-light mb-4 italic border-l-3 border-al-gold pl-3 bg-al-cream/50 py-2 rounded-r-md">
          "{member.tagline}"
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-auto">
          {member.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="mt-6 w-0 h-0.5 bg-al-gold group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

export default TeamMemberCard;