'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getTranslation, TranslationKey } from '@/lib/translations';

interface TranslatedTextProps {
  translationKey: TranslationKey;
  className?: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label';
}

export default function TranslatedText({
  translationKey,
  className = '',
  as = 'span'
}: TranslatedTextProps) {
  const { language } = useLanguage();
  const text = getTranslation(language, translationKey);
  
  const Component = as;
  
  return (
    <Component className={className}>
      {text}
    </Component>
  );
}