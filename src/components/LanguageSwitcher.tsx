
import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  className?: string;
  iconOnly?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = "", 
  iconOnly = false 
}) => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className={`flex items-center text-al-green hover:text-al-gold transition-colors ${className}`}
      aria-label={t('common.language')}
    >
      <Languages className="w-5 h-5 mr-1" />
      {!iconOnly && (
        <span>{language === 'en' ? 'العربية' : 'English'}</span>
      )}
    </button>
  );
};

export default LanguageSwitcher;
