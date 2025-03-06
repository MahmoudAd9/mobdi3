'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, User } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const isAuthenticated = false; // Set to false to show sign in/sign up buttons

  return (
    <nav className="bg-white py-4 px-6 shadow-sm font-tajawal">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <Sparkles className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold text-purple-600">mobdi3</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
            {getTranslation(language, 'home')}
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
            {getTranslation(language, 'about')}
          </Link>
          <Link href="/creators" className="text-gray-700 hover:text-purple-600 transition-colors">
            {getTranslation(language, 'creators')}
          </Link>
          <Link href="/brands" className="text-gray-700 hover:text-purple-600 transition-colors">
            {getTranslation(language, 'brands')}
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
          <LanguageSwitcher />
          <Link
            href="/login"
            className="px-4 py-2 rounded-md text-purple-600 hover:bg-purple-50 transition-colors"
          >
            {getTranslation(language, 'login')}
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 shadow-md hover:shadow-lg transition-all"
          >
            {getTranslation(language, 'createAccount')}
          </Link>
        </div>

        <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
          <LanguageSwitcher />
          <button
            className="text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 px-6 py-4 bg-white">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              {getTranslation(language, 'home')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              {getTranslation(language, 'about')}
            </Link>
            <Link href="/creators" className="text-gray-700 hover:text-purple-600 transition-colors">
              {getTranslation(language, 'creators')}
            </Link>
            <Link href="/brands" className="text-gray-700 hover:text-purple-600 transition-colors">
              {getTranslation(language, 'brands')}
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/login"
                className="block w-full text-center px-4 py-2 mb-2 rounded-md text-purple-600 border border-purple-600 transition-colors"
              >
                {getTranslation(language, 'login')}
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-md transition-colors"
              >
                {getTranslation(language, 'createAccount')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;