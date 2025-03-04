'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Language, languageNames, getTranslation } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden md:inline">{getTranslation(language, 'language')}</span>
      </button>

      {isOpen && (
        <div 
          className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1" role="none">
            {Object.entries(languageNames).map(([langCode, langName]) => (
              <button
                key={langCode}
                onClick={() => changeLanguage(langCode as Language)}
                className={`${
                  language === langCode ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                } group flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 transition-colors`}
                role="menuitem"
              >
                {langName}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}