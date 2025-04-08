
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppChat: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const phoneNumber = '966575649264'; // Without the + symbol for WhatsApp API
  const { t, language } = useLanguage();

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
    const greeting = language === 'ar' 
      ? 'مرحباً الريان للأغذية، أنا مهتم بمنتجاتكم.' 
      : 'Hello Al Rayyan Foods, I\'m interested in your products.';
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(greeting)}`, '_blank');
  };

  return (
    <div className={`fixed ${language === 'ar' ? 'left-6' : 'right-6'} bottom-6 z-50`}>
      {/* WhatsApp Button - Positioned Below */}
      <div className="relative">
        {/* Popup Message - Positioned Above */}
        {isPopupVisible && (
          <div className={`absolute bottom-16 ${language === 'ar' ? 'left-0' : 'right-0'} bg-white shadow-xl rounded-lg p-4 mb-2 max-w-[250px] animate-fade-in`}>
            <div className={`absolute -bottom-2 ${language === 'ar' ? 'left-5' : 'right-5'} w-4 h-4 bg-white transform rotate-45`}></div>
            <p className="text-gray-800 text-sm font-medium">
              {t('whatsapp.message')}
            </p>
            <button 
              className="text-xs text-al-green mt-2 hover:underline"
              onClick={() => setIsPopupVisible(false)}
            >
              {t('whatsapp.dismiss')}
            </button>
          </div>
        )}
        
        {/* The button itself */}
        <button
          onClick={openWhatsApp}
          onMouseEnter={() => !isPopupVisible && setIsPopupVisible(true)}
          onMouseLeave={() => setTimeout(() => setIsPopupVisible(false), 2000)}
          className="bg-[#25D366] hover:bg-[#22c55e] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center whatsapp-button-pulse"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChat;
