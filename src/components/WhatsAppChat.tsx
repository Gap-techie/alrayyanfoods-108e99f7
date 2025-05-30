import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChat: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const phoneNumber = '966575649264'; // Without the + symbol for WhatsApp API

  // Show popup automatically after 5 seconds, but only once per session
  useEffect(() => {
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsPopupVisible(true);
        setHasBeenShown(true);
        
        // Hide popup after 10 seconds
        setTimeout(() => {
          setIsPopupVisible(false);
        }, 10000);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [hasBeenShown]);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hello%20Al%20Rayyan%20Foods%2C%20I%27m%20interested%20in%20your%20products.`, '_blank');
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* WhatsApp Button - Positioned Below */}
      <div className="relative">
        {/* Popup Message - Positioned Above */}
        {isPopupVisible && (
          <div className="absolute bottom-16 right-0 bg-white shadow-xl rounded-lg p-2 mb-2 max-w-[250px] flex items-center animate-fade-in">
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white transform rotate-45"></div>
            <div className="flex-1">
              <p className="text-gray-800 text-xs font-medium truncate">
                Chat with us on WhatsApp!
              </p>
              <button 
                className="text-xs text-al-green ml-2 hover:underline"
                onClick={() => setIsPopupVisible(false)}
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
        
        {/* The button itself */}
        <button
          onClick={openWhatsApp}
          onMouseEnter={() => !isPopupVisible && setIsPopupVisible(true)}
          onMouseLeave={() => setTimeout(() => setIsPopupVisible(false), 2000)}
          className="bg-[#25D366] hover:bg-[#22c55e] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center whatsapp-button-pulse"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChat;
