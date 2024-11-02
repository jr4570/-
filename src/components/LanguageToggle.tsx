import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'zh' | 'en';
  setLanguage: (lang: 'zh' | 'en') => void;
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <button
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
}