
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

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
      {/* Popup Message */}
      {isPopupVisible && (
        <div className="bg-white shadow-xl rounded-lg p-4 mb-4 max-w-[250px] animate-fade-in relative">
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white transform rotate-45"></div>
          <p className="text-gray-800 text-sm font-medium">
            Need help with our products? Chat with us on WhatsApp!
          </p>
          <button 
            className="text-xs text-al-green mt-2 hover:underline"
            onClick={() => setIsPopupVisible(false)}
          >
            Dismiss
          </button>
        </div>
      )}
      
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        onMouseEnter={() => !isPopupVisible && setIsPopupVisible(true)}
        onMouseLeave={() => setTimeout(() => setIsPopupVisible(false), 2000)}
        className="bg-[#25D366] hover:bg-[#22c55e] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppChat;
