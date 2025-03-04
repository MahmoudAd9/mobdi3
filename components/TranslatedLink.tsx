'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation, TranslationKey } from '@/lib/translations';

interface TranslatedLinkProps {
  href: string;
  translationKey: TranslationKey;
  className?: string;
  icon?: ReactNode;
}

export default function TranslatedLink({
  href,
  translationKey,
  className = 'text-gray-700 hover:text-purple-600 transition-colors',
  icon
}: TranslatedLinkProps) {
  const { language } = useLanguage();

  return (
    <Link href={href} className={className}>
      <div className="flex items-center gap-2">
        {icon && icon}
        <span>{getTranslation(language, translationKey)}</span>
      </div>
    </Link>
  );
}