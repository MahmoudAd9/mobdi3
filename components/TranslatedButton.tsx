'use client';

import { ReactNode } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation, TranslationKey } from '@/lib/translations';

interface TranslatedButtonProps {
  translationKey: TranslationKey;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function TranslatedButton({
  translationKey,
  onClick,
  className = 'px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors',
  icon,
  type = 'button',
  disabled = false
}: TranslatedButtonProps) {
  const { language } = useLanguage();

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      <div className="flex items-center justify-center gap-2">
        {icon && icon}
        <span>{getTranslation(language, translationKey)}</span>
      </div>
    </button>
  );
}