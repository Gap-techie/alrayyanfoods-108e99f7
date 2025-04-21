import React from 'react';

const ArabicPattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none opacity-5 ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="arabicPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M20,0 L60,0 L80,20 L80,60 L60,80 L20,80 L0,60 L0,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M40,0 L80,40 L40,80 L0,40 Z M40,10 L70,40 L40,70 L10,40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
            <path
              d="M40,20 L45,35 L60,40 L45,45 L40,60 L35,45 L20,40 L35,35 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arabicPattern)" />
      </svg>
    </div>
  );
};

export default ArabicPattern; 