'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, languageDirection } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [dir, setDir] = useState<'rtl' | 'ltr'>('rtl');

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['ar', 'en', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Update direction based on language
    setDir(languageDirection(language));
    
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Update HTML attributes
    document.documentElement.lang = language;
    document.documentElement.dir = languageDirection(language);
    
    // Add appropriate font class
    if (language === 'ar') {
      document.documentElement.classList.add('font-tajawal');
    } else {
      document.documentElement.classList.remove('font-tajawal');
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};